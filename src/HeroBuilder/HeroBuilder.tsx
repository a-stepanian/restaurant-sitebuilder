import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { ComputerScreen } from "./ComputerScreen/ComputerScreen";
import { BasicInfoForm } from "./Forms/BasicInfoForm";
import { ContactInfoForm } from "./Forms/ContactInfoForm";
import { AddressForm } from "./Forms/AddressForm";

export interface IBasicInfo {
  restaurantName: string;
  cuisineType: string;
  about: string;
  catchPhrase?: string;
  hours: string[];
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

export const HeroBuilder = () => {
  const [step, setStep] = useState<number>(1);
  const [basicInfo, setBasicInfo] = useState<IBasicInfo>({
    restaurantName: "",
    catchPhrase: "",
    about: "",
    cuisineType: "",
    hours: [],
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

  return (
    <main>
      <Container>
        <Row className="my-5 py-5">
          <Col md={6}>
            {step === 1 && <BasicInfoForm basicInfo={basicInfo} setBasicInfo={setBasicInfo} />}
            {step === 2 && <ContactInfoForm contactInfo={contactInfo} setContactInfo={setContactInfo} />}
            {step === 3 && <AddressForm address={address} setAddress={setAddress} />}
            <Row>
              <Col>
                <Button
                  type="button"
                  className="btn btn-lg btn-dark bg-black rounded-pill my-3"
                  onClick={() => setStep((prev) => prev - 1)}>
                  Back
                </Button>
                <Button
                  type="button"
                  className="btn btn-lg btn-dark bg-black rounded-pill my-3"
                  onClick={() => setStep((prev) => prev + 1)}>
                  Next
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <ComputerScreen basicInfo={basicInfo} contactInfo={contactInfo} address={address} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
