import React from "react";
import about1 from "/images/about us/about1.png";
import about2 from "/images/about us/about2.png";

import car from "/images/home/home_1.jpeg";

function AboutPage() {
  return (
    <div>
      <div className="bg-gray-300 h-12 ">
        <p className="ml-10 pt-1.5 text-3xl font-light">ABOUT US</p>
      </div>

      <div className="h-[20%] w-[100%]  flex  justify-between mt-16 ">
        <div className=" h-[500px] w-[45%]  font-sans text-[21.5px] ml-[5%] ">
          <div className="mb-5">
            <b className=" text-[#FA8907] text-6xl font-medium ">Who we are?</b>
          </div>
          At “the taxi guru”, we rethink travel in Seunk Mullanpur, New
          Chandigarh, with a promise to somewhere safe and secure, comfort, and
          reasonableness. <br />
          <br />
          Our different fleet of sedans, SUVs, and hatchbacks guarantees
          custom-made answers for each explorer. <br />
          <br />
          Book effortlessly through our easy to use application or a basic call,
          and trust “the taxi guru” for a dependale, secure, and pleasant
          excursion.
        </div>

        <div className=" w-[770px]">
          <img src={about1} className=" " alt="" />
        </div>
      </div>

      {/* 2nd div */}

      <div className="h-[30%] w-[100%]  flex  flex-row-reverse justify-between mt-16 ">
        <div className=" h-[560px] w-[50%]  font-sans text-[22px] mr-[5%]">
          <div className="mb-5">
            <b className=" text-[#FA8907] text-6xl font-medium ml-[125px]">
              Our Mission
            </b>
          </div>
          “At “the taxi guru”, our mission is to give protected, dependable, and
          advantageous transportation arrangements in Seunk Mullanpur, New
          Chandigarh, and beyond.
          <br />
          <br />
          We are focused on guaranteeing the prosperity of our travelers by
          keeping an fleet of well-equipped vehicles driven by proficient and
          respectful drivers.
          <br />
          <br />
          Through straightforward valuing, and a devotion to consumer loyalty,
          we mean to reclassify the movement experience for people and families.
          <br />
          <br />
          At “the taxi guru”, we don’t simply drive; we prepare for consistent,
          charming excursions, making each ride with us a vital encounter.”
          <br />
        </div>

        <div className="w-[750px] ">
          <img src={about2} className=" " alt="" />
        </div>
      </div>

      {/* deepam code */}
    </div>
  );
}

export default AboutPage;
