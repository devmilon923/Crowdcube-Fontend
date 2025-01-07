import React from "react";

export default function CatagoryCard({ name, img }) {
  return (
    <div className=" border rounded-md dark:border-slate-950 from-white dark:from-slate-900 via-green-50 dark:via-slate-800 to-white dark:to-slate-900 bg-gradient-to-tr text-center mx-2 h-32 w-32 lg:h-56 lg:w-56 grid items-center justify-center">
      <div className="space-y-2 ">
        <img
          className="p-2 dark:border-slate-950 from-white dark:from-slate-900 via-emerald-100 dark:via-slate-800 to-white dark:to-slate-900 bg-gradient-to-tr w-12 rounded-md mx-auto"
          src={img}
          alt=""
        />
        <p className="text-gray-600 dark:text-white text-sm text-center">
          {name}
        </p>
      </div>
    </div>
  );
}
