import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
export default function UpdateCampaign() {
  const { user } = useContext(AuthContext);
  const [currentData, setCurrentData] = useState(null);
  const result = useLoaderData();
  useEffect(() => {
    if (result.data) {
      setCurrentData(result.data);
    } else {
      setCurrentData(null);
    }
  }, [result, setCurrentData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      e.target.campaign_title.value.trim() === "" ||
      e.target.description.value.trim() === "" ||
      e.target.campaign_type.value.trim() === ""
    ) {
      return toast.error("Empty space are not allowed");
    }
    if (parseInt(e.target.goal_amount.value) <= 0)
      return toast.error("Invalid goal amount");

    if (
      parseInt(e.target.goal_amount.value) <
      parseInt(e.target.min_donation_amount.value)
    )
      return toast.error("Minimum donation amount to high");
    const photo = e.target.photo.files;
    if (currentData?.user_uid !== user?.uid)
      return toast.error("Access denied");
    if (photo.length === 0) {
      const campaignData = {
        title: e.target.campaign_title.value,
        description: e.target.description.value,
        goal_amount: e.target.goal_amount.value,
        min_donation: e.target.min_donation_amount.value,
        deadline: e.target.deadline.value,
        campaign_type: e.target.campaign_type.value,
        user_uid: user?.uid,
        photoUrl: currentData?.thumbnail,
        user_name: user?.displayName,
        user_email: user?.email,
        campaign_id: currentData?._id,
      };

      fetch(`${import.meta.env.VITE_apiUrl}/campaign/update`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(campaignData),
      })
        .then(() => {
          return toast.success("Campaign success to add");
        })
        .catch((err) => {
          toast.error("Campaign failed to add");
          return console.log(err);
        });
    } else {
      // Image upload start to cloudinary =============
      const data = new FormData();
      data.append("file", photo[0]);
      data.append("upload_preset", "crowdcube");
      data.append("cloud_name", "dotcx4o6h");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dotcx4o6h/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const photourl = await response.json();
      // Image upload done to cloudinary ===============
      const campaignData = {
        title: e.target.campaign_title.value,
        description: e.target.description.value,
        goal_amount: e.target.goal_amount.value,
        min_donation: e.target.min_donation_amount.value,
        deadline: e.target.deadline.value,
        campaign_type: e.target.campaign_type.value,
        user_uid: user?.uid,
        photoUrl: photourl.url,
        user_name: user?.displayName,
        user_email: user?.email,
        campaign_id: currentData?._id,
      };
      if (photourl) {
        fetch(`${import.meta.env.VITE_apiUrl}/campaign/update`, {
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(campaignData),
        })
          .then(() => {
            return toast.success("Campaign success to update");
          })
          .catch((err) => {
            toast.error("Campaign failed to update");
            return console.log(err);
          });
      } else {
        return toast.error("Try again");
      }
    }
  };
  return (
    <div className=" flex items-center justify-center py-14">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-sm md:border p-2 md:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update Campaign
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Campaign Title */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Campaign Title
            </label>
            <input
              type="text"
              name="campaign_title"
              required
              defaultValue={currentData?.campaign_title}
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter campaign title"
            />
          </div>
          {/* Campaign Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Campaign Type
            </label>
            <select
              required
              name="campaign_type"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option defaultValue="" disabled selected>
                Select a category
              </option>
              <option selected={currentData?.campaign_type === "Health"}>
                Health
              </option>
              <option selected={currentData?.campaign_type === "Education"}>
                Education
              </option>
              <option selected={currentData?.campaign_type === "Environment"}>
                Environment
              </option>
              <option
                selected={currentData?.campaign_type === "Disaster Relief"}
              >
                Disaster Relief
              </option>
              <option selected={currentData?.campaign_type === "Other"}>
                Other
              </option>
            </select>
          </div>
          {/* Campaign Description */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Campaign Description
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              required
              defaultValue={currentData?.description}
              name="description"
              placeholder="Provide a detailed description of the campaign"
            ></textarea>
          </div>
          {/* Goal Amount */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Goal Amount ($)
            </label>
            <input
              type="number"
              name="goal_amount"
              defaultValue={currentData?.goal_amount}
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter goal amount"
            />
          </div>
          {/* Goal Amount */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Min Amount ($)
            </label>
            <input
              type="number"
              defaultValue={currentData?.min_donation_amount}
              name="min_donation_amount"
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter minimum donation amount"
            />
          </div>
          {/* Deadline */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              defaultValue={
                currentData?.deadline
                  ? new Date(currentData.deadline).toISOString().split("T")[0]
                  : ""
              }
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Upload Campaign Image
            </label>
            <input
              type="file"
              name="photo"
              className="w-full text-gray-600 file-input file-input-sm rounded-none file-input-bordered"
              accept="image/*"
            />
          </div>
          <div className="p-3 bg-green-50 border my-4">
            <p className="text-sm">Name: {user?.displayName}</p>
            <p className="text-sm">Email: {user?.email}</p>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold btn rounded-lg hover:bg-green-700 transition duration-300"
          >
            Submit Campaign
          </button>
        </form>
      </div>
    </div>
  );
}
