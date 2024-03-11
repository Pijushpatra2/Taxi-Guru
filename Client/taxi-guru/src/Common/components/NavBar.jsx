import React, { useState } from "react";
import logo from "/images/common/logo.png";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { styles } from "../../Style";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav
        className={`${styles.paddingX} w-full text-white bg-black flex top-0 `}
      >
        <div className="w-full flex justify-between items-center mx-auto">
          <NavLink to="/">
            <img className="inline object-contain" src={logo} alt="Logo" />
          </NavLink>
          <div className="">
            <ul className="hidden lg:flex flex-row gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `my-6 px-4 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                    isActive ? "bg-primary" : ""
                  }`
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `my-6 px-4 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                    isActive ? "bg-primary" : ""
                  }`
                }
              >
                ABOUT US
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `my-6 px-4 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                    isActive ? "bg-primary" : ""
                  }`
                }
              >
                SERVICES
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `my-6 px-4 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                    isActive ? "bg-primary" : ""
                  }`
                }
              >
                CONTACT US
              </NavLink>
            </ul>
          </div>
        </div>

        {/* Toggle button */}
        <button
          className="lg:hidden flex items-center px-3 py-2 text-white"
          onClick={handleToggle}
        >
          {toggle ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Responsive */}
      {toggle && (
        <div className="lg:hidden bg-black text-white">
          <ul className="flex flex-col items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
              onClick={handleToggle}
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
              onClick={handleToggle}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
              onClick={handleToggle}
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full mx-2 ${
                  isActive ? "bg-primary" : ""
                }`
              }
              onClick={handleToggle}
            >
              CONTACT US
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
