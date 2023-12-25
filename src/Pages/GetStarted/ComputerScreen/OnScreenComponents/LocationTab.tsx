import React from "react";
import { useAppContext } from "../../../../AppContext";
import { IoLocationOutline } from "react-icons/io5";
import EditableText from "./EditableText";

const LocationTab = () => {
  const {
    basicInfo,
    basicInfo: { address },
    updateBasicInfo,
    device,
  } = useAppContext();

  return (
    <>
      {device === "computer" && (
        <div className="d-flex position-absolute h-100">
          {/* <img src="/images/road-sign.svg" alt="road sign" className="img-fluid" loading="lazy" /> */}
          <div className="d-flex mb-3 text-white">
            <IoLocationOutline className="display-6" />
            <div>
              <h5 className="mb-0 position-relative">
                <EditableText
                  innerJSX={<span>{address?.street1}</span>}
                  initialText={address?.street1}
                  onSave={(editedText: string) =>
                    updateBasicInfo({
                      ...basicInfo,
                      address: {
                        ...basicInfo.address,
                        street1: editedText,
                      },
                    })
                  }
                />
              </h5>
              {address.street2.length > 0 && <p className="mb-0">{address.street2}</p>}
              <p className="small mb-0">
                <EditableText
                  innerJSX={<span>{address?.city}</span>}
                  initialText={address?.city}
                  onSave={(editedText: string) =>
                    updateBasicInfo({
                      ...basicInfo,
                      address: {
                        ...basicInfo.address,
                        city: editedText,
                      },
                    })
                  }
                />
                &nbsp;
                <EditableText
                  innerJSX={<span>{address?.state}</span>}
                  initialText={address?.state}
                  onSave={(editedText: string) =>
                    updateBasicInfo({
                      ...basicInfo,
                      address: {
                        ...basicInfo.address,
                        state: editedText,
                      },
                    })
                  }
                />
                &nbsp;
                <EditableText
                  innerJSX={<span>{address?.zipCode}</span>}
                  initialText={address?.zipCode}
                  onSave={(editedText: string) =>
                    updateBasicInfo({
                      ...basicInfo,
                      address: {
                        ...basicInfo.address,
                        zipCode: editedText,
                      },
                    })
                  }
                />
              </p>
            </div>
          </div>
        </div>
      )}
      <div
        className={`bg-light m-2 py-3 d-flex align-items-center justify-content-center rounded ${
          device === "mobile" ? "flex-column" : ""
        }`}>
        <div className="d-flex mb-3">
          <IoLocationOutline className="display-6" />
          <div>
            <EditableText
              innerJSX={<h5 className="mb-0">{address?.street1}</h5>}
              initialText={address?.street1}
              onSave={(editedText: string) =>
                updateBasicInfo({
                  ...basicInfo,
                  address: {
                    ...basicInfo.address,
                    street1: editedText,
                  },
                })
              }
            />

            {address.street2.length > 0 && <p className="mb-0">{address.street2}</p>}
            <p className="small mb-0">
              {address?.city},&nbsp;
              {address?.state}&nbsp;
              {address?.zipCode}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center rounded shadow">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10782.926239124838!2d-121.7868641!3d47.4951426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54907c3cb1ed631f%3A0x1ec460db5eadfbc4!2sTwede&#39;s%20Cafe!5e0!3m2!1sen!2sus!4v1689124203589!5m2!1sen!2sus"
            width={`${device === "mobile" ? 250 : 300}`}
            height={`${device === "mobile" ? 250 : 300}`}
            className="rounded"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default LocationTab;
