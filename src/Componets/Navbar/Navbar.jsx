import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/Apexture Icon Blue.png";
import { NavLink } from "react-router-dom";
import { IoRemoveOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  return (
    // <div className="fixed w-full">
    <section className="mx-auto relative lg:px-10 xs:px-2">
      <div className="flex justify-between items-center p-2">
        {/* Logo */}
        <div className="Logo flex">
          <NavLink to="/">
            <img src={logo} alt="Weblogo" className="h-10" />
          </NavLink>
        </div>

        {/* Desktop Menu (shown from lg and up) */}
        <div className="hidden lg:flex Sidebar">
          <ul className="flex justify-center items-center space-x-5">
            <li>
              <NavLink
                to="/Blog"
                className="hover:bg-[#C3C3C3] transition-all duration-200 ease-linear px-3 py-1.5"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className="hover:bg-[#C3C3C3] transition-all duration-200 ease-linear px-3 py-1.5"
              >
                Career
              </NavLink>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-[#C3C3C3] transition-all duration-200 ease-linear px-3 py-1.5"
              >
                Results of Our Work
              </a>
            </li>
            <li>
              <button className="button">
                <span>Get In Touch</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button (shown below lg) */}
        <div className="lg:hidden z-50 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {/* Icon for mobile menu */}
            {isOpen ? (
              <IoClose className="size-10" />
            ) : (
              <HiOutlineMenuAlt4 className="size-10" />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar Menu for Mobile (shown below lg) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#f0efef] transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <ul className="flex flex-col text-start space-y-5 mt-40">
          <li>
            <a
              href="#"
              className="hover:bg-[#D0FF6D] transition-all text-[30px] duration-200 ease-linear px-3 py-1.5 block w-full text-start"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-[#D0FF6D] transition-all text-[30px] duration-200 ease-linear px-3 py-1.5 block w-full text-start"
            >
              Career
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-[#D0FF6D] transition-all text-[30px] duration-200 ease-linear px-3 py-1.5 block w-full text-start"
            >
              Our Result
            </a>
          </li>
        </ul>
        <div className="absolute bottom-0 left-4 py-4">
          <button className="button w-56 h-auto">
            <span>Get In Touch</span>
          </button>
        </div>
      </div>

      {/* Overlay (shown when menu is open, with z-index) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 backdrop-blur-[2px] bg-black/30 z-30 lg:hidden" // Apply backdrop filter for blur and add transparent background
        />
      )}
    </section>
    // </div>
  );
};

export default Navbar;
