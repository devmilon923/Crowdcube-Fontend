import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
import { DataContext } from "../contextApi/DataContext";

const CampaignCard = ({ campaign }) => {
  const need = campaign?.goal_amount;
  const balance = campaign?.current_balance;
  const percentage = (balance / need) * 100;
  const [deadline, setDeadline] = useState(null);
  const { setMyCampaigns, myCampaigns, setAllCampaigns, allCampaigns } =
    useContext(DataContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const currentTime = new Date().toISOString();
    if (currentTime < campaign?.deadline) {
      return setDeadline(true);
    } else {
      return setDeadline(false);
    }
  }, [campaign?.deadline]);
  const handleDelete = (id) => {
    document.getElementById("my_modal_1").showModal();
  };
  const confrimBtn = async (e) => {
    e.preventDefault();
    const id = campaign._id;
    if (campaign?.user_uid !== user?.uid)
      return toast.error("Access denied! Only the owner can delete.");
    fetch(`${import.meta.env.VITE_apiUrl}/campaign/remove/${campaign._id}`)
      .then(() => {
        document.getElementById("close").click();
        const updatedData = myCampaigns.filter((up) => up._id !== id);
        const allupdatedData = allCampaigns.filter((all) => all._id !== id);
        setMyCampaigns(updatedData);
        setAllCampaigns(allupdatedData);

        return toast.success("This data success to delete");
      })
      .catch((err) => {
        console.log(err);
        return toast.error("This data failed to delete");
      });
  };
  const showUserInfo = () => {
    document.getElementById("my_modal_2").showModal();
  };
  return (
    <div className=" from-white via-green-100 to-white bg-gradient-to-r border rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              {/* if there is a button in form, it will close the modal */}
              <button id="close" className="btn">
                Close
              </button>
              <button
                onClick={confrimBtn}
                className="btn bg-red-500 text-white"
              >
                Confrim
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Raiser Information</h3>
          <div className="py-4 flex flex-col items-center">
            {/* User Image */}

            {/* User Details */}
            <div className="text-center">
              <p className="font-semibold text-lg">
                Name: {campaign?.user_name}
              </p>
              <p className="text-gray-600">Email: {campaign?.user_email}</p>
              <p className="text-sm text-gray-500 mt-2">
                {campaign?.createdAt}
              </p>
            </div>
          </div>
          <div className="modal-action justify-center space-x-4">
            {/* Close Button */}
            <form method="dialog">
              <button
                id="close"
                className="btn bg-neutral outline-none text-white hover:bg-slate-800"
              >
                Close
              </button>
            </form>
            {/* Confirm Button */}
          </div>
        </div>
      </dialog>

      {/* Campaign Image */}
      <img
        src={campaign?.thumbnail}
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
          <span className="font-medium text-gray-800">
            {campaign?.deadline
              ? new Date(campaign.deadline).toISOString().split("T")[0]
              : "N/A"}
          </span>
        </p>
        {/* Progress Bar */}
        <div className="bg-gray-200 h-2 rounded-full mb-2">
          <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          Raised: <span className="font-medium">${balance}</span> of{" "}
          <span className="font-medium">${need}</span>
        </p>

        <p className="text-sm text-gray-600 mb-2 ">
          Status:{" "}
          <span
            onClick={showUserInfo}
            className="hover:underline cursor-pointer"
          >
            {deadline ? (
              <span className="text-green-500 font-semibold">Active</span>
            ) : (
              <span className="text-yellow-500 font-semibold">Expire</span>
            )}
          </span>
        </p>
        {/* Button */}
        {user?.uid === campaign.user_uid ? (
          <div className="grid grid-cols-3 gap-3">
            <NavLink
              className="className=w-full btn btn-sm text-xs bg-white border shadow-sm  text-green-600 font-semibold rounded-md hover:bg-green-300 transition duration-300"
              to={`/campaign/details/${campaign._id}`}
            >
              <i class="fa-regular fa-eye"></i>
            </NavLink>

            <NavLink
              to={`/campaign/update/${campaign._id}`}
              className="w-full btn btn-sm text-xs bg-white border shadow-sm text-emerald-600 font-semibold rounded-md hover:bg-green-300 transition duration-300"
            >
              <i class="fa-regular fa-pen-to-square"></i>
            </NavLink>
            <button
              onClick={handleDelete}
              className="w-full btn btn-sm text-xs bg-white border shadow-sm  text-red-600 text-semibold rounded-md hover:bg-green-300 transition duration-300"
            >
              <i class="fa-solid fa-trash-arrow-up"></i>
            </button>
          </div>
        ) : (
          <div className="">
            <NavLink
              to={`/campaign/details/${campaign._id}`}
              className="w-full btn bg-green-500 btn-sm text-white font-semibold rounded-md text-xs hover:bg-green-600 transition duration-300"
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
