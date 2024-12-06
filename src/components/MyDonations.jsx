import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

export default function MyDonations() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    if (user?.uid) {
      fetch(`${import.meta.env.VITE_apiUrl}/campaign/donate/me`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ uid: user?.uid }),
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user?.uid, location.pathname]); // Dependency array

  return (
    <div className="min-h-fit shadow-sm">
      <main className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Campaign ID</Table.HeadCell>
              <Table.HeadCell>Campaign name</Table.HeadCell>
              <Table.HeadCell>Campaign type</Table.HeadCell>
              <Table.HeadCell>Raiser Name</Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Donated At</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data?.donations?.map((donation, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {donation._id}
                  </Table.Cell>
                  <Table.Cell>{donation.campaign_title}</Table.Cell>
                  <Table.Cell>{donation.campaign_type}</Table.Cell>
                  <Table.Cell>{donation.user_name}</Table.Cell>
                  <Table.Cell className="text-green-500 font-bold">
                    +${donation.donation_amount}
                  </Table.Cell>
                  <Table.Cell>
                    {donation?.createdAt
                      ? new Date(donation.createdAt)
                          .toISOString()
                          .replace("T", " ")
                          .split(".")[0]
                      : "N/A"}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </main>
    </div>
  );
}
