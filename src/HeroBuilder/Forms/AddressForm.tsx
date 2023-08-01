import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { data } from "../../data";
import { TextInput } from "../../Components/TextInput";
import { IAddress } from "../HeroBuilder";

interface IAddressFormProps {
  address: IAddress;
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>;
}

export const AddressForm = (props: IAddressFormProps) => {
  const { address, setAddress } = props;
  const [isValidated, setIsValidated] = useState<boolean>(false);

  return (
    <Row>
      <Col md={6}>
        <TextInput
          label="Address Line 1"
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
        <TextInput
          label="Address Line 2 (optional)"
          required={false}
          inputClasses="text-capitalize"
          placeholder="Suite B (optional)"
          currentValue={address.street2}
          changeHandler={(e) =>
            setAddress({
              ...address,
              street2: e.target.value,
            })
          }
        />
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
        <Row>
          <Col xs={7}>
            <Form.Group className="mt-3" controlId="formState">
              <Form.Label className="d-flex justify-content-between">State</Form.Label>
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
          <Col xs={5}>
            <TextInput
              label="Zip Code"
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
        </Row>
      </Col>
      <Col>
        <Button variant="primary" type="submit" className="my-3">
          Submit
        </Button>
      </Col>
    </Row>
  );
};
