import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
import { DataContext } from "../contextApi/DataContext";
import CampaignCard from "./CampaignCard";

export default function MyCampaign() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { setMyCampaigns, myCampaigns } = useContext(DataContext);
  if (user?.uid) {
    useEffect(() => {
      fetch(`${import.meta.env.VITE_apiUrl}/campaign/me`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ uid: user?.uid }),
      })
        .then((res) => res.json())
        .then((data) => setMyCampaigns(data.data))
        .catch((err) => console.log(err));
    }, [location.pathname]);
  }
  console.log(myCampaigns);
  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-between py-14">
      {myCampaigns
        ? myCampaigns.map((campaign) => (
            <CampaignCard campaign={campaign} key={campaign._id} />
          ))
        : "No data found"}
    </div>
  );
}
