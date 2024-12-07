import React from "react";

export default function WhyStart() {
  return (
    <div>
      <div className="mb-5 space-y-2">
        <h1 className="text-3xl font-bold text-center">
          Ideas to get you started
        </h1>
        <p className="text-gray-500 text-center">
          There are lots of ways to make good things happen
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="border rounded-md shadow-sm hover:shadow-md p-6 flex gap-4 justify-between">
          {/* Text Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">
              Help people in need
            </h3>
            <p className="text-sm text-gray-600">
              Provide direct support to an individual, family or community by
              paying medical expenses or offering financial aid.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Start fundraising
            </a>
          </div>

          {/* Icon Section */}
          <div>
            <i class="fa-solid fa-hands-holding-child text-4xl text-violet-500"></i>
          </div>
        </div>

        <div className="border rounded-md shadow-sm hover:shadow-md p-6 flex gap-4 justify-between">
          {/* Text Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">
              Take part in a charity event
            </h3>
            <p className="text-sm text-gray-600">
              Choose from hundreds of official events including marathons, bike
              rides, Dryathlons and bake offs…
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Start fundraising
            </a>
          </div>

          {/* Icon Section */}
          <div>
            <i class="fa-solid fa-parachute-box text-4xl text-violet-500"></i>
          </div>
        </div>

        <div className="border rounded-md shadow-sm hover:shadow-md p-6 flex gap-4 justify-between">
          {/* Text Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">
              Take action in an emergency
            </h3>
            <p className="text-sm text-gray-600">
              Raise funds in response to a natural disaster or humanitarian
              crisis. Make a difference in minutes.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Start fundraising
            </a>
          </div>

          {/* Icon Section */}
          <div>
            <i class="fa-solid fa-truck-medical text-4xl text-violet-500"></i>
          </div>
        </div>

        <div className="border rounded-md shadow-sm hover:shadow-md p-6 flex gap-4 justify-between">
          {/* Text Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">
              Celebrate an occasion
            </h3>
            <p className="text-sm text-gray-600">
              Mark a special event like a birthday, wedding or final exam by
              asking friends for donations rather than gifts.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Start fundraising
            </a>
          </div>

          {/* Icon Section */}
          <div>
            <i class="fa-solid fa-champagne-glasses text-4xl text-violet-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
