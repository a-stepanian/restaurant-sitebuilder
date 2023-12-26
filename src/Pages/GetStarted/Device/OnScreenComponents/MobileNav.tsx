import React from "react";
import { TTab } from "../ScreenContent";

interface IMobileNavProps {
  tab: TTab;
  setTab: React.Dispatch<React.SetStateAction<TTab>>;
  clickHamburgerButton: () => void;
}
const MobileNav = (props: IMobileNavProps) => {
  const { tab, setTab, clickHamburgerButton } = props;

  return (
    <nav className="d-flex flex-column">
      <button
        type="button"
        className={`nav nav-link ${tab === "location" ? "dark" : "outline-dark"}`}
        onClick={() => {
          setTab("location");
          clickHamburgerButton();
        }}>
        Location
      </button>
      <button
        type="button"
        className={`my-2 nav nav-link ${tab === "hours" ? "dark" : "outline-dark"}`}
        onClick={() => {
          setTab("hours");
          clickHamburgerButton();
        }}>
        Hours
      </button>
      <button
        type="button"
        className={`nav nav-link ${tab === "menu" ? "dark" : "outline-dark"}`}
        onClick={() => {
          setTab("menu");
          clickHamburgerButton();
        }}>
        Menu
      </button>
    </nav>
  );
};

export default MobileNav;
