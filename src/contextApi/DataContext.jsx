import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [myCampaigns, setMyCampaigns] = useState([]);
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DataContext.Provider
      value={{
        myCampaigns,
        setMyCampaigns,
        setAllCampaigns,
        allCampaigns,
        homeData,
        setHomeData,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
