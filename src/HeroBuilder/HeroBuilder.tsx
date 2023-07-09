import React from "react";
import { Row, Col } from "react-bootstrap";
import { IHeroBuilderForm } from "../App";
import { HeroBuilderForm } from "./HeroBuilderForm";
import { WidescreenView } from "./WidescreenView";
import { MdOutlineFastfood } from "react-icons/md";

export interface IHeroBuilderProps {
  heroBuilderForm: IHeroBuilderForm;
  setHeroBuilderForm: React.Dispatch<React.SetStateAction<IHeroBuilderForm>>;
}

export const HeroBuilder = (props: IHeroBuilderProps) => {
  const { heroBuilderForm, setHeroBuilderForm } = props;

  return (
    <>
      <Row className="mt-5 mb-3">
        <Col md={5}>
          <h1 className="text-primary my-5">Grow your business</h1>
          <h2>
            Build an online presence in <span className="text-primary">minutes</span>
          </h2>
        </Col>
        <Col md={7}>
          <WidescreenView heroBuilderForm={heroBuilderForm} />
        </Col>
      </Row>
      <Row className="py-5">
        <Col xs={12} md={5}>
          <div className="d-flex" style={{ transform: "scale(5)" }}>
            <MdOutlineFastfood />
          </div>
        </Col>
        <Col xs={12} md={7}>
          <HeroBuilderForm heroBuilderForm={heroBuilderForm} setHeroBuilderForm={setHeroBuilderForm} />
        </Col>
      </Row>
    </>
  );
};
