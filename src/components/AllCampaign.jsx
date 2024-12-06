import { Table } from "flowbite-react";
import React, { useContext, useEffect } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { DataContext } from "../contextApi/DataContext";

export default function AllCampaign() {
  const { setAllCampaigns, allCampaigns } = useContext(DataContext);
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
    <div className="min-h-fit shadow-sm ">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Campaign</Table.HeadCell>
              <Table.HeadCell>Campaign type</Table.HeadCell>
              <Table.HeadCell>Goal amount</Table.HeadCell>
              <Table.HeadCell>raise</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
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
                        <p className="text-md font-semibold">
                          {campaign?.campaign_title}
                        </p>
                      </Table.Cell>
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
