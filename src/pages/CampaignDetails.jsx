import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

const CampaignDetails = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState(null);
  const [deadline, setDeadline] = useState(null);
  const result = useLoaderData();
  useEffect(() => {
    document.title = "Campaign Details | Crowdcube";
  }, []);
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

  useEffect(() => {
    const currentTime = new Date().toISOString();
    if (currentTime < details?.deadline) {
      return setDeadline(true);
    } else {
      return setDeadline(false);
    }
  }, [details?.deadline]);

  const handleDonate = async (e) => {
    e.preventDefault();
    const amount = e.target.amount.value;
    if (!deadline) return toast.error("Deadline is over for this campaign");
    if (details?.user_uid === user?.uid)
      return toast.error("You can't donate your own campaign");

    if (need - balance < amount) return toast.error(`Your amount is to high!`);
    if (amount > need) return toast.error("Your donation amount too high");
    await fetch(`${import.meta.env.VITE_apiUrl}/campaign/donate`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        campaign_id: details?._id,
        campaign_title: details?.campaign_title,
        campaign_type: details?.campaign_type,
        amount: amount,
        user_uid: user?.uid,
        user_name: user?.displayName.trim(),
        user_email: user?.email.trim(),
        thumbnail: details?.thumbnail,
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
    <div className=" min-h-screen pb-14">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-lg shadow-sm md:border-none border dark:border-slate-950 overflow-hidden">
        {/* Image */}
        <img
          src={details?.thumbnail}
          alt="Campaign Banner"
          className="w-full h-64 object-cover"
        />
        {/* Content */}
        <div className="border dark:border-slate-950 p-2 md:p-8">
          {/* Title */}
          <h1 className="md:text-2xl text-xl font-bold text-gray-800 mb-4 dark:text-slate-400">
            {details?.campaign_title}
          </h1>
          {/* Campaign Details */}
          <p className="text-gray-600 mb-4 dark:text-slate-400">
            {details?.description}
          </p>
          <p className="text-gray-600 mb-1 font-bold text-sm dark:text-slate-400">
            Name: <span className="font-normal">{details?.user_name}</span>
          </p>
          <p className="text-gray-600 mb-4 font-bold text-sm dark:text-slate-400">
            Email: <span className="font-normal">{details?.user_email}</span>
          </p>
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-between md:items-center mb-4">
            <p className="text-sm text-gray-600 dark:text-slate-400">
              <strong className="text-gray-800 dark:text-slate-400">
                Goal:
              </strong>{" "}
              ${need}
            </p>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              <strong className="text-gray-800 dark:text-slate-400">
                Raised:
              </strong>{" "}
              ${balance}
            </p>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              <strong className="text-gray-800 dark:text-slate-400">
                Deadline:
              </strong>{" "}
              {details?.deadline
                ? new Date(details.deadline).toISOString().split("T")[0]
                : "N/A"}
            </p>
          </div>
          {/* Progress Bar */}
          <div className="bg-gray-200 dark:bg-slate-700 h-4 rounded-full mb-6">
            <div
              className="bg-green-500 dark:bg-green-600 dark:border-slate-700 h-full rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          {/* Donation Form */}
          <div className="bg-gray-50 dark:bg-slate-900 p-4 border dark:border-slate-800 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 dark:text-white">
              Donate Now
            </h2>
            <form onSubmit={handleDonate}>
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1 dark:text-slate-400">
                  Minimum Donation Amount (${details?.min_donation_amount})
                </label>
                <input
                  defaultValue={details?.min_donation_amount}
                  type="number"
                  name="amount"
                  required
                  className="w-full dark:text-white dark:bg-slate-800 dark:border-slate-800 border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter amount"
                />
              </div>
              {deadline ? (
                <div>
                  {details?.user_uid === user?.uid ? (
                    <button
                      disabled
                      type="submit"
                      className="w-full btn bg-green-500 dark:bg-green-600 dark:border-slate-700 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
                    >
                      Your campaign
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full btn bg-green-500 dark:bg-green-600 dark:border-slate-700 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
                    >
                      Donate Now
                    </button>
                  )}
                </div>
              ) : (
                <button
                  disabled={!deadline}
                  type="submit"
                  className="w-full btn bg-green-500 dark:bg-green-600 dark:border-slate-700 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Campaign Ended
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
