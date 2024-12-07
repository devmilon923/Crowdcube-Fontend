import React from "react";

export default function JurneyCard() {
  return (
    <div>
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
    </div>
  );
}
