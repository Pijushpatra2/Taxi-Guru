import React from "react";
import Background from "/images/home/home_1.jpeg";
import { Button } from "@mui/material";
export default function Service1() {
  return (
    <div>
      <img
        src={Background}
        className="h-[680px] w-screen bg-cover object-cover "
        alt=""
      />

      <div className="mt-[-150px] flex justify-center items-center px-6">
        <div className="h-[550px] border-2 border-black bg-white shadow-2xl rounded-[30px] flex justify-center items-center">
          <div className="h-[90%] w-[150%] px-5">
            <img
              src={Background}
              className="h-[100%] w-screen object-cover"
              alt="error"
            />
          </div>

          <div className="flex justify-end item-start w-[150%] h-[100%]">
            <div className="">
              <h1 className="text-center font-bold text-4xl mt-[30px]">
                SEDAN
              </h1>

              <p className="text-2xl mr-[70px] mt-[48px] px-5">
                Enjoy the exemplification of solace and style with our Sedans.
                Our cutting edge fleet guarantees a smooth ride, including
                extensive insides, environment control, Wi-Fi network, and USB
                charging ports. Ideal for air terminal exchanges, conferences,
                or city visits, our vehicles guarantee a dependable and rich
                transportation experience.
              </p>
              <div className="text-center">
                <button className="bg-orange-400 text-black font-bold px-4 py-4 rounded-full text-xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
