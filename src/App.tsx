import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Header, Footer } from "./Components";
import { Home, Login, Pricing, FourOhFour, GetStarted } from "./Pages";

export const App = () => {
  return (
    <Container fluid className="site-container px-0 bg-light">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
      <Footer />
    </Container>
  );
};
