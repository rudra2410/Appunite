import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Employee = () => {
  return (
    <div className="py-10 mx-auto lg:container xs:px-3">
      <div className="space-y-5">
        <h1 className="text-black lg:text-larger xs:text-large font-bold text-left">
          How much value <br /> do you need?
        </h1>
        <p className="text-black lg:text-lg xs:text-md text-left font-normal max-w-xl leading-7">
          While 73% of products run out of cash before they find a market fit,
          Empowered Teams focus on the business outcome. Right approach leads to
          right tactics, outcomes and success.
        </p>
      </div>
      <Swiper
        // Add responsive breakpoints
        breakpoints={{
          320: {
            // sm: Minimum 520px
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            // md: Minimum 768px
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            // lg: Minimum 992px
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border-1.5 border-black p-6 text-left space-y-5 rounded-md mt-10 w-full">
            <h3 className="text-md font-semibold mb-4">Empowered Teams</h3>
            <h1>FOCUS: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Business Goals</h1>
            <h1>OUTPUT: &nbsp;&nbsp;&nbsp;Relevant Features</h1>
            <h1>OUTCOME: Business Value</h1>
            <div className="flex items-center space-x-5">
              <p className="mr-5">COST:</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <p className="mr-5">GAIN:</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-1.5 border-black p-6 text-left space-y-5 rounded-md mt-10 w-full">
            <h3 className="text-[22px] font-semibold mb-4">Empowered Teams</h3>
            <h1>FOCUS: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Business Goals</h1>
            <h1>OUTPUT: &nbsp;&nbsp;&nbsp;Relevant Features</h1>
            <h1>OUTCOME: Business Value</h1>
            <div className="flex items-center space-x-5">
              <p className="mr-5">COST:</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <p className="mr-5">GAIN:</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-1.5 border-black p-6 text-left space-y-5 rounded-md mt-10 w-full">
            <h3 className="text-[22px] font-semibold mb-4">Empowered Teams</h3>
            <h1>FOCUS: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Business Goals</h1>
            <h1>OUTPUT: &nbsp;&nbsp;&nbsp;Relevant Features</h1>
            <h1>OUTCOME: Business Value</h1>
            <div className="flex items-center space-x-5">
              <p className="mr-5">COST:</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <p className="mr-5">GAIN:</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-1.5 border-black p-6 text-left space-y-5 rounded-md mt-10 w-full">
            <h3 className="text-[22px] font-semibold mb-4">Empowered Teams</h3>
            <h1>FOCUS: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Business Goals</h1>
            <h1>OUTPUT: &nbsp;&nbsp;&nbsp;Relevant Features</h1>
            <h1>OUTCOME: Business Value</h1>
            <div className="flex items-center space-x-5">
              <p className="mr-5">COST:</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <p className="mr-5">GAIN:</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full border border-black"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Repeat similar blocks for other SwiperSlides */}
      </Swiper>
    </div>
  );
};

export default Employee;
