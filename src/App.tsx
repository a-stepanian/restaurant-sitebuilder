import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.scss";
import { GetStarted, Home, Login, Pricing } from "./Pages/pageIndex";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { FourOhFour } from "./Pages/FourOhFour/FourOhFour";

export const App = () => {
  const [onGetStartedPage, setOnGetStartedPage] = useState<boolean>(false);
  const [onFourOhFourPage, setOnFourOhFourPage] = useState<boolean>(false);
  const location = useLocation();

  // Run when url changes
  useEffect(() => {
    setOnGetStartedPage(location.pathname === "/get-started");
    setOnFourOhFourPage(!["", "/", "/get-started", "/pricing", "login"].includes(location.pathname));
    if (location.pathname !== "/get-started") {
      document.querySelector(".navbar")?.classList.remove("solid-white");
      window.onscroll = function () {
        var scrollLimit = 60;
        if (window.scrollY >= scrollLimit) {
          document.querySelector(".navbar")?.classList.add("solid-white");
        } else {
          document.querySelector(".navbar")?.classList.remove("solid-white");
        }
      };
    } else {
      document.querySelector(".navbar")?.classList.add("solid-white");
      window.onscroll = null;
    }
  }, [location]);

  return (
    <>
      <Container
        fluid
        className={`px-0 pb-5 ${onGetStartedPage ? "gradient-bg3" : onFourOhFourPage ? "space-bg" : "gradient-bg1"}`}>
        <Header onGetStartedPage={onGetStartedPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Container>
      <Footer onGetStartedPage={onGetStartedPage} onFourOhFourPage={onFourOhFourPage} />
    </>
  );
};
