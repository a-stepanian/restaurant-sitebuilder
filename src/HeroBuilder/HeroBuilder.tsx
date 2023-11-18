import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ComputerScreen } from "./ComputerScreen/ComputerScreen";
import { BasicInfoForm } from "./Forms/BasicInfoForm";
import { ContactInfoForm } from "./Forms/ContactInfoForm";
import { AddressForm } from "./Forms/AddressForm";
import ProgressBar from "react-bootstrap/ProgressBar";
import { HoursForm } from "./Forms/HoursForm";
import { IAddress, IBasicInfo, IContactInfo } from "../App";

interface IHeroBuilderProps {
  basicInfo: IBasicInfo;
  setBasicInfo: any;
  contactInfo: IContactInfo;
  setContactInfo: any;
  address: IAddress;
  setAddress: any;
}

export const HeroBuilder = (props: IHeroBuilderProps) => {
  const { basicInfo, setBasicInfo, contactInfo, setContactInfo, address, setAddress } = props;
  const [step, setStep] = useState<number>(1);
  const [color, setColor] = useState("#000000");

  return (
    <main style={{ minHeight: "100vh" }}>
      <Container className="my-5">
        <Row>
          <Col lg={6} className="p-3 shadow-lg rounded-3">
            <h2 className="text-center display-6 mb-3">
              {step === 1
                ? "Let's get started"
                : step === 2
                ? "Enter your address"
                : step === 3
                ? "Almost done..."
                : "Final Step!"}
            </h2>
            {step <= 4 && (
              <ProgressBar
                now={(step / 4) * 100 - 10}
                variant="dark"
                label={`${(step / 4) * 100 - 10}%`}
                className="mb-4 bg-light"
              />
            )}
            {step === 5 && <p>Sign up form here</p>}
            {step === 1 && (
              <BasicInfoForm
                basicInfo={basicInfo}
                setBasicInfo={setBasicInfo}
                step={step}
                setStep={setStep}
                color={color}
                setColor={setColor}
              />
            )}
            {step === 2 && <AddressForm address={address} setAddress={setAddress} step={step} setStep={setStep} />}
            {step === 3 && (
              <HoursForm basicInfo={basicInfo} setBasicInfo={setBasicInfo} step={step} setStep={setStep} />
            )}
            {step === 4 && (
              <ContactInfoForm
                contactInfo={contactInfo}
                setContactInfo={setContactInfo}
                step={step}
                setStep={setStep}
              />
            )}
          </Col>
          <Col lg={6}>
            <ComputerScreen
              basicInfo={basicInfo}
              contactInfo={contactInfo}
              address={address}
              color={color}
              step={step}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
