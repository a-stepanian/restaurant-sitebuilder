import React from "react";
import { Container } from "react-bootstrap";
import { ScreenContent } from "./ScreenContent";
import { MdArrowBack, MdArrowForward, MdClose, MdRefresh } from "react-icons/md";
import { IAddress, IBasicInfo, IContactInfo } from "../HeroBuilder";

interface IWidescreenViewProps {
  basicInfo: IBasicInfo;
  contactInfo: IContactInfo;
  address: IAddress;
  color: string;
  step?: number;
}

export const ComputerScreen = (props: IWidescreenViewProps) => {
  const { basicInfo, contactInfo, address, color, step } = props;

  return (
    <Container fluid className="mt-5 bg-body my-3 p-2 border border-2 border-secondary-subtle rounded">
      <div className="d-flex mb-1">
        <MdArrowBack className="text-secondary" />
        <MdArrowForward className="text-secondary" />
        <MdRefresh className="text-secondary" />
        <p
          className="text-nowrap rounded-pill mx-1 mb-1 ps-3 flex-grow-1 bg-secondary-subtle text-dark"
          style={{ fontSize: "12px" }}>
          www.
          {basicInfo.restaurantName.length > 0
            ? basicInfo.restaurantName.toLowerCase().replace(/\s/g, "-")
            : "double-r-diner"}
          .com
        </p>
        <MdClose className="text-secondary" />
      </div>
      <div style={{ height: "300px", overflowY: "scroll", overflowX: "hidden", border: "1px solid gray" }}>
        <ScreenContent basicInfo={basicInfo} contactInfo={contactInfo} address={address} color={color} step={step} />
      </div>
    </Container>
  );
};
