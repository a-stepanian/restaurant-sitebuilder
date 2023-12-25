import React, { useState, ChangeEvent, ReactNode, useRef, useEffect } from "react";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { useAppContext } from "../../../../AppContext";

interface IEditableTextProps {
  initialText: string;
  innerJSX: ReactNode;
  onSave: any;
  placeholderText?: string;
  singleLine?: boolean;
}

const EditableText = (props: IEditableTextProps) => {
  const { innerJSX, initialText, placeholderText, onSave, singleLine } = props;

  const { device } = useAppContext();

  const [isEditing, setIsEditing] = useState<boolean>(initialText.length === 0);
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

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditedText(e.target.value);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  useEffect(() => {
    if (innerJSXRef.current) {
      const styles = window.getComputedStyle(innerJSXRef.current);
      setElementStyles({
        width: (Number(styles.width) + 10).toString(),
        height: styles.height,
        padding: styles.padding,
        margin: styles.margin,
        fontSize: styles.fontSize,
        fontFamily: styles.fontFamily,
      });
      const classes = Array.from(innerJSXRef.current.classList);
      setElementClasses(classes);
    }
  }, [innerJSX, device, isEditing]);

  useEffect(() => {
    if (initialText.length === 0) {
      setIsEditing(true);
    }
  }, [initialText.length]);

  return (
    <div>
      {isEditing ? (
        <div>
          {singleLine ? (
            <input
              placeholder={placeholderText}
              style={{ ...elementStyles }}
              className={elementClasses.join(" ")}
              value={editedText}
              type="text"
              onChange={handleInputChange}
              autoFocus
            />
          ) : (
            <textarea
              placeholder={placeholderText}
              style={{ ...elementStyles }}
              className={elementClasses.join(" ")}
              value={editedText}
              onChange={handleTextAreaChange}
              autoFocus
            />
          )}
          <div className="d-flex position-absolute" style={{ zIndex: "10", bottom: "-18px", right: "0" }}>
            {/* <span className="bg-custom-blue mb-0 small fw-bold">{placeholderText}</span> */}
            {editedText.length > 0 && (
              <button
                className="btn btn-dark text-black bg-custom-yellow px-1 py-0 display-6"
                title="Cancel"
                onClick={handleCancelClick}>
                <MdOutlineCancelPresentation />
              </button>
            )}
            <button
              className="btn btn-dark text-black bg-custom-blue px-1 py-0 display-6"
              title="Save"
              type="button"
              disabled={editedText.length === 0}
              onClick={handleSaveClick}>
              <FaRegSave />
            </button>
          </div>
        </div>
      ) : (
        <div
          title="Edit"
          ref={innerJSXRef}
          onMouseEnter={() => setShowEditButton(true)}
          onMouseLeave={() => setShowEditButton(false)}
          style={{ borderRadius: "3px", outline: showEditButton ? "3px solid #f7f3b8" : "" }}
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
