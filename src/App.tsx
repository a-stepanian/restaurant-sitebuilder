import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.scss";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

export interface IHours {
  day: string;
  open: string;
  close: string;
}
export interface IBasicInfo {
  restaurantName: string;
  cuisineType: string;
  about: string;
  catchPhrase?: string;
  hours: IHours[];
}
export interface IContactInfo {
  emailAddress: string;
  phoneNumber: string;
}
export interface IAddress {
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
}

export const App = () => {
  const Home = React.lazy(() => import("./Pages/Home/Home"));
  const Login = React.lazy(() => import("./Pages/Login/Login"));
  const Preview = React.lazy(() => import("./Pages/Preview/Preview"));
  const Pricing = React.lazy(() => import("./Pages/Pricing/Pricing"));
  const FourOhFour = React.lazy(() => import("./Pages/FourOhFour/FourOhFour"));
  const HeroBuilder = React.lazy(() => import("./HeroBuilder/HeroBuilder"));
  const [onGetStartedPage, setOnGetStartedPage] = useState<boolean>(false);
  const [onFourOhFourPage, setOnFourOhFourPage] = useState<boolean>(false);
  const [basicInfo, setBasicInfo] = useState<IBasicInfo>({
    restaurantName: "Dim Sum Heaven",
    catchPhrase: "So good you'll think you died and went to heaven.",
    about: "Dim Sum Heaven opened in",
    cuisineType: "Pick one",
    hours: [
      { day: "Sunday", open: "06:00", close: "22:00" },
      { day: "Monday", open: "06:00", close: "22:00" },
      { day: "Tuesday", open: "06:00", close: "22:00" },
      { day: "Wednesday", open: "06:00", close: "22:00" },
      { day: "Thursday", open: "06:00", close: "22:00" },
      { day: "Friday", open: "06:00", close: "22:00" },
      { day: "Saturday", open: "06:00", close: "22:00" },
    ],
  });
  const [contactInfo, setContactInfo] = useState<IContactInfo>({
    emailAddress: "",
    phoneNumber: "",
  });
  const [address, setAddress] = useState<IAddress>({
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  });

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
      <Header onGetStartedPage={onGetStartedPage} />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/get-started"
          element={
            <Suspense>
              <HeroBuilder
                basicInfo={basicInfo}
                setBasicInfo={setBasicInfo}
                contactInfo={contactInfo}
                setContactInfo={setContactInfo}
                address={address}
                setAddress={setAddress}
              />
            </Suspense>
          }
        />
        <Route
          path="/preview"
          element={
            <Suspense>
              <Preview basicInfo={basicInfo} contactInfo={contactInfo} address={address} />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/pricing"
          element={
            <Suspense>
              <Pricing />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense>
              <FourOhFour />{" "}
            </Suspense>
          }
        />
      </Routes>
      <Footer onGetStartedPage={onGetStartedPage} onFourOhFourPage={onFourOhFourPage} />
    </Container>
  );
};
