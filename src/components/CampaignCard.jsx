import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
import { DataContext } from "../contextApi/DataContext";

const CampaignCard = ({ campaign }) => {
  const need = campaign?.goal_amount;
  const balance = campaign?.current_balance;
  const percentage = (balance / need) * 100;
  const [deadline, setDeadline] = useState(null);
  const {
    setMyCampaigns,
    myCampaigns,
    setAllCampaigns,
    allCampaigns,
    homeData,
    setHomeData,
  } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const userid = user?.uid;
  // console.log(campaign?.user_uid);
  useEffect(() => {
    const currentTime = new Date().toISOString();
    if (currentTime < campaign?.deadline) {
      return setDeadline(true);
    } else {
      return setDeadline(false);
    }
  }, [campaign?.deadline]);

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="center-bottom"
      className=" from-white dark:border-slate-950 dark:from-slate-900 via-emerald-100 dark:via-slate-900 to-white dark:to-slate-900 bg-gradient-to-r border rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      {/* Campaign Image */}
      <img
        src={campaign?.thumbnail}
        alt="Campaign Thumbnail"
        className="w-full h-48 object-cover"
      />
      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 dark:text-white">
          {campaign.campaign_title}
        </h3>
        {/* Deadline */}
        <p className="text-sm text-gray-600 mb-4 dark:text-slate-400">
          Deadline:{" "}
          <span className="font-medium text-gray-800 dark:text-slate-400">
            {campaign?.deadline
              ? new Date(campaign.deadline).toISOString().split("T")[0]
              : "N/A"}
          </span>
        </p>
        {/* Progress Bar */}
        <div className="dark:bg-gray-500 bg-gray-200 h-2 rounded-full mb-2">
          <div
            className="bg-green-500  h-full rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mb-2 dark:text-slate-400">
          Raised: <span className="font-medium">${balance}</span> of{" "}
          <span className="font-medium">${need}</span>
        </p>

        <p className="text-sm text-gray-600 mb-2 dark:text-slate-400">
          Status:{" "}
          <span className="hover:underline cursor-pointer">
            {deadline ? (
              <span className="text-green-500 font-semibold">Active</span>
            ) : (
              <span className="text-yellow-500 font-semibold">Expire</span>
            )}
          </span>
        </p>
        <p className="text-sm text-gray-600 mb-2 dark:text-slate-400">
          {user?.uid === campaign.user_uid ? (
            "Your Campaign"
          ) : (
            <span>User: {campaign.user_name}</span>
          )}
        </p>
        {/* Button */}
        {user?.uid === campaign.user_uid ? (
          <div className="grid grid-cols-2 gap-3">
            <NavLink
              className="className=w-full btn btn-sm text-xs bg-white dark:bg-slate-800 dark:border-slate-900 border shadow-sm  text-green-600 font-semibold rounded-md hover:bg-green-300 transition duration-300"
              to={`/campaign/details/${campaign._id}`}
            >
              <i className="fa-regular fa-eye"></i>
            </NavLink>

            <NavLink
              to={`/campaign/update/${campaign._id}`}
              className="w-full dark:bg-slate-800 dark:border-slate-900 btn btn-sm text-xs bg-white border shadow-sm text-emerald-600 font-semibold rounded-md hover:bg-green-300 transition duration-300"
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </NavLink>
          </div>
        ) : (
          <div className="">
            <NavLink
              to={`/campaign/details/${campaign._id}`}
              className="w-full btn bg-green-500 dark:bg-green-600 dark:border-slate-700 btn-sm text-white font-semibold rounded-full text-xs hover:bg-green-600 transition duration-300"
            >
              See More
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignCard;
