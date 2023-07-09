import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { IHeroBuilderForm } from "../App";
import { Header } from "../Header";
import { data } from "../data";

interface IWidescreenViewProps {
  heroBuilderForm: IHeroBuilderForm;
}

export const WidescreenView = (props: IWidescreenViewProps) => {
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
    <Container fluid className="bg-black my-3 p-2 border border-2 border-secondary rounded" style={{ height: "350px" }}>
      <p className="text-nowrap">
        www.
        {heroBuilderForm.restaurantName.length > 0
          ? heroBuilderForm.restaurantName.toLowerCase().replace(/\s/g, "-")
          : "double-r-diner"}
        .com
      </p>
      <section
        style={{
          transform: "scale(0.5) translate(-50%, -50%)",
          width: "200%",
          border: "10px solid red",
        }}>
        <Header />
        <Container className="bg-black px-0 border-3" style={backgroundStyles}>
          <h2>{heroBuilderForm.restaurantName.length > 0 ? heroBuilderForm.restaurantName : "Double R Diner"}</h2>
          <h2>{heroBuilderForm.phoneNumber}</h2>
          <h2>{heroBuilderForm.emailAddress}</h2>
        </Container>
      </section>
    </Container>
  );
};
