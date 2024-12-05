import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

const CampaignCard = ({ campaign }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className=" bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Campaign Image */}
      <img
        src="https://via.placeholder.com/300x200"
        alt="Campaign Thumbnail"
        className="w-full h-48 object-cover"
      />
      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {campaign.campaign_title}
        </h3>
        {/* Deadline */}
        <p className="text-sm text-gray-600 mb-4">
          Deadline:{" "}
          <span className="font-medium text-gray-800">15 Dec 2024</span>
        </p>
        {/* Progress Bar */}
        <div className="bg-gray-200 h-2 rounded-full mb-2">
          <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: "70%" }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Raised: <span className="font-medium">$4,000</span> of{" "}
          <span className="font-medium">$10,000</span>
        </p>
        {/* Button */}
        {user?.uid === campaign.user_uid ? (
          <div className="grid grid-cols-3 gap-3">
            <NavLink
              to={`/campaign/details/${campaign._id}`}
              className="w-full btn btn-sm text-xs bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            >
              Details
            </NavLink>
            <NavLink
              to={`/campaign/update/${campaign._id}`}
              className="w-full btn btn-sm text-xs bg-emerald-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            >
              Edit
            </NavLink>
            <NavLink
              to={"/campaign/details/543"}
              className="w-full btn btn-sm text-xs bg-red-500 text-white text-semibold rounded-lg hover:bg-green-600 transition duration-300"
            >
              Delete
            </NavLink>
          </div>
        ) : (
          <div className="">
            <NavLink
              to={"/campaign/details/543"}
              className="w-full btn bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition duration-300"
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
