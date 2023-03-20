import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Event from './../components/Event';

const Home = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Intel® Unnati Learning Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="courses">Courses</Nav.Link>
              <Nav.Link href="events">Events</Nav.Link>
              <Nav.Link href="register">Register</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="display-4 font-weight-bold mb-4">
              Welcome to Intel® Unnati Learning Management System!
            </h1>
            <p className="lead mb-4">
              Attend our events to get yourself the INTEL EDGE.
            </p>
            <Button variant="outline-light" size="lg" href="register" className = "btn-intel">Register Now</Button>
          </Col>
          <Col lg={6}>
            <img src="https://media.bizj.us/view/img/12281430/intel-logo-boxed*750xx3000-1688-0-656.png" alt="LMS Platform" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <Row>
          <Col>
            <h2>Courses</h2>
            <p className="lead mb-4">Explore our courses and start learning today.</p>
            {/* Course cards can be added here */}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Events</h2>
            <p className="lead mb-4">Check out our upcoming events and register to attend.</p>
            {/* Event cards can be added here */}
            {/* <Event title="Unnati Ignite Workshop" date="2023-03-01" discription="An Unnati Event"/> */}

          </Col>
        </Row>
      </Container>

      <footer className="py-3 bg-primary">
        <Container>
          <Row>
            <Col>
              <p className="text-white mb-0">&copy; 2023 LMS Platform. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Home;
