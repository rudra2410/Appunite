import React from "react";
import img1 from "../../assets/first1.png";
import img2 from "../../assets/second1.png";
import { FaArrowUp } from "react-icons/fa6";

const Help_Section = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
      {/* Left Side */}
      <div className="bg-[rgba(35,90,185,0.9)] w-full h-[60vh] lg:w-1/2 lg:h-[100vh] lg:rounded-base xs:rounded-basic flex flex-col justify-center items-center p-8 lg:p-12 mb-10 lg:mb-0">
        <h1 className="text-lg xs:text-large lg:text-[40px] text-start font-bold leading-[35px] lg:leading-[55px] mb-6 text-p-color">
          How can we help? <br /> Let's talk!
        </h1>
        <button className="hidden lg:block button w-80 h-10">
          <span className="capitalize">Tell us about your project</span>
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 lg:ml-20 space-y-10 px-3">
        {/* First Profile */}
        <div className="flex items-center space-x-4">
          <img
            src={img1}
            alt="Nikola Wlodarczyk"
            className="lg:w-16 lg:h-16 xs:w-14 xs:h-14 rounded-full"
          />
          <div className="space-y-2">
            <h1 className="text-sub-black font-semibold text-small sm:text-md">
              Nikola Włodarczyk
            </h1>
            <h1 className="text-heading-color text-sm">
              Business Development Specialist
            </h1>
            <div className="flex items-baseline space-x-2">
              <a href="#linkedin" className="underline-hover">
                LinkedIn profile
              </a>
              <span>
                <FaArrowUp className="size-4 rotate-45 text-main-color" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src={img2}
            alt="Klaudia Bryl"
            className="lg:w-16 lg:h-16 xs:w-14 xs:h-14 rounded-full"
          />
          <div className="space-y-2">
            <h1 className="text-sub-black font-semibold text-small sm:text-md">
              Klaudia Bryl
            </h1>
            <h1 className="text-heading-color text-sm">
              Business Development Specialist
            </h1>
            <div className="flex items-baseline space-x-2">
              <a href="#linkedin" className="underline-hover">
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
