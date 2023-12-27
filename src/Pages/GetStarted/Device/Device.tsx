import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { ScreenContent } from "./ScreenContent";
import { MdArrowBack, MdArrowForward, MdRefresh } from "react-icons/md";
import { useAppContext } from "../../../AppContext";

export const Device = () => {
  const [showYouTube, setShowYouTube] = useState<boolean>(false);
  const [showRefresh, setShowRefresh] = useState<boolean>(false);

  const { basicInfo } = useAppContext();

  useEffect(() => {
    if (showRefresh) {
      setTimeout(() => {
        setShowRefresh(false);
      }, 600);
    }
  }, [showRefresh]);

  return (
    <Container className="bg-body p-2 border rounded-3 shadow">
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
          className="mb-0 d-flex align-items-center rounded rounded-pill ps-3 flex-grow-1 bg-secondary-subtle"
          style={{ fontSize: "12px" }}>
          www.
          {showYouTube
            ? "youtube.com/watch?v=dQw4w9WgXcQ"
            : basicInfo.restaurantName.length > 0
            ? basicInfo.restaurantName
                .trim()
                .toLowerCase()
                .replace(/\s/g, "-")
                .replace(/[^a-zA-Z0-9]/g, "") + ".com"
            : "your-future-website.com"}
        </p>
      </div>
      <div
        className="rounded border scrollable-screen"
        style={{ height: "calc(100vh - 200px)", overflowY: "scroll", overflowX: "hidden" }}>
        {showRefresh && (
          <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 bg-dark-subtle">
            <Spinner animation="border" variant="black" />
          </div>
        )}
        {showYouTube && !showRefresh && (
          <div className="d-flex justify-content-center">
            <img src="/images/youtube.png" alt="Rick Astley - Never Gonna Give You Up" className="img-fluid" />
          </div>
        )}
        {!showYouTube && !showRefresh && <ScreenContent />}
      </div>
    </Container>
  );
};
