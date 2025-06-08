import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import './About.css'; // Custom CSS file for additional styling
import { Link } from 'react-router-dom';
import  './custom.css'


const About = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-5">
        <Col md={12}>
          <h1 className="text-center mb-4">About Us</h1>
          <p className="lead text-center">
            We are a tech startup dedicated to helping people with tutoring, technology solutions, and IoT projects.
          </p>
        </Col>
      </Row>

      {/* Introduction Section */}
      <Row>
        <Col md={6}>
          <h3>Our Mission</h3>
          <p class="mb-4 card paragraph1">
            At MackM2 Web Business, we aim to make cutting-edge technology accessible to everyone. We provide personalized tutoring services and offer expertise in various technology domains, including IoT and software development.
          </p>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header as="h5">Why Choose Us?</Card.Header>
            <Card.Body>
              <Card.Text>
                We provide tailored learning experiences, focusing on practical knowledge and real-world problem-solving.
                Our team is passionate about technology and helping others achieve their potential.
              </Card.Text>
              {/* <Button variant="primary" href="/contact">Get in Touch</Button> */}

                                   <Link to="/contact">
  <Button variant="primary">Get in Touch</Button>
</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mb-5">
        <Col md={12}>
          <h2 className="text-center">Meet the Team</h2>
          <Row className="justify-content-center">
            <Col md={4} sm={6}>
              <Card className="mb-4">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/kwowledgeProjectmanager.jpg`} />

                <Card.Body>
                  <Card.Title>Project Management</Card.Title>
                  <Card.Text>
                    Mr Knowledge Mgobeni  is the Project Management of MackM2 Web Business and an expert in software development and IoT systems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6}>
              <Card className="mb-4">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/ceoFounder.jpg`} />

                <Card.Body>
                  <Card.Title>CEO</Card.Title>
                  <Card.Text>
                    Mr Macksedeck Mgobeni is the founder of MackM2 Web Business and an expert in software development and IoT systems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      
      <Row className="mb-5">
        <Col md={12}>
          <h2 className="text-center"></h2>
          <Row className="justify-content-center">
            <Col md={4} sm={6}>
              <Card className="mb-4">
              <Card.Img variant="top"  className="rounded-image" src={`${process.env.PUBLIC_URL}/marketing.jpg`} alt="Marketing" />

                <Card.Body>
                  <Card.Title>Marketing and Administration</Card.Title>
                  <Card.Text>
                  Ms Nompilo Manqele is Marketing and Administration of MackM2 Web Business and an expert in Business Management and System Analysis.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6}>
              <Card className="mb-4">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/Developer.jpg`} alt="Developer" />

                <Card.Body>
                  <Card.Title>Developer Lead</Card.Title>
                  <Card.Text>
                  Mr Paradise Mgobeni is a Lead Developer at MackM2 Web Business, specializing in programming languages and machine learning.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Services Section */}
      <Row>
        <Col md={12}>
          <h3 className="text-center mb-4">Our Services</h3>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Tutoring</Card.Title>
                  <Card.Text>
                    Personalized tutoring sessions to help you master new technologies, coding, and more. We do all subjects for lower and higher education.
                  </Card.Text>
                  {/* <Button variant="secondary" href="/services">Learn More</Button> */}

                             <Link to="/contact">
  <Button variant="primary">Learn More</Button>
</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>IoT Projects & IT Project</Card.Title>
                  <Card.Text>
                    From concept to execution, we help you build your own IoT projects or Web site to bring your ideas to life.
                  </Card.Text>
                  {/* <Button variant="secondary" href="/services">Learn More</Button> */}

                             <Link to="/contact">
  <Button variant="primary">Learn More</Button>
</Link>

                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Consulting</Card.Title>
                  <Card.Text>
                    We provide expert advice on technology strategy and innovation to help businesses grow. We always deliver the best for our customers.
                  </Card.Text>
                  {/* <Button variant="secondary" href="/services">Learn More</Button> */}
                  <Link to="/contact">
  <Button variant="primary">Learn More</Button>
</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Contact Section */}
      <Row className="mb-5">
        <Col md={12}>
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">
            Have any questions or want to work with us? Feel free to reach out and get in touch with our team!
          </p>
          <div className="d-flex justify-content-center">
            {/* <Button variant="primary" href="/contact" size="lg">Contact Us</Button> */}

            <Link to="/contact">
  <Button variant="primary">Learn More</Button>
</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
