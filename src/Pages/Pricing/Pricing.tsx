import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import { LiaCheckSolid, LiaCubeSolid, LiaCubesSolid, LiaSquare, LiaTimesSolid } from "react-icons/lia";

export const Pricing = () => {
  return (
    <main>
      <Container className="py-5 py-lg-0">
        <Table bordered hover className="my-5 d-lg-none">
          <thead>
            <tr>
              <th className="bg-body-secondary" style={{ width: "33%" }}>
                <div className="d-flex flex-column align-items-center py-3">
                  <LiaSquare className="mb-md-3 display-1" />
                  <h4 className="m-0">Core</h4>
                </div>
              </th>
              <th className="silver-bg" style={{ width: "33%" }}>
                <div className="d-flex flex-column align-items-center py-3">
                  <LiaCubeSolid className="mb-md-3 display-1" />
                  <h4 className="m-0">Deluxe</h4>
                </div>
              </th>
              <th className="gradient-bg" style={{ width: "33%" }}>
                <div className="d-flex flex-column align-items-center py-3">
                  <LiaCubesSolid className="mb-md-3 display-1" />
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
                  <span>Basic Features</span>
                </div>
              </td>
              <td className="bg-success-subtle">
                <div className="d-flex">
                  <LiaCheckSolid className="me-1 mt-1 text-success" />
                  <span>Basic Features</span>
                </div>
              </td>
              <td className="bg-success-subtle">
                <div className="d-flex">
                  <LiaCheckSolid className="me-1 mt-1 text-success" />
                  <span>Basic Features</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="bg-danger-subtle">
                <div className="d-flex justify-content-between">
                  <LiaTimesSolid className="fs-3 me-1 d-md-none mt-1 text-danger" />
                  <LiaTimesSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-danger" />
                  <p className="mb-0">Expanded Themes & SEO</p>
                </div>
              </td>
              <td className="bg-success-subtle">
                <div className="d-flex justify-content-between">
                  <LiaCheckSolid className="fs-3 me-1 d-md-none mt-1 text-success" />
                  <LiaCheckSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-success" />
                  <p className="mb-0">Expanded Themes & SEO</p>
                </div>
              </td>
              <td className="bg-success-subtle">
                <div className="d-flex justify-content-between">
                  <LiaCheckSolid className="fs-3 me-1 d-md-none mt-1 text-success" />
                  <LiaCheckSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-success" />
                  <p className="mb-0">Expanded Themes & SEO</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="bg-danger-subtle">
                <div className="d-flex justify-content-between">
                  <LiaTimesSolid className="fs-3 me-1 d-md-none mt-1 text-danger" />
                  <LiaTimesSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-danger" />
                  <p className="mb-0">Powerful Business Analytics</p>
                </div>
              </td>
              <td className="bg-danger-subtle">
                <div className="d-flex justify-content-between">
                  <LiaTimesSolid className="fs-3 me-1 d-md-none mt-1 text-danger" />
                  <LiaTimesSolid className="fs-6 me-1 d-none d-md-inline mt-1 text-danger" />
                  <p className="mb-0">Powerful Business Analytics</p>
                </div>
              </td>
              <td className="bg-success-subtle">
                <div className="d-flex justify-content-between">
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
                {/* <div className="d-flex justify-content-around align-items-center">
                  <span>$49.99</span>
                  <Link to="/get-started" className="btn btn-outline-dark border-1 rounded-pill">
                    Select
                  </Link>
                </div> */}
                <h5 className="mb-0 text-center text-black">Coming soon...</h5>
              </td>
              <td className="gradient-bg align-middle">
                {/* <div className="d-flex justify-content-around align-items-center">
                  <span>$99.99</span>
                  <Link to="/get-started" className="btn btn-outline-dark border-1 rounded-pill">
                    Select
                  </Link>
                </div> */}
                <h5 className="mb-0 text-center text-black">Coming soon...</h5>
              </td>
            </tr>
          </tbody>
        </Table>
        <Row className="d-none d-lg-flex py-5 align-items-center">
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
                <Link to="/get-started" className="btn btn-dark btn-lg bg-black rounded-pill w-100">
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
                  Harness our powerful business tools to optimize traffic to your website and access powerful data
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
              {/* <Card.Body className="bg-transparent">
                <Link to="/get-started" className="btn btn-dark btn-lg bg-black rounded-pill w-100">
                  Select
                </Link>
              </Card.Body> */}
              <Card.Body
                className="bg-transparent d-flex align-items-center justify-content-center"
                style={{ height: "81.56px" }}>
                <h4 className="text-center mb-0">Coming Soon...</h4>
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
              <Card.Body className="px-4">
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
              <Card.Body
                className="silver-bg d-flex align-items-center justify-content-center"
                style={{ height: "81.56px" }}>
                <h4 className="text-center mb-0">Coming Soon...</h4>
              </Card.Body>
              {/* <Card.Body className="silver-bg">
                <Link to="/get-started" className="btn btn-outline-dark btn-lg border-2 rounded-pill w-100">
                  Select
                </Link>
              </Card.Body> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
