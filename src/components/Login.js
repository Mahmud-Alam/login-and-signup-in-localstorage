import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Login = () => {
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
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p className="mt-3">New Member? <span><NavLink to="/signup">Sign Up</NavLink></span></p>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
