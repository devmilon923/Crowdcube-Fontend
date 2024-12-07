import React from "react";

export default function FundraisingStep() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-center">
          Start Your Fundraising Journey
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        <div className="card bg-base-100 rounded-md shadow-sm border">
          <figure className="relative">
            <div className="w-12 h-12 rounded-full flex items-center justify-center absolute right-4 bg-gray-50 bottom-4 font-extrabold text-slate-800">
              1
            </div>
            <img
              className="object-cover w-full h-52"
              src="https://images.justgiving.com/image/1c6af6cb-6fff-414b-8beb-71021ea03668.jpg?template=HomepageInspiration"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Start your fundraiser</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div className="card bg-base-100 rounded-md shadow-sm border">
          <figure className="relative">
            <div className="w-12 h-12 rounded-full flex items-center justify-center absolute right-4 bg-gray-50 bottom-4 font-extrabold text-slate-800">
              2
            </div>
            <img
              className="object-cover w-full h-52"
              src="https://images.justgiving.com/image/439c7595-f190-4bfa-82cf-401713c6b1ec.jpg?template=HomepageInspiration"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Start your fundraiser</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div className="card bg-base-100 rounded-md shadow-sm border">
          <figure className="relative">
            <div className="w-12 h-12 rounded-full flex items-center justify-center absolute right-4 bg-gray-50 bottom-4 font-extrabold text-slate-800">
              3
            </div>
            <img
              className="object-cover w-full h-52"
              src="https://images.justgiving.com/image/611baa01-1794-4e27-9611-32c3c2c40396.jpg?template=HomepageInspiration"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Start your fundraiser</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
