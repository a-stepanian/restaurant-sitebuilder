import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

const Login = () => {
  const [userPwd, setUserPwd] = useState<{ user: string; pwd: string }>({ user: "", pwd: "" });
  const loginUser = () => {
    console.log(`user: ${userPwd.user}, password: ${userPwd.pwd}`);
  };
  return (
    <Container
      fluid
      style={{
        background: "url('/images/wave.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh",
      }}>
      <Row className="flex-column-reverse flex-sm-row" style={{ minHeight: "80vh" }}>
        <Col sm={6}>
          <div className="h-100 d-flex align-items-center justify-content-center justify-content-lg-end">
            <img
              loading="eager"
              width={"300px"}
              height={"300px"}
              className="my-5 img-fluid"
              src="/images/dish.png"
              alt="Satellite dish"
            />
          </div>
        </Col>
        <Col sm={6}>
          <Form
            className="h-100 d-flex align-items-center justify-content-center justify-content-lg-start my-3"
            onSubmit={loginUser}>
            <Card className="border-0 card p-3 shadow p-lg-5" style={{ backgroundColor: "rgba(228, 255, 251, 0.8)" }}>
              <Form.Group className="mb-3">
                <Form.Label className="mb-0 small fw-bold">username</Form.Label>
                <Form.Control
                  value={userPwd.user}
                  onChange={(e) =>
                    setUserPwd((prev) => {
                      return {
                        ...prev,
                        user: e.target.value,
                      };
                    })
                  }
                  size="lg"
                  type="email"
                  placeholder="you@gmail.com"
                  aria-label="username"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="mb-0 small fw-bold">password</Form.Label>
                <Form.Control
                  value={userPwd.pwd}
                  onChange={(e) =>
                    setUserPwd((prev) => {
                      return {
                        ...prev,
                        pwd: e.target.value,
                      };
                    })
                  }
                  size="lg"
                  type="password"
                  aria-label="password"
                />
              </Form.Group>
              <button type="submit" className="btn btn-dark rounded-pill border-2 px-4">
                Sign In
              </button>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
