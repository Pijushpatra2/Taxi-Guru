import React from "react";

import car from "/images/home/home_1.jpeg";

function AboutPage() {
  return (
    <div>
      <div className="bg-gray-400 h-8">
        <p className=" font-black ml-2 ">About US</p>
      </div>
      <b className="text-orange-500 text-3xl ml-9">Who We Are?</b>

      <div className="h-auto w-[100%]  flex justify-center">
        <div className=" h-62 w-[40%] bg-red-500 font-sans font-semibold">
          At “the taxi guru”, we rethink travel in Seunk Mullanpur, New
          Chandigarh, with a promise to somewhere safe and secure, comfort, and
          reasonableness. <br />
          <br />
          Our different fleet of sedans, SUVs, and hatchbacks guarantees
          custom-made answers for each explorer. <br />
          <br />
          Book effortlessly through our easy to use application or a basic call,
          and trust “the taxi guru” for a dependable, secure, and pleasant
          excursion.
        </div>
        <div className="w-[40%] bg-red-500">
          <img src={car} className="h-[100%] w-[100%] " alt="" />
        </div>
      </div>
      <div className="h-auto w-[100%]  flex flex-row-reverse justify-center mt-4">
        <div className=" h-62 w-[40%] bg-red-500 font-sans font-semibold">
          At “the taxi guru”, we rethink travel in Seunk Mullanpur, New
          Chandigarh, with a promise to somewhere safe and secure, comfort, and
          reasonableness. <br />
          <br />
          Our different fleet of sedans, SUVs, and hatchbacks guarantees
          custom-made answers for each explorer. <br />
          <br />
          Book effortlessly through our easy to use application or a basic call,
          and trust “the taxi guru” for a dependable, secure, and pleasant
          excursion.
        </div>
        <div className="w-[40%] bg-red-500">
          <img src={car} className="h-[100%] w-[100%] " alt="" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AboutPage;
