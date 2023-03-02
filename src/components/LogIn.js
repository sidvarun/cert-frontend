import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth';


const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Form onSubmit={handleSubmit} className="w-50">
        <h2 className="mb-4 text-center">LogIn</h2>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ margin: '10px 250px' }}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
