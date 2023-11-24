import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useAppContext } from "../../AppContext";

interface IPreviewHeaderProps {
  heroRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const PreviewHeader = (props: IPreviewHeaderProps) => {
  const { heroRef } = props;
  const { basicInfo } = useAppContext();

  return (
    <Navbar expand="xs" bg="dark" data-bs-theme="dark" ref={heroRef}>
      <Container>
        <Navbar.Brand href="#">{basicInfo.restaurantName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Get Started</Nav.Link>
            <NavDropdown title="Pricing" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
