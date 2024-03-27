import React from "react";
import image from "/images/home/home_taxi.png";

export default function HowItWorks() {
  return (
    <div className="my-8">
      <div className="bg-black text-primary">
        <div className="text-3xl p-4 font-bold text-center">HOW IT WORKS</div>
        <div className="flex justify-around py-4 pb-8 flex-col md:flex-row gap-y-8">
          <div className="flex flex-col items-center justify-center  gap-3 text-center   ">
            <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center p-2">
              <img src={image} alt="" />
            </div>
            <div className="text-xl">Call</div>
          </div>
          <div className="flex flex-col items-center justify-center  gap-3">
            <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center p-2">
              <img src={image} alt="" />
            </div>
            <div className="text-xl">Choose a car</div>
          </div>
          <div className="flex flex-col items-center justify-center  gap-3">
            <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center p-2">
              <img src={image} alt="" />
            </div>
            <div className="text-xl">Enjoy the ride</div>
          </div>
        </div>
      </div>
    </div>
  );
}
