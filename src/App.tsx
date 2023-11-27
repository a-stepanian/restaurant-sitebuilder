import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Header, Footer } from "./Components";
import { Home, Login, Pricing, FourOhFour, GetStarted } from "./Pages";

export const App = () => {
  const [onGetStartedPage, setOnGetStartedPage] = useState<boolean>(false);
  const [onFourOhFourPage, setOnFourOhFourPage] = useState<boolean>(false);

  const location = useLocation();

  // Run when url changes
  useEffect(() => {
    setOnGetStartedPage(location.pathname === "/get-started");
    setOnFourOhFourPage(!["", "/", "/get-started", "/pricing", "/login"].includes(location.pathname));
    document.querySelector(".navbar")?.classList.remove("solid-white");
    window.onscroll = function () {
      var scrollLimit = 60;
      if (window.scrollY >= scrollLimit) {
        document.querySelector(".navbar")?.classList.add("solid-white");
      } else {
        document.querySelector(".navbar")?.classList.remove("solid-white");
      }
    };
  }, [location]);

  return (
    <Container fluid className={`site-container px-0 ${onFourOhFourPage ? "space-bg" : "bg-light"}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
      <Footer onGetStartedPage={onGetStartedPage} onFourOhFourPage={onFourOhFourPage} />
    </Container>
  );
};
