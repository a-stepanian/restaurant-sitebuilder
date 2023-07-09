import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { IHeroBuilderForm } from "../App";
import { PreviewHeader } from "./PreviewHeader";
import { data } from "../data";

interface IPreviewWidescreenProps {
  heroBuilderForm: IHeroBuilderForm;
}

export const PreviewWidescreen = (props: IPreviewWidescreenProps) => {
  const { heroBuilderForm } = props;
  const [backgroundStyles, setBackgroundStyles] = useState<any>({});

  useEffect(() => {
    if (heroBuilderForm.cuisineType) {
      const url = data.cuisines.find((x) => x.name === heroBuilderForm.cuisineType)?.url;
      setBackgroundStyles({
        backgroundImage: `url('${url}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      });
    }
  }, [heroBuilderForm.cuisineType]);

  return (
    <section
      style={{
        transform: "scale(0.5) translate(-50%, -50%)",
        width: "200%",
      }}>
      <PreviewHeader />
      <div className="bg-black px-0 border-3 py-5" style={backgroundStyles}>
        <Container style={{ height: "800px" }}>
          <h2>{heroBuilderForm.restaurantName.length > 0 ? heroBuilderForm.restaurantName : "Double R Diner"}</h2>
          <h3>{heroBuilderForm.phoneNumber}</h3>
          <h3>{heroBuilderForm.emailAddress}</h3>
        </Container>
      </div>
    </section>
  );
};
