import { Col, Row } from "react-bootstrap";
import { useAppContext } from "../../../../AppContext";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { PiCopyright } from "react-icons/pi";
import React from "react";
import EditableText from "./EditableText";
import { MdOutlineFastfood } from "react-icons/md";
import { TTab } from "../ScreenContent";

interface IDeviceFooterProps {
  setTab: React.Dispatch<React.SetStateAction<TTab>>;
  scrollToTop: any;
}

export const DeviceFooter = (props: IDeviceFooterProps) => {
  const { setTab, scrollToTop } = props;

  const { basicInfo, device, updateBasicInfo } = useAppContext();

  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="pt-5 bg-dark text-white">
      <Row>
        <Col sm={device === "mobile" ? 12 : 4}>
          <nav className="d-flex flex-column">
            <button
              type="button"
              className="py-0 m-1 nav nav-link preview-footer-link"
              onClick={() => {
                setTab("home");
                scrollToTop();
              }}>
              Home
            </button>
            <button
              type="button"
              className="py-0 m-1 nav nav-link preview-footer-link"
              onClick={() => {
                setTab("location");
                scrollToTop();
              }}>
              Location
            </button>
            <button
              type="button"
              className="py-0 m-1 nav nav-link preview-footer-link"
              onClick={() => {
                setTab("hours");
                scrollToTop();
              }}>
              Hours
            </button>
            <button
              type="button"
              className="py-0 m-1 nav nav-link preview-footer-link"
              onClick={() => {
                setTab("menu");
                scrollToTop();
              }}>
              Menu
            </button>
          </nav>
        </Col>
        <Col sm={device === "mobile" ? 12 : 4}>
          <p className={`mt-3 mb-0 mx-3 text-${device === "mobile" ? "center" : "start"}`}>
            <AiOutlinePhone className="me-1" />
            <EditableText
              innerJSX={<span className="p-1">{basicInfo.phoneNumber}</span>}
              initialText={basicInfo.phoneNumber}
              singleLine={true}
              placeholderText="Enter your restaurant name here"
              onSave={(editedText: string) =>
                updateBasicInfo({
                  ...basicInfo,
                  phoneNumber: editedText,
                })
              }
            />
          </p>
          <p className={`mt-3 mb-0 mx-3 text-${device === "mobile" ? "center" : "start"}`}>
            <AiOutlineMail className="me-1" />
            <EditableText
              innerJSX={<span className="p-1">{basicInfo.emailAddress}</span>}
              initialText={basicInfo.emailAddress}
              singleLine={true}
              placeholderText="Enter your restaurant name here"
              onSave={(editedText: string) =>
                updateBasicInfo({
                  ...basicInfo,
                  emailAddress: editedText,
                })
              }
            />
          </p>
        </Col>
        <Col sm={device === "mobile" ? 12 : 4}>
          <p className={`mt-3 mb-0 mx-3 text-${device === "mobile" ? "center" : "end"}`}>
            <PiCopyright className="me-1" />
            <span className="d-inline-block small">{`${currentYear} ${basicInfo.restaurantName}`}</span>
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p className="text-center m-0" style={{ fontSize: "0.7rem" }}>
            <span>Powered by </span>
            <MdOutlineFastfood className="me-2 mb-1 fs-4" />
            <span>MenuWeb</span>
          </p>
        </Col>
      </Row>
    </footer>
  );
};
