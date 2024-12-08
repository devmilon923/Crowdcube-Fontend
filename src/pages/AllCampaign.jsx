import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import { DataContext } from "../contextApi/DataContext";

export default function AllCampaign() {
  const { setAllCampaigns, allCampaigns } = useContext(DataContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  const result = useLoaderData();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]);
  useEffect(() => {
    document.title = "View All Campaigns | Crowdcube";
  }, []);
  useEffect(() => {
    if (result.data.length > 0) {
      setAllCampaigns(result.data);
    } else {
      setAllCampaigns([]);
    }
  }, [result]);

  // Update filtered campaigns on allCampaigns or searchQuery change
  useEffect(() => {
    if (searchQuery.trim()) {
      const filteredData = allCampaigns.filter((campaign) =>
        campaign.campaign_title

          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredCampaigns(filteredData);
    } else {
      setFilteredCampaigns(allCampaigns);
    }
  }, [searchQuery, allCampaigns]);

  const sortBy = () => {
    const sortData = [...filteredCampaigns].sort(
      (a, b) => b.min_donation_amount - a.min_donation_amount
    );
    setFilteredCampaigns(sortData);
  };

  return (
    <div className="min-h-fit shadow-sm border dark:border-slate-800">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between gap-2 mb-4 items-center">
          <input
            type="text"
            id="searchbox"
            placeholder="Search by title..."
            className="input dark:text-white input-sm dark:bg-slate-800 text-xs rounded-sm input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={sortBy}
            className="btn btn-sm px-8 bg-yellow-100 dark:bg-slate-900 dark:text-white hover:bg-yellow-200 border dark:border-slate-800"
          >
            Sort By price
          </button>
        </div>
        <div className="overflow-x-auto">
          <Table striped id="table">
            <Table.Head>
              <Table.HeadCell>Campaign</Table.HeadCell>
              <Table.HeadCell>Campaign Name</Table.HeadCell>
              <Table.HeadCell>Campaign type</Table.HeadCell>
              <Table.HeadCell>Goal amount</Table.HeadCell>
              <Table.HeadCell>Raise</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {filteredCampaigns.length > 0 ? (
                filteredCampaigns.map((campaign) => (
                  <Table.Row
                    key={campaign._id}
                    className="bg-white trows dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="flex tcell items-center gap-4">
                      <img
                        src={campaign?.thumbnail}
                        className="h-14 rounded-lg w-32 object-cover"
                        alt=""
                      />
                    </Table.Cell>
                    <Table.Cell>
                      {campaign?.campaign_title}{" "}
                      {new Date().toISOString() < campaign?.deadline ? (
                        <div className="badge badge-success text-xs text-white">
                          Active
                        </div>
                      ) : (
                        <div className="badge badge-warning text-xs">
                          Expire
                        </div>
                      )}
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
              ) : (
                <Table.Row>
                  <Table.Cell colSpan="6" className="text-center">
                    No matching records found
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>
      </main>
    </div>
  );
}
