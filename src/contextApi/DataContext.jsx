import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [myCampaigns, setMyCampaigns] = useState([]);
  const [allCampaigns, setAllCampaigns] = useState([]);

  return (
    <DataContext.Provider
      value={{ myCampaigns, setMyCampaigns, setAllCampaigns, allCampaigns }}
    >
      {children}
    </DataContext.Provider>
  );
};
