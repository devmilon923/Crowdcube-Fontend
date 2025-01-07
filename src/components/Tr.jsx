import { Spinner, Table } from "flowbite-react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
import { DataContext } from "../contextApi/DataContext";

export default function Tr({ campaign }) {
  const [btnLoader, setloader] = useState(false);
  const { user } = useContext(AuthContext);
  const { myCampaigns, allCampaigns, setMyCampaigns, setAllCampaigns } =
    useContext(DataContext);
  const handleDelete = (id) => {
    document.getElementById("my_modal_1").showModal();
  };

  const confrimBtn = async (e) => {
    setloader(true);
    e.preventDefault();
    const id = campaign._id;
    if (campaign?.user_uid !== user?.uid) {
      setloader(false);
      return toast.error("Access denied! Only the owner can delete.");
    }
    fetch(`${import.meta.env.VITE_apiUrl}/campaign/remove/${campaign._id}`)
      .then(() => {
        document.getElementById("close").click();
        const updatedData = myCampaigns.filter((up) => up._id !== id);
        const allupdatedData = allCampaigns.filter((all) => all._id !== id);
        setMyCampaigns(updatedData);
        setAllCampaigns(allupdatedData);
        setloader(false);
        return toast.success("This data success to delete");
      })
      .catch((err) => {
        setloader(false);
        return toast.error("This data failed to delete");
      });
  };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-white dark:border-gray-700 dark:bg-gray-800">
          <h3 className="font-bold text-lg">Action required!</h3>
          <p className="py-4">
            After clicking the delete button, please note that you can't undo
            this action.
          </p>
          <div className="modal-action">
            <form method="dialog" className="space-x-2 flex gap-2">
              {/* if there is a button in form, it will close the modal */}
              <button id="close" className="btn">
                Close
              </button>

              <button
                onClick={confrimBtn}
                type="submit"
                className=" dark:border-red-700 bg-red-600 text-white font-semibold btn rounded-lg hover:bg-red-700 transition duration-300"
              >
                {btnLoader ? (
                  <div className="flex items-center">
                    <Spinner aria-label="Spinner button example" size="sm" />
                    <span className="pl-3">Deleting...</span>
                  </div>
                ) : (
                  "Delete"
                )}
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
          {campaign?.campaign_title}{" "}
          {new Date().toISOString() < campaign?.deadline ? (
            <div className="badge badge-success text-xs text-white">Active</div>
          ) : (
            <div className="badge badge-warning text-xs">Expire</div>
          )}
        </NavLink>
      </Table.Cell>
      <Table.Cell>{campaign?.campaign_type}</Table.Cell>
      <Table.Cell>${campaign?.goal_amount}</Table.Cell>
      <Table.Cell>${campaign?.current_balance}</Table.Cell>
      <Table.Cell>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 ">
          <Link
            to={`/campaign/update/${campaign?._id}`}
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Update
          </Link>
          <Link
            onClick={handleDelete}
            className="font-medium text-red-600 hover:underline dark:text-red-400"
          >
            Delete
          </Link>
        </div>
      </Table.Cell>
    </Table.Row>
  );
}
