import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ComputerScreen } from "./ComputerScreen/ComputerScreen";
import { BasicInfoForm } from "./Forms/BasicInfoForm";
import { ContactInfoForm } from "./Forms/ContactInfoForm";
import { AddressForm } from "./Forms/AddressForm";
import ProgressBar from "react-bootstrap/ProgressBar";
import { HoursForm } from "./Forms/HoursForm";
import { FaLaptop, FaMobileAlt } from "react-icons/fa";
import { useAppContext } from "../../AppContext";

const GetStarted = () => {
  const { device, updateDevice } = useAppContext();
  const [step, setStep] = useState<number>(1);
  const [color, setColor] = useState("#000000");

  return (
    <main
      className="p-5"
      style={{
        minHeight: "100vh",
        background: "url('/images/wave.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}>
      <Container>
        <Row>
          <Col md={4}>
            <Card
              className="h-100 d-flex flex-column justify-content-between border-0 card p-3 shadow"
              style={{ backgroundColor: "rgba(228, 255, 251, 0.8)" }}>
              <p className="mb-0">
                {step === 1
                  ? "Let's get started"
                  : step === 2
                  ? "Enter your address"
                  : step === 3
                  ? "Almost done..."
                  : "Final Step!"}
              </p>
              {step === 5 && <p>Sign up form here</p>}
              {step === 1 && <BasicInfoForm step={step} setStep={setStep} color={color} setColor={setColor} />}
              {step === 2 && <AddressForm step={step} setStep={setStep} />}
              {step === 3 && <HoursForm step={step} setStep={setStep} />}
              {step === 4 && <ContactInfoForm step={step} setStep={setStep} />}
              <div className="w-100">
                {step <= 4 && (
                  <ProgressBar
                    now={(step / 4) * 100 - 10}
                    variant="dark"
                    label={`${(step / 4) * 100 - 10}%`}
                    className="bg-light"
                  />
                )}
              </div>
            </Card>
          </Col>
          <Col md={8}>
            <div className="d-flex align-items-center justify-content-center">
              <div style={{ width: `${device === "mobile" ? "360px" : "100%"}`, transition: "0.5s" }}>
                <ComputerScreen color={color} step={step} />
              </div>
              <div className="d-flex flex-column ms-2">
                <button
                  type="button"
                  className="btn btn-lg btn-dark bg-black rounded-pill mb-2"
                  onClick={() => updateDevice("mobile")}>
                  <FaMobileAlt />
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-dark bg-black rounded-pill"
                  onClick={() => updateDevice("computer")}>
                  <FaLaptop />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default GetStarted;
