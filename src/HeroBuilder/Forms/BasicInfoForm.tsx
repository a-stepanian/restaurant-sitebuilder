import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { data } from "../../data";
import { TextInput } from "../../Components/TextInput";
import { IBasicInfo } from "../HeroBuilder";

interface IBasicInfoFormProps {
  basicInfo: IBasicInfo;
  setBasicInfo: React.Dispatch<React.SetStateAction<IBasicInfo>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export const BasicInfoForm = (props: IBasicInfoFormProps) => {
  const { basicInfo, setBasicInfo, step, setStep, color, setColor } = props;
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: any) => {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="bg-frosted pt-1 px-5 shadow-lg rounded-5">
      <TextInput
        label="What is your restaurant name?"
        required={true}
        autofocus={true}
        placeholder="Smoky Bones"
        currentValue={basicInfo.restaurantName}
        changeHandler={(e: any) =>
          setBasicInfo({
            ...basicInfo,
            restaurantName: e.target.value,
          })
        }
      />
      <Form.Group className="mt-3" controlId="formCuisineType">
        <Form.Label className="d-flex justify-content-between">What type of restaurant is it?</Form.Label>
        <Form.Select
          aria-label="Select a cuisine type"
          required
          value={basicInfo.cuisineType}
          onChange={(e) => {
            setBasicInfo({
              ...basicInfo,
              cuisineType: e.target.value,
            });
          }}>
          <option value="">Pick one</option>
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
      <TextInput
        label="Add a catch phrase!"
        required={true}
        placeholder="PRIME. SIZZLING. PERFECTION."
        currentValue={basicInfo.catchPhrase ?? ""}
        changeHandler={(e: any) =>
          setBasicInfo({
            ...basicInfo,
            catchPhrase: e.target.value,
          })
        }
      />
      <label className="mt-3 me-3" htmlFor="colorPicker">
        Font color
      </label>
      <input id="colorPicker" className="mt-3" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
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
