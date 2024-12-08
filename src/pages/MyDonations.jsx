import { Alert } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

export default function MyDonations() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]);
  useEffect(() => {
    document.title = "My Donations | Crowdcube";
  }, []);
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
    <div className="min-h-fit">
      <main className="container mx-auto md:px-4 pb-8 grid lg:grid-cols-3 grid-cols-1 gap-4">
        {data?.donations.length ? (
          data.donations.map((campaign) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="card rounded-md dark:border-slate-950 bg-base-100 dark:bg-slate-900 shadow-sm border"
            >
              <figure>
                <img
                  className="h-32 object-cover bg-gray-50 w-full"
                  src={campaign?.thumbnail}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="badge dark:bg-green-500 bg-green-400 text-white text-xs dark:border-slate-800 ">
                  {" "}
                  {campaign?.campaign_type}
                </div>
                <h2 className="card-title dark:text-white">
                  {campaign?.campaign_title}
                </h2>
                <div>
                  <p className="text-sm md:text-md dark:text-slate-400">
                    Amount:{" "}
                    <span className="font-semibold">
                      +${campaign?.donation_amount}
                    </span>
                  </p>
                  <p className="text-sm md:text-md dark:text-slate-400">
                    Raiser Name:{" "}
                    <span className="font-semibold">{campaign?.user_name}</span>
                  </p>
                  <p className="text-sm md:text-md dark:text-slate-400">
                    Raiser Email:{" "}
                    <span className="font-semibold">
                      {campaign?.user_email}
                    </span>
                  </p>
                </div>
                <div className="card-actions justify-start">
                  <div className="shadow-sm border text-xs py-1 px-3 rounded-full bg-slate-50 dark:bg-slate-600 dark:text-white dark:border-slate-950">
                    {campaign?.createdAt}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Alert color="success" rounded className=" col-span-3">
            <span className="font-medium">Sorry!</span> There have no donation
            data.{" "}
            <NavLink
              className="text-yellow-700 hover:underline"
              to={"/campaign/all"}
            >
              Donate now
            </NavLink>
          </Alert>
        )}
      </main>
    </div>
  );
}
