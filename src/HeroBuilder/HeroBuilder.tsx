import React from "react";
import { Row, Col } from "react-bootstrap";
import { IHeroBuilderForm } from "../App";
import { HeroBuilderForm } from "./HeroBuilderForm";
import { WidescreenView } from "./WidescreenView";

export interface IHeroBuilderProps {
  heroBuilderForm: IHeroBuilderForm;
  setHeroBuilderForm: React.Dispatch<React.SetStateAction<IHeroBuilderForm>>;
}

export const HeroBuilder = (props: IHeroBuilderProps) => {
  const { heroBuilderForm, setHeroBuilderForm } = props;

  return (
    <>
      <Row>
        <Col md={6}>
          <h1 className="text-primary my-5">Grow your business</h1>
          <h2>
            Build your online presence in <span className="text-primary">minutes</span>
          </h2>
        </Col>
        <Col md={6}>
          <WidescreenView heroBuilderForm={heroBuilderForm} />
        </Col>
      </Row>
      <Row className="py-5">
        <Col xs={12} md={8} className="order-md-2"></Col>
        <Col xs={12} md={4} className="order-md-1">
          <HeroBuilderForm heroBuilderForm={heroBuilderForm} setHeroBuilderForm={setHeroBuilderForm} />
        </Col>
      </Row>
    </>
  );
};
