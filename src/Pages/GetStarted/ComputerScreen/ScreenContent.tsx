import React, { useEffect, useRef, useState } from "react";
import { Alert, Col, Nav, Row, Tab } from "react-bootstrap";
import { PreviewHeader } from "./PreviewHeader";
import { data } from "../../../data";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useAppContext } from "../../../AppContext";
import ContentNav from "./ContentNav";

interface IPreviewWidescreenProps {
  color: string;
  step?: number;
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

export type TTab = "home" | "location" | "hours" | "menu";

export const ScreenContent = (props: IPreviewWidescreenProps) => {
  const { color, step } = props;
  const [tab, setTab] = useState<TTab>("home");
  const { basicInfo, contactInfo, address, device } = useAppContext();
  const { catchPhrase } = basicInfo;

  function isCurrentlyOpen(hours: { day: string; open: string; close: string }[]): boolean {
    const dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = new Date();
    const currentDay = dayMap[currentDate.getDay()];
    // Get current time as integer HHMM format
    const hrs = currentDate.getHours();
    const mins = currentDate.getMinutes();
    const currentTime = hrs * 100 + mins;

    const todaySchedule = hours.find((day) => day.day === currentDay);

    if (todaySchedule) {
      const openingTime = Number(todaySchedule.open.replace(":", ""));
      const closingTime = Number(todaySchedule.close.replace(":", ""));

      const isOpen = currentTime >= openingTime && currentTime <= closingTime;
      return isOpen;
    }

    return false; // The store is closed if no schedule is found for the current day
  }
  const restaurantIsOpen: boolean = isCurrentlyOpen(basicInfo?.hours);

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
      backgroundImage: "none",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
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
    <section className="computer-screen h-100">
      <PreviewHeader heroRef={heroRef} />
      <div className="bg-body px-0 border-3 py-5 h-100" style={theme.backgroundStyles}>
        <Row>
          <Col xs={device === "mobile" ? 12 : 3} className={device === "mobile" ? "" : ""}>
            {catchPhrase?.length > 0 && (
              <h2
                ref={catchPhraseRef}
                onDoubleClick={() => openEditorBox(catchPhraseRef)}
                className="catch-phrase"
                style={{ fontSize: "2rem", fontFamily: "Anton", color: color }}>
                {catchPhrase}
              </h2>
            )}
            <ContentNav tab={tab} setTab={setTab} />
          </Col>
          <Col xs={9}>
            <Row className="bg-frosted">
              <Col lg={6}>
                <Row>
                  <Col xs={1}>
                    <IoLocationOutline className="me-3" />
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0">{address.street1.length > 0 ? address.street1 : "123 Elm Street"}</p>
                    {address.street2.length > 0 && <p className="mb-0">{address.street2}</p>}
                    <p className="mb-3 small">
                      {address.city.length > 0 ? address.city : "Twin Peaks"},&nbsp;
                      {address.state.length > 0 ? address.state : "WA"}&nbsp;
                      {address.zipCode.length > 0 ? address.zipCode : "98045"}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1}>
                    <AiOutlinePhone className="me-3" />
                  </Col>
                  <Col xs={10}>
                    <p className="mb-3 small">
                      {contactInfo.phoneNumber.length > 0 ? contactInfo.phoneNumber : "555-555-5555"}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1}>
                    <AiOutlineMail className="me-3" />
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0 small">
                      {contactInfo.emailAddress.length > 0 ? contactInfo.emailAddress : "RRdiner@gmail.com"}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10782.926239124838!2d-121.7868641!3d47.4951426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54907c3cb1ed631f%3A0x1ec460db5eadfbc4!2sTwede&#39;s%20Cafe!5e0!3m2!1sen!2sus!4v1689124203589!5m2!1sen!2sus"
                  width="300"
                  height="200"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </Col>
            </Row>

            <Row>
              <Col>
                <Alert variant={restaurantIsOpen ? "success" : "danger"}>
                  We are currently&nbsp;{restaurantIsOpen ? "open" : "closed"}
                </Alert>
              </Col>
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
          </Col>
        </Row>
      </div>
    </section>
  );
};
