import React, { createContext, useContext, useState } from "react";

interface IBasicInfo {
  address: {
    street1: string;
    street2: string;
    city: string;
    state: string;
    zipCode: string;
  };
  emailAddress: string;
  phoneNumber: string;
  restaurantName: string;
  catchPhrase: string;
  about: string;
  cuisineType: string;
  hours: Array<{
    day: string;
    open: string;
    close: string;
  }>;
}

interface IAppState {
  showWelcomeModal: boolean;
  device: "mobile" | "computer";
  basicInfo: IBasicInfo;
  step: number;
  updateShowWelcomeModal: (info: boolean) => void;
  updateBasicInfo: (info: IBasicInfo) => void;
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
  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(true);
  const [step, setStep] = useState<number>(1);
  const [device, setDevice] = useState<"mobile" | "computer">("mobile");
  const [basicInfo, setBasicInfo] = useState<IBasicInfo>({
    about: "",
    address: {
      street1: "",
      street2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    catchPhrase: "",
    cuisineType: "",
    emailAddress: "",
    restaurantName: "",
    phoneNumber: "",
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

  const updateShowWelcomeModal = (info: boolean) => setShowWelcomeModal(info);
  const updateBasicInfo = (info: IBasicInfo) => setBasicInfo(info);
  const updateDevice = (info: "mobile" | "computer") => setDevice(info);
  const updateStep = (info: number) => setStep(info);

  const contextValue: IAppState = {
    showWelcomeModal,
    basicInfo,
    device,
    step,
    updateShowWelcomeModal,
    updateBasicInfo,
    updateDevice,
    updateStep,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export { AppContextProvider, useAppContext };
