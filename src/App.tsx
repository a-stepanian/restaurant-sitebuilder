import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.scss";
import { GetStarted, Home, Login, Pricing } from "./Pages/pageIndex";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

export const App = () => {
  const [hideCTA, setHideCTA] = useState<boolean>(false);
  const location = useLocation();

  // Run when url changes
  useEffect(() => {
    setHideCTA(location.pathname === "/get-started");
    window.scroll({ top: 0, left: 0 });
  }, [location]);

  window.onscroll = function () {
    var scrollLimit = 60;
    if (window.scrollY >= scrollLimit) {
      document.querySelector(".navbar")?.classList.add("solid-white");
    } else {
      document.querySelector(".navbar")?.classList.remove("solid-white");
    }
  };

  return (
    <>
      <Container fluid className="px-0 gradient-bg1">
        <Header hideCTA={hideCTA} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Container>
      <Footer hideCTA={hideCTA} />
    </>
  );
};
