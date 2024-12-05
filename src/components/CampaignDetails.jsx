import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

const CampaignDetails = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState(null);
  const result = useLoaderData();
  useEffect(() => {
    if (result.data) {
      setDetails(result.data);
    } else {
      setDetails(null);
    }
  }, [result.data]);
  const need = details?.goal_amount;
  const balance = details?.current_balance;
  const percentage = (balance / need) * 100;
  const handleDonate = async (e) => {
    e.preventDefault();
    const amount = e.target.amount.value;
    if (details?.user_uid === user?.uid)
      return toast.error("You can't donate your own campaign");
    if (amount > need) return toast.error("Your donation amount too high");
    await fetch(`${import.meta.env.VITE_apiUrl}/campaign/donate`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        campaign_id: details?._id,
        campaign_title: details?.campaign_title,
        amount: amount,
        user_uid: user?.uid,
        user_name: user?.displayName.trim(),
        user_email: user?.email.trim(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        e.target.reset();
        toast.success("Thanks for your donation!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Sorry there is an error");
      });
  };
  return (
    <div className=" min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm md:border-none border overflow-hidden">
        {/* Image */}
        <img
          src={details?.thumbnail}
          alt="Campaign Banner"
          className="w-full h-64 object-cover"
        />
        {/* Content */}
        <div className="border p-2 md:p-8">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {details?.campaign_title}
          </h1>
          {/* Campaign Details */}
          <p className="text-gray-600 mb-4">{details?.description}</p>
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              <strong className="text-gray-800">Goal:</strong> ${need}
            </p>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-800">Raised:</strong> ${balance}
            </p>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-800">Deadline:</strong>{" "}
              {details?.deadline
                ? new Date(details.deadline).toISOString().split("T")[0]
                : "N/A"}
            </p>
          </div>
          {/* Progress Bar */}
          <div className="bg-gray-200 h-4 rounded-full mb-6">
            <div
              className="bg-green-500 h-full rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          {/* Donation Form */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Donate Now
            </h2>
            <form onSubmit={handleDonate}>
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                  Donation Amount ($)
                </label>
                <input
                  type="number"
                  name="amount"
                  required
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter amount"
                />
              </div>
              <button
                type="submit"
                className="w-full btn bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
