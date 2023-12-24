import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { data } from "../../../../../data";
import { TextInput } from "../../../../../Components";
import { useAppContext } from "../../../../../AppContext";

export const AddressForm = () => {
  const { step, updateStep } = useAppContext();
  const { basicInfo, updateBasicInfo } = useAppContext();

  const [showSecondAddressLine, setShowSecondAddressLine] = useState<boolean>(false);
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
        <TextInput
          label="Street"
          required={true}
          inputClasses="text-capitalize"
          placeholder="123 Elm St."
          currentValue={basicInfo.address.street1}
          changeHandler={(e) =>
            updateBasicInfo({
              ...basicInfo,
              address: {
                ...basicInfo.address,
                street1: e.target.value,
              },
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
            currentValue={basicInfo.address.street2}
            changeHandler={(e) =>
              updateBasicInfo({
                ...basicInfo,
                address: {
                  ...basicInfo.address,
                  street2: e.target.value,
                },
              })
            }
          />
        )}
        <TextInput
          label="City"
          required={true}
          inputClasses="text-capitalize"
          placeholder="Twin Peaks"
          currentValue={basicInfo.address.city}
          changeHandler={(e) =>
            updateBasicInfo({
              ...basicInfo,
              address: {
                ...basicInfo.address,
                city: e.target.value,
              },
            })
          }
        />
        <Form.Group className="mt-2" controlId="formState">
          <Form.Label className="d-flex justify-content-between mb-0">State</Form.Label>
          <Form.Select
            aria-label="Select a state"
            required
            className="shadow"
            value={basicInfo.address.state}
            onChange={(e) => {
              updateBasicInfo({
                ...basicInfo,
                address: {
                  ...basicInfo.address,
                  state: e.target.value,
                },
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
        <TextInput
          label="Zip"
          required={true}
          placeholder="68652"
          currentValue={basicInfo.address.zipCode}
          changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateBasicInfo({
              ...basicInfo,
              address: {
                ...basicInfo.address,
                zipCode: e.target.value,
              },
            })
          }
        />
      </div>
      <div className={`py-3 d-flex justify-content-${step === 1 ? "end" : "between"}`}>
        <button
          type="button"
          className="btn btn-lg btn-outline-dark rounded-pill border-2 px-4"
          onClick={() => updateStep(step - 1)}>
          Back
        </button>
        <button type="submit" className="btn btn-lg btn-dark rounded-pill border-2 px-4">
          Next
        </button>
      </div>
    </Form>
  );
};
