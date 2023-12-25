import React, { useEffect, useRef } from "react";
import { TTab } from "../ScreenContent";

interface IComputerNavProps {
  tab: TTab;
  setTab: React.Dispatch<React.SetStateAction<TTab>>;
  clickHamburgerButton?: () => void;
  device?: "mobile" | "computer";
}
const ComputerNav = (props: IComputerNavProps) => {
  const { tab, setTab, clickHamburgerButton, device } = props;

  const navRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (navRef?.current) {
        navRef.current.classList.add("d-flex");
        navRef.current.classList.remove("d-none");
      }
    }, 100);
  }, [navRef]);

  return (
    <nav ref={navRef} className="d-none computer-nav">
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
