import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
import { DataContext } from "../contextApi/DataContext";
import Tr from "./Tr";

export default function MyCampaign() {
  const { user } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const location = useLocation();
  const { setMyCampaigns, myCampaigns } = useContext(DataContext);

  if (user?.uid) {
    useEffect(() => {
      fetch(`${import.meta.env.VITE_apiUrl}/campaign/me`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ uid: user?.uid }),
      })
        .then((res) => res.json())
        .then((data) => setMyCampaigns(data.data))
        .catch((err) => console.log(err));
    }, [location.pathname]);
  }

  console.log(myCampaigns);

  // Update filtered campaigns on myCampaigns or searchQuery change
  useEffect(() => {
    if (searchQuery.trim()) {
      const filteredData = myCampaigns.filter((campaign) =>
        campaign.campaign_title
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredCampaigns(filteredData);
    } else {
      setFilteredCampaigns(myCampaigns);
    }
  }, [searchQuery, myCampaigns]);

  const sortBy = () => {
    const sortData = [...filteredCampaigns].sort(
      (a, b) => b.min_donation_amount - a.min_donation_amount
    );
    setFilteredCampaigns(sortData);
  };

  return (
    <div className="min-h-fit shadow-sm border dark:border-slate-800 ">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between gap-2 mb-4 items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="input dark:text-white input-sm dark:bg-slate-800 text-xs rounded-sm input-bordered w-full max-w-xs"
          />
          <button
            onClick={sortBy}
            className="btn btn-sm px-8 bg-yellow-100 dark:bg-slate-900 dark:text-white hover:bg-yellow-200 border dark:border-slate-800"
          >
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
              <Table.HeadCell>Raise</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {filteredCampaigns ? (
                filteredCampaigns.map((campaign) => (
                  <Tr campaign={campaign} key={campaign._id} />
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan="6" className="text-center">
                    You have no matching campaigns
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
