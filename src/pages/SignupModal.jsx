// src/pages/SignupModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const SignupModal = ({ show, onClose, onSignupSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', { username, password });
      alert('Account created!');
      onSignupSuccess(); // optional: trigger login modal after signup
    } catch (err) {
      alert('Signup failed!');
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="success" onClick={handleSignup}>Sign Up</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
