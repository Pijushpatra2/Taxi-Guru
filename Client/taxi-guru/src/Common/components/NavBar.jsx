import React from "react";
import { useState } from "react";
import logo from "/images/common/logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className="text-white bg-black flex justify-between">
        <NavLink to="/">
          <img className="inline" src={logo} alt="Logo" />
        </NavLink>
        <div>
          <ul className="flex justify-end items-center uppercase">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
            >
              ABOUT US
            </NavLink>{" "}
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
            >
              SERVICES
            </NavLink>{" "}
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
            >
              CONTACT US
            </NavLink>
          </ul>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 my-2 mx-4 min-w-[140px] z-10 rounded-xl`}
          ></div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
