import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <Container>
        <Row className="above-the-fold">
          <svg
            className="position-absolute w-100 hero-shape"
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <path
              fill="rgba(161, 202, 209, 0.2)"
              d="M412.5,315.5Q360,391,287.5,370Q215,349,120,346Q25,343,84,268Q143,193,177,153Q211,113,260.5,132.5Q310,152,387.5,196Q465,240,412.5,315.5Z"
            />
          </svg>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h1 className="my-5 my-md-3 my-lg-4 text-center text-md-start text-black fw-bold feed-your-business">
              Feed your business
            </h1>
            <p className="w-100 text-black text-center text-md-start fs-4 lead">
              Build an online presence in
              <br />
              <strong>minutes</strong>&nbsp; with Menu Web.
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
                className="img-fluid rounded-circle hero-image"
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
              <svg
                className="position-absolute w-100 hero-shape"
                id="10015.io"
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <path
                  fill="rgba(161, 202, 209, 0.2)"
                  d="M412.5,315.5Q360,391,287.5,370Q215,349,120,346Q25,343,84,268Q143,193,177,153Q211,113,260.5,132.5Q310,152,387.5,196Q465,240,412.5,315.5Z"
                />
              </svg>
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
      </Container>
      <Container fluid className="home-try-it-now">
        <Row className="py-5">
          <Col md={6} className="py-5 order-2">
            <div className="d-flex justify-content-end align-items-center h-100">
              <Link to="/get-started" className="py-3 px-5 my-3 btn btn-dark btn-lg bg-black rounded-pill">
                Try it now for free!
              </Link>
            </div>
          </Col>
          <Col md={6} className="order-1">
            <img width="300px" height="300px" className="img-fluid" loading="lazy" src="/images/cat-food.png" alt="" />
          </Col>
        </Row>
      </Container>
      <Container>
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
      </Container>
    </>
  );
};
export default Home;
