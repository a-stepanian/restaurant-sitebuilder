import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useAppContext } from "../../AppContext";

const GetStartedModal = () => {
  const { showWelcomeModal, updateShowWelcomeModal } = useAppContext();

  return (
    <Modal show={showWelcomeModal} onHide={() => updateShowWelcomeModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Let's Get Started...</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-custom-blue" style={{ minHeight: "150px" }}>
        <h2 className="text-center">Welcome to the website builder!</h2>
        <p className="text-center fw-bold">We'll walk through this together.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            updateShowWelcomeModal(false);
          }}>
          Got it!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GetStartedModal;
