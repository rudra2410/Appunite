import React from "react";
import { NavLink } from "react-router-dom";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo (2).png";
import { TiWorld } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] py-10">
      <div className="px-3 lg:container mx-auto">
        {/* Main Footer Section */}

        <div className="flex flex-col xs:justify-start xs:items-start lg:justify-start lg:items-start lg:flex-row lg:space-x-10 space-y-8 lg:space-y-0 ">
          {/* Logo Section */}
          <div className="flex-1">
            <img src={logo} alt="logo" className="h-20" />
          </div>

          {/* Site Map Section */}
          <div className="">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-black mb-4">
              Site Map
            </h3>
            <ul className="space-y-4 text-left">
              <li>
                <NavLink
                  to="/"
                  className="hover:bg-[#c5c5c5] transition-all duration-200 rounded ease-in font-bold px-1 py-1.5 block"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/article"
                  className="hover:bg-[#c5c5c5] transition-all duration-200 rounded ease-in font-bold px-1 py-1.5 block"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Business"
                  className="hover:bg-[#c5c5c5] transition-all duration-200 rounded ease-in font-bold px-1 py-1.5 block"
                >
                  Our Results
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="hover:bg-[#c5c5c5] transition-all duration-200 rounded ease-in font-bold px-1 py-1.5 block"
                >
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="hover:bg-[#c5c5c5] transition-all duration-200 rounded ease-in font-bold px-1 py-1.5 block"
                >
                  About us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-black mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:business@appunite.com"
                  className="underline-hover"
                >
                  business@appunite.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:career@appunite.com"
                  className="underline-hover"
                >
                  career@appunite.com
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-black mb-4">
              Company
            </h3>
            <address className="space-y-4">
              <h1>Appunite S.A.</h1>
              <h1 className="leading-7">
                Droga Dębińska 3A/3 <br /> 61-555 Poznań, Poland
              </h1>
              <h1 className="leading-7">
                REGON: 302140635 <br /> VAT ID (EU): PL7831812112
              </h1>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black lg:mt-20 pt-4 flex flex-col lg:flex-row justify-between items-center text-[14px] sm:text-[16px] text-black">
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-5">
            <h1 className="text-black font-normal text-center lg:text-left md:text-black">
              © Appunite S.A. All rights reserved
            </h1>
            <div className="space-x-5 flex">
              <div className="flex items-center">
                <a href="#" className="underline-hover">
                  Cookie Policy
                </a>
                <HiMiniArrowUpRight className="size-6 text-[#235AB9]" />
              </div>
              <div className="flex items-center">
                <a href="#" className="underline-hover">
                  Privacy Policy
                </a>
                <HiMiniArrowUpRight className="size-6 text-[#235AB9]" />
              </div>
            </div>
          </div>

          <div className="flex space-x-6 xs:mt-4 lg:mt-0">
            {/* Social Icons */}
            <a href="#">
              <FaLinkedin className="icon-hover-effect" />
            </a>
            <a href="#">
              <TiWorld className="icon-hover-effect" />
            </a>
            <a href="#">
              <AiFillInstagram className="icon-hover-effect" />
            </a>
            <a href="#">
              <FaGithub className="icon-hover-effect" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
