import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BsChevronUp, BsQuestion } from "react-icons/bs";

interface ITextInputProps {
  label: string;
  required: boolean;
  currentValue: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  tipText?: string;
  capitalize?: boolean;
}

export const TextInput = (props: ITextInputProps) => {
  const { label, required, tipText, placeholder, currentValue, changeHandler, capitalize } = props;
  const [showHelp, setShowHelp] = useState(false);

  return (
    <Form.Group className="mt-3" controlId={`form${label.replace(/\s/g, "")}`}>
      <Form.Label className="d-flex justify-content-between">
        {label}
        {tipText && (
          <Button
            className="btn btn-outline-dark d-flex py-0 px-2 fs-5 bg-transparent"
            onClick={() => setShowHelp((prev) => !prev)}>
            {showHelp ? <BsChevronUp /> : <BsQuestion />}
          </Button>
        )}
      </Form.Label>
      {tipText && showHelp && (
        <p className="text-secondary mb-3">
          <small>{tipText}</small>
        </p>
      )}
      <Form.Control
        type="text"
        className={capitalize ? "text-capitalize" : ""}
        autoComplete="off"
        placeholder={placeholder}
        required={required}
        value={currentValue}
        onChange={changeHandler}
      />
      {required && (
        <Form.Control.Feedback type="invalid">
          <small>This field is required</small>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};
