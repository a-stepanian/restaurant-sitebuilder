import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      style={{
        minHeight: "100vh",
        background: "url('/images/wave.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}>
      <Container fluid>
        <Row>
          <Col md={4} xl={3} className="bg-light p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">
                {step === 1
                  ? "Let's get started"
                  : step === 2
                  ? "Enter your address"
                  : step === 3
                  ? "Almost done..."
                  : "Final Step!"}
              </h4>
            </div>
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
          </Col>
          <Col md={8} xl={9} style={{ boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.3)" }}>
            <div className="d-flex justify-content-center mx-5 my-3">
              <button
                type="button"
                className={`${device === "mobile" ? "active" : ""} btn btn-sm btn-outline-dark border-2 m-1`}
                onClick={() => updateDevice("mobile")}>
                <FaMobileAlt />
              </button>
              <button
                type="button"
                className={`${device === "mobile" ? "" : "active"} btn btn-sm btn-outline-dark border-2 m-1`}
                onClick={() => updateDevice("computer")}>
                <FaLaptop />
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-center mx-5 mb-3">
              <div style={{ width: `${device === "mobile" ? "360px" : "100%"}`, transition: "0.5s" }}>
                <ComputerScreen color={color} step={step} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default GetStarted;
