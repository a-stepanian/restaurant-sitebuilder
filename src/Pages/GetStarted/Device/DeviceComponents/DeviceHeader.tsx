import React, { useRef, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useAppContext } from "../../../../AppContext";
import MobileNav from "./MobileNav";
import { TTab } from "../ScreenContent";
import ComputerNav from "./ComputerNav";
import EditableText from "./EditableText";
import { LuMenu, LuX } from "react-icons/lu";

interface IDeviceHeaderProps {
  tab: TTab;
  setTab: React.Dispatch<React.SetStateAction<TTab>>;
}

export const DeviceHeader = (props: IDeviceHeaderProps) => {
  const { tab, setTab } = props;

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { basicInfo, device, updateBasicInfo } = useAppContext();

  const hamburgerButton = useRef<HTMLButtonElement>(null);
  const clickHamburgerButton = () => hamburgerButton?.current?.click();

  return (
    <Navbar expand="xs" className="py-1" bg={"dark"} data-bs-theme={"dark"} style={{ zIndex: 9 }}>
      <Container>
        <Navbar.Brand className="py-0 position-relative" onClick={() => setTab("home")}>
          <EditableText
            innerJSX={<span className="p-1">{basicInfo.restaurantName}</span>}
            initialText={basicInfo.restaurantName}
            singleLine={true}
            placeholderText="Enter your restaurant name here"
            onSave={(editedText: string) =>
              updateBasicInfo({
                ...basicInfo,
                restaurantName: editedText,
              })
            }
          />
        </Navbar.Brand>
        {device === "mobile" && (
          <>
            <Navbar.Toggle
              aria-controls="device-navbar-nav"
              className="py-0 px-1 border-0"
              ref={hamburgerButton}
              onClick={() => setMenuOpen((prev) => !prev)}>
              {menuOpen ? <LuX /> : <LuMenu />}
            </Navbar.Toggle>
            <Navbar.Collapse id="device-navbar-nav">
              <MobileNav tab={tab} setTab={setTab} clickHamburgerButton={clickHamburgerButton} />
            </Navbar.Collapse>
          </>
        )}
        {device === "computer" && <ComputerNav tab={tab} setTab={setTab} clickHamburgerButton={clickHamburgerButton} />}
      </Container>
    </Navbar>
  );
};
