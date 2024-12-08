import React from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Banner() {
  return (
    <div>
      <div className="w-full from-white dark:from-slate-900 via-emerald-100 dark:via-slate-800 to-white dark:to-slate-900 bg-gradient-to-r rounded-md border-l dark:border-l-slate-950 border-r dark:border-r-slate-950 md:px-6  pt-12 md:pb-12">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-12 items-center">
          <div className="space-y-3 text-center md:text-start lg:px-12 px-2">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl md:text-4xl font-extrabold dark:text-white text-slate-600"
            >
              Welcome to Crowdcube — Where{" "}
              <Typewriter
                loop={false}
                words={["Ideas Grow", "Dreams Rise", "Impact Grows"]}
              />
              {/* <Typewriter words={["Do something incredible today"]} /> */}
            </h1>
            <Fade delay={1e3} cascade damping={1e-1}>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-slate-600 md:text-md text-sm dark:text-slate-400"
              >
                We Seek out world changers and difference makers around the
                globe,and equip them to fulfill their unique purpose.
              </p>
            </Fade>
            <div className="flex gap-3 justify-center md:justify-start">
              <NavLink
                to={"/campaign/add"}
                data-aos="zoom-out-down"
                data-aos-delay="100"
                className="btn btn-sm md:btn-md bg-emerald-700 text-white md:px-7 text-xs border hover:bg-emerald-800"
              >
                Add Your Campaign
              </NavLink>
              <NavLink
                to={"/campaign/all"}
                className="btn btn-sm bg-emerald-200 md:btn-md md:px-7 text-xs border hover:bg-emerald-300 "
              >
                Browse Campaigns
              </NavLink>
            </div>
          </div>
          <div>
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper z-0"
            >
              <SwiperSlide>
                {" "}
                <img
                  className="object-cover h-80 w-full rounded-md"
                  src="https://images.inc.com/uploaded_files/image/1920x1080/getty_489308794_334853.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover h-80 w-full rounded-md"
                  src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2015/12/PAFF_040118_helpingothers-609x419.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover h-80 w-full rounded-md"
                  src="https://images.inc.com/uploaded_files/image/1920x1080/getty_537417802_242851.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
