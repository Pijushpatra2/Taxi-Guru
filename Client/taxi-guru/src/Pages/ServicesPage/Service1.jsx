import React from "react";
import Bg from "/images/services/bg.png";
import img1 from "/images/services/img-1.png";
import img2 from "/images/services/img-2.png";
import img3 from "/images/services/img-3.png";
import Footer1 from "../../Common/components/Footer1";
export default function Service1() {
  return (
    <div>
      {/* background pic */}
      <img
        src={Bg}
        className="h-[680px] w-screen bg-cover object-cover "
        alt="error"
      />
      {/* 1st conatiner */}
      <div className="mt-[-150px] flex justify-center items-center px-6">
        <div className="h-[550px] border-2 border-black bg-white shadow-lg rounded-[30px] flex justify-center items-center">
          <div className="h-[90%] w-[150%] px-5">
            <img
              src={img1}
              className="h-[100%] w-screen object-cover"
              alt="error"
            />
          </div>

          <div className="flex justify-end item-start w-[150%] h-[100%]">
            <div className="">
              <h1 className="text-center font-bold text-6xl mt-[30px]">
                SEDAN
              </h1>

              <p className="text-2xl mr-[70px] mt-[25px] px-5">
                Enjoy the exemplification of solace and style with our Sedans.
                Our cutting edge fleet guarantees a smooth ride, including
                extensive insides, environment control, Wi-Fi network, and USB
                charging ports. Ideal for air terminal exchanges, conferences,
                or city visits, our vehicles guarantee a dependable and rich
                transportation experience.
              </p>
              <div className="text-center mt-[50px]">
                <button className="bg-[#FA8907] text-black px-8 py-4 rounded-full text-3xl font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2st conatiner */}
      <div className="flex justify-center items-center px-6 mt-16">
        <div className="h-[550px] border-2 border-black bg-white shadow-lg rounded-[30px] flex justify-center items-center">
          <div className="flex w-[150%] h-[100%]">
            <div className="">
              <h1 className="text-center font-bold text-6xl mt-[30px]">SUV</h1>

              <p className="text-2xl ml-[70px] mt-[25px] px-5">
                Elevate your Travel experience with the robust and roomy SUVs.
                Our SUV armada consolidates solace and flexibility. Whether
                you’re leaving on a vacation or need a dependable ride for a
                gathering outing, our SUVs guarantee a smooth and secure
                excursion. Partake in the accommodation of an extensive inside
                and first rate conveniences, making each ride with us a
                paramount experience.
              </p>
              <div className="text-center mt-[30px]">
                <button className="bg-[#FA8907] text-black px-8 py-4 rounded-full text-3xl font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="h-[90%] w-[150%] px-5">
            <img
              src={img2}
              className="h-[100%] w-screen object-cover"
              alt="error"
            />
          </div>
        </div>
      </div>

      {/* 3st conatiner */}
      <div className="flex justify-center items-center px-6 mt-16">
        <div className="h-[550px] border-2 border-black bg-white shadow-lg rounded-[30px] flex justify-center items-center">
          <div className="h-[90%] w-[150%] px-5">
            <img
              src={img3}
              className="h-[100%] w-screen object-cover"
              alt="error"
            />
          </div>

          <div className="flex item-start w-[150%] h-[100%]">
            <div className="">
              <h1 className="text-center font-bold text-6xl mt-[30px]">
                HATCHBACK
              </h1>

              <p className="text-2xl mr-[70px] mt-[25px] px-5">
                Find comfort and nimbleness with our hatchback fleet.
                Conservative yet powerful, our hatchbacks give a productive and
                eco-accommodating metropolitan transportation arrangement. Ideal
                for exploring city roads, these vehicles gloat eco-friendliness,
                simple leaving, and a shockingly spacious inside.
              </p>
              <div className="text-center mt-[80px]">
                <button className="bg-[#FA8907] text-black px-8 py-4 rounded-full text-3xl font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36">
        <Footer1></Footer1>
      </div>
    </div>
  );
}
