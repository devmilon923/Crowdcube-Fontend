import React from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";

export default function AllCampaign() {
  const data = useLoaderData();
  console.log("All Campaign " + data.length);
  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-between py-14">
      <CampaignCard />
      <CampaignCard />
      <CampaignCard />
    </div>
  );
}
