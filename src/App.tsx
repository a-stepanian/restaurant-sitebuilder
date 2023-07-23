import React, { useState } from "react";
import { Header } from "./Header";
import { HeroBuilder } from "./HeroBuilder/HeroBuilder";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.scss";

interface IBasicInformation {
  restaurantName: string;
  catchPhrase: string;
  about: string;
  cuisineType: string;
}

interface ILocation {
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
    <Container fluid className="px-0 gradient-bg">
      <Header />
      <div className="fade-bar"></div>
      <Container>
        {step === 1 && <HeroBuilder heroBuilderForm={heroBuilderForm} setHeroBuilderForm={setHeroBuilderForm} />}
        <Row>
          <Col>
            <div className="d-flex w-100 justify-content-between">
              <Button
                type="button"
                onClick={() => {
                  if (step > 1) setStep((prev) => prev - 1);
                  return;
                }}>
                Back
              </Button>
              <Button
                type="button"
                onClick={() => {
                  if (step < 3) setStep((prev) => prev + 1);
                  return;
                }}>
                Next Step
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
