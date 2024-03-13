import React from "react";
import about1 from "/images/about us/about1.png";
import about2 from "/images/about us/about2.png";
import gallery from "/images/about us/gallery.png";
import section from "/images/about us/section.png";
import action1 from "/images/about us/action 1.png";
import Footer1 from "../../Common/components/Footer1";

import car from "/images/home/home_1.jpeg";

function AboutPage() {
  return (
    <div>
      <div className="bg-gray-300 h-12 ">
        <p className="ml-[5%] pt-1.5 text-3xl font-light">ABOUT US</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-16">
        <div className="w-full md:w-2/5 lg:w-3/10 px-4 md:px-0">
          <div className="mb-5">
            <b className="text-[#FA8907] text-6xl font-medium">Who we are?</b>
          </div>
          <p className="text-base md:text-lg lg:text-xl">
            At “the taxi guru”, we rethink travel in Seunk Mullanpur, New
            Chandigarh, with a promise to somewhere safe and secure, comfort,
            and reasonableness. <br />
            <br />
            Our different fleet of sedans, SUVs, and hatchbacks guarantees
            custom-made answers for each explorer. <br />
            <br />
            Book effortlessly through our easy-to-use application or a simple
            call, and trust “the taxi guru” for a dependable, secure, and
            pleasant excursion.
          </p>
        </div>

        <div className="w-full md:w-3/5 lg:w-7/10 px-4 md:px-0 mt-8 md:mt-0">
          <img src={about1} className="w-full h-auto" alt="" />
        </div>
      </div>

      {/* 2nd div */}
      <div className="flex flex-col md:flex md:flex-row-reverse justify-between mt-16 ">
        <div className=" w-full md:w-2/5 lg:w-3/10 px-4 md:px-0">
          <div className="mb-5">
            <b className=" text-[#FA8907] text-6xl font-medium">
              Our Mission
            </b>
          </div>
          <p className="text-base md:text-lg lg:text-xl">
          “At “the taxi guru”, our mission is to give protected, dependable, and
          advantageous transportation arrangements in Seunk Mullanpur, New
          Chandigarh, and beyond.
          <br /> <br />
          We are focused on guaranteeing the prosperity of our travelers by
          keeping an fleet of well-equipped vehicles driven by proficient and
          respectful drivers.
          <br /> <br />
          Through straightforward valuing, and a devotion to consumer loyalty,
          we mean to reclassify the movement experience for people and families.
          <br /> <br />
          At “the taxi guru”, we don’t simply drive; we prepare for consistent,
          charming excursions, making each ride with us a vital encounter.”
          </p>
        </div>

        <div className="w-full md:w-3/5 lg:w-7/10 px-4 md:px-0 mt-8 md:mt-0 ">
          <img src={about2} className="w-full h-auto" alt="" />
        </div>
      </div>

















      {/* <div className="h-[30%] w-[100%]  flex  flex-row-reverse justify-between mt-16 ">
        <div className=" h-[560px] w-[50%]  font-sans text-[22px] mr-[2%] ml-[3%]">
          <div className="mb-5">
            <b className=" text-[#FA8907] text-6xl font-medium ml-[125px]">
              Our Mission
            </b>
          </div>
          “At “the taxi guru”, our mission is to give protected, dependable, and
          advantageous transportation arrangements in Seunk Mullanpur, New
          Chandigarh, and beyond.
          <br /> <br />
          We are focused on guaranteeing the prosperity of our travelers by
          keeping an fleet of well-equipped vehicles driven by proficient and
          respectful drivers.
          <br /> <br />
          Through straightforward valuing, and a devotion to consumer loyalty,
          we mean to reclassify the movement experience for people and families.
          <br /> <br />
          At “the taxi guru”, we don’t simply drive; we prepare for consistent,
          charming excursions, making each ride with us a vital encounter.”
        </div>

        <div className="h-[693px] w-[820px] ">
          <img src={about2} className="h-[600px] w-[950px]" alt="" />
        </div>
      </div> */}




      {/* deepam code */}
      <h3 class="text-orange-500 font-bold text-6xl flex justify-center">
        Why Choose Us?
      </h3>
      <div class="flex justify-center mt-14 ml-2">
        <img src={gallery} alt="Why to choose" width="100%" margin-left="2px" />
      </div>
      <div class="flex mt-14 ml-4 justify-evenly font-medium ">
        <div>
          <p class="text-3xl ml-28 ">Safety Assurance</p>
          <p class="mt-8 text-2xl text-center ml-3 pr-10">
            For us, your security is our first concern. Our fleet goes through
            customary support, and our expert drivers, dependent upon thorough
            historical verifications, focus on your prosperity. 
          </p>
        </div>
        <div>
          <p class="text-3xl ml-32 pl-6 ">Reliable Service</p>
          <p class="mt-8 text-2xl text-center ml-9  pl-4 ">
            Rely on “the taxi guru” for reliable and trustworthy transportation.
            Our obligation to provoke administration guarantees you arrive at
            your objective on time, without fail.
          </p>
        </div>
        <div class="">
          <p class="text-3xl ml-52 pl-8 ">Affordability</p>
          <p class="mt-8 text-2xl text-center  ml-20 pr-7">
            We have confidence in conveying quality transportation at open
            rates. Our obligation to moderateness guarantees you partake in an
            agreeable and solid excursion without settling for less on help
            greatness.
          </p>
        </div>
      </div>
      <div class="mt-32">
        <img src={section} alt="section" width="100%" height="23px" />
      </div>
      <div>
        <h2 class="text-orange-500 font-bold text-6xl flex justify-center mt-28">
          How To Book?
        </h2>
        <p class="text-center mt-14 text-2xl px-7 tracking-wide">
           Booking a ride with “the taxi guru” is fast and hassle-free. Choose
          the method that suits you best – use our easy to user-friendly app for
          consistent online appointments, visit our site to reserve a spot, or
          essentially call us. Our devoted client support group is prepared to
          help you. Partake in the accommodation of efficient booking, and trust
          us to give a reliable and agreeable excursion custom-made to your
          inclinations. Any place you’re going, “the taxi guru” is here to make
          your movement experience smooth and peaceful. 
        </p>
      </div>
      <div class=" mt-24">
        <img src={action1} alt="action1" width="100%" height="23px" />
      </div>
      <div class="mt-48">
        <Footer1></Footer1>
      </div>
    </div>
  );
}

export default AboutPage;
