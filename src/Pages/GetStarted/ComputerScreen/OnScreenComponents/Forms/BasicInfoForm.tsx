import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { data } from "../../../../../data";
import { useAppContext } from "../../../../../AppContext";
import TextInput from "../../../../../Components/TextInput";

export const BasicInfoForm = () => {
  const { step, updateStep } = useAppContext();
  const { basicInfo, updateBasicInfo } = useAppContext();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false || basicInfo.cuisineType === "Pick one") {
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
          label="What is your restaurant name?"
          required={true}
          currentValue={basicInfo.restaurantName}
          changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateBasicInfo({
              ...basicInfo,
              restaurantName: e.target.value,
            })
          }
        />
        <Form.Group className="mt-2" controlId="formCuisineType">
          <Form.Label className="d-flex justify-content-between">What type of restaurant is it?</Form.Label>
          <Form.Select
            aria-label="Select a cuisine type"
            required
            className="shadow"
            value={basicInfo.cuisineType}
            onChange={(e) => {
              updateBasicInfo({
                ...basicInfo,
                cuisineType: e.target.value,
              });
            }}>
            <option disabled value=""></option>
            {data.cuisines.map((cuisine) => {
              return (
                <option key={cuisine.name} value={cuisine.name}>
                  {cuisine.name}
                </option>
              );
            })}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            <small>This field is required</small>
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex mt-2">
          <div className="flex-grow-1">
            <TextInput
              label="Add a catch phrase!"
              required={true}
              currentValue={basicInfo.catchPhrase ?? ""}
              changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateBasicInfo({
                  ...basicInfo,
                  catchPhrase: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="py-3 d-flex justify-content-end">
        <button type="submit" className="btn btn-lg btn-dark rounded-pill border-2 px-4">
          Next
        </button>
      </div>
    </Form>
  );
};
