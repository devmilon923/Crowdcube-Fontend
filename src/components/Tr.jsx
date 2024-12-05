import React from "react";

export default function Tr() {
  return (
    <tr className="hover">
      <td>2</td>
      <td>
        <a href="/campaign/456" className="text-gray-600 hover:underline">
          Support Education
        </a>
      </td>
      <td className="text-green-600 font-bold">$100</td>
      <td>2024-11-28</td>
      <td>
        <a
          href="/campaign/456"
          className="btn px-7 bg-green-500 btn-sm text-xs text-white"
        >
          View Campaign
        </a>
      </td>
    </tr>
  );
}
