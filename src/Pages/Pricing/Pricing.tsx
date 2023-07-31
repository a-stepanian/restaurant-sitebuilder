import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { LiaCheckSolid, LiaCubeSolid, LiaCubesSolid, LiaSquare, LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export const Pricing = () => {
  return (
    <main>
      <Container>
        <Row className="d-none d-md-flex py-5 align-items-center">
          <Col md={4} className="py-3">
            <Card className="border-5">
              <Card.Header className="bg-body-secondary rounded-0">
                <div className="d-flex flex-md-column align-items-center py-3">
                  <LiaSquare className="mb-md-3 display-1" />
                  <h2 className="m-0">Core</h2>
                </div>
              </Card.Header>
              <Card.Body className="px-4">
                <Card.Title>Free</Card.Title>
                <Card.Text>Everything you need to get your essential business information online.</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center d-flex justify-content-between">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span>Basic Features</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center d-flex justify-content-between">
                  <LiaTimesSolid className="fs-5 text-danger" />
                  <span>Expanded Themes & SEO</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center d-flex justify-content-between">
                  <LiaTimesSolid className="fs-5 text-danger" />
                  <span>Powerful Business Analytics</span>
                  <span className="px-2" />
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="bg-body-secondary">
                <Link to="/login" className="btn btn-outline-dark btn-lg border-2 rounded-pill w-100">
                  Select
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="py-3">
            <Card className="gradient-bg border-5">
              <Card.Header>
                <div className="d-flex flex-md-column align-items-center py-3">
                  <LiaCubesSolid className="mb-md-3 display-1" />
                  <h2 className="m-0">Professional</h2>
                </div>
              </Card.Header>
              <Card.Body className="px-4 bg-frosted">
                <Card.Title>$99.99</Card.Title>
                <Card.Text>
                  Harness our powerful business tools to optimize traffic to your website and harness powerful data
                  analytics to drive growth.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center bg-frosted d-flex justify-content-between">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span>Basic Features</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center bg-frosted d-flex justify-content-between">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span>Expanded Themes & SEO</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center bg-frosted d-flex justify-content-between">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span>Powerful Business Analytics</span>
                  <span className="px-2" />
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="bg-transparent">
                <Link to="/login" className="btn btn-dark btn-lg bg-black rounded-pill w-100">
                  Select
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="py-3">
            <Card className="border-5">
              <Card.Header className="rounded-0 silver-bg">
                <div className="d-flex flex-md-column align-items-center py-3">
                  <LiaCubeSolid className="mb-md-3 display-1" />
                  <h2 className="m-0">Deluxe</h2>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>$19.99</Card.Title>
                <Card.Text>For businesses that want to stand out from their competition.</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center d-flex justify-content-between">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span>Basic Features</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center d-flex justify-content-between">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span>Expanded Themes & SEO</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center d-flex justify-content-between">
                  <LiaTimesSolid className="fs-5 text-danger" />
                  <span>Powerful Business Analytics</span>
                  <span className="px-2" />
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="silver-bg">
                <Link to="/login" className="btn btn-outline-dark btn-lg border-2 rounded-pill w-100">
                  Select
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
