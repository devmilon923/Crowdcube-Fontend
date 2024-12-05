import React, { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { DataContext } from "../contextApi/DataContext";
import CampaignCard from "./CampaignCard";

export default function AllCampaign() {
  const { setAllCampaigns, allCampaigns } = useContext(DataContext);
  const result = useLoaderData();

  useEffect(() => {
    if (result.data.length > 0) {
      setAllCampaigns(result.data);
    } else {
      setAllCampaigns([]);
    }
  }, [result]);
  console.log(allCampaigns);

  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-between py-14">
      {allCampaigns
        ? allCampaigns.map((campaign) => (
            <CampaignCard campaign={campaign} key={campaign._id} />
          ))
        : "No data found"}
    </div>
  );
}
