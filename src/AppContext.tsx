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
  basicInfo: IBasicInfo;
  contactInfo: IContactInfo;
  address: IAddress;
  updateBasicInfo: (info: IBasicInfo) => void;
  updateContactInfo: (info: IContactInfo) => void;
  updateAddress: (info: IAddress) => void;
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
  const [basicInfo, setBasicInfo] = useState<IBasicInfo>({
    restaurantName: "Dim Sum Delight",
    catchPhrase: "World Famous Dim Sum.",
    about: "Dim Sum Heaven opened in",
    cuisineType: "Chinese",
    hours: [
      { day: "Sunday", open: "06:00", close: "22:00" },
      { day: "Monday", open: "06:00", close: "22:00" },
      { day: "Tuesday", open: "06:00", close: "22:00" },
      { day: "Wednesday", open: "06:00", close: "22:00" },
      { day: "Thursday", open: "06:00", close: "22:00" },
      { day: "Friday", open: "06:00", close: "22:00" },
      { day: "Saturday", open: "06:00", close: "22:00" },
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

  const updateBasicInfo = (info: IBasicInfo) => setBasicInfo(info);
  const updateContactInfo = (info: IContactInfo) => setContactInfo(info);
  const updateAddress = (info: IAddress) => setAddress(info);

  const contextValue: IAppState = {
    basicInfo,
    contactInfo,
    address,
    updateBasicInfo,
    updateContactInfo,
    updateAddress,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export { AppContextProvider, useAppContext };
