import React from "react";
import first from "../assets/img1.jpg";
import second from "../assets/img2.jpg";
import third from "../assets/img3.jpg";
import four from "../assets/img4.jpg";

const Case_Study = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="py-10">
        <h1 className="text-start lg:text-[45px] text-black font-semibold md:text-[30px]">
          Our impact - <br /> Featured case studies
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-3.5">
        {/* Column 1 */}
        <div className="flex flex-col gap-3.5 lg:w-1/2">
          {/* Large Card */}
          <div className="relative overflow-hidden group hover:opacity-80 h-72 rounded">
            <img
              src={first}
              alt="Bamboo Stock exchange"
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            {/* Set overlay opacity to 80 on hover */}
            <div className="absolute bottom-0 p-4 z-20">
              <p className="text-white font-semibold text-lg">
                Bamboo Stock exchange app changing the African investment market
              </p>
            </div>
          </div>

          {/* Small Card */}
          <div className="relative overflow-hidden group hover:opacity-80 rounded">
            <img
              src={second}
              alt="Finley FinTech"
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            {/* Set overlay opacity to 80 on hover */}
            <div className="absolute bottom-0 p-4 z-20">
              <p className="text-white font-semibold">
                Finley FinTech startup that solves problems surrounding complex
                payments in businesses
              </p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3.5 lg:w-1/2">
          {/* Small Card */}
          <div className="relative overflow-hidden group hover:opacity-80 rounded">
            <img
              src={third}
              alt="Allegro Lokalnie"
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            {/* Set overlay opacity to 80 on hover */}
            <div className="absolute bottom-0 p-4 z-20">
              <p className="text-white font-semibold">
                Allegro Lokalnie From startup to full-blown profitable product
              </p>
            </div>
          </div>

          {/* Small Card */}
          <div className="relative overflow-hidden group hover:opacity-80 h-72 rounded">
            <img
              src={four}
              alt="Italist platform"
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            {/* Set overlay opacity to 80 on hover */}
            <div className="absolute bottom-0 p-4 z-20">
              <p className="text-white font-semibold">
                Italist First platform to offer direct-to-consumer imports of
                luxury goods from Italy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-4 lg:px-0 xs:px-4">
        <button className="button hover:bg-[#C3C3C3] transition-all duration-200 ease-linear size-80 h-12">
          <span className="capitalize">View All Case Studies</span>
        </button>
      </div>
    </div>
  );
};

export default Case_Study;
