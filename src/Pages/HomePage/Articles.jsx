import React from "react";
import img from "../../assets/first-removebg-preview.png";
import img1 from "../../assets/second-removebg-preview.png";
import img2 from "../../assets/third-removebg-preview.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Articles = () => {
  return (
    <div>
      <div className="py-20 container">
        <div className="space-y-5 mb-10">
          <h1 className="text-black lg:text-[45px] xs:text-[30px] font-bold text-left">
            Featured articles
          </h1>
          <p className="text-black lg:text-[24px] xs:text-[20px] text-left font-normal max-w-xl leading-8">
            How to eliminate ineffectiveness in software development? Learn this
            from our blog, where we regularly share our knowledge.
          </p>
        </div>

        {/* Card Section */}
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
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white overflow-hidden border-1.5 border-black hover:shadow-lg transition-shadow duration-300">
              <div className="bg-black flex items-center justify-center">
                <img
                  src={img}
                  alt="Icon"
                  className="h-full hover:scale-110 transition-all duration-200 ease-linear"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-black font-normal">Semir Al Harbi</p>
                <h2 className="text-[24px] leading-8 font-bold text-black">
                  Understanding and Achieving Product-Market Fit
                </h2>
                <p className="text-black font-normal">#Strategy</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white overflow-hidden border-1.5 border-black hover:shadow-lg transition-shadow duration-300">
              <div className="bg-black flex items-center justify-center">
                <img
                  src={img1}
                  alt="Icon"
                  className="h-full hover:scale-110 transition-all duration-200 ease-linear"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-black font-normal">Kamil Żmijewski</p>
                <h2 className="text-[24px] leading-8 font-bold text-black">
                  Finding Product-Market: A Growth Campaign Case Study
                </h2>
                <p className="text-black font-normal">#Strategy</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white overflow-hidden border-1.5 border-black hover:shadow-lg transition-shadow duration-300">
              <div className="bg-black flex items-center justify-center">
                <img
                  src={img2}
                  alt="Icon"
                  className="h-full hover:scale-110 transition-all duration-200 ease-linear"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-black font-normal">Piotr Bernad</p>
                <h2 className="text-[24px] leading-8 font-bold text-black">
                  How to Improve Your Product Without Feature Rush?
                </h2>
                <p className="text-black font-normal">#Strategy</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white overflow-hidden duration-300">
              <div className="p-4 space-y-2">
                <h2 className="text-[20px] leading-8 font-bold text-black text-left">
                  Learn more from our experience. Check out our articles with
                  business and technical expertise.
                </h2>
                <div className="flex items-center mt-4">
                  <button className="button">
                    <span>Visit Our Blog</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-center items-center my-4 lg:px-0 xs:px-4">
        <button className="button">
          <span className="capitalize">Visit our blog For more</span>
        </button>
      </div>
    </div>
  );
};

export default Articles;
