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
            currentValue={heroBuilderForm.basicInformation.restaurantName}
            changeHandler={(e: any) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                basicInformation: {
                  ...heroBuilderForm.basicInformation,
                  restaurantName: e.target.value,
                },
              })
            }
          />
          <Form.Group className="mt-3" controlId="formCuisineType">
            <Form.Label className="d-flex justify-content-between">Cuisine</Form.Label>
            <Form.Select
              aria-label="Select a cuisine type"
              required
              value={heroBuilderForm.basicInformation.cuisineType}
              onChange={(e) => {
                setHeroBuilderForm({
                  ...heroBuilderForm,
                  basicInformation: {
                    ...heroBuilderForm.basicInformation,
                    cuisineType: e.target.value,
                  },
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
                className="btn btn-outline-dark d-flex py-0 px-2 fs-5 bg-transparent"
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
              type="email"
              placeholder="laura.palmer@gmail.com"
              required
              autoComplete="off"
              value={heroBuilderForm.location.emailAddress}
              onChange={(e) =>
                setHeroBuilderForm({
                  ...heroBuilderForm,
                  location: {
                    ...heroBuilderForm.location,
                    emailAddress: e.target.value,
                  },
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
            currentValue={heroBuilderForm.location.phoneNumber}
            changeHandler={(e: any) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                location: {
                  ...heroBuilderForm.location,
                  phoneNumber: e.target.value,
                },
              })
            }
          />
        </Col>
        <Col md={6}>
          <TextInput
            label="Address Line 1"
            required={true}
            capitalize={true}
            placeholder="123 Elm St."
            currentValue={heroBuilderForm.location.street1}
            changeHandler={(e) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                location: {
                  ...heroBuilderForm.location,
                  street1: e.target.value,
                },
              })
            }
          />
          <TextInput
            label="Address Line 2 (optional)"
            required={false}
            capitalize={true}
            placeholder="Suite B (optional)"
            currentValue={heroBuilderForm.location.street2}
            changeHandler={(e) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                location: {
                  ...heroBuilderForm.location,
                  street2: e.target.value,
                },
              })
            }
          />
          <TextInput
            label="City"
            required={true}
            capitalize={true}
            placeholder="Twin Peaks"
            currentValue={heroBuilderForm.location.city}
            changeHandler={(e) =>
              setHeroBuilderForm({
                ...heroBuilderForm,
                location: {
                  ...heroBuilderForm.location,
                  city: e.target.value,
                },
              })
            }
          />
          <Row>
            <Col xs={7}>
              <Form.Group className="mt-3" controlId="formState">
                <Form.Label className="d-flex justify-content-between">State</Form.Label>
                <Form.Select
                  aria-label="Select a state"
                  required
                  value={heroBuilderForm.location.state}
                  onChange={(e) => {
                    setHeroBuilderForm({
                      ...heroBuilderForm,
                      location: {
                        ...heroBuilderForm.location,
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
            </Col>
            <Col xs={5}>
              <TextInput
                label="Zip Code"
                required={true}
                placeholder="68652"
                currentValue={heroBuilderForm.location.zipCode}
                changeHandler={(e: any) =>
                  setHeroBuilderForm({
                    ...heroBuilderForm,
                    location: {
                      ...heroBuilderForm.location,
                      zipCode: e.target.value,
                    },
                  })
                }
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Button variant="primary" type="submit" className="my-3">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
