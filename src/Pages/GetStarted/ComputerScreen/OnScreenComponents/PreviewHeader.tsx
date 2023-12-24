import React, { useRef } from "react";
import { Container, Navbar, OverlayTrigger, Popover } from "react-bootstrap";
import { useAppContext } from "../../../../AppContext";
import MobileNav from "./MobileNav";
import { TTab } from "../ScreenContent";
import ComputerNav from "./ComputerNav";

interface IPreviewHeaderProps {
  tab: TTab;
  setTab: React.Dispatch<React.SetStateAction<TTab>>;
}

export const PreviewHeader = (props: IPreviewHeaderProps) => {
  const { tab, setTab } = props;
  const { basicInfo, device } = useAppContext();

  const hamburgerButton = useRef<HTMLButtonElement>(null);
  const clickHamburgerButton = () => hamburgerButton?.current?.click();

  const popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" title="Popover bottom" className="p-5">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  );

  return (
    <Navbar
      expand="xs"
      className="py-1"
      bg={basicInfo.restaurantName.length > 0 ? "dark" : "light"}
      data-bs-theme={basicInfo.restaurantName.length > 0 ? "dark" : "light"}>
      <Container>
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
          <Navbar.Brand className="py-0" onClick={() => setTab("home")}>
            {basicInfo.restaurantName}
          </Navbar.Brand>
        </OverlayTrigger>
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
