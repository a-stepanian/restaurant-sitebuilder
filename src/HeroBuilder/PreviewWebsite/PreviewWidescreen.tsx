import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IHeroBuilderForm } from "../../App";
import { PreviewHeader } from "./PreviewHeader";
import { data } from "../../data";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import styled from "styled-components";

interface IPreviewWidescreenProps {
  heroBuilderForm: IHeroBuilderForm;
}

interface IBackgroundStyles {
  backgroundImage: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundPosition: string;
}

interface ITheme {
  backgroundStyles: IBackgroundStyles;
}

export const PreviewWidescreen = (props: IPreviewWidescreenProps) => {
  const { heroBuilderForm } = props;
  const [theme, setTheme] = useState<ITheme>({
    backgroundStyles: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1538128844159-f08f41bfb169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    },
  });

  useEffect(() => {
    if (heroBuilderForm.basicInformation.cuisineType) {
      const url = data.cuisines.find((x) => x.name === heroBuilderForm.basicInformation.cuisineType)?.url;
      setTheme((prev: ITheme) => {
        return {
          ...prev,
          backgroundStyles: {
            backgroundImage: `url('${url}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          },
        };
      });
    }
  }, [heroBuilderForm.basicInformation.cuisineType]);

  return (
    <Wrapper>
      <PreviewHeader />
      <div className="bg-black px-0 border-3 py-5" style={theme.backgroundStyles}>
        <h2>
          {heroBuilderForm.basicInformation.restaurantName.length > 0
            ? heroBuilderForm.basicInformation.restaurantName
            : "Double R Diner"}
        </h2>
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>Location</h3>
            <p className="text">
              {heroBuilderForm.location.street1.length > 0 ? heroBuilderForm.location.street1 : "123 Elm Street"}
            </p>
            <p className="text">{heroBuilderForm.location.street2.length > 0 && heroBuilderForm.location.street2}</p>
            <p className="text">
              {heroBuilderForm.location.city.length > 0 ? heroBuilderForm.location.city : "Twin Peaks"},&nbsp;
              {heroBuilderForm.location.state.length > 0 ? heroBuilderForm.location.state : "WA"},&nbsp;
              {heroBuilderForm.location.zipCode.length > 0 ? heroBuilderForm.location.zipCode : "98045"},&nbsp;
            </p>
          </Col>
          <Col lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10782.926239124838!2d-121.7868641!3d47.4951426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54907c3cb1ed631f%3A0x1ec460db5eadfbc4!2sTwede&#39;s%20Cafe!5e0!3m2!1sen!2sus!4v1689124203589!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
        <h3>Hours of operation</h3>
        <h3>Contact Us</h3>
        <p className="text">
          <AiOutlinePhone className="me-3" />
          {heroBuilderForm.location.phoneNumber.length > 0 ? heroBuilderForm.location.phoneNumber : "555-555-5555"}
        </p>
        <p className="text">
          <AiOutlineMail className="me-3" />
          {heroBuilderForm.location.emailAddress.length > 0
            ? heroBuilderForm.location.emailAddress
            : "RRdiner@gmail.com"}
        </p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  transform: scale(0.5) translate(-50%, -50%);
  width: 200%;
  .text {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }
`;