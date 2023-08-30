import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { data } from "../../data";
import { TextInput } from "../../Components/TextInput";
import { IAddress } from "../../App";

interface IAddressFormProps {
  address: IAddress;
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const AddressForm = (props: IAddressFormProps) => {
  const { address, setAddress, step, setStep } = props;

  const [showSecondAddressLine, setShowSecondAddressLine] = useState<boolean>(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: any) => {
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
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="row bg-frosted pt-1 px-5 shadow-lg rounded-5">
      <Col xs={12}>
        <TextInput
          label="Street"
          required={true}
          inputClasses="text-capitalize"
          placeholder="123 Elm St."
          currentValue={address.street1}
          changeHandler={(e) =>
            setAddress({
              ...address,
              street1: e.target.value,
            })
          }
        />
        <button
          type="button"
          className="btn btn-sm small m-0 p-0"
          onClick={() => setShowSecondAddressLine((prev) => !prev)}>
          {showSecondAddressLine ? "Remove line 2?" : "Add another line?"}
        </button>
        {showSecondAddressLine && (
          <TextInput
            label="Address Line 2 (optional)"
            required={false}
            inputClasses="text-capitalize"
            placeholder="Suite B"
            currentValue={address.street2}
            changeHandler={(e) =>
              setAddress({
                ...address,
                street2: e.target.value,
              })
            }
          />
        )}
      </Col>
      <Col sm={6}>
        <TextInput
          label="City"
          required={true}
          inputClasses="text-capitalize"
          placeholder="Twin Peaks"
          currentValue={address.city}
          changeHandler={(e) =>
            setAddress({
              ...address,
              city: e.target.value,
            })
          }
        />
      </Col>
      <Col sm={3}>
        <Form.Group className="mt-2" controlId="formState">
          <Form.Label className="d-flex justify-content-between mb-0">State</Form.Label>
          <Form.Select
            aria-label="Select a state"
            required
            value={address.state}
            onChange={(e) => {
              setAddress({
                ...address,
                state: e.target.value,
              });
            }}>
            {data.states.map((state) => {
              return (
                <option key={state} value={state}>
                  {state}
                </option>
              );
            })}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            <small>This field is required</small>
          </Form.Control.Feedback>
        </Form.Group>
      </Col>
      <Col sm={3}>
        <TextInput
          label="Zip"
          required={true}
          placeholder="68652"
          currentValue={address.zipCode}
          changeHandler={(e: any) =>
            setAddress({
              ...address,
              zipCode: e.target.value,
            })
          }
        />
      </Col>
      <div className={`py-3 d-flex justify-content-${step === 1 ? "end" : "between"}`}>
        {step > 1 && (
          <button
            type="button"
            className="btn btn-outline-dark rounded-pill border-2 px-4"
            onClick={() => setStep((prev) => prev - 1)}>
            Back
          </button>
        )}
        <button type="submit" className="btn btn-dark rounded-pill border-2 px-4">
          Next
        </button>
      </div>
    </Form>
  );
};
