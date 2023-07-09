import React from "react";
import { Container } from "react-bootstrap";
import { IHeroBuilderForm } from "../App";
import { PreviewWidescreen } from "./PreviewWidescreen";
import { MdArrowBack, MdArrowForward, MdClose, MdRefresh } from "react-icons/md";

interface IWidescreenViewProps {
  heroBuilderForm: IHeroBuilderForm;
}

export const WidescreenView = (props: IWidescreenViewProps) => {
  const { heroBuilderForm } = props;

  return (
    <Container fluid className="bg-black my-3 p-2 border border-2 border-secondary rounded" style={{ height: "350px" }}>
      <div className="d-flex mb-1">
        <MdArrowBack />
        <MdArrowForward />
        <MdRefresh />
        <p
          className="text-nowrap rounded-pill mx-1 mb-1 ps-3 flex-grow-1 bg-dark-subtle text-dark"
          style={{ fontSize: "12px" }}>
          www.
          {heroBuilderForm.restaurantName.length > 0
            ? heroBuilderForm.restaurantName.toLowerCase().replace(/\s/g, "-")
            : "double-r-diner"}
          .com
        </p>
        <MdClose />
      </div>
      <div style={{ height: "300px", overflowY: "scroll", overflowX: "hidden", border: "1px solid gray" }}>
        <PreviewWidescreen heroBuilderForm={heroBuilderForm} />
      </div>
    </Container>
  );
};
