import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useAppContext } from "../../AppContext";

const CustomProgressBar = () => {
  const { step, updateStep } = useAppContext();
  return (
    <div className="ms-3 me-5 position-relative flex-grow-1" style={{ transform: "translateY(5px)" }}>
      <div className="progress-line thin-line" />
      <div
        className="progress-line thick-line"
        style={{
          width: `${((step - 1) / 4) * 100}%`,
        }}
      />
      <button
        type="button"
        disabled={step <= 1}
        className={`progress-step opaque btn small fw-bold border-2 btn-outline-dark bg-${
          step >= 1 ? "black text-white" : "dark-subtle"
        }`}
        onClick={() => updateStep(1)}>
        1<p>basic info</p>
      </button>
      <button
        type="button"
        disabled={step <= 2}
        className={`progress-step opaque btn small fw-bold border-2 btn-outline-dark bg-${
          step >= 2 ? "black text-white" : "dark-subtle"
        }`}
        onClick={() => updateStep(2)}>
        2<p>location</p>
      </button>
      <button
        type="button"
        disabled={step <= 3}
        className={`progress-step opaque btn small fw-bold border-2 btn-outline-dark bg-${
          step >= 3 ? "black text-white" : "dark-subtle"
        }`}
        onClick={() => updateStep(3)}>
        3<p>hours</p>
      </button>
      <button
        type="button"
        disabled={step <= 4}
        className={`progress-step opaque btn small fw-bold border-2 btn-outline-dark bg-${
          step >= 4 ? "black text-white" : "dark-subtle"
        }`}
        onClick={() => updateStep(4)}>
        4<p>contact</p>
      </button>
      <button
        type="button"
        disabled={step <= 5}
        className={`progress-step opaque btn small fw-bold border-2 btn-outline-dark bg-${
          step >= 5 ? "black text-white" : "dark-subtle"
        }`}>
        {step >= 5 ? <FaStar /> : <FaRegStar />}
        <p>complete</p>
      </button>
    </div>
  );
};

export default CustomProgressBar;
