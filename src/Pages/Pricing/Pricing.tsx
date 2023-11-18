import React from "react";
import { Link } from "react-router-dom";
import { Badge, Card, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import { LiaCheckSolid, LiaCubeSolid, LiaCubesSolid, LiaSquare, LiaTimesSolid } from "react-icons/lia";

export const Pricing = () => {
  return (
    <main className="pricing-main">
      <Container fluid className="py-5 pe-0 pe-sm-3 py-lg-0 d-lg-none">
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th className="bg-body-secondary" style={{ width: "33%" }}>
                <div className="d-flex flex-column align-items-center py-3">
                  <LiaSquare className="display-1" />
                  <h4 className="m-0">Core</h4>
                </div>
              </th>
              <th className="silver-bg" style={{ width: "33%" }}>
                <div className="d-flex flex-column align-items-center py-3">
                  <LiaCubeSolid className="display-1" />
                  <h4 className="m-0">Deluxe</h4>
                </div>
              </th>
              <th className="gradient-bg" style={{ width: "33%" }}>
                <div className="d-flex flex-column align-items-center py-3">
                  <LiaCubesSolid className="display-1" />
                  <h4 className="m-0">Professional</h4>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="my-3">Everything you need to get your essential business information online.</p>
              </td>
              <td>
                <p className="my-3">
                  For businesses that want to stand out from their competition. A great starter option!
                </p>
              </td>
              <td>
                <p className="my-3">
                  Harness our powerful business tools to optimize traffic to your website and access powerful data
                  analytics to drive growth.
                </p>
              </td>
            </tr>
            <tr>
              <td className="bg-success-subtle">
                <div className="d-flex">
                  <LiaCheckSolid className="me-1 mt-1 text-success" />
                  <span className="small fw-bold ms-1">Basic Features</span>
                </div>
              </td>
              <td className="bg-success-subtle">
                <div className="d-flex">
                  <LiaCheckSolid className="me-1 mt-1 text-success" />
                  <span className="small fw-bold ms-1">Basic Features</span>
                </div>
              </td>
              <td className="bg-success-subtle">
                <div className="d-flex">
                  <LiaCheckSolid className="me-1 mt-1 text-success" />
                  <span className="small fw-bold ms-1">Basic Features</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="bg-danger-subtle">
                <div className="d-flex">
                  <LiaTimesSolid className="fs-3 me-1 d-md-none mt-1 text-danger" />
                  <LiaTimesSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-danger" />
                  <p className="mb-0">Expanded Themes & SEO</p>
                </div>
              </td>
              <td className="bg-success-subtle">
                <div className="d-flex">
                  <LiaCheckSolid className="fs-3 me-1 d-md-none mt-1 text-success" />
                  <LiaCheckSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-success" />
                  <p className="mb-0">Expanded Themes & SEO</p>
                </div>
              </td>
              <td className="bg-success-subtle">
                <div className="d-flex">
                  <LiaCheckSolid className="fs-3 me-1 d-md-none mt-1 text-success" />
                  <LiaCheckSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-success" />
                  <p className="mb-0">Expanded Themes & SEO</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="bg-danger-subtle">
                <div className="d-flex">
                  <LiaTimesSolid className="fs-3 me-1 d-md-none mt-1 text-danger" />
                  <LiaTimesSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-danger" />
                  <p className="mb-0">Powerful Business Analytics</p>
                </div>
              </td>
              <td className="bg-danger-subtle">
                <div className="d-flex">
                  <LiaTimesSolid className="fs-3 me-1 d-md-none mt-1 text-danger" />
                  <LiaTimesSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-danger" />
                  <p className="mb-0">Powerful Business Analytics</p>
                </div>
              </td>
              <td className="bg-success-subtle">
                <div className="d-flex">
                  <LiaCheckSolid className="fs-3 me-1 d-md-none mt-1 text-success" />
                  <LiaCheckSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-success" />
                  <p className="mb-0">Powerful Business Analytics</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="secondary align-middle">
                <p className="mb-0 text-center">Free</p>
              </td>
              <td className="align-middle">
                <p className="mb-0 text-center">$19.99</p>
              </td>
              <td className="align-middle">
                <p className="mb-0 text-center">$99.99</p>
              </td>
            </tr>
            <tr>
              <td className="bg-body-secondary p-4">
                <Link to="/get-started" className="btn btn-lg btn-dark bg-black rounded-pill w-100">
                  Select
                </Link>
              </td>
              <td className="silver-bg align-middle">
                <h5 className="mb-0 text-center text-black">Coming soon...</h5>
              </td>
              <td className="gradient-bg align-middle">
                <h5 className="mb-0 text-center text-black">Coming soon...</h5>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Container className="py-5 py-lg-0 d-none d-lg-flex">
        <Row className="py-5 align-items-center">
          <Col md={4} className="py-3">
            <Card className="bg-body-secondary border-3">
              <Card.Header className="rounded-0 border-3">
                <h5 className="mb-0 d-flex justify-content-end">
                  <Badge className="bg-dark">Free</Badge>
                </h5>
                <div className="d-flex flex-md-column align-items-center py-3">
                  <LiaSquare className="display-1" />
                  <h2>Core</h2>
                </div>
              </Card.Header>
              <Card.Body className="p-4 bg-light border-bottom">
                <Card.Text>Everything you need to get your essential business information online.</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush border-0">
                <ListGroup.Item className="text-center border-bottom d-flex">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span className="small fw-bold ms-1">Basic Features</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center border-bottom d-flex">
                  <LiaTimesSolid className="fs-5 text-danger" />
                  <span className="small fw-bold ms-1">Expanded Themes & SEO</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center border-bottom d-flex">
                  <LiaTimesSolid className="fs-5 text-danger" />
                  <span className="small fw-bold ms-1">Powerful Business Analytics</span>
                  <span className="px-2" />
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to="/get-started" className="btn btn-dark btn-lg bg-black rounded-pill w-100">
                  Select
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="py-3">
            <Card className="gradient-bg border-3">
              <Card.Header className="border-3">
                <h5 className="mb-0 d-flex justify-content-end">
                  <Badge className="bg-dark">$149.99</Badge>
                </h5>
                <div className="d-flex flex-md-column align-items-center py-3">
                  <LiaCubesSolid className="display-1" />
                  <h2>Professional</h2>
                </div>
              </Card.Header>
              <Card.Body className="p-4 bg-light border-bottom">
                <Card.Text>
                  Harness our powerful business tools to optimize traffic to your website and access powerful data
                  analytics to drive growth.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush border-0">
                <ListGroup.Item className="text-center d-flex border-bottom">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span className="small fw-bold ms-1">Basic Features</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center d-flex border-bottom">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span className="small fw-bold ms-1">Expanded Themes & SEO</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center d-flex border-bottom">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span className="small fw-bold ms-1">Powerful Business Analytics</span>
                  <span className="px-2" />
                </ListGroup.Item>
              </ListGroup>
              <Card.Body
                className="bg-transparent d-flex align-items-center justify-content-center"
                style={{ height: "81.56px" }}>
                <h4 className="text-center mb-0">Coming Soon...</h4>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="py-3">
            <Card className="silver-bg border-3">
              <Card.Header className="rounded-0 border-3">
                <h5 className="mb-0 d-flex justify-content-end">
                  <Badge className="bg-dark">$49.99</Badge>
                </h5>
                <div className="d-flex flex-md-column align-items-center py-3">
                  <LiaCubeSolid className="display-1" />
                  <h2>Deluxe</h2>
                </div>
              </Card.Header>
              <Card.Body className="p-4 bg-light border-bottom">
                <Card.Text>For businesses that want to stand out from their competition.</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush border-0">
                <ListGroup.Item className="text-center border-bottom d-flex">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span className="small fw-bold ms-1">Basic Features</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center border-bottom d-flex">
                  <LiaCheckSolid className="fs-5 text-success" />
                  <span className="small fw-bold ms-1">Expanded Themes & SEO</span>
                  <span className="px-2" />
                </ListGroup.Item>
                <ListGroup.Item className="text-center border-bottom d-flex">
                  <LiaTimesSolid className="fs-5 text-danger" />
                  <span className="small fw-bold ms-1">Powerful Business Analytics</span>
                  <span className="px-2" />
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="d-flex align-items-center justify-content-center" style={{ height: "81.56px" }}>
                <h4 className="text-center mb-0">Coming Soon...</h4>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
