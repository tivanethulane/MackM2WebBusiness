import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLaptopCode, FaChalkboardTeacher, FaProjectDiagram, FaMobileAlt, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <Container>
      <header className="text-center my-5">
        <h1>Our Services</h1>
        <p>We offer a wide range of services in the fields of Internet of Things (IoT), Tutoring, and IT Projects, including websites and mobile app development. Let's explore!</p>
      </header>

      {/* IoT Services Section */}
      <section className="my-5">
        <h2 className="text-center">Internet of Things (IoT)</h2>
        <Row className="my-4">
          <Col md={4} className="text-center">
            <FaLaptopCode size={50} className="mb-3" />
            <h4>Connected Devices</h4>
            <p>Our IoT solutions enable businesses to connect various devices to the internet, allowing for data exchange and remote management. We design custom devices tailored to your business needs.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaChalkboardTeacher size={50} className="mb-3" />
            <h4>IoT Training & Support</h4>
            <p>We provide comprehensive training for teams looking to develop IoT solutions. Our experts guide you through understanding IoT protocols, system architecture, and real-time data processing.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaCog size={50} className="mb-3" />
            <h4>System Integration</h4>
            <p>We integrate IoT systems with existing enterprise software, ensuring seamless data exchange and improved automation. This helps businesses reduce overhead and improve decision-making.</p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col className="text-center">
            {/* <Button variant="primary" href="/contact" size="lg">Contact Us for IoT Solutions</Button> */}

            <Link to="/services">
  <Button variant="secondary">Contact Us for IoT Solutions</Button>
</Link>
          </Col>
        </Row>
      </section>

      {/* Tutoring Services Section */}
      <section className="my-5 bg-light p-4">
        <h2 className="text-center">Tutoring Services</h2>
        <Row className="my-4">
          <Col md={4} className="text-center">
            <FaChalkboardTeacher size={50} className="mb-3" />
            <h4>Personalized Tutoring</h4>
            <p>Get one-on-one sessions with expert tutors who tailor lessons according to your pace and skill level. Whether you're learning coding, IoT, or technology concepts, our tutors will guide you every step of the way.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaProjectDiagram size={50} className="mb-3" />
            <h4>Hands-on Learning</h4>
            <p>Our tutoring services focus on practical experience. Work on real-world projects that help solidify your understanding of programming languages, IoT technologies, and application development.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaMobileAlt size={50} className="mb-3" />
            <h4>Learn Web & App Development</h4>
            <p>We offer courses that teach you to build web applications, mobile apps, and IoT projects from scratch. Learn to design and deploy full-stack web apps and apps for iOS and Android platforms.</p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col className="text-center">
            {/* <Button variant="primary" href="/contact" size="lg">Get Started with Tutoring</Button> */}

            <Link to="/services">
  <Button variant="secondary">Get Started with Tutoring</Button>
</Link>
          </Col>
        </Row>
      </section>

      {/* IT Projects Section */}
      <section className="my-5">
        <h2 className="text-center">IT Projects: Websites & Apps</h2>
        <Row className="my-4">
          <Col md={4} className="text-center">
            <FaLaptopCode size={50} className="mb-3" />
            <h4>Custom Websites</h4>
            <p>We design and develop modern, responsive websites tailored to your business or personal needs. From portfolio sites to eCommerce platforms, we ensure that your website stands out.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaMobileAlt size={50} className="mb-3" />
            <h4>Mobile Application Development</h4>
            <p>Our team specializes in creating cross-platform mobile apps that run seamlessly on both iOS and Android. Whether it's a small app or a complex enterprise solution, we’ve got you covered.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaProjectDiagram size={50} className="mb-3" />
            <h4>Full-stack Development</h4>
            <p>We offer full-stack development services, from front-end web design to back-end database management. Our solutions are scalable, secure, and designed for long-term success.</p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col className="text-center">
            {/* <Button variant="primary" href="/contact" size="lg">Start Your IT Project with Us</Button> */}

                <Link to="/services">
  <Button variant="secondary">Start Your IT Project with Us</Button>
</Link>
          </Col>
        </Row>
      </section>

      {/* Why Choose Us Section */}
      <section className="my-5 bg-light p-4">
        <h2 className="text-center">Why Choose MackM2 Web Business?</h2>
        <Row className="my-4">
          <Col md={4} className="text-center">
            <h4>Expert Tutors, Developers & Engineers</h4>
            <p>Our team consists of experienced tutors and engineers who are experts in their respective fields, ensuring that you get the best education and technical solutions.</p>
          </Col>
          <Col md={4} className="text-center">
            <h4>Customized Solutions & Business Analysis</h4>
            <p>We provide tailored solutions that match your specific needs, whether you're looking for a personal tutor, a new IoT system, or a full-fledged IT project.</p>
          </Col>
          <Col md={4} className="text-center">
            <h4>Affordable & Transparent Pricing & Best Services</h4>
            <p>We offer competitive pricing and transparency in our services, ensuring no hidden fees and providing a clear breakdown of costs up front.</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Services;
