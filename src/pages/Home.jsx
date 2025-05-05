import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // For navigation
  const navigate = useNavigate();

  // Navigate to Services page
  const goToServices = () => {
    navigate('/services');
  };

  return (
    <Container>
      {/* Hero Section */}
      <header className="text-center my-5">
        <h1>Welcome to MackM2 Web Business</h1>
        <p>Your go-to platform for innovative technology, IoT solutions, and expert tutoring!</p>
        <Button variant="primary" onClick={goToServices}>Explore Services</Button>
      </header>

      {/* Featured Services */}
      <section>
        <h2 className="text-center my-4">Our Featured Services</h2>
        <Row className="my-4">
          <Col md={4}>
            <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/tuturingOicture.png`} alt="Tutoring" />

              <Card.Body>
                <Card.Title>Tutoring</Card.Title>
                <Card.Text>
                  Get personalized tutoring in technology, IoT, and coding. Our experts guide you through practical and theoretical concepts.
                </Card.Text>
                <Button variant="primary" onClick={handleShowModal}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/DEveloperPicture.png`} alt="Technology Projects" />

              <Card.Body>
                <Card.Title>Technology Projects</Card.Title>
                <Card.Text>
                  Explore our innovative projects, ranging from beginner to advanced. Start your journey with hands-on technology and IoT projects.
                </Card.Text>
                <Button variant="primary" onClick={goToServices}>Explore Projects</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/internetofthings.png`} alt="IoT Solutions" />
            

              <Card.Body>
                <Card.Title>IoT Solutions</Card.Title>
                <Card.Text>
                  Dive into the world of IoT with our complete solutions and guides. Learn how to build connected devices and smart systems.
                </Card.Text>
                <Button variant="primary" onClick={goToServices}>Learn IoT</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Service Descriptions with Pictures */}
      <section className="my-5">
        <h3 className="text-center">Why Choose Us?</h3>
        <Row className="my-4">
          <Col md={4}>
          <img src={`${process.env.PUBLIC_URL}/tutoring-image.jpeg`} alt="Personalized Tutoring" className="img-fluid rounded mb-3" />

            <h4>Personalized Tutoring</h4>
            <p>
              Our expert instructors work one-on-one with students to ensure that learning is tailored to their individual needs and pace.
              Whether you are a beginner or looking to refine your skills, our tutoring services will accelerate your learning journey.
            </p>
          </Col>

          <Col md={4}>
          <img src={`${process.env.PUBLIC_URL}/handsOnproct.png`} alt="Hands-on Projects" className="img-fluid rounded mb-3" />

            <h4>Hands-on Projects</h4>
            <p>
              We believe in learning by doing! Our hands-on projects cover everything from basic coding to advanced IoT systems, providing real-world experience.
              These projects will help you build tangible skills and prepare you for future challenges in technology and innovation.
            </p>
          </Col>

          <Col md={4}>
          <img src={`${process.env.PUBLIC_URL}/IOT.png`} alt="IoT Solutions" className="img-fluid rounded mb-3" />

            <h4>IoT Solutions</h4>
            <p>
              Explore the fascinating world of the Internet of Things (IoT). We offer expert guidance on creating connected devices, smart homes, and advanced IoT systems.
              Whether you are a hobbyist or a professional, our IoT solutions are designed to help you master this growing field.
            </p>
          </Col>
        </Row>
      </section>

      {/* About Us Section */}
      <section className="my-5">
        <h2 className="text-center">About Us</h2>
        <p>
          MackM2 Web Business is a leading provider of technology and IoT solutions. We empower individuals and businesses to achieve their goals through
          cutting-edge technology, expert tutoring, and innovative solutions. Whether you're starting your tech journey or looking to expand your
          expertise, we're here to guide you every step of the way.
        </p>
        <p>
          Our team consists of experienced professionals from diverse backgrounds in technology, education, and business. We are passionate about
          helping you succeed in the rapidly evolving world of tech and IoT.
        </p>
        <img src={`${process.env.PUBLIC_URL}/AboutUs.png`} alt="MackM2 Web Business Team" className="img-fluid rounded" />

      </section>

      {/* Modal for More Information */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>More About Tutoring</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>What You Get with Our Tutoring:</h5>
          <ul>
            <li>One-on-one sessions with experienced instructors</li>
            <li>Personalized lesson plans tailored to your needs</li>
            <li>Hands-on projects and assignments to solidify learning</li>
            <li>Access to exclusive resources and learning materials</li>
          </ul>
          <p>Whether you're a beginner or looking to deepen your knowledge, our tutoring services cater to all levels!</p>
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

export default Home;
