import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.scss";
import { Home, Login, Pricing } from "./Pages/pageIndex";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { FourOhFour } from "./Pages/FourOhFour/FourOhFour";
import { Preview } from "./Pages/Preview/Preview";
import { HeroBuilder } from "./HeroBuilder/HeroBuilder";

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
  const [onGetStartedPage, setOnGetStartedPage] = useState<boolean>(false);
  const [onFourOhFourPage, setOnFourOhFourPage] = useState<boolean>(false);
  const [onPricingPage, setOnPricingPage] = useState<boolean>(false);
  const [onLiveSite, setOnLiveSite] = useState<boolean>(false);
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
    setOnLiveSite(location.pathname === "/live-site");
    setOnPricingPage(["/pricing", "/get-started"].includes(location.pathname));
    setOnFourOhFourPage(!["", "/", "/get-started", "/pricing", "login"].includes(location.pathname));
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
    <>
      <Container fluid className={`px-0 ${onFourOhFourPage ? "space-bg" : onPricingPage ? "radial-bg" : "bg-light"}`}>
        <Header onGetStartedPage={onGetStartedPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/get-started"
            element={
              <HeroBuilder
                basicInfo={basicInfo}
                setBasicInfo={setBasicInfo}
                contactInfo={contactInfo}
                setContactInfo={setContactInfo}
                address={address}
                setAddress={setAddress}
              />
            }
          />
          <Route
            path="/preview"
            element={<Preview basicInfo={basicInfo} contactInfo={contactInfo} address={address} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
        <Footer onGetStartedPage={onGetStartedPage} onFourOhFourPage={onFourOhFourPage} />
      </Container>
    </>
  );
};
