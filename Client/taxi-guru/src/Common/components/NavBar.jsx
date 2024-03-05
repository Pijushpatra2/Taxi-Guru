import React from "react";
import { useState } from "react";
import logo from "/images/common/logo.png";
function NavBar() {
  const [showService, setshowService] = useState(false);

  return (
    <div>
      <nav className="text-white bg-black flex justify-between">
        <img
          className="inline"
          src="https://thetaxiguru.com/wp-content/uploads/2024/01/Untitled-design.png"
          alt="Logo"
        />
        <div>
          <ul className="flex justify-end items-center">
            <li className="my-6 px-8 py-1 text-2xl  hover:bg-[#fa8907] rounded-3xl">
              HOME
            </li>
            <li className="my-6 px-8 py-1 text-2xl hover:bg-[#fa8907] rounded-2xl">
              ABOUT US
            </li>
            <li className="my-6 px-8 py-1  text-2xl hover:bg-[#fa8907] rounded-2xl">
              SERVICES
            </li>
            <li className="my-6 mr-4 px-8 py-1 text-2xl hover:bg-[#fa8907] rounded-2xl">
              CONTACT US
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
