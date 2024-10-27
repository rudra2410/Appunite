import React from "react";
import img1 from "../../assets/first1.png";
import img2 from "../../assets/second1.png";
import { FaArrowUp } from "react-icons/fa6";

const Help_Section = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
      {/* Left Side */}
      <div className="bg-[rgba(35,90,185,0.9)] w-full h-[60vh] lg:w-1/2 lg:h-[100vh] lg:rounded-base xs:rounded-basic flex flex-col justify-center items-center p-8 lg:p-12 mb-10 lg:mb-0">
        <h1 className="text-[24px] sm:text-[28px] lg:text-[40px] text-start font-bold leading-[35px] lg:leading-[55px] mb-6 text-sub-color">
          How can we help? <br /> Let's talk!
        </h1>
        <button className="hidden lg:block button w-80 h-10">
          <span className="capitalize">Tell us about your project</span>
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 lg:pl-20 space-y-10 px-10">
        {/* First Profile */}
        <div className="flex items-center space-x-4">
          <img
            src={img1}
            alt="Nikola Wlodarczyk"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
          />
          <div className="space-y-2">
            <h1 className="text-[#212529] font-semibold text-[16px] sm:text-[20px]">
              Nikola Włodarczyk
            </h1>
            <h1 className="text-gray-500 text-sm">
              Business Development Specialist
            </h1>
            <div className="flex items-baseline space-x-2">
              <a
                href="#linkedin"
                className="text-main-color text-[16px] sm:text-[16px] font-bold relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-main-color after:transition-all after:duration-500 hover:after:w-full"
              >
                LinkedIn profile
              </a>
              <span>
                <FaArrowUp className="size-4 rotate-45 text-main-color" />
              </span>
            </div>
          </div>
        </div>

        {/* Second Profile */}
        <div className="flex items-center space-x-4">
          <img
            src={img2}
            alt="Klaudia Bryl"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
          />
          <div className="space-y-2">
            <h1 className="text-[#212529] font-semibold text-[16px] sm:text-[20px]">
              Klaudia Bryl
            </h1>
            <h1 className="text-gray-500 text-sm">
              Business Development Specialist
            </h1>
            <div className="flex items-baseline space-x-2">
              <a
                href="#linkedin"
                className="text-main-color text-[16px] sm:text-[16px] font-bold relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-main-color after:transition-all after:duration-500 hover:after:w-full"
              >
                LinkedIn profile
              </a>
              <span>
                <FaArrowUp className="size-4 rotate-45 text-main-color" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help_Section;
