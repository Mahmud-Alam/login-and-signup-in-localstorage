import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const SignUp = () => {
  const navigate = useNavigate();

  const [inpVal, setInpVal] = useState({
    username: "",
    name: "",
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
      if (obj[i] === val) return true;
    }
    return false;
  };

  const setStorageData = (e) => {
    e.preventDefault();
    const { username, name, email, password } = inpVal;

    //form validation:
    if (username === "") alert("Username is required!");
    else if (name === "") alert("Name is required!");
    else if (email === "") alert("Email is required!");
    else if (password === "") alert("Password is required!");
    else {
      if (hasStorageData()) {
        const storageData = JSON.parse(
          localStorage.getItem("userRegistration")
        );
        if (userExist(storageData, username, "username"))
          alert("This username is not available!\nPlease try another one!");
        else if (userExist(storageData, email, "email"))
          alert(
            "This email is already registered!\nPlease Login in your account!"
          );
        else {
          const userArr = [];
          for (let i of storageData) {
            userArr.push(i);
          }
          userArr.push(inpVal);
          localStorage.setItem("userRegistration", JSON.stringify(userArr));
          alert("Congratulations!\nSign Up successfully!\nPlease login!");
          navigate("/")
        }
      } else {
        localStorage.setItem("userRegistration", JSON.stringify([inpVal]));
        alert("Congratulations!\nSign Up successfully!\nPlease login!");
        navigate("/")
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
            <h3 className="mb-3">Sign Up</h3>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control
                onChange={getData}
                name="username"
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                onChange={getData}
                name="name"
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={getData}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={getData}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button onClick={setStorageData} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p className="mt-3">
            Already Have an Account?{" "}
            <span>
              <NavLink to="/">Login</NavLink>
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
