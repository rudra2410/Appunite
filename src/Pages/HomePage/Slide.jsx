import React from "react";
import Elixir from "../../assets/Elixir.svg";
import Figma from "../../assets/Figma.svg";
import flutter from "../../assets/flutter.svg";
import react from "../../assets/react.svg";
import Swift from "../../assets/Swift.svg";
import Marquee from "react-fast-marquee";

const Slide = () => {
  return (
    <>
      {/* Marquee Slider Start */}
      <div className="py-10">
        <Marquee>
          <div className="image_Wrapper">
            <img src={Elixir} alt="1" />
          </div>
          <div className="image_Wrapper">
            <img src={Figma} alt="2" />
          </div>
          <div className="image_Wrapper">
            <img src={flutter} alt="3" />
          </div>
          <div className="image_Wrapper">
            <img src={react} alt="4" />
          </div>
          <div className="image_Wrapper">
            <img src={Swift} alt="5" />
          </div>
          <div className="image_Wrapper">
            <img src={Elixir} alt="1" />
          </div>
          <div className="image_Wrapper">
            <img src={flutter} alt="3" />
          </div>
          <div className="image_Wrapper">
            <img src={Swift} alt="5" />
          </div>
        </Marquee>
      </div>

      <div className="py-10">
        <Marquee direction="right">
          <div className="image_Wrapper">
            <h1 className="text-[20px]">User Research</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-[20px]">Quality Assurance</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-[20px]">Design</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-[20px]">Design Systems</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-[20px]">Continuous Discovery</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-[20px]">User Research</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-[20px]">User Information</h1>
          </div>
        </Marquee>
      </div>
      {/* Marquee Slider End */}
    </>
  );
};

export default Slide;
