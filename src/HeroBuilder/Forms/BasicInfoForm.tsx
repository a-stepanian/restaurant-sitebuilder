import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { data } from "../../data";
import { TextInput } from "../../Components/TextInput";
import { IBasicInfo } from "../HeroBuilder";

interface IBasicInfoFormProps {
  basicInfo: IBasicInfo;
  setBasicInfo: React.Dispatch<React.SetStateAction<IBasicInfo>>;
}

export const BasicInfoForm = (props: IBasicInfoFormProps) => {
  const { basicInfo, setBasicInfo } = props;

  return (
    <>
      <Row>
        <Col>
          <h1>Let's get started!</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <TextInput
            label="What is your restaurant name?"
            required={true}
            placeholder="Double R Diner"
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
          <Form.Group className="mt-3" controlId="formAbout">
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
            <TextInput
              label="Add a catch phrase!"
              required={true}
              placeholder="Prime. Smoky. Perfection."
              currentValue={basicInfo.catchPhrase ?? ""}
              changeHandler={(e: any) =>
                setBasicInfo({
                  ...basicInfo,
                  catchPhrase: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};
