import React from "react";
import { Button, Modal } from "react-bootstrap";
import { BasicInfoForm } from "./ComputerScreen/OnScreenComponents/Forms/BasicInfoForm";
import { AddressForm } from "./ComputerScreen/OnScreenComponents/Forms/AddressForm";
import { HoursForm } from "./ComputerScreen/OnScreenComponents/Forms/HoursForm";
import { ContactInfoForm } from "./ComputerScreen/OnScreenComponents/Forms/ContactInfoForm";
import { useAppContext } from "../../AppContext";

const GetStartedModal = () => {
  const { step, showWelcomeModal, updateShowWelcomeModal, updateDevice } = useAppContext();
  return (
    <Modal show={showWelcomeModal}>
      <Modal.Header>
        <Modal.Title>Let's Get Started...</Modal.Title>
      </Modal.Header>
      <Modal.Body className="home-try-it-now" style={{ minHeight: "150px" }}>
        <h2>Welcome to your website builder!</h2>
        {step === 1 && <BasicInfoForm />}
        {step === 2 && <AddressForm />}
        {step === 3 && <HoursForm />}
        {step === 4 && <ContactInfoForm />}
        {step === 5 && <p>Sign up form here</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            updateShowWelcomeModal(false);
            setTimeout(() => {
              updateDevice("computer");
            }, 500);
          }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GetStartedModal;
