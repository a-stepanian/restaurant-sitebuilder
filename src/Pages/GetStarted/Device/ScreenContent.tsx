import React, { useEffect, useRef, useState } from "react";
import { data } from "../../../data";
import { useAppContext } from "../../../AppContext";
import { DeviceHeader } from "./DeviceComponents/DeviceHeader";
import { DeviceFooter } from "./DeviceComponents/DeviceFooter";
import { HomePage } from "./DevicePages/HomePage";
import LocationPage from "./DevicePages/LocationPage";
import HoursPage from "./DevicePages/HoursPage";

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

  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const { basicInfo, step, device } = useAppContext();

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
      <div ref={scrollTargetRef} className="scroll-target"></div>
      <DeviceHeader tab={tab} setTab={setTab} />
      <div className={`h-100 py-5 px-0 ${device === "mobile" ? "" : "p-md-5"}`} style={theme.backgroundStyles}>
        {tab === "home" && <HomePage theme={theme} setTheme={setTheme} />}
        {tab === "location" && <LocationPage />}
        {tab === "hours" && <HoursPage />}
      </div>
      <DeviceFooter setTab={setTab} scrollToTop={scrollToTop} />
    </section>
  );
};
