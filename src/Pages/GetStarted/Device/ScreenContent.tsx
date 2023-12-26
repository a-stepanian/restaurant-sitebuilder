import React, { useEffect, useState } from "react";
import { PreviewHeader } from "./OnScreenComponents/PreviewHeader";
import { data } from "../../../data";
import { useAppContext } from "../../../AppContext";
import HoursTab from "./OnScreenComponents/HoursTab";
import LocationTab from "./OnScreenComponents/LocationTab";
import { PreviewFooter } from "./OnScreenComponents/PreviewFooter";
import { HomeTab } from "./OnScreenComponents/HomeTab";

export interface ITheme {
  backgroundStyles: {
    backgroundImage: string;
    backgroundSize: string;
    backgroundRepeat: string;
    backgroundPosition: string;
  };
}

export type TTab = "home" | "location" | "hours" | "menu";

export const ScreenContent = () => {
  const [tab, setTab] = useState<TTab>("home");
  const [theme, setTheme] = useState<ITheme>({
    backgroundStyles: {
      backgroundImage: "none",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    },
  });

  const { basicInfo, step } = useAppContext();

  useEffect(() => {
    if (step === 2) {
      setTab("location");
    } else if (step === 3) {
      setTab("hours");
    } else if (step === 4) {
      setTab("menu");
    } else {
      setTab("home");
    }
  }, [step]);

  useEffect(() => {
    if (basicInfo.cuisineType.length > 0) {
      const selectedCuisine = data.cuisines.find((x) => x.name === basicInfo.cuisineType);
      const url = selectedCuisine?.url;
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
      <PreviewHeader tab={tab} setTab={setTab} />
      <div className="d-flex flex-column h-100" style={theme.backgroundStyles}>
        {tab === "home" && <HomeTab theme={theme} />}
        {tab === "location" && <LocationTab />}
        {tab === "hours" && <HoursTab />}
      </div>
      <PreviewFooter />
    </section>
  );
};
