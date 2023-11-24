import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { data } from "../../../data";
import { TextInput } from "../../../Components/TextInput";
import { useAppContext } from "../../../AppContext";

interface IBasicInfoFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export const BasicInfoForm = (props: IBasicInfoFormProps) => {
  const { step, setStep, color, setColor } = props;
  const { basicInfo, updateBasicInfo } = useAppContext();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false || basicInfo.cuisineType === "Pick one") {
      e.stopPropagation();
    } else {
      setStep((prev) => prev + 1);
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <TextInput
        label="What is your restaurant name?"
        required={true}
        autofocus={true}
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
          size="lg"
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
        <div className="d-flex flex-column justify-content-end align-items-center">
          <label htmlFor="colorPicker" className="small">
            color
          </label>
          <input id="colorPicker" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
      </div>
      {/* <Form.Group className="mt-3" controlId="formAbout">
          <Form.Label>Tell us about your business</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            value={basicInfo.about}
            onChange={(e) => {
              setBasicInfo({
                ...basicInfo,
                about: e.target.value,
              });
            }}
          />
        </Form.Group> */}
      <div className="py-3 d-flex justify-content-end">
        <button type="submit" className="btn btn-dark rounded-pill border-2 px-4">
          Next
        </button>
      </div>
    </Form>
  );
};
