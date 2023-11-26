import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useAppContext } from "../../../AppContext";

export const HoursForm = () => {
  const { step, updateStep } = useAppContext();
  const { basicInfo, updateBasicInfo } = useAppContext();
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
      onSubmit={(e) => handleSubmit(e)}
      className="h-100 d-flex flex-column justify-content-between">
      <div>
        <Row className="gx-0">
          <Col xs={2}></Col>
          <Col xs={5}>
            <p className="m-0 small">Open</p>
          </Col>
          <Col xs={5}>
            <p className="m-0 small">Close</p>
          </Col>
        </Row>
        {basicInfo.hours.map((dayOfWeek) => {
          const { day, open, close } = dayOfWeek;
          return (
            <Row className="gx-0" key={dayOfWeek.day}>
              <Col xs={2}>
                <p className="d-sm-none">{day.slice(0, 3).toUpperCase()}</p>
                <p className="d-none d-sm-block small">{day}</p>
              </Col>
              <Col xs={5}>
                <input
                  className="text-end w-100 small"
                  type="time"
                  required
                  placeholder="06:00"
                  value={open}
                  onChange={(e) => {
                    const updatedHours = basicInfo.hours.map((x) => {
                      if (x.day === day) {
                        return {
                          day,
                          open: e.target.value,
                          close,
                        };
                      }
                      return x;
                    });
                    updateBasicInfo({
                      ...basicInfo,
                      hours: [...updatedHours],
                    });
                  }}
                />
              </Col>
              <Col xs={5}>
                <input
                  className="text-end w-100 small"
                  type="time"
                  required
                  placeholder="22:00"
                  value={close}
                  onChange={(e) => {
                    const updatedHours = basicInfo.hours.map((x) => {
                      if (x.day === day) {
                        return {
                          day,
                          open,
                          close: e.target.value,
                        };
                      }
                      return x;
                    });
                    updateBasicInfo({
                      ...basicInfo,
                      hours: [...updatedHours],
                    });
                  }}
                />
              </Col>
            </Row>
          );
        })}
      </div>
      <div className={`py-3 d-flex justify-content-${step === 1 ? "end" : "between"}`}>
        {step > 1 && (
          <button
            type="button"
            className="btn btn-lg btn-outline-dark rounded-pill border-2 px-4"
            onClick={() => updateStep(step - 1)}>
            Back
          </button>
        )}
        <button type="submit" className="btn btn-lg btn-dark rounded-pill border-2 px-4">
          Next
        </button>
      </div>
    </Form>
  );
};
