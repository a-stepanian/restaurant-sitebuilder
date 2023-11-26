import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <Container fluid className="home-try-it-now">
      <Container className="mh75vh">
        <Row className="above-the-fold">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h1 className="my-5 my-md-3 my-lg-4 text-center text-md-start text-black fw-bold feed-your-business">
              Feed your business
            </h1>
            <p className="w-100 text-black text-center text-md-start fs-4 lead">
              Build an online presence in
              <br />
              <strong>minutes</strong>&nbsp;with Menu Web.
            </p>
            <Link
              to="/get-started"
              className="d-none d-md-block mt-3 btn btn-dark btn-lg bg-black rounded-pill hero-cta">
              Get Started <FaRightLong />
            </Link>
          </Col>
          <Col md={6}>
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
              <img
                className="img-fluid rounded-circle hero-image rotate"
                src="/images/food-doodle-sm.webp"
                loading="eager"
                width="640"
                height="640"
                alt="Assorted snack foods"
              />
              <Link to="/get-started" className="d-md-none mt-5 w-100 btn btn-dark btn-lg bg-black rounded-pill">
                Get Started <FaRightLong />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mh75vh">
        <div
          className="border border-4 border-black rounded-3 bg-frosted"
          style={{ boxShadow: "-4px 20px 0 #000000", transform: "rotate(357deg)" }}>
          <Row className="my-5 py-5">
            <Col md={6} className="order-1 order-md-2">
              <div className="d-flex flex-column justify-content-center h-100">
                <h2 className="text-center text-md-start increase-text fw-bold">Increase your sales</h2>
                <p className="text-center text-md-start fs-2 lead">
                  Attract new customers and provide the information they need with ease.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="h-100 d-flex align-items-center justify-content-center position-relative">
                <img
                  width="100px"
                  height="100px"
                  className="img-fluid food-truck"
                  loading="lazy"
                  src="/images/food-truck.svg"
                  alt="Sandwiches"
                />
                <img
                  width="200px"
                  height="200px"
                  className="img-fluid chart"
                  loading="lazy"
                  src="/images/chart.svg"
                  alt="Sandwiches"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container fluid className="position-relative d-flex justify-content-center align-items-center mh75vh">
        <div
          className="home-try-it-now border border-4 border-black rounded-3"
          style={{ boxShadow: "4px 20px 0 #000000", transform: "rotate(3deg)" }}>
          <Row>
            <Col sm={6} className="order-2 order-sm-1">
              <div className="m-2 justify-content-start justify-content-sm-end h-100 d-sm-flex align-items-sm-center">
                <Link to="/get-started" className="py-3 px-5 btn btn-dark btn-lg bg-black rounded-pill">
                  Try it now for free
                </Link>
              </div>
            </Col>
            <Col sm={6} className="order-1 order-sm-2">
              <div className="mx-3 d-flex justify-content-end justify-content-sm-start">
                <img
                  width="300px"
                  height="300px"
                  className="img-fluid"
                  loading="lazy"
                  src="/images/cat-food.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="mh75vh">
        <div
          className="bg-frosted border border-4 border-black rounded-3"
          style={{ boxShadow: "-4px 20px 0 #000000", transform: "rotate(357deg)" }}>
          <Row className="mt-5 py-5">
            <Col md={6}>
              <div className="h-100 d-flex justify-content-center align-items-center">
                <img
                  width="200px"
                  height="200px"
                  className="img-fluid"
                  loading="lazy"
                  src="/images/food-app-computer.svg"
                  alt="A chef"
                />
                <img
                  width="100px"
                  height="100px"
                  className="img-fluid"
                  loading="lazy"
                  src="/images/food-app.svg"
                  alt="A chef"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h2 className="text-center text-md-start increase-text fw-bold">Increase your online presence</h2>
                <p className="text-center text-md-start fs-2 lead">
                  Get in front of your customers, position your restaurant for success.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
};
export default Home;
