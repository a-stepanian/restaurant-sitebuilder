import React from "react";
import { Link } from "react-router-dom";
import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { LiaCheckSolid, LiaCubeSolid, LiaCubesSolid, LiaSquare, LiaTimesSolid } from "react-icons/lia";

const Pricing = () => {
  return (
    <main className="pricing-main home-try-it-now">
      <Container className="py-5 py-lg-0 d-flex mh100vh">
        <Row className="py-5 align-items-center">
          <Col lg={4} className="py-3">
            <Card className="flex-row flex-lg-column bg-body-secondary border-3">
              <Card.Header className="d-flex flex-column rounded-0">
                <h5 className="mb-0 d-none d-lg-flex justify-content-center justify-content-lg-end">
                  <Badge className="bg-dark">Free</Badge>
                </h5>
                <div className="d-flex flex-column align-items-center">
                  <LiaSquare className="display-1" />
                  <h2>Core</h2>
                </div>
              </Card.Header>
              <Card.Body className="bg-light border-bottom">
                <p className="small">Everything you need to get your essential business information online.</p>
                <ListGroup className="list-group-flush border-0">
                  <ListGroup.Item className="border shadow-sm small d-flex">
                    <LiaCheckSolid className="fs-5 text-success" />
                    <span className="small fw-bold ms-1">Basic Features</span>
                    <span className="px-2" />
                  </ListGroup.Item>
                  <ListGroup.Item className="border shadow-sm small d-flex">
                    <LiaTimesSolid className="fs-5 text-danger" />
                    <span className="small fw-bold ms-1">Expanded Themes & SEO</span>
                    <span className="px-2" />
                  </ListGroup.Item>
                  <ListGroup.Item className="border shadow-sm small d-flex">
                    <LiaTimesSolid className="fs-5 text-danger" />
                    <span className="small fw-bold ms-1">Powerful Business Analytics</span>
                    <span className="px-2" />
                  </ListGroup.Item>
                </ListGroup>
                <Link to="/get-started" className="d-lg-none btn btn-dark btn-lg bg-black rounded-pill w-100 mt-3">
                  Select
                </Link>
              </Card.Body>
              <Card.Body className="d-none d-lg-block">
                <Link to="/get-started" className="btn btn-dark btn-lg bg-black rounded-pill w-100">
                  Select
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="py-3">
            <Card className="flex-row flex-lg-column gradient-bg border-3">
              <Card.Header className="d-flex flex-column">
                <h5 className="mb-0 d-none d-lg-flex justify-content-center justify-content-lg-end">
                  <Badge className="bg-dark">$149.99</Badge>
                </h5>
                <div className="d-flex flex-column align-items-center">
                  <LiaCubesSolid className="display-1" />
                  <h2 className="d-lg-none">Pro</h2>
                  <h2 className="d-none d-lg-block">Professional</h2>
                </div>
              </Card.Header>
              <Card.Body className="bg-light border-bottom">
                <p className="small">
                  Harness our powerful business tools to optimize traffic to your website and access powerful data
                  analytics to drive growth.
                </p>
                <ListGroup className="list-group-flush border-0">
                  <ListGroup.Item className="border shadow-sm small d-flex">
                    <LiaCheckSolid className="fs-5 text-success" />
                    <span className="small fw-bold ms-1">Basic Features</span>
                    <span className="px-2" />
                  </ListGroup.Item>
                  <ListGroup.Item className="border shadow-sm small d-flex">
                    <LiaCheckSolid className="fs-5 text-success" />
                    <span className="small fw-bold ms-1">Expanded Themes & SEO</span>
                    <span className="px-2" />
                  </ListGroup.Item>
                  <ListGroup.Item className="border shadow-sm small d-flex">
                    <LiaCheckSolid className="fs-5 text-success" />
                    <span className="small fw-bold ms-1">Powerful Business Analytics</span>
                    <span className="px-2" />
                  </ListGroup.Item>
                </ListGroup>
                <button disabled={true} className="d-lg-none btn btn-dark btn-lg bg-black rounded-pill w-100 mt-3">
                  Coming soon...
                </button>
              </Card.Body>
              <Card.Body
                className="d-none d-lg-flex bg-transparent align-items-center justify-content-center"
                style={{ height: "81.56px" }}>
                <button disabled={true} className="btn btn-dark btn-lg bg-black rounded-pill w-100">
                  Coming soon...
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="py-3">
            <Card className="flex-row flex-lg-column silver-bg border-3">
              <Card.Header className="d-flex flex-column rounded-0">
                <h5 className="mb-0 d-none d-lg-flex justify-content-center justify-content-lg-end">
                  <Badge className="bg-dark">$49.99</Badge>
                </h5>
                <div className="d-flex flex-column align-items-center">
                  <LiaCubeSolid className="display-1" />
                  <h2 className="d-lg-none">Lux</h2>
                  <h2 className="d-none d-lg-block">Deluxe</h2>
                </div>
              </Card.Header>
              <Card.Body className="bg-light border-bottom">
                <p className="small">For businesses that want to stand out from their competition.</p>
                <ListGroup className="list-group-flush border-0">
                  <ListGroup.Item className="border shadow-sm small d-flex">
                    <LiaCheckSolid className="fs-5 text-success" />
                    <span className="small fw-bold ms-1">Basic Features</span>
                    <span className="px-2" />
                  </ListGroup.Item>
                  <ListGroup.Item className="border shadow-sm small d-flex">
                    <LiaCheckSolid className="fs-5 text-success" />
                    <span className="small fw-bold ms-1">Expanded Themes & SEO</span>
                    <span className="px-2" />
                  </ListGroup.Item>
                  <ListGroup.Item className="border shadow-sm small d-flex">
                    <LiaTimesSolid className="fs-5 text-danger" />
                    <span className="small fw-bold ms-1">Powerful Business Analytics</span>
                    <span className="px-2" />
                  </ListGroup.Item>
                </ListGroup>
                <button disabled={true} className="d-lg-none btn btn-dark btn-lg bg-black rounded-pill w-100 mt-3">
                  Coming soon...
                </button>
              </Card.Body>
              <Card.Body
                className="d-none d-lg-flex align-items-center justify-content-center"
                style={{ height: "81.56px" }}>
                <button disabled={true} className="btn btn-dark btn-lg bg-black rounded-pill w-100">
                  Coming soon...
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default Pricing;
