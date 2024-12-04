import React from "react";

const AddNewCampaign = () => {
  return (
    <div className=" flex items-center justify-center py-14">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-sm md:border p-2 md:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Campaign
        </h1>
        <form>
          {/* Campaign Title */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Campaign Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter campaign title"
            />
          </div>
          {/* Campaign Description */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Campaign Description
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
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
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter goal amount"
            />
          </div>
          {/* Deadline */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Deadline
            </label>
            <input
              type="date"
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
              className="w-full text-gray-600"
              accept="image/*"
            />
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
};

export default AddNewCampaign;
