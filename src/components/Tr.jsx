import { Table } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

export default function Tr({ campaign }) {
  const { user } = useContext(AuthContext);
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
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
      <Table.Cell className="flex items-center gap-4">
        <img
          src={campaign?.thumbnail}
          className="h-14 rounded-lg w-32 object-cover"
          alt=""
        />{" "}
      </Table.Cell>
      <Table.Cell>
        <NavLink
          to={`/campaign/details/${campaign._id}`}
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          {" "}
          {campaign?.campaign_title}
        </NavLink>
      </Table.Cell>
      <Table.Cell>{campaign?.campaign_type}</Table.Cell>
      <Table.Cell>${campaign?.goal_amount}</Table.Cell>
      <Table.Cell>${campaign?.current_balance}</Table.Cell>
      <Table.Cell>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <NavLink
            to={`/campaign/update/${campaign?._id}`}
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Update
          </NavLink>
          <NavLink
            onClick={handleDelete}
            className="font-medium text-red-600 hover:underline dark:text-red-400"
          >
            Delete
          </NavLink>
        </div>
      </Table.Cell>
    </Table.Row>
  );
}
