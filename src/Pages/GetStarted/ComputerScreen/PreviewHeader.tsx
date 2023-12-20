import React, { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../../../AppContext";
import MobileNav from "./MobileNav";
import { TTab } from "./ScreenContent";
import ComputerNav from "./ComputerNav";

interface IPreviewHeaderProps {
  tab: TTab;
  setTab: React.Dispatch<React.SetStateAction<TTab>>;
  device: "mobile" | "computer";
}

export const PreviewHeader = (props: IPreviewHeaderProps) => {
  const { tab, setTab, device } = props;
  const { basicInfo } = useAppContext();

  const hamburgerButton = useRef<HTMLButtonElement>(null);
  const clickHamburgerButton = () => hamburgerButton?.current?.click();

  return (
    <Navbar
      expand="xs"
      className="py-1"
      bg={basicInfo.restaurantName.length > 0 ? "dark" : "light"}
      data-bs-theme={basicInfo.restaurantName.length > 0 ? "dark" : "light"}>
      <Container>
        <Navbar.Brand className="py-0" href="#">
          {basicInfo.restaurantName}
        </Navbar.Brand>
        {basicInfo.restaurantName.length > 0 && device === "mobile" && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" ref={hamburgerButton} />
            <Navbar.Collapse id="basic-navbar-nav">
              <MobileNav tab={tab} setTab={setTab} clickHamburgerButton={clickHamburgerButton} />
            </Navbar.Collapse>
          </>
        )}
        {basicInfo.restaurantName.length > 0 && device === "computer" && (
          <ComputerNav tab={tab} setTab={setTab} clickHamburgerButton={clickHamburgerButton} />
        )}
      </Container>
    </Navbar>
  );
};
