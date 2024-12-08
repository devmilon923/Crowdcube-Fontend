import { Alert } from "flowbite-react";
import { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import CampaignCard from "../components/CampaignCard";
import FundraisingStep from "../components/FundraisingStep";
import WhyStart from "../components/WhyStart";
import { AuthContext } from "../contextApi/AuthContext";
import { DataContext } from "../contextApi/DataContext";

export default function Home() {
  const { homeData, setHomeData } = useContext(DataContext);
  const location = useLocation();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = "Home | Crowdcube";
  }, []);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_apiUrl}/campaign/home`)
      .then((res) => res.json())
      .then((data) => {
        setHomeData(data?.data);
      });
  }, [location.pathname, user?.uid]);
  console.log(homeData);
  return (
    <>
      <Banner />
      <div className="py-14">
        <WhyStart />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center dark:text-white">
          Campaigns
        </h1>
        <div className="py-14 grid grid-cols-3 gap-5">
          {homeData.length ? (
            homeData.map((campaign) => (
              <CampaignCard campaign={campaign} key={campaign._id} />
            ))
          ) : (
            <Alert color="success" rounded className=" col-span-3">
              There have no active campaign running.{" "}
              <NavLink
                className="text-yellow-700 hover:underline"
                to={"/campaign/add"}
              >
                Create your own campaign
              </NavLink>
            </Alert>
          )}
        </div>
      </div>
      <div className="py-14">
        <FundraisingStep />
      </div>
    </>
  );
}
