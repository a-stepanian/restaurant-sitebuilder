import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaRightLong } from "react-icons/fa6";

export const Home = () => {
  return (
    <>
      <Container>
        <Row className="mt-5 pb-5">
          <Col md={6}>
            <h1 className="text-center text-md-start text-black feed-your-business">Feed your business</h1>
            <p className="mt-5 text-black text-center text-md-start fs-4 lead">
              Build an online presence in <span className="fw-bold">minutes</span>&nbsp;
              <br className="d-none d-md-block" />
              with Menu Web.
            </p>
          </Col>
          <Col md={6}>
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="/images/landing-page-img.jpg"
                loading="eager"
                alt="Chef holding cooking utensils"
              />
              <Link to="/get-started" className="mt-3 btn btn-dark btn-lg w-100 bg-black rounded-pill">
                Get Started <FaRightLong />
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="my-5 py-5">
          <Col md={6} className="order-1 order-md-2">
            <div className="d-flex flex-column justify-content-center h-100">
              <svg
                className="position-absolute w-75"
                id="10015.io"
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <path
                  fill="rgba(161, 202, 209, 0.5)"
                  d="M412.5,315.5Q360,391,287.5,370Q215,349,120,346Q25,343,84,268Q143,193,177,153Q211,113,260.5,132.5Q310,152,387.5,196Q465,240,412.5,315.5Z"
                />
              </svg>
              <h2 className="my-5 pt-5 increase-text display-1">Increase your sales.</h2>
              <p className="fs-2 lead">Attract new customers and provide the information they need with ease.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="h-100 d-flex align-items-center justify-content-center">
              {/* <FcBullish className="bullish w-100" /> */}
              <img className="img-fluid" src="/images/menu.gif" alt="" loading="lazy" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Row className="g-0 py-5">
          <Col className="py-5">
            <div className="checkered-bg" style={{ backgroundImage: "url('/images/honeycomb.png')" }}>
              <Link to="/get-started" className="mt-3 btn btn-dark btn-lg bg-black rounded-pill">
                Try it now for free!
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-5 py-5">
          <Col md={6}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h2 className="increase-text display-1 my-5">Increase your online presence</h2>
              <p className="fs-2 lead">Get in front of your customers, position your restaurant for success.</p>
            </div>
          </Col>
          <Col className="pb-5" md={6}>
            <div className="d-flex justify-content-center align-items-center">
              {/* <FcGoogle style={{ fontSize: "4rem" }} />
                <FcGoogle style={{ fontSize: "6.5rem" }} />
                <FcGoogle style={{ fontSize: "10rem" }} /> */}
              <img
                className="img-fluid"
                style={{ maxHeight: "50vh" }}
                src="/images/mobile-menu.gif"
                alt=""
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
