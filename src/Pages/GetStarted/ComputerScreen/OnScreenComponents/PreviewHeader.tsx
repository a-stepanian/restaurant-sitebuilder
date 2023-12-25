import React, { useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useAppContext } from "../../../../AppContext";
import MobileNav from "./MobileNav";
import { TTab } from "../ScreenContent";
import ComputerNav from "./ComputerNav";
import EditableText from "./EditableText";

interface IPreviewHeaderProps {
  tab: TTab;
  setTab: React.Dispatch<React.SetStateAction<TTab>>;
}

export const PreviewHeader = (props: IPreviewHeaderProps) => {
  const { tab, setTab } = props;
  const { basicInfo, device, updateBasicInfo } = useAppContext();

  const hamburgerButton = useRef<HTMLButtonElement>(null);
  const clickHamburgerButton = () => hamburgerButton?.current?.click();

  return (
    <Navbar expand="xs" className="py-1" bg={"dark"} data-bs-theme={"dark"}>
      <Container>
        <Navbar.Brand className="py-0 position-relative" onClick={() => setTab("home")}>
          <EditableText
            innerJSX={<span className="p-1">{basicInfo.restaurantName}</span>}
            initialText={basicInfo.restaurantName}
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" ref={hamburgerButton} />
            <Navbar.Collapse id="basic-navbar-nav">
              <MobileNav tab={tab} setTab={setTab} clickHamburgerButton={clickHamburgerButton} />
            </Navbar.Collapse>
          </>
        )}
        {device === "computer" && <ComputerNav tab={tab} setTab={setTab} clickHamburgerButton={clickHamburgerButton} />}
      </Container>
    </Navbar>
  );
};
