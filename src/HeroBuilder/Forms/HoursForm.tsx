import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useAppContext } from "../../AppContext";

interface IHoursFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const HoursForm = (props: IHoursFormProps) => {
  const { step, setStep } = props;
  const { basicInfo, updateBasicInfo } = useAppContext();

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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col xs={2} sm={4}></Col>
        <Col xs={5} sm={4}>
          <p className="m-0">Open</p>
        </Col>
        <Col xs={5} sm={4}>
          <p className="m-0">Close</p>
        </Col>
        <Col xs={12}>
          {basicInfo.hours.map((dayOfWeek) => {
            const { day, open, close } = dayOfWeek;
            let hoursWithoutDay = basicInfo.hours.filter((x) => x.day !== day);
            return (
              <Row key={dayOfWeek.day}>
                <Col xs={2} sm={4}>
                  <p className="d-sm-none">{day.slice(0, 3).toUpperCase()}</p>
                  <p className="d-none d-sm-block">{day}</p>
                </Col>
                <Col xs={5} sm={4}>
                  <input
                    className="text-end w-100"
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
                <Col xs={5} sm={4}>
                  <input
                    className="text-end w-100"
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
        </Col>
      </Row>
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
