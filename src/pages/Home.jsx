import { NavLink } from "react-router-dom";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <div className="w-full from-white via-emerald-100 to-white bg-gradient-to-r rounded-md border md:px-6 lg:px-12 pt-12 md:pb-12">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-12 items-center">
        <div className="space-y-3 text-center md:text-start lg:px-12 px-2">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl md:text-4xl font-extrabold text-slate-600"
          >
            Meet life-changing teachers in need of your support
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-slate-600 md:text-md text-sm"
          >
            We Seek out world changers and difference makers around the
            globe,and equip them to fulfill their unique purpose.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <NavLink
              to={"/campaigns/dhaka"}
              data-aos="zoom-out-down"
              data-aos-delay="100"
              className="btn btn-sm md:btn-md bg-emerald-700 text-white md:px-7 text-xs border hover:bg-emerald-800"
            >
              Donate now
            </NavLink>
            <NavLink
              to={"/help"}
              className="btn btn-sm bg-emerald-200 md:btn-md md:px-7 text-xs border hover:bg-slate-700 hover:text-white"
            >
              Browse Campaign
            </NavLink>
          </div>
        </div>
        <div>
          <Swiper className="mySwiper">
            <SwiperSlide>
              <img
                className="object-cover h-80 w-full rounded-md"
                src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2015/12/PAFF_040118_helpingothers-609x419.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className="object-cover h-80 w-full rounded-md"
                src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
