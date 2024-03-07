import React from "react";
import Background from "/images/home/home_1.jpeg";
export default function Service1() {
  return (
    <div>
      <img
        src={Background}
        className="h-[680px] w-screen bg-cover object-cover "
        alt=""
      />

      <div className="mt-[-150px] flex justify-center items-center px-6">
        <div className="h-[550px] border-2 border-black bg-white shadow-2xl rounded-[43px] flex justify-center items-center">
          <div className="h-[90%] w-[150%] px-5">
            <img src={Background} className="h-[100%]" alt="error" />
          </div>

          <div className="flex justify-end item-start w-[150%] m-[38px]">
            <div className="">
              <h1 className="text-center font-bold text-4xl m-[30px]">SEDAN</h1>

              <p className="text-2xl px-5">
                Enjoy the exemplification of solace and style with our Sedans.
                Our cutting edge fleet guarantees a smooth ride, including
                extensive insides, environment control, Wi-Fi network, and USB
                charging ports. Ideal for air terminal exchanges, conferences,
                or city visits, our vehicles guarantee a dependable and rich
                transportation experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
