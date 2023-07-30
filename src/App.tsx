import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import "./App.scss";
import Home from "./Pages/Home/Home";
import { Footer } from "./Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import GetStarted from "./Pages/GetStarted/GetStarted";
import { Login } from "./Pages/Login/Login";
import { Pricing } from "./Pages/Pricing/Pricing";

export interface IBasicInformation {
  restaurantName: string;
  catchPhrase: string;
  about: string;
  cuisineType: string;
}

export interface ILocation {
  emailAddress: string;
  phoneNumber: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IHeroBuilderForm {
  basicInformation: IBasicInformation;
  hours: string[];
  location: ILocation;
}

export const App = () => {
  const [hideCTA, setHideCTA] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setHideCTA(location.pathname === "/get-started");
  }, [location]);
  const [step, setStep] = useState<number>(1);
  const [heroBuilderForm, setHeroBuilderForm] = useState<IHeroBuilderForm>({
    basicInformation: {
      restaurantName: "",
      catchPhrase: "",
      about: "",
      cuisineType: "",
    },
    hours: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    location: {
      emailAddress: "",
      phoneNumber: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

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
          <Route
            path="/"
            element={
              <Home
                heroBuilderForm={heroBuilderForm}
                setHeroBuilderForm={setHeroBuilderForm}
                step={step}
                setStep={setStep}
              />
            }
          />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Container>
      <Footer hideCTA={hideCTA} />
    </>
  );
};
