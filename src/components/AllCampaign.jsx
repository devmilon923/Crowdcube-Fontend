import React from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";

export default function AllCampaign() {
  const result = useLoaderData();
  console.log("All Campaign " + result.data.length);

  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-between py-14">
      {result.data
        ? result.data.map((campaign) => (
            <CampaignCard campaign={campaign} key={campaign._id} />
          ))
        : "No data found"}
    </div>
  );
}
