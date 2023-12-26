import { Col, Row } from "react-bootstrap";
import { useAppContext } from "../../../../AppContext";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { PiCopyright } from "react-icons/pi";
import React from "react";

export const PreviewFooter = () => {
  const { basicInfo, device } = useAppContext();

  return (
    <footer className="py-5 bg-dark text-white">
      <Row>
        <Col sm={device === "mobile" ? 12 : 4}>
          {basicInfo.phoneNumber.length > 0 && (
            <p className="my-3 small text-center">
              <AiOutlinePhone className="me-1" />
              {basicInfo.phoneNumber}
            </p>
          )}
        </Col>
        <Col sm={device === "mobile" ? 12 : 4}>
          {basicInfo.emailAddress.length > 0 && (
            <p className="my-3 small text-center">
              <AiOutlineMail className="me-1" />
              {basicInfo.emailAddress}
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
