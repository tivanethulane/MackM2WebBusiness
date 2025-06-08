import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from 'react-bootstrap';
import { FaEnvelope, FaWhatsapp, FaFacebook, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import  './custom.css'

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShowModal();
  };

  return (
    <div style={{  backgroundImage: 'url("https://example.com/your-background.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '2rem 0',
      minHeight: '100vh',
    }}>
    <Container>
      <header className="text-center my-5">
        <h1>Get in touch:</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
      </header>

      {/* Contact Methods */}
      <section className="my-5">
        <h2 className="text-center">Get in Touch</h2>
        <Row className="my-4">
          <Col md={4} className="text-center">
            <Button variant="outline-primary" href="mailto:mackm2webbusiness1@gmail.com">
              <FaEnvelope size={30} className="mb-2" />
              Email Us
            </Button>
          </Col>
          <Col md={4} className="text-center">
            <Button variant="outline-success" href="https://wa.me/+27679889287" target="_blank">
              <FaWhatsapp size={30} className="mb-2" />
              WhatsApp
            </Button>
          </Col>
          <Col md={4} className="text-center">
            <Button variant="outline-primary" href="https://www.facebook.com/share/1DoN4Grz8W/" target="_blank">
              <FaFacebook size={30} className="mb-2" />
              Facebook
            </Button>
          </Col>
        </Row>
      </section>

      {/* Referral & Payment Info */}
      <section className="my-5">
        <h2 className="text-center">Referral & Payment Info</h2>
        <Card className="p-4 shadow-sm bg-light">
          <Card.Body>
            <p>
              <strong>Referral Program:</strong> We value your referrals! If you refer a friend or colleague to MackM2 Web Business, you will earn a reward. 
              Once your referral completes their first project or tutoring session, you will receive a free service on your next purchase. 
              <em>Note: we decide which service will be free.</em>
            </p>
            <p>
              <strong>Accepted Payment Methods:</strong> We accept PayPal, Credit Cards, and Debit Cards. Unfortunately, we do not accept payments via other methods at this time.
            </p>
          </Card.Body>
        </Card>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-center my-4">Send Us a Message</h2>
        <Form 
          action="https://formspree.io/f/xzzendpg" 
          method="POST"
          onSubmit={handleSubmit}
        >
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter your name" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter your email" required />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formMessage" className="my-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control name="message" as="textarea" rows={4} placeholder="Write your message here" required />
          </Form.Group>
          <Button variant="primary" type="submit">Send Message</Button>
        </Form>
      </section>

      {/* Physical Address & Business Hours */}
      <section className="my-5">
        <h2 className="text-center">Our Office Location</h2>
        <Row className="my-4">
          <Col md={6}>
            <Card className="text-center shadow-sm p-3">
              <Card.Body>
                <h5><FaMapMarkerAlt size={30} className="mb-2" /> Physical Address</h5>
                <p>Currently, we operate online and will update all our customers once we locate an office.
                  But tutoring can be done physical. <br />
                 <span style={{color: 'blue'}}> CALL US ON : +27 679 889 287</span>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="text-center shadow-sm p-3">
              <Card.Body>
                <h5><FaPhoneAlt size={30} className="mb-2" /> Business Hours</h5>
                <p>
                  Monday to Friday: 08:00 AM - 18:00 PM <br />
                  Saturday: 10:00 AM - 04:00 PM <br />
                  Sunday and Public Holidays: Closed
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Social Media Links */}
      <section className="my-5">
        <h2 className="text-center">Follow Us on Social Media</h2>
        <Row className="my-4 text-center">
          <Col md={3}>
            <Button variant="outline-primary" href="https://www.facebook.com/share/1DoN4Grz8W/" target="_blank">
              <FaFacebook size={30} className="me-2" /> Facebook
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="outline-info" href="https://twitter.com/MackICTSolution" target="_blank">
              <i className="fab fa-twitter" style={{ fontSize: '30px' }}></i> Twitter
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="outline-primary" href="https://linkedin.com/company/MackM2WebBusiness" target="_blank">
              <FaLinkedin size={30} className="me-2" /> LinkedIn
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="outline-success" href="https://wa.me/+27679889287" target="_blank">
              <FaWhatsapp size={30} className="me-2" /> WhatsApp
            </Button>
          </Col>
        </Row>
      </section>

      {/* Modal for Success Message */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You for Reaching Out!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We have received your message and will get back to you as soon as possible.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>

    </div>
  );
  
};


export default Contact;
