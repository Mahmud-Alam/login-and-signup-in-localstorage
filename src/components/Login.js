import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();

  const [inpVal, setInpVal] = useState({
    email: "",
    password: "",
  });

  const getData = (e) => {
    const { name, value } = e.target;
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const hasStorageData = () => {
    return localStorage.getItem("userRegistration") != null ? true : false;
  };

  const userExist = (arr, val, i) => {
    for (let obj of arr) {
      if (obj[i] === val) return obj;
    }
    return false;
  };

  const getStorageData = (e) => {
    e.preventDefault();
    const { email, password } = inpVal;

    if (email === "") alert("Email is required!");
    else if (password === "") alert("Password is required!");
    else {
      if (hasStorageData()) {
        const storageData = JSON.parse(
          localStorage.getItem("userRegistration")
        );
        const userObj = userExist(storageData, email, "email");
        if (userObj) {
          if (userObj["password"] === password) {
            alert(`"${userObj['name']}" successfully logged in!`);
            // navigate("/");
          }else alert("Password is incorrect!\nPlease try again!");
        } else 
          alert("Email is incorrect!\nPlease try again!");
      } else {
        alert("Database is Empty!\nPlease Sign Up First!");
        navigate("/signup");
      }
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={6} md={6}>
          <h1>Welcome to our website!</h1>
        </Col>
        <Col xs={6} md={6}>
          <Form className="mb-3">
            <h3 className="mb-3">Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="email"
                onChange={getData}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="password"
                onChange={getData}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button onClick={getStorageData} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p className="mt-3">
            New Member?{" "}
            <span>
              <NavLink to="/signup">Sign Up</NavLink>
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
