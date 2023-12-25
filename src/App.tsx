import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Home, Login, Pricing, FourOhFour, GetStarted } from "./Pages";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

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
