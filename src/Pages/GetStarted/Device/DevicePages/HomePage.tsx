import React, { useState } from "react";
import { useAppContext } from "../../../../AppContext";
import { ITheme } from "../ScreenContent";
import EditableText from "../DeviceComponents/EditableText";
import { Button, Modal } from "react-bootstrap";
import { RiImageEditFill } from "react-icons/ri";
import { data } from "../../../../data";

interface IHomePageProps {
  theme: ITheme;
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
}

export const HomePage = (props: IHomePageProps) => {
  const { theme, setTheme } = props;
  const { device, basicInfo, updateBasicInfo } = useAppContext();

  const [showEditBackgroundButton, setShowEditBackgroundButton] = useState<boolean>(false);
  const [showEditBackgroundOffCanvas, setShowEditBackgroundOffCanvas] = useState<boolean>(false);

  return (
    <div className="d-flex flex-column h-100">
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
      <div
        className="w-100 h-100 d-flex justify-content-center"
        onMouseEnter={() => setShowEditBackgroundButton(true)}
        onMouseLeave={() => setShowEditBackgroundButton(false)}>
        {showEditBackgroundButton && (
          <Button
            title="Edit Background Image"
            className="btn btn-dark edit-background-button text-black"
            style={{ background: "rgba(255, 255, 255, 0.3)", width: "200px", height: "200px" }}
            onClick={() => setShowEditBackgroundOffCanvas(true)}>
            <RiImageEditFill className="display-3" />
            <br />
            Edit background image
          </Button>
        )}
      </div>
      <Modal show={showEditBackgroundOffCanvas} onHide={() => setShowEditBackgroundOffCanvas(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Choose a background image</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-custom-blue">
          <div className="w-100 d-flex flex-wrap">
            {data.cuisines.map((cuisine) => (
              <Button
                className="btn btn-dark d-flex flex-column align-items-center m-3"
                onClick={() =>
                  setTheme((prev: ITheme) => {
                    return {
                      ...prev,
                      backgroundStyles: {
                        ...prev.backgroundStyles,
                        backgroundImage: `url('${cuisine.url}')`,
                      },
                    };
                  })
                }>
                <span className="small">{cuisine.name}</span>
                <img src={cuisine.url} alt={cuisine.name} width={100} height={67} className="rounded-2" />
              </Button>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setShowEditBackgroundOffCanvas(false)}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
