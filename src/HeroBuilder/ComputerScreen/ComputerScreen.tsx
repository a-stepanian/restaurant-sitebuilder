import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ScreenContent } from "./ScreenContent";
import { MdArrowBack, MdArrowForward, MdClose, MdRefresh } from "react-icons/md";
import { IAddress, IBasicInfo, IContactInfo } from "../../App";

interface IWidescreenViewProps {
  basicInfo: IBasicInfo;
  contactInfo: IContactInfo;
  address: IAddress;
  color: string;
  step?: number;
}

export const ComputerScreen = (props: IWidescreenViewProps) => {
  const { basicInfo, contactInfo, address, color, step } = props;

  const [showYouTube, setShowYouTube] = useState<boolean>(false);
  const [showRefresh, setShowRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (showRefresh) {
      setTimeout(() => {
        setShowRefresh(false);
      }, 1000);
    }
  }, [showRefresh]);

  return (
    <Container fluid className="bg-body p-2 border border-2 border-secondary-subtle rounded">
      <div className="d-flex mb-1">
        <button
          type="button"
          className={`btn btn-sm py-1 px-2 border-0`}
          onClick={() => setShowYouTube(true)}
          disabled={showYouTube}>
          <MdArrowBack className="text-secondary" />
        </button>
        <button
          type="button"
          className={`btn btn-sm py-1 px-2 border-0`}
          onClick={() => setShowYouTube(false)}
          disabled={!showYouTube}>
          <MdArrowForward className="text-secondary" />
        </button>
        <button type="button" className="btn btn-sm py-1 px-2" onClick={() => setShowRefresh(true)}>
          <MdRefresh className="text-secondary fs-5" />
        </button>
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
      <div
        style={{ height: "calc(100vh - 200px)", overflowY: "scroll", overflowX: "hidden", border: "1px solid gray" }}>
        {showRefresh && (
          <div className="d-flex justify-content-center">
            <h1>Refreshing...</h1>
          </div>
        )}
        {showYouTube && !showRefresh && (
          <div>
            <img src="/images/youtube.png" alt="Rick Astley - Never Gonna Give You Up" />
          </div>
        )}
        {!showYouTube && !showRefresh && (
          <ScreenContent basicInfo={basicInfo} contactInfo={contactInfo} address={address} color={color} step={step} />
        )}
      </div>
    </Container>
  );
};
