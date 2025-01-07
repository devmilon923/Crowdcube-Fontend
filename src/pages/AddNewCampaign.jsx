import { FileInput, Label, Spinner } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
import { DataContext } from "../contextApi/DataContext";
export default function AddNewCampaign() {
  const [btnLoader, setloader] = useState(false);
  const [imageUploadStatus, setImageUploadStatus] = useState("Click to upload");
  const { user } = useContext(AuthContext);
  const { homeData, setHomeData } = useContext(DataContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]);
  useEffect(() => {
    document.title = "Add Campaign | Crowdcube";
  }, []);
  const handleSubmit = async (e) => {
    setloader(true);
    e.preventDefault();
    const photo = e.target.photo.files;
    if (
      e.target.campaign_title.value.trim() === "" ||
      e.target.description.value.trim() === "" ||
      e.target.campaign_type.value.trim() === ""
    ) {
      setloader(false);
      return toast.error("Empty space are not allowed");
    }

    if (parseInt(e.target.goal_amount.value) <= 0) {
      setloader(false);
      return toast.error("Invalid goal amount");
    }

    if (
      parseInt(e.target.goal_amount.value) <
      parseInt(e.target.min_donation_amount.value)
    ) {
      setloader(false);
      return toast.error("Minimum donation amount to high");
    }
    if (photo.length === 0) {
      toast.error("Image is required");
      return setloader(false);
    }
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
    const campaignData = {
      title: e.target.campaign_title.value.trim(),
      description: e.target.description.value.trim(),
      goal_amount: e.target.goal_amount.value,
      min_donation: e.target.min_donation_amount.value,
      deadline: e.target.deadline.value,
      campaign_type: e.target.campaign_type.value.trim(),
      user_uid: user?.uid,
      photoUrl: photourl.url,
      user_name: user?.displayName.trim(),
      user_email: user?.email.trim(),
    };

    if (photourl) {
      fetch(`${import.meta.env.VITE_apiUrl}/campaign/add`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(campaignData),
      })
        .then((res) => res.json())
        .then((data) => {
          setHomeData([...homeData, data]);
          setloader(false);
          toast.success("Campaign successfully added");
          e.target.reset();
        })
        .catch((err) => {
          setloader(false);
          toast.error("Campaign failed to add");
        });
    }
  };
  return (
    <div className=" flex items-center  justify-center">
      <div className="max-w-3xl w-full bg-white dark:bg-slate-900 rounded-lg shadow-sm  border-none p-2 md:px-8 pt-0 pb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:bg-slate-900 dark:border-slate-700 mb-6 text-center dark:text-white">
          Add New Campaign
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Campaign Title */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1 dark:text-slate-400">
              Campaign Title
            </label>
            <input
              type="text"
              name="campaign_title"
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 dark:text-slate-400 dark:bg-slate-900 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter campaign title"
            />
          </div>
          {/* Campaign Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1 dark:text-slate-400">
              Campaign Type
            </label>
            <select
              required
              name="campaign_type"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-slate-400 dark:bg-slate-900 dark:border-slate-700 focus:outline-none dark:text-slate-400 focus:ring-2 focus:ring-green-500"
            >
              <option defaultValue="" disabled>
                Select a category
              </option>
              <option>Health</option>
              <option>Startup</option>
              <option>Personal issue</option>
              <option>Business</option>
              <option>Creative ideas</option>
            </select>
          </div>
          {/* Campaign Description */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1 dark:text-slate-400">
              Campaign Description
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 dark:bg-slate-900 dark:border-slate-700 focus:outline-none focus:ring-2 dark:text-slate-400 focus:ring-green-500"
              rows="4"
              required
              name="description"
              placeholder="Provide a detailed description of the campaign"
            ></textarea>
          </div>
          {/* Goal Amount */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1 dark:text-slate-400">
              Goal Amount ($)
            </label>
            <input
              type="number"
              name="goal_amount"
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 dark:text-slate-400 dark:bg-slate-900 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter goal amount"
            />
          </div>
          {/* Goal Amount */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1 dark:text-slate-400">
              Min Amount ($)
            </label>
            <input
              type="number"
              name="min_donation_amount"
              required
              className="w-full dark:text-slate-400 border border-gray-300 rounded-lg py-2 px-3 text-gray-800 dark:bg-slate-900 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter minimum donation amount"
            />
          </div>
          {/* Deadline */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1 dark:text-slate-400">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              required
              className="w-full dark:text-slate-400 border border-gray-300 rounded-lg py-2 px-3 text-gray-800 dark:bg-slate-900 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Image Upload */}
          <div className="mb-6">
            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-500 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">{imageUploadStatus}</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <FileInput
                  onChange={(e) =>
                    e.target.files.length &&
                    setImageUploadStatus("Image has been added")
                  }
                  id="dropzone-file"
                  name="photo"
                  className="hidden"
                />
              </Label>
            </div>
          </div>
          <div className="p-3 bg-green-50 rounded-md dark:bg-slate-900 dark:border-slate-700 dark:text-slate-400 border my-4">
            <p className="text-sm">Name: {user?.displayName}</p>
            <p className="text-sm">Email: {user?.email}</p>
          </div>
          {/* Submit Button */}

          <button
            type="submit"
            className="w-full dark:border-slate-700 bg-green-600 text-white font-semibold btn rounded-lg hover:bg-green-700 transition duration-300"
          >
            {btnLoader ? (
              <div className="flex items-center">
                <Spinner aria-label="Spinner button example" size="sm" />
                <span className="pl-3">Loading...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
