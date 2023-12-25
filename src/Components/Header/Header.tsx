import React, { useRef, useState } from "react";
import "./Header.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MdOutlineFastfood } from "react-icons/md";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const mainHamburgerButton = useRef<HTMLButtonElement>(null);
  const clickMainHamburgerButton = () => mainHamburgerButton?.current?.click();
  return (
    <Navbar expand="md" className="main-navbar navbar py-0" data-bs-theme="light">
      <Container>
        <Navbar.Brand className="pt-0 my-1">
          <Link to="/" className="text-black text-decoration-none nav-home">
            <div className="d-flex justify-content-center align-items-center">
              <MdOutlineFastfood />
              <span className="mt-1 ms-1 fw-bold fs-6">MenuWeb</span>
            </div>
          </Link>
        </Navbar.Brand>
        <div>
          <Link to="/get-started" className="d-none d-sm-inline d-md-none me-4 light-link">
            Start free trial
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 py-0 px-1"
            ref={mainHamburgerButton}
            onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <LuX /> : <LuMenu />}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="p-3 align-items-end border-top border-bottom main-hamburger">
            <Link to="/pricing" className="nav-link" onClick={() => clickMainHamburgerButton()}>
              Pricing
            </Link>
            <Link to="/login" className="nav-link d-md-none" onClick={() => clickMainHamburgerButton()}>
              Login
            </Link>
            <Link to="/get-started" className="nav-link d-md-none" onClick={() => clickMainHamburgerButton()}>
              Get Started
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/login" className="d-none d-md-block px-3 text-black">
          Log in
        </Link>
        <Link to="/get-started" className={`d-none d-md-block btn btn-dark bg-black rounded-pill nav-cta`}>
          Start free trial
        </Link>
      </Container>
    </Navbar>
  );
};
export default Header;
