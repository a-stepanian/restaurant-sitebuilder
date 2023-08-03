import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { MdOutlineFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
interface IHeaderProps {
  onGetStartedPage: boolean;
}

export const Header = (props: IHeaderProps) => {
  const { onGetStartedPage } = props;

  return (
    <Navbar expand="md" className="main-navbar navbar sticky-top" data-bs-theme="light">
      <Container>
        <Navbar.Brand className="pt-0">
          <Link to="/" className="text-black text-decoration-none nav-home">
            <div className="d-flex justify-content-center align-items-center">
              <MdOutlineFastfood />
              <span className="mt-1 ms-1 fw-bold fs-6">Menu</span>
              <span className="mt-1 ms-1 fw-bold fs-6">Web</span>
            </div>
          </Link>
        </Navbar.Brand>
        <div>
          <Link to="/get-started" className="d-none d-sm-inline d-md-none me-4 light-link">
            Start free trial
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 py-0 px-1" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="/">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link to="/login" className="d-md-none">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/login" className="d-none d-md-block px-3 text-black">
          Log in
        </Link>
        {!onGetStartedPage && (
          <Link to="/get-started" className="d-none d-md-block btn btn-dark bg-black rounded-pill nav-cta">
            Start free trial
          </Link>
        )}
      </Container>
    </Navbar>
  );
};
