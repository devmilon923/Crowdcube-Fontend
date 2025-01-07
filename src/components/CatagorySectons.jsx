import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { DataContext } from "../contextApi/DataContext";
import Creative from "./../assets/catagory/creativity.png";
import Health from "./../assets/catagory/health-insurance.png";
import Business from "./../assets/catagory/online-analytical.png";
import Personal from "./../assets/catagory/person.png";
import Startup from "./../assets/catagory/startup.png";
import CatagoryCard from "./CatagoryCard";
export default function CatagorySectons() {
  const { darkMode } = useContext(DataContext);
  return (
    <div>
      <Marquee
        gradient={true}
        gradientColor={darkMode ? "#0f172a" : "#ffffff"}
        gradientWidth={100}
        speed={30}
        pauseOnHover={true}
        className=""
      >
        <CatagoryCard name={"Business"} img={Business} />
        <CatagoryCard name={"Personal issue"} img={Personal} />
        <CatagoryCard name={"Creative ideas"} img={Creative} />
        <CatagoryCard name={"Startup"} img={Startup} />
        <CatagoryCard name={"Health"} img={Health} />
      </Marquee>
    </div>
  );
}
