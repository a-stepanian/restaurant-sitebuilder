import React from "react";
import { useAppContext } from "../../../../AppContext";
import { ITheme } from "../ScreenContent";

interface IHomeTabProps {
  theme: ITheme;
}

export const HomeTab = (props: IHomeTabProps) => {
  const { theme } = props;
  const { device, basicInfo, color } = useAppContext();

  return (
    <div className="d-flex flex-column h-100" style={theme.backgroundStyles}>
      <h2
        className={`catch-phrase m-3 ${device === "mobile" ? "text-center" : "display-1"}`}
        style={{ fontFamily: "Anton", color: color }}>
        {basicInfo.catchPhrase}
      </h2>
    </div>
  );
};
