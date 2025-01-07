import React from "react";
import about from "./../assets/catagory/about.svg";
export default function About() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center p-8 bg-white dark:bg-gray-900">
        <div className="w-full md:w-1/2">
          <img
            src={about}
            alt="Team working together"
            className="rounded-lg shadow-sm"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Who Are We?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Crowdcube is dedicated to empowering individuals to create
            incredible brands and develop superior products. Our mission is to
            deliver captivating services that drive success and inspire
            innovation.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            We are passionate about providing the tools and opportunities needed
            to turn visions into reality. Whether it's through brand
            development, personal projects, or creative initiatives, we are here
            to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center ">
              <span className="text-blue-600 dark:text-blue-400 text-2xl mr-4">
                &#9733;
              </span>
              <div className="">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  Versatile Brand
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We create digital solutions that work smoothly across
                  platforms, ensuring a strong and unified presence.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 text-2xl mr-4">
                &#128167;
              </span>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  Digital Agency
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We drive innovation by combining new ideas with proven
                  strategies to help clients achieve their goals effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
