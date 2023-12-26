import React from "react";
import { useAppContext } from "../../../../AppContext";
import { ITheme } from "../ScreenContent";
import EditableText from "./EditableText";

interface IHomeTabProps {
  theme: ITheme;
}

export const HomeTab = (props: IHomeTabProps) => {
  const { theme } = props;
  const { device, basicInfo, updateBasicInfo } = useAppContext();

  return (
    <div className="d-flex flex-column h-100" style={theme.backgroundStyles}>
      <h2
        className={`catch-phrase m-3 position-relative ${device === "mobile" ? "text-center" : "display-1"}`}
        style={{ fontFamily: "Anton" }}>
        <EditableText
          innerJSX={<span>{basicInfo.catchPhrase}</span>}
          initialText={basicInfo.catchPhrase}
          placeholderText="Enter a catch phrase"
          onSave={(editedText: string) =>
            updateBasicInfo({
              ...basicInfo,
              catchPhrase: editedText,
            })
          }
        />
      </h2>
    </div>
  );
};
