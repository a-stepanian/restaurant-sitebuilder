import { Col, Row } from "react-bootstrap";
import { useAppContext } from "../../../../AppContext";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { PiCopyright } from "react-icons/pi";
import React from "react";

export const PreviewFooter = () => {
  const { basicInfo, contactInfo, device } = useAppContext();

  return (
    <footer className="py-5 bg-dark text-white">
      <Row>
        <Col sm={device === "mobile" ? 12 : 4}>
          {contactInfo.phoneNumber.length > 0 && (
            <p className="my-3 small text-center">
              <AiOutlinePhone className="me-1" />
              {contactInfo.phoneNumber}
            </p>
          )}
        </Col>
        <Col sm={device === "mobile" ? 12 : 4}>
          {contactInfo.emailAddress.length > 0 && (
            <p className="my-3 small text-center">
              <AiOutlineMail className="me-1" />
              {contactInfo.emailAddress}
            </p>
          )}
        </Col>
        <Col sm={device === "mobile" ? 12 : 4}>
          {basicInfo.restaurantName.length > 0 && (
            <p className="my-3 small text-center">
              <PiCopyright className="me-1" />
              {`2023 ${basicInfo.restaurantName}`}
            </p>
          )}
        </Col>
      </Row>
    </footer>
  );
};
