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
  console.log(data);
  return (
    <div className="min-h-fit">
      <main className="container mx-auto md:px-4 pb-8 grid lg:grid-cols-3 grid-cols-1 gap-4">
        {data?.donations.length
          ? data.donations.map((campaign) => (
              <div className="card rounded-md bg-base-100 shadow-sm border">
                <figure>
                  <img
                    className="min-h-32 object-cover bg-gray-50 w-full"
                    src={campaign?.thumbnail}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {campaign?.campaign_title}
                    <div className="badge bg-green-400 text-white">
                      {" "}
                      {campaign?.campaign_type}
                    </div>
                  </h2>
                  <div>
                    <p className="text-sm md:text-md">
                      Amount:{" "}
                      <span className="font-semibold">
                        +${campaign?.donation_amount}
                      </span>
                    </p>
                    <p className="text-sm md:text-md">
                      Raiser Name:{" "}
                      <span className="font-semibold">
                        {campaign?.user_name}
                      </span>
                    </p>
                    <p className="text-sm md:text-md">
                      Raiser Email:{" "}
                      <span className="font-semibold">
                        {campaign?.user_email}
                      </span>
                    </p>
                  </div>
                  <div className="card-actions justify-start">
                    <div className="shadow-sm border text-xs py-1 px-2 rounded-full bg-slate-50">
                      {campaign?.createdAt}
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "No data"}
      </main>
    </div>
  );
}
