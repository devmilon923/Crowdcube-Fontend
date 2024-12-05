import React from "react";
import Tr from "./Tr";

export default function MyDonations() {
  return (
    <div className="min-h-fit shadow-sm border my-14">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-6 text-neutral">
          My Donation History
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Header */}
            <thead className="bg-gray-200">
              <tr>
                <th>#</th>
                <th>Campaign Title</th>
                <th>Donated Amount</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              <Tr />
              <Tr />
              <Tr />
              <Tr />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
