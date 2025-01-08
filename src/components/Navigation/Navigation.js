import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navigation() {
  return (
    <div data-aos="fade-right" className="navigation">
      <Navbar collapseOnSelect expand="lg" className="navigation__container">
        <Navbar.Brand className="brand">portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mobile">
            <Nav.Link
              className="navigation__container__link"
              href="https://www.linkedin.com/in/tobiloba-arotimi/"
            >
              <FaLinkedin className="navigation__container__link__icon" />
              Linkedin
            </Nav.Link>
            <Nav.Link
              className="navigation__container__link"
              href="https://github.com/thatseogirl"
            >
              <FaGithub className="navigation__container__link__icon" />
              Github
            </Nav.Link>
          </Nav>
          <Nav className="navigation__container__link__icon__responsive">
            <Nav.Link
              className="navigation__container__link__icon__responsive__li"
              href="#home"
            >
              Home
            </Nav.Link>
            {/* <Nav.Link
              className="navigation__container__link__icon__responsive__li"
              href="#skills"
            >
              Skills
            </Nav.Link> */}
            <Nav.Link
              className="navigation__container__link__icon__responsive__li"
              href="#project"
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
