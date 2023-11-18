import React, { useState } from "react";
import { IAddress, IBasicInfo, IContactInfo } from "../../App";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

interface IPreviewProps {
  basicInfo: IBasicInfo;
  contactInfo: IContactInfo;
  address: IAddress;
}
export const Preview = (props: IPreviewProps) => {
  const { basicInfo, contactInfo, address } = props;
  const [displayContent, setDisplayContent] = useState<"Home" | "Menu" | "HoursAndLocation">("Home");
  return (
    <div className="silver-bg" style={{ zIndex: "2" }}>
      <Navbar expand="md" className="navbar sticky-top bg-dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="pt-0">
            <div className="d-flex justify-content-center align-items-center">
              <Nav.Link href="#1.0">
                <span className="mt-1 ms-1 fw-bold fs-6">{basicInfo.restaurantName}</span>
              </Nav.Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 py-0 px-1" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#2.0">Hours & Location</Nav.Link>
              <Nav.Link href="#3.0">Menu</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row id="1.0" className="my-5 py-5">
        <Col lg={6}>
          <h2>HOME</h2>
        </Col>
        <Col lg={6}>
          <img src="/images/Astronaut.png" alt="" />
        </Col>
      </Row>
      <Row id="2.0" className="my-5 py-5">
        <Col lg={6}>
          <h2>HOURS AND LOCATION</h2>
        </Col>
        <Col lg={6}>
          <img src="/images/Astronaut.png" alt="" />
        </Col>
      </Row>
      <Row id="3.0" className="my-5 py-5">
        <Col lg={6}>
          <h2>MENU</h2>
        </Col>
        <Col lg={6}>
          <img src="/images/Astronaut.png" alt="" />
        </Col>
      </Row>
    </div>
  );
};
