import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ComputerScreen } from "./ComputerScreen/ComputerScreen";
import { FaLaptop, FaMobileAlt } from "react-icons/fa";
import { useAppContext } from "../../AppContext";
import CustomProgressBar from "./CustomProgressBar";
import GetStartedModal from "./GetStartedModal";

const GetStarted = () => {
  const { device, updateDevice } = useAppContext();

  return (
    <main className="home-try-it-now">
      <GetStartedModal />
      <Container>
        <Row>
          <Col style={{ boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.3)" }} className="bg-dark-subtle">
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
              <div style={{ width: `${device === "mobile" ? "360px" : "100%"}`, transition: "0.4s" }}>
                <ComputerScreen />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default GetStarted;
