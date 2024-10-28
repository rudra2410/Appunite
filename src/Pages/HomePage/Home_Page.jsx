import React, { useEffect, useState } from "react";
import Hero_Section from "../HomePage/Hero_Section";
import FAQ_Section from "../HomePage/FAQ_Section";
import Help_Section from "../HomePage/Help_Section";
import Slide from "../HomePage/Slide";
import Contact from "../HomePage/Contact";
import Employee from "../HomePage/Employee";
import Business_Section from "../HomePage/Business_Section";
import Articles from "../HomePage/Articles";
import { FaArrowUp } from "react-icons/fa6";

const Home_Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 bg-[rgb(35,90,185)] transition-opacity duration-[3s] opacity-100 z-50">
          <div className="flex justify-center items-center mt-60">
            <h2 data-text="Appunite" className="animated-logo tracking-widest">
              Appunite
            </h2>
          </div>
        </div>
      )}
      <div
        className={`transition-opacity duration-[1.5s] ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Hero_Section />
        <FAQ_Section />
        <Help_Section />
        <Employee />
        <Slide />
        <Business_Section />
        <Articles />
        <Contact />
        <div className="relative z-10">
          <button
            onClick={scrollToTop}
            className="lg:w-12 lg:h-12 xs:w-10 xs:h-10 bottom-6 right-6 bg-main-color flex justify-center items-center lg:right-12 rounded-full lg:bottom-24 fixed"
          >
            <FaArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home_Page;
