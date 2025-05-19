import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { FaEnvelope, FaWhatsapp, FaFacebook, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  // Modal State for Thank You message after form submission
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // Form submission handler (mocked for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    handleShowModal();
  };

  return (
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
            <Button variant="outline-primary" href="mailto: mackm2webbusiness1@gmail.com">
              <FaEnvelope size={30} className="mb-2" />
              Email Us
            </Button>
          </Col>
          <Col md={4} className="text-center">
            <Button variant="outline-success" href="https://wa.me/+27711242468" target="_blank">
              <FaWhatsapp size={30} className="mb-2" />
              WhatsApp
            </Button>
          </Col>
          <Col md={4} className="text-center">
            <Button variant="outline-primary" href="https://facebook.com/MackM2 Web Business" target="_blank">
              <FaFacebook size={30} className="mb-2" />
              Facebook
            </Button>
          </Col>
        </Row>
      </section>

      {/* Referral & Payment Info */}
      <section className="my-5">
        <h2 className="text-center">Referral & Payment Info</h2>
        <p className="text-center">
          We value your referrals! If you refer a friend or colleague to MackM2 Web Business, you will earn a reward. Once your referral
          completes their first project or tutoring session, you will receive a free service on your next purchase note this we are the one who decides what will be free.
        </p>
        <p className="text-center">
          <strong>What payment methods are accepted?</strong> We accept PayPal, Credit card and Debit Card. Unfortunately, we do not accept... (If any).
        </p>
      </section>

      {/* Contact Form */}
      <section>
  <h2 className="text-center my-4">Send Us a Message</h2>
  <Form 
    action="https://formspree.io/f/xzzendpg" 
    method="POST"
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
          <Col md={6} className="text-center">
            <h5><FaMapMarkerAlt size={30} className="mb-2" /> Physical Address</h5>
            <p>Currently, we operate online and will update all our customers once we locate an office.</p>
          </Col>
          <Col md={6} className="text-center">
            <h5><FaPhoneAlt size={30} className="mb-2" /> Business Hours</h5>
            <p>
              Monday to Friday: 08:00 AM - 18:00 PM <br />
              Saturday: 10:00 AM - 04:00 PM <br />
              Sunday and Public Holidays: Closed
            </p>
          </Col>
        </Row>
      </section>

      {/* Social Media Links */}
      <section className="my-5">
        <h2 className="text-center">Follow Us on Social Media</h2>
        <Row className="my-4">
          <Col md={3} className="text-center">
            <Button variant="outline-primary" href="https://facebook.com/MackM2 Web Business" target="_blank">
              <FaFacebook size={30} />
              Facebook
            </Button>
          </Col>
          <Col md={3} className="text-center">
            <Button variant="outline-info" href="https://twitter.com/MackM2 Web Business" target="_blank">
              <i className="fab fa-twitter" style={{ fontSize: '30px' }}></i>
              Twitter
            </Button>
          </Col>
          <Col md={3} className="text-center">
            <Button variant="outline-primary" href="https://linkedin.com/company/MackM2 Web Business" target="_blank">
              <FaLinkedin size={30} />
              LinkedIn
            </Button>
          </Col>
          <Col md={3} className="text-center">
            <Button variant="outline-success" href="https://wa.me/+27711242468" target="_blank">
              <FaWhatsapp size={30} />
              WhatsApp
            </Button>
          </Col>
        </Row>
      </section>

      {/* Location Map */}
      {/* <section className="my-5">
        <h2 className="text-center">Visit Us on the Map</h2>
        <div className="text-center">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=1234+Tech+Avenue,Silicon+Valley,CA"
            width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen=""
            aria-hidden="false" tabIndex="0"></iframe>
        </div>
      </section> */}

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
  );
};

export default Contact;
