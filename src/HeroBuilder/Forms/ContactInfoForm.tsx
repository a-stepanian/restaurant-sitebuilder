import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { TextInput } from "../../Components/TextInput";
import { BsChevronUp, BsQuestion } from "react-icons/bs";
import { useAppContext } from "../../AppContext";

interface IContactInfoFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const ContactInfoForm = (props: IContactInfoFormProps) => {
  const { step, setStep } = props;
  const { contactInfo, updateContactInfo } = useAppContext();

  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setStep((prev) => prev + 1);
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mt-3" controlId="formEmailAddress">
        <Form.Label className="d-flex justify-content-between">
          Email Address
          <Button
            className="btn btn-outline-dark d-flex py-0 px-2 fs-5 bg-transparent"
            onClick={() => setShowHelp((prev) => !prev)}>
            {showHelp ? <BsChevronUp /> : <BsQuestion />}
          </Button>
        </Form.Label>
        {showHelp && (
          <p className="text-secondary mb-3">
            <small>
              Add an email address that can be used to contact your business. This will also serve as your username to
              login.
            </small>
          </p>
        )}
        <Form.Control
          type="email"
          placeholder="laura.palmer@gmail.com"
          required
          autoComplete="off"
          value={contactInfo.emailAddress}
          onChange={(e) =>
            updateContactInfo({
              ...contactInfo,
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
        tipText="Add a phone number where your customers can reach you."
        placeholder="555-555-5555"
        currentValue={contactInfo.phoneNumber}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateContactInfo({
            ...contactInfo,
            phoneNumber: e.target.value,
          })
        }
      />
      <div className={`py-3 d-flex justify-content-${step === 1 ? "end" : "between"}`}>
        {step > 1 && (
          <button
            type="button"
            className="btn btn-outline-dark rounded-pill border-2 px-4"
            onClick={() => setStep((prev) => prev - 1)}>
            Back
          </button>
        )}
        <button type="submit" className="btn btn-lg btn-dark bg-black rounded-pill border-2 px-4">
          Preview
        </button>
      </div>
    </Form>
  );
};
