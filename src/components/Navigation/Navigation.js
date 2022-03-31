import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navigation() {
  return (
    <div data-aos="fade-right" className="navigation">
      <Navbar collapseOnSelect expand="lg" className="navigation__container">
        <Container>
          <Navbar.Brand>Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="" href="https://www.linkedin.com/in/tobiloba-arotimi/">
                <FaLinkedin className="icon"/>
                Linkedin
              </Nav.Link>
              <Nav.Link href="https://github.com/thatseogirl">
                <FaGithub className="icon"/>
                Github
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
