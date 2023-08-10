import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiTwotoneMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaRightLong } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { Link } from "react-router-dom";

interface IFooterProps {
  onGetStartedPage: boolean;
  onFourOhFourPage: boolean;
}
export const Footer = (props: IFooterProps) => {
  const { onGetStartedPage, onFourOhFourPage } = props;
  return (
    <>
      {!onGetStartedPage && !onFourOhFourPage && (
        <Container fluid className="px-0 py-5" style={{ backgroundColor: "rgba(21, 188, 223, 0.1)" }}>
          <Row className="g-0 py-5">
            <Col>
              <div className="d-flex flex-column align-items-center">
                <h2 className="text-center mb-5">
                  Increase your online presence
                  <br className="d-none d-md-inline" />
                  &nbsp;& increase your sales now.
                </h2>
                <p className="text-center mb-5 lead">
                  Whether you want to simply get your menu online
                  <br className="d-none d-md-inline" />
                  &nbsp;or a fully customized website,
                  <br className="d-md-none" />
                  &nbsp;we have you covered.
                </p>
                <Link to="/get-started" className="btn btn-dark btn-lg bg-black rounded-pill">
                  Start free trial
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      <Container fluid className="px-0 bg-light">
        <Row className="g-0">
          <Col md={4}>
            <div className="d-none d-md-flex footer-col">
              <p className="display-6 mb-0 text-nowrap">
                <MdOutlineFastfood className="mb-2 me-2" />
                MenuWeb
              </p>
            </div>
          </Col>
          <Col md={8}>
            <Row className="g-0">
              <Col xs={6}>
                <div className="footer-col">
                  <nav className="d-flex align-items-center">
                    <MdOutlineFastfood className="d-none d-sm-block d-md-none m-4 display-6" />
                    <h5 className="mb-0">
                      <span className="d-none d-lg-block">Links</span>
                    </h5>
                    <ul className="list-unstyled m-3">
                      <li className="p-2 footer-link">
                        <Link className="p-2" to="/">
                          Home&nbsp;
                          <FaRightLong className="link" />
                        </Link>
                      </li>
                      <li className="p-2 footer-link">
                        <Link className="p-2" to="/pricing">
                          Pricing&nbsp;
                          <FaRightLong className="link" />
                        </Link>
                      </li>
                      <li className="p-2 footer-link">
                        <Link className="p-2" to="/login">
                          Log in&nbsp;
                          <FaRightLong className="link" />
                        </Link>
                      </li>
                      <li className="p-2 footer-link">
                        <Link className="p-2" to="/get-started">
                          Get Started&nbsp;
                          <FaRightLong className="link" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
              <Col xs={6}>
                <div
                  className="footer-col"
                  style={{
                    backgroundImage: "url('/images/scribble.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                  }}>
                  <ul className="list-unstyled m-0 d-flex align-items-center">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/alexander-stepanian/"
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin">
                        <BsLinkedin className="text-white" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/a-stepanian" target="_blank" rel="noreferrer" className="github">
                        <BsGithub className="text-white" />
                      </a>
                    </li>
                    <li>
                      <button className="email-button" type="button">
                        <AiTwotoneMail className="text-white" />
                      </button>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <p className="bg-black text-secondary mb-0 small text-center">MenuWeb &copy;2023</p>
    </>
  );
};
