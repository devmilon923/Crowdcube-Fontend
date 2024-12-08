import React from "react";

export default function FundraisingStep() {
  return (
    <div>
      <div className="mb-5">
        <h1
          data-aos="flip-up"
          data-aos-anchor-placement="center-bottom"
          className="lg:text-3xl text-2xl font-bold text-center dark:text-white"
        >
          Start Your Journey
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        <div
          data-aos="flip-up"
          data-aos-delay="100"
          data-aos-anchor-placement="center-bottom"
          className="card bg-base-100 dark:bg-slate-900 dark:border-slate-950 rounded-md shadow-sm border"
        >
          <figure className="relative">
            <div className="w-12 h-12 rounded-full flex items-center justify-center absolute right-4 bg-green-100 dark:bg-green-700 dark:text-white dark:border-slate-950 bottom-4 font-extrabold text-slate-800">
              1
            </div>
            <img
              className="object-cover w-full h-52"
              src="https://images.justgiving.com/image/1c6af6cb-6fff-414b-8beb-71021ea03668.jpg?template=HomepageInspiration"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-white">
              Start your fundraiser
            </h2>
            <p className="text-gray-500 dark:text-slate-400">
              Tell your story, set a target, add pictures and videos
            </p>
          </div>
        </div>

        <div
          data-aos="flip-up"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
          className="card bg-base-100 dark:bg-slate-900 dark:border-slate-950 rounded-md shadow-sm border"
        >
          <figure className="relative">
            <div className="w-12 h-12 rounded-full flex items-center justify-center absolute right-4 bg-green-100 dark:bg-green-700 dark:text-white dark:border-slate-950 bottom-4 font-extrabold text-slate-800">
              2
            </div>
            <img
              className="object-cover w-full h-52"
              src="https://images.justgiving.com/image/439c7595-f190-4bfa-82cf-401713c6b1ec.jpg?template=HomepageInspiration"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-white">Share with friends</h2>
            <p className="text-gray-500 dark:text-slate-400">
              Send emails, share on social media, send text messages
            </p>
          </div>
        </div>

        <div
          data-aos="flip-up"
          data-aos-delay="500"
          data-aos-anchor-placement="center-bottom"
          className="card bg-base-100 dark:bg-slate-900 dark:border-slate-950 rounded-md shadow-sm border"
        >
          <figure className="relative">
            <div className="w-12 h-12 rounded-full flex items-center justify-center absolute right-4 bg-green-100 dark:bg-green-700 dark:text-white dark:border-slate-950 bottom-4 font-extrabold text-slate-800">
              3
            </div>
            <img
              className="object-cover w-full h-52"
              src="https://images.justgiving.com/image/611baa01-1794-4e27-9611-32c3c2c40396.jpg?template=HomepageInspiration"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-white">Manage donations</h2>
            <p className="text-gray-500 dark:text-slate-400">
              Receive donations, thank donors, money goes to charity or your
              bank account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
