import React from "react";
import { TTab } from "./ScreenContent";

interface IContentNavProps {
  tab: TTab;
  setTab: React.Dispatch<React.SetStateAction<TTab>>;
}
const ContentNav = (props: IContentNavProps) => {
  const { tab, setTab } = props;
  return (
    <nav className="d-flex flex-column">
      <button
        type="button"
        className={`btn btn-sm btn-${tab === "hours" ? "dark" : "outline-dark"}`}
        onClick={() => setTab("hours")}>
        Hours
      </button>
      <button
        type="button"
        className={`btn btn-sm btn-${tab === "location" ? "dark" : "outline-dark"}`}
        onClick={() => setTab("location")}>
        Location
      </button>
      <button
        type="button"
        className={`btn btn-sm btn-${tab === "menu" ? "dark" : "outline-dark"}`}
        onClick={() => setTab("menu")}>
        Menu
      </button>
    </nav>
  );
};

export default ContentNav;
