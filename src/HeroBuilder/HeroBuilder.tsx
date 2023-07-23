import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { IHeroBuilderForm } from "../App";
import { HeroBuilderForm } from "./HeroBuilderForm";
import { WidescreenView } from "./WidescreenView";
import { IoRestaurantOutline } from "react-icons/io5";
import { FcBullish } from "react-icons/fc";
import { FcGoogle } from "react-icons/fc";
import { FcTwoSmartphones } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";

export interface IHeroBuilderProps {
  heroBuilderForm: IHeroBuilderForm;
  setHeroBuilderForm: React.Dispatch<React.SetStateAction<IHeroBuilderForm>>;
}

export const HeroBuilder = (props: IHeroBuilderProps) => {
  const { heroBuilderForm, setHeroBuilderForm } = props;

  return (
    <>
      <Row className="my-5">
        <Col md={6}>
          <h1 className="text-black feed-your-business">Feed your business</h1>
          <p className="mt-5 text-black fs-4">
            Build an online presence in <span className="fw-bold">minutes</span>
            <br />
            with Menu Web.
          </p>
        </Col>
        <Col md={6}>
          <WidescreenView heroBuilderForm={heroBuilderForm} />
          <HeroBuilderForm heroBuilderForm={heroBuilderForm} setHeroBuilderForm={setHeroBuilderForm} />
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={6}>
          <div className="d-flex justify-content-end">
            <FcBullish className="bullish" />
          </div>
        </Col>
        <Col md={6}>
          <h2 className="mt-5 pt-5 increase-text">Increase your online presence, increase your sales.</h2>
        </Col>
      </Row>
    </>
  );
};
