import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useAppContext } from "../../AppContext";

const GetStartedModal = () => {
  const { showWelcomeModal, updateShowWelcomeModal, updateDevice, updateBasicInfo } = useAppContext();

  const resetBasicInfo = () => {
    updateBasicInfo({
      about: "",
      address: {
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
      },
      catchPhrase: "",
      cuisineType: "",
      emailAddress: "",
      restaurantName: "",
      phoneNumber: "",
      hours: [
        { day: "Sun", open: "06:00", close: "22:00" },
        { day: "Mon", open: "06:00", close: "22:00" },
        { day: "Tue", open: "06:00", close: "22:00" },
        { day: "Wed", open: "06:00", close: "22:00" },
        { day: "Thu", open: "06:00", close: "22:00" },
        { day: "Fri", open: "06:00", close: "22:00" },
        { day: "Sat", open: "06:00", close: "22:00" },
      ],
    });
  };
  return (
    <Modal show={showWelcomeModal} onHide={() => updateShowWelcomeModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Let's Get Started...</Modal.Title>
      </Modal.Header>
      <Modal.Body className="home-try-it-now" style={{ minHeight: "150px" }}>
        <h2>Welcome to the website builder!</h2>
        <p>We'll walk through this together.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            updateShowWelcomeModal(false);
            setTimeout(() => {
              updateDevice("computer");
            }, 500);
            // setTimeout(() => {
            //   resetBasicInfo();
            // }, 1000);
          }}>
          Got it!
        </Button>
      </Modal.Footer>

      {/* <Modal.Body className="home-try-it-now" style={{ minHeight: "150px" }}>
        <h2>Welcome to your website builder!</h2>
        {step === 1 && <BasicInfoForm />}
        {step === 2 && <AddressForm />}
        {step === 3 && <HoursForm />}
        {step === 4 && <ContactInfoForm />}
        {step === 5 && (
          <p>
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
          </p>
        )}
      </Modal.Body> */}
    </Modal>
  );
};

export default GetStartedModal;
