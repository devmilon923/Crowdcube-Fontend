import React from "react";

const CampaignDetails = () => {
  return (
    <div className=" min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm md:border-none border overflow-hidden">
        {/* Image */}
        <img
          src="https://via.placeholder.com/300x200"
          alt="Campaign Banner"
          className="w-full h-64 object-cover"
        />
        {/* Content */}
        <div className="border p-2 md:p-8">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Support Children's Education
          </h1>
          {/* Campaign Details */}
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            aliquet, metus eu luctus congue, turpis risus aliquet sapien, sit
            amet condimentum lorem quam nec lorem. Integer volutpat libero at
            orci elementum, vitae suscipit ligula fringilla.
          </p>
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              <strong className="text-gray-800">Goal:</strong> $10,000
            </p>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-800">Raised:</strong> $4,000
            </p>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-800">Deadline:</strong> 15 Dec 2024
            </p>
          </div>
          {/* Progress Bar */}
          <div className="bg-gray-200 h-4 rounded-full mb-6">
            <div
              className="bg-green-500 h-full rounded-full"
              style={{ width: "40%" }}
            ></div>
          </div>
          {/* Donation Form */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Donate Now
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                  Donation Amount ($)
                </label>
                <input
                  type="number"
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
