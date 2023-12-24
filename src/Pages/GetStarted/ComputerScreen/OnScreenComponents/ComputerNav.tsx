import React from "react";
import { TTab } from "../ScreenContent";

interface IComputerNavProps {
  tab: TTab;
  setTab: React.Dispatch<React.SetStateAction<TTab>>;
  clickHamburgerButton?: () => void;
  device?: "mobile" | "computer";
}
const ComputerNav = (props: IComputerNavProps) => {
  const { tab, setTab, clickHamburgerButton, device } = props;

  return (
    <nav className="d-flex computer-nav">
      <button
        type="button"
        className={`py-1 px-1 mx-1 nav nav-link ${tab === "location" ? "dark" : "outline-dark"}`}
        onClick={() => {
          if (device === "mobile" && clickHamburgerButton) {
            clickHamburgerButton();
          }
          setTab("location");
        }}>
        Location
      </button>
      <button
        type="button"
        className={`py-1 px-1 mx-1 nav nav-link ${tab === "hours" ? "dark" : "outline-dark"}`}
        onClick={() => {
          if (device === "mobile" && clickHamburgerButton) {
            clickHamburgerButton();
          }
          setTab("hours");
        }}>
        Hours
      </button>
      <button
        type="button"
        className={`py-1 px-1 mx-1 nav nav-link ${tab === "menu" ? "dark" : "outline-dark"}`}
        onClick={() => {
          if (device === "mobile" && clickHamburgerButton) {
            clickHamburgerButton();
          }
          setTab("menu");
        }}>
        Menu
      </button>
    </nav>
  );
};

export default ComputerNav;
