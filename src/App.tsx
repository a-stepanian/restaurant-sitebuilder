import React, { useState } from "react";
import { Header } from "./Header";
import { HeroBuilder } from "./HeroBuilder/HeroBuilder";
import { Button, Container } from "react-bootstrap";
import "./App.css";

export interface IHeroBuilderForm {
  restaurantName: string;
  cuisineType: string;
  emailAddress: string;
  phoneNumber: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
}

export const App = () => {
  const [step, setStep] = useState<number>(1);
  const [heroBuilderForm, setHeroBuilderForm] = useState<IHeroBuilderForm>({
    restaurantName: "Double R Diner",
    cuisineType: "sushi",
    emailAddress: "laura.palmer@gmail.com",
    phoneNumber: "555-555-5555",
    street1: "123 Elm St.",
    street2: "Suite B",
    city: "Twin Peaks",
    state: "Washington",
    zipCode: "60652",
  });

  return (
    <Container fluid className="bg-dark text-white px-0">
      <Header />
      <Container>
        {step === 1 && <HeroBuilder heroBuilderForm={heroBuilderForm} setHeroBuilderForm={setHeroBuilderForm} />}
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
      </Container>
    </Container>
  );
};
