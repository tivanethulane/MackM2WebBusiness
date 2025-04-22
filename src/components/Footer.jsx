import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Optional custom CSS for the footer

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 show">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; {new Date().getFullYear()} MackM2 Web Business. All Rights Reserved.</p>
            <div>
              <a href="/terms" className="text-white mx-2">Terms of Service</a>
              <a href="/privacy" className="text-white mx-2">Privacy Policy</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
