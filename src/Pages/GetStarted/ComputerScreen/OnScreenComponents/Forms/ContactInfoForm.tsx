import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { TextInput } from "../../../../../Components";
import { useAppContext } from "../../../../../AppContext";

export const ContactInfoForm = () => {
  const { step, updateStep } = useAppContext();
  const { basicInfo, updateBasicInfo } = useAppContext();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      updateStep(step + 1);
    }
    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="h-100 d-flex flex-column justify-content-between">
      <div>
        <Form.Group className="mt-3" controlId="formEmailAddress">
          <Form.Label className="d-flex justify-content-between">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="business@gmail.com"
            required
            className="rounded-2"
            autoComplete="off"
            value={basicInfo.emailAddress}
            onChange={(e) =>
              updateBasicInfo({
                ...basicInfo,
                emailAddress: e.target.value,
              })
            }
          />
          <Form.Control.Feedback type="invalid">
            <small>Please enter a valid email address</small>
          </Form.Control.Feedback>
        </Form.Group>
        <TextInput
          label="Business Phone Number"
          required={true}
          placeholder="555-555-5555"
          currentValue={basicInfo.phoneNumber}
          changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateBasicInfo({
              ...basicInfo,
              phoneNumber: e.target.value,
            })
          }
        />
      </div>
      <div className={`py-3 d-flex justify-content-${step === 1 ? "end" : "between"}`}>
        {step > 1 && (
          <button
            type="button"
            className="btn btn-lg btn-outline-dark rounded-pill border-2 px-4"
            onClick={() => updateStep(step - 1)}>
            Back
          </button>
        )}
        <button type="submit" className="btn btn-lg btn-dark rounded-pill border-2 px-4">
          Continue
        </button>
      </div>
    </Form>
  );
};
