import React, { createContext, useContext, useState } from "react";

interface IBasicInfo {
  restaurantName: string;
  catchPhrase: string;
  about: string;
  cuisineType: string;
  hours: Array<{ day: string; open: string; close: string }>;
}

interface IContactInfo {
  emailAddress: string;
  phoneNumber: string;
}

interface IAddress {
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
}

interface IAppState {
  device: "mobile" | "computer";
  basicInfo: IBasicInfo;
  contactInfo: IContactInfo;
  address: IAddress;
  step: number;
  updateBasicInfo: (info: IBasicInfo) => void;
  updateContactInfo: (info: IContactInfo) => void;
  updateAddress: (info: IAddress) => void;
  updateDevice: (info: "mobile" | "computer") => void;
  updateStep: (info: number) => void;
}

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<IAppState | undefined>(undefined);

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [device, setDevice] = useState<"mobile" | "computer">("computer");
  const [basicInfo, setBasicInfo] = useState<IBasicInfo>({
    restaurantName: "",
    catchPhrase: "",
    about: "",
    cuisineType: "",
    hours: [
      { day: "Sun", open: "06:00", close: "22:00" },
      { day: "Mon", open: "06:00", close: "22:00" },
      { day: "Tue", open: "06:00", close: "22:00" },
      { day: "Wed", open: "06:00", close: "22:00" },
      { day: "Thu", open: "06:00", close: "22:00" },
      { day: "Fri", open: "06:00", close: "22:00" },
      { day: "Sat", open: "06:00", close: "22:00" },
    ],
  });
  const [contactInfo, setContactInfo] = useState<IContactInfo>({
    emailAddress: "",
    phoneNumber: "",
  });
  const [address, setAddress] = useState<IAddress>({
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [step, setStep] = useState<number>(1);

  const updateBasicInfo = (info: IBasicInfo) => setBasicInfo(info);
  const updateContactInfo = (info: IContactInfo) => setContactInfo(info);
  const updateAddress = (info: IAddress) => setAddress(info);
  const updateDevice = (info: "mobile" | "computer") => setDevice(info);
  const updateStep = (info: number) => setStep(info);

  const contextValue: IAppState = {
    basicInfo,
    contactInfo,
    address,
    device,
    step,
    updateBasicInfo,
    updateContactInfo,
    updateAddress,
    updateDevice,
    updateStep,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export { AppContextProvider, useAppContext };
