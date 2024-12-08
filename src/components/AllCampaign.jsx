import { Table } from "flowbite-react";
import React, { useContext, useEffect } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
import { DataContext } from "../contextApi/DataContext";

export default function AllCampaign() {
  const { setAllCampaigns, allCampaigns } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const result = useLoaderData();
  useEffect(() => {
    if (result.data.length > 0) {
      setAllCampaigns(result.data);
    } else {
      setAllCampaigns([]);
    }
  }, [result]);
  console.log(allCampaigns);
  return (
    <div className="min-h-fit shadow-sm border dark:border-slate-800 ">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between gap-2 mb-4 items-center">
          <input
            type="text"
            placeholder="Search..."
            className="input dark:text-white input-sm dark:bg-slate-800 text-xs rounded-sm input-bordered w-full max-w-xs"
          />
          <button className="btn btn-sm px-8 bg-yellow-100 dark:bg-slate-900 dark:text-white hover:bg-yellow-200 border dark:border-slate-800">
            Sort By price
          </button>
        </div>
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Campaign</Table.HeadCell>
              <Table.HeadCell>Campaign Name</Table.HeadCell>

              <Table.HeadCell>Campaign type</Table.HeadCell>
              <Table.HeadCell>Goal amount</Table.HeadCell>
              <Table.HeadCell>raise</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {allCampaigns
                ? allCampaigns.map((campaign) => (
                    <Table.Row
                      key={campaign._id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="flex items-center gap-4">
                        <img
                          src={campaign?.thumbnail}
                          className="h-14 rounded-lg w-32 object-cover"
                          alt=""
                        />{" "}
                      </Table.Cell>
                      <Table.Cell>{campaign?.campaign_title}</Table.Cell>
                      <Table.Cell>{campaign?.campaign_type}</Table.Cell>
                      <Table.Cell>${campaign?.goal_amount}</Table.Cell>
                      <Table.Cell>${campaign?.current_balance}</Table.Cell>
                      <Table.Cell>
                        <NavLink
                          to={`/campaign/details/${campaign?._id}`}
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Details
                        </NavLink>
                      </Table.Cell>
                    </Table.Row>
                  ))
                : "No data foun"}
            </Table.Body>
          </Table>
        </div>
      </main>
    </div>
  );
}
