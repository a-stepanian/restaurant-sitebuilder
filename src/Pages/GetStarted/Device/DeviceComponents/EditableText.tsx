import React, { useState, ChangeEvent, ReactNode, useRef, useEffect } from "react";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { useAppContext } from "../../../../AppContext";
import { Button, ButtonGroup } from "react-bootstrap";

interface IEditableTextProps {
  initialText: string;
  innerJSX: ReactNode;
  saveOnTop?: boolean;
  onSave: any;
  placeholderText?: string;
  singleLine?: boolean;
}

const EditableText = (props: IEditableTextProps) => {
  const { innerJSX, saveOnTop, initialText, placeholderText, onSave, singleLine } = props;

  const { device } = useAppContext();

  const [isEditing, setIsEditing] = useState<boolean>(initialText.length === 0);
  const [timesResized, setTimesResized] = useState<number>(0);
  const [showEditButton, setShowEditButton] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(initialText);
  const [elementStyles, setElementStyles] = useState<React.CSSProperties>({});
  const [elementClasses, setElementClasses] = useState<string[]>([]);

  const innerJSXRef = useRef<HTMLDivElement>(null);

  const handleSaveClick = () => {
    if (editedText.length > 0) {
      setIsEditing(false);
      onSave(editedText);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedText(initialText);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditedText(e.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      setTimesResized((prev) => prev + 1);
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (innerJSXRef.current) {
        const styles = window.getComputedStyle(innerJSXRef.current);
        setElementStyles({
          width: (parseInt(styles.width, 10) + 10).toString() + "px",
          height: (parseInt(styles.height, 10) + 4).toString() + "px",
          paddingTop: styles.paddingTop,
          paddingBottom: styles.paddingBottom,
          paddingLeft: styles.paddingLeft,
          paddingRight: styles.paddingRight,
          borderRadius: "5px",
          margin: styles.margin,
          fontSize: styles.fontSize,
          fontFamily: styles.fontFamily,
          outline: "0px solid transparent",
          borderWidth: "0",
        });
        const classes = Array.from(innerJSXRef.current.classList);
        setElementClasses(classes);
      }
    }, 300);
  }, [innerJSX, device, isEditing, timesResized]);

  useEffect(() => {
    if (initialText.length === 0) {
      setIsEditing(true);
    }
  }, [initialText.length]);

  return (
    <div className={singleLine ? "d-inline-block" : "d-block"}>
      {isEditing ? (
        <div className="position-relative">
          {singleLine ? (
            <input
              placeholder={placeholderText}
              style={{ ...elementStyles }}
              className={elementClasses.join(" ") + " bg-custom-blue text-black"}
              value={editedText}
              type="text"
              onChange={handleInputChange}
              autoFocus
            />
          ) : (
            <textarea
              placeholder={placeholderText}
              style={{ ...elementStyles }}
              className={elementClasses.join(" ") + " bg-custom-blue text-black"}
              value={editedText}
              onChange={handleInputChange}
              autoFocus
            />
          )}
          <div
            className="d-flex position-absolute"
            style={{
              zIndex: "10",
              right: "0",
              bottom: `${saveOnTop ? "" : singleLine ? "-40px" : "-18px"}`,
              top: `${saveOnTop ? "-36px" : ""}`,
            }}>
            <ButtonGroup>
              <Button
                className="editable-text-button bg-custom-yellow btn-outline-dark"
                title="Cancel"
                onClick={handleCancelClick}>
                <MdOutlineCancelPresentation style={{ fontSize: "24px" }} />
              </Button>
              <Button
                className="editable-text-button bg-custom-yellow btn-outline-dark"
                title="Save"
                disabled={editedText.length === 0}
                onClick={handleSaveClick}>
                <FaRegSave style={{ fontSize: "24px" }} />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      ) : (
        <div
          title="Edit"
          ref={innerJSXRef}
          onMouseEnter={() => setShowEditButton(true)}
          onMouseLeave={() => setShowEditButton(false)}
          style={{ borderRadius: "3px", outline: showEditButton ? "3px solid #b6fff2" : "" }}
          onClick={() => {
            setIsEditing(true);
            setShowEditButton(false);
          }}>
          {innerJSX}
        </div>
      )}
    </div>
  );
};

export default EditableText;
