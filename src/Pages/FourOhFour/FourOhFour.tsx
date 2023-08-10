import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export const FourOhFour = () => {
  return (
    <Container>
      <Row className="mt-5 pb-5">
        <Col md={6} className="pt-lg-5">
          <h1 className="text-center text-md-start text-black display-1">
            404:
            <br />
            Lost In Space
          </h1>
          <div className="text-center">
            <Link to="/" className="my-5 btn btn-dark btn-lg bg-black rounded-pill">
              Back To Earth
            </Link>
          </div>
        </Col>
        <Col md={6}>
          <div className="astronaut-wrapper">
            <img className="img-fluid astronaut" src="/images/astronaut.png" alt="Astronaut lost in space." />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
