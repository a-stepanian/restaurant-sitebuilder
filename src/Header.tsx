import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { MdOutlineFastfood } from "react-icons/md";

export const Header = () => {
  return (
    <Navbar expand="md" className="navbar sticky-top" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home" className="nav-home">
          <div className="d-flex justify-content-center align-items-center">
            <MdOutlineFastfood />
            <span className="mt-1 ms-1 fw-bold fs-6">Menu</span>
            <span className="mt-1 ms-1 fw-bold fs-6">Web</span>
          </div>
        </Navbar.Brand>
        <div>
          <a href="/get-started" className="d-md-none me-4 light-link">
            Start free trial
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 py-0 px-1" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/login" className="d-md-none">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="/login" className="d-none d-md-block px-3 text-black">
          Log in
        </Nav.Link>
        <a href="/get-started" className="d-none d-md-block btn btn-dark bg-black rounded-pill nav-cta">
          Start free trial
        </a>
      </Container>
    </Navbar>
  );
};
