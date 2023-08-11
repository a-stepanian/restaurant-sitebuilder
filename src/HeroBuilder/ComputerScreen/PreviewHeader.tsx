import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { IBasicInfo } from "../HeroBuilder";

interface IPreviewHeaderProps {
  basicInfo: IBasicInfo;
}

export const PreviewHeader = (props: IPreviewHeaderProps) => {
  const { restaurantName } = props.basicInfo;
  return (
    <Navbar expand="xs" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">{restaurantName.length > 0 ? restaurantName : "SMOKY BONES"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Get Started</Nav.Link>
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