import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const SignUp = () => {
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

  const [userArr, setUserArr] = useState([]);

  const hasStorageData = () => {
    return localStorage.getItem("userRegistration") != null ? true : false;
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
        const storageDate = JSON.parse(localStorage.getItem("userRegistration")
        );
        for(let i of storageDate){
            userArr.push(i);
        }
        userArr.push(inpVal);
        localStorage.setItem("userRegistration", JSON.stringify(userArr));
      } else {
        userArr.push(inpVal);
        localStorage.setItem("userRegistration", JSON.stringify(userArr));
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
