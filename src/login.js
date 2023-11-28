import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { login } = useAuth();


  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, you can redirect or set some state indicating the user is logged in
        console.log('Login successful');  //1st time
        login();
        history.push('/home');

      } else {
        // Login failed
        setError('Invalid email or password');
        history.push('/');

      }
    } catch (error) {
      setError(error.message);
      console.error('Error during login:', error.message);
    }
  };

  return (
    <Container>
    <Row className="justify-content-center mt-5">
      <Col md={6}>
        <h2>Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Col>
    </Row>
  </Container>
  );
};

export default Login;
