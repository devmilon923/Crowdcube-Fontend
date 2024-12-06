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

  return (
    <div className="min-h-fit shadow-sm ">
      <main className="container mx-auto px-4 py-8">
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
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
