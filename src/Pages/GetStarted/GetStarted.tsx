import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ComputerScreen } from "./ComputerScreen/ComputerScreen";
import { BasicInfoForm } from "./Forms/BasicInfoForm";
import { ContactInfoForm } from "./Forms/ContactInfoForm";
import { AddressForm } from "./Forms/AddressForm";
import { HoursForm } from "./Forms/HoursForm";
import { FaLaptop, FaMobileAlt } from "react-icons/fa";
import { useAppContext } from "../../AppContext";
import CustomProgressBar from "../../Components/CustomProgressBar";

const GetStarted = () => {
  const { device, updateDevice, step, updateStep } = useAppContext();
  const [color, setColor] = useState("#0a0a0a");

  return (
    <main className="bg-dark-subtle">
      <Container fluid>
        <Row>
          <Col md={4} xl={3} className="p-0 bg-light">
            <aside
              className="form-aside w-100 d-flex flex-column px-3"
              style={{
                background: "url('/images/wave.svg')",
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}>
              {step === 1 && <BasicInfoForm color={color} setColor={setColor} />}
              {step === 2 && <AddressForm />}
              {step === 3 && <HoursForm />}
              {step === 4 && <ContactInfoForm />}
              {step === 5 && <p>Sign up form here</p>}
            </aside>
          </Col>
          <Col md={8} xl={9} style={{ boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.3)" }}>
            <div className="d-flex justify-content-between mx-5 my-3">
              <CustomProgressBar />
              <div>
                <button
                  type="button"
                  className={`${device === "mobile" ? "active" : ""} btn btn-sm btn-outline-dark border-2 mx-1`}
                  onClick={() => updateDevice("mobile")}>
                  <FaMobileAlt />
                </button>
                <button
                  type="button"
                  className={`${device === "mobile" ? "" : "active"} btn btn-sm btn-outline-dark border-2`}
                  onClick={() => updateDevice("computer")}>
                  <FaLaptop />
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mx-5 mb-3">
              <div style={{ width: `${device === "mobile" ? "360px" : "100%"}`, transition: "0.3s" }}>
                <ComputerScreen color={color} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default GetStarted;
