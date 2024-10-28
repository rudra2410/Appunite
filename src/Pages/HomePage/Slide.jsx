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
      <div>
        <Marquee className="">
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
            <img src={Elixir} alt="6" />
          </div>
          <div className="image_Wrapper">
            <img src={react} alt="7" />
          </div>
        </Marquee>
      </div>

      <div className="py-5">
        <Marquee direction="right">
          <div className="image_Wrapper">
            <h1 className="text-md">User Research</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-md">Quality Assurance</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-md">Design</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-md">Design Systems</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-md">Continuous Discovery</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-md">User Research</h1>
          </div>
          <div className="image_Wrapper">
            <h1 className="text-md">User Information</h1>
          </div>
        </Marquee>
      </div>
      {/* Marquee Slider End */}
    </>
  );
};

export default Slide;
