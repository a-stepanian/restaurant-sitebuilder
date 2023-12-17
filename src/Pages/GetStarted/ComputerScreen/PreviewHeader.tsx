import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../../../AppContext";

export const PreviewHeader = () => {
  const { basicInfo } = useAppContext();

  return (
    <Navbar
      expand="xs"
      className="py-1"
      bg={basicInfo.restaurantName.length > 0 ? "dark" : "light"}
      data-bs-theme={basicInfo.restaurantName.length > 0 ? "dark" : "light"}>
      <Container>
        <Navbar.Brand href="#">{basicInfo.restaurantName}</Navbar.Brand>
        {basicInfo.restaurantName.length > 0 && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="locationTab">Location</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="hoursTab">Hours</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="menuTab">Menu</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};