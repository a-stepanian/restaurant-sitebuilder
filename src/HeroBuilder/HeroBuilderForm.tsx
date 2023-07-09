import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { IHeroBuilderForm } from "../App";
import { data } from "../data";
import { BsChevronUp, BsQuestion } from "react-icons/bs";
import { TextInput } from "../TextInput";

export interface IHeroBuilderFormProps {
  heroBuilderForm: IHeroBuilderForm;
  setHeroBuilderForm: React.Dispatch<React.SetStateAction<IHeroBuilderForm>>;
}

export const HeroBuilderForm = (props: IHeroBuilderFormProps) => {
  const { heroBuilderForm, setHeroBuilderForm } = props;
  const [validated, setValidated] = useState(false);
  const [showHelp2, setShowHelp2] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
      <Row>
        <Col md={6}>
          <TextInput
            label="Restaurant Name"
            required={true}
            tipText="Enter the restaurant name as you want it to be displayed accross the website."
            placeholder="Double R Diner"
            currentValue={heroBuilderForm.restaurantName}
            changeHandler={(e: any) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                restaurantName: e.target.value,
              })
            }
          />
          <Form.Group className="mt-3" controlId="formCuisineType">
            <Form.Label className="d-flex justify-content-between">Cuisine</Form.Label>
            <Form.Select
              aria-label="Select a cuisine type"
              className="bg-secondary text-white"
              required
              value={heroBuilderForm.cuisineType}
              onChange={(e) => {
                setHeroBuilderForm({
                  ...heroBuilderForm,
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
          <Form.Group className="mt-3" controlId="formEmailAddress">
            <Form.Label className="d-flex justify-content-between">
              Email Address
              <Button
                className="btn btn-dark btn-outline-secondary d-flex py-0 px-2 fs-5"
                onClick={() => setShowHelp2((prev) => !prev)}>
                {showHelp2 ? <BsChevronUp /> : <BsQuestion />}
              </Button>
            </Form.Label>
            {showHelp2 && (
              <p className="text-secondary mb-3">
                <small>
                  Add an email address that can be used to contact your business. This will also serve as your username
                  to login.
                </small>
              </p>
            )}
            <Form.Control
              className="bg-secondary text-white"
              type="email"
              placeholder="laura.palmer@gmail.com"
              required
              value={heroBuilderForm.emailAddress}
              onChange={(e) =>
                setHeroBuilderForm({
                  ...heroBuilderForm,
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
            currentValue={heroBuilderForm.phoneNumber}
            changeHandler={(e: any) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                phoneNumber: e.target.value,
              })
            }
          />
        </Col>
        <Col md={6}>
          <TextInput
            label="Address Line 1"
            required={true}
            placeholder="123 Elm St."
            currentValue={heroBuilderForm.street1}
            changeHandler={(e) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                street1: e.target.value,
              })
            }
          />
          <TextInput
            label="Address Line 2 (optional)"
            required={false}
            placeholder="Suite B (optional)"
            currentValue={heroBuilderForm.street2}
            changeHandler={(e) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                street2: e.target.value,
              })
            }
          />
          <TextInput
            label="City"
            required={true}
            placeholder="Twin Peaks"
            currentValue={heroBuilderForm.city}
            changeHandler={(e) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                city: e.target.value,
              })
            }
          />

          <Form.Group className="mt-3" controlId="formState">
            <Form.Label className="d-flex justify-content-between">State</Form.Label>
            <Form.Select
              aria-label="Select a state"
              className="bg-secondary text-white"
              required
              value={heroBuilderForm.state}
              onChange={(e) => {
                setHeroBuilderForm({
                  ...heroBuilderForm,
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

          <TextInput
            label="Zip Code"
            required={true}
            placeholder="68652"
            currentValue={heroBuilderForm.zipCode}
            changeHandler={(e: any) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                zipCode: e.target.value,
              })
            }
          />
        </Col>
        <Button variant="primary" type="submit" className="my-3">
          Submit
        </Button>
      </Row>
    </Form>
  );
};
