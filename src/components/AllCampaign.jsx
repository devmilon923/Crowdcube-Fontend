import React from "react";
import CampaignCard from "./CampaignCard";

export default function AllCampaign() {
  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-between py-14">
      <CampaignCard />
      <CampaignCard />
      <CampaignCard />
    </div>
  );
}
