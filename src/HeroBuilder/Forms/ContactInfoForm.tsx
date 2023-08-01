import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { TextInput } from "../../Components/TextInput";
import { IContactInfo } from "../HeroBuilder";
import { BsChevronUp, BsQuestion } from "react-icons/bs";

interface IContactInfoFormProps {
  contactInfo: IContactInfo;
  setContactInfo: React.Dispatch<React.SetStateAction<IContactInfo>>;
}

export const ContactInfoForm = (props: IContactInfoFormProps) => {
  const { contactInfo, setContactInfo } = props;
  const [showHelp, setShowHelp] = useState<boolean>(false);

  return (
    <Row>
      <Col md={6}>
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
              setContactInfo({
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
          changeHandler={(e: any) =>
            setContactInfo({
              ...contactInfo,
              phoneNumber: e.target.value,
            })
          }
        />
      </Col>
      <Col>
        <Button variant="primary" type="submit" className="my-3">
          Submit
        </Button>
      </Col>
    </Row>
  );
};
