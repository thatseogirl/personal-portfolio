import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navigation() {
  return (
    <div data-aos="fade-right" className="navigation">
      <Navbar collapseOnSelect expand="lg" className="navigation__container">
        <Container>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
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
              <Nav.Link
                className="navigation__container__link__icon__responsive__li"
                href="#skills"
              >
                Skills
              </Nav.Link>
              <Nav.Link
                className="navigation__container__link__icon__responsive__li"
                href="#projects"
              >
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
