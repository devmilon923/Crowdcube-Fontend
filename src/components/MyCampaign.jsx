import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
import CampaignCard from "./CampaignCard";

export default function MyCampaign() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [campaigns, setCampaign] = useState([]);
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
        .then((data) => setCampaign(data.data))
        .catch((err) => console.log(err));
    }, [location.pathname]);
  }
  console.log(campaigns);
  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-between py-14">
      {campaigns
        ? campaigns.map((campaign) => (
            <CampaignCard campaign={campaign} key={campaign._id} />
          ))
        : "No data found"}
    </div>
  );
}
