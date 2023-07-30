import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiTwotoneMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineFastfood } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

interface IFooterProps {
  hideCTA: boolean;
}
export const Footer = (props: IFooterProps) => {
  const { hideCTA } = props;
  return (
    <>
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
              {!hideCTA && (
                <Link to="/get-started" className="btn btn-dark btn-lg bg-black rounded-pill">
                  Start free trial
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0 py-5 gradient-bg">
        <Row className="g-0 py-5">
          <Col>
            <Container>
              <Row>
                <Col md={4}>
                  <div className="d-flex align-items-end">
                    <MdOutlineFastfood className="display-1 text-black" />
                  </div>
                </Col>
                <Col md={4}>
                  <h5>Get In Touch</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/alexander-stepanian/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 linkedin">
                        <BsLinkedin className="text-black" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/a-stepanian" target="_blank" rel="noreferrer" className="p-3 github">
                        <BsGithub className="text-black" />
                      </a>
                    </li>
                    <li>
                      <button className="p-3 email-button" type="button">
                        <AiTwotoneMail className="text-black" />
                      </button>
                    </li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h5>Links</h5>
                  <ul className="list-unstyled">
                    <li className="m-3">
                      <Link to="/" className="text-black">
                        Home
                      </Link>
                    </li>
                    <li className="m-3">
                      <Link to="/pricing" className="text-black">
                        Pricing
                      </Link>
                    </li>
                    <li className="m-3">
                      <Link to="/login" className="text-black">
                        Log in
                      </Link>
                    </li>
                    <li className="m-3">
                      <Link to="/get-started" className="text-black">
                        Get Started
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-black">
        <Row>
          <Col>
            <p className="text-secondary my-1 small text-center">Menu Web &copy;2023</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
