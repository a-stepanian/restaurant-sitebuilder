import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PreviewHeader } from "./PreviewHeader";
import { data } from "../../data";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IAddress, IBasicInfo, IContactInfo } from "../../App";

interface IPreviewWidescreenProps {
  basicInfo: IBasicInfo;
  contactInfo: IContactInfo;
  address: IAddress;
  color: string;
  step?: number;
}

interface IBackgroundStyles {
  backgroundImage: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundPosition: string;
  height: string;
}

interface ITheme {
  backgroundStyles: IBackgroundStyles;
}

export const ScreenContent = (props: IPreviewWidescreenProps) => {
  const { basicInfo, contactInfo, address, color, step } = props;
  const { catchPhrase } = basicInfo;

  const heroRef = useRef<null | HTMLDivElement>(null);
  const catchPhraseRef = useRef<null | HTMLDivElement>(null);
  const addressRef = useRef<null | HTMLDivElement>(null);

  const openEditorBox = (refName: React.MutableRefObject<HTMLDivElement | null>): void => {
    refName?.current?.classList?.add("editor-mode");
  };

  useEffect(() => {
    if (step === 1 && heroRef?.current) {
      heroRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
    if (step === 2 && addressRef?.current) {
      addressRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  }, [step]);

  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
  const [theme, setTheme] = useState<ITheme>({
    backgroundStyles: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1538128844159-f08f41bfb169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      height: "600px",
    },
  });

  useEffect(() => {
    if (basicInfo.cuisineType) {
      const selectedCuisine = data.cuisines.find((x) => x.name === basicInfo.cuisineType);
      const url = selectedCuisine?.url;
      const style = selectedCuisine?.style;
      setIsLightTheme(style === "light");
      setTheme((prev: ITheme) => {
        return {
          ...prev,
          backgroundStyles: {
            ...prev.backgroundStyles,
            backgroundImage: `url('${url}')`,
          },
        };
      });
    }
  }, [basicInfo.cuisineType]);

  return (
    <section className="computer-screen">
      <PreviewHeader basicInfo={basicInfo} />
      <div ref={heroRef} className="bg-body px-0 border-3 py-5" style={theme.backgroundStyles}>
        {catchPhrase && catchPhrase.length > 0 && (
          <h2
            ref={catchPhraseRef}
            onDoubleClick={() => openEditorBox(catchPhraseRef)}
            className="catch-phrase"
            style={{ fontSize: "9rem", fontFamily: "Anton", color: color }}>
            {catchPhrase}
          </h2>
        )}
      </div>
      <Container>
        <Row ref={addressRef} className={`${isLightTheme ? "bg-light text-dark" : "bg-dark text-light"}`}>
          <Col lg={6}>
            <h3>Hours of operation</h3>
            <Row>
              <Col>Day</Col>
              <Col>Open</Col>
              <Col>Close</Col>
            </Row>
            {basicInfo.hours.map((x) => {
              return (
                <Row key={x.day}>
                  <Col>{x.day}</Col>
                  <Col>{x.open}</Col>
                  <Col>{x.close}</Col>
                </Row>
              );
            })}
            <h3>Contact Us</h3>
            <p className="text">
              <AiOutlinePhone className="me-3" />
              {contactInfo.phoneNumber.length > 0 ? contactInfo.phoneNumber : "555-555-5555"}
            </p>
            <p className="text">
              <AiOutlineMail className="me-3" />
              {contactInfo.emailAddress.length > 0 ? contactInfo.emailAddress : "RRdiner@gmail.com"}
            </p>
            <h3>Location</h3>
            <p className="text">{address.street1.length > 0 ? address.street1 : "123 Elm Street"}</p>
            <p className="text">{address.street2.length > 0 && address.street2}</p>
            <p className="text">
              {address.city.length > 0 ? address.city : "Twin Peaks"},&nbsp;
              {address.state.length > 0 ? address.state : "WA"},&nbsp;
              {address.zipCode.length > 0 ? address.zipCode : "98045"},&nbsp;
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
      </Container>
    </section>
  );
};
