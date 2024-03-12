import React from "react";
import Bg from "/images/services/bg.png";
import Slider from "./Slider";
import { HiPhone } from "react-icons/hi";

export default function ServiceComponent(props) {
  return (
    <div>
      <section>
        <div
          className={`bg-[url('/images/services/bg.png')] bg-center bg-no-repeat bg-cover pt-8 pb-[100px] border-2`}
        >
          <div className="text-center border-2 w-[60%] mx-auto">
            <p className="text-white font-extrabold text-[64px]">
              Chandigarh to Delhi taxi Services
            </p>
          </div>
          <div className="text-center border-2 mt-[100px]">
            <p className="text-[32px] font-extrabold text-white">
              Book your taxi chadigarh to delhi at lowest price
            </p>
            <p className="text-[32px] font-extrabold text-white">
              -No extra charges-
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <img className="w-[100%] h-[400px]" src={Bg} alt="name" />
        </div>
      </section>
      <section>
        <div className="bg-[url('/images/services/bg.png')] p-8 bg-center bg-cover">
          <div>
            <p className="border-2 text-white text-fa-bold text-[40px] text-center">
              Know about our services--
            </p>
            <p className="text-white text-[32px] mt-8">
              The one-way distance from Chandigarh to Delhi is approximately 252
              kilometers, with an estimated duration of around 3.53 hours.
            </p>
            <p className="text-[20px] text-white mt-8">
              Chandigarh to Delhi taxi services are readily available
              year-round, ensuring a convenient and comfortable travel
              experience. THETAXIGURU offers a wide selection of cabs equipped
              with various amenities to cater to your preferences. When booking
              a taxi online, you’ll have access to all available options,
              allowing you to select the car model that best suits your budget
              and travel requirements. Choose from popular models such as Etios
              DZire, Xcent, Ertiga, Innova, Crysta, and more, available in both
              4-seater and 6-seater configurations.
            </p>

            <p className="text-white text-[20px] mt-8">
              Our drivers are not only well-trained but also courteous, ensuring
              that your journey is both safe and enjoyable. Detailed information
              about the cab and driver is provided 30 minutes prior to the
              scheduled pickup time, giving you peace of mind throughout your
              travel.
            </p>

            <p className="text-white text-[20px] mt-8">
              With THETAXIGURU , you can now easily book Chandigarh to Delhi
              taxi services at the best prices. Our 24/7 outstation cab services
              ensure that your travel needs are met anytime, anywhere.
              Experience a hassle-free journey with THETAXIGURU and let us take
              care of your every need. To book round trip or one-way services
              for Chandigarh to Delhi or any other destination in India, simply
              visit thetaxiguru.com or call us today.
            </p>
          </div>
          <div className="border-2 flex justify-center mt-4">
            <div className="bg-[#fa8907] border-2 w-[20%] flex justify-center p-2 gap-2 rounded-full ">
              <HiPhone size={35} />
              <p className=" text-[24px] font-bold">contact Us</p>
            </div>
          </div>
        </div>
      </section>
      <div>{/* <Slider></Slider> */}</div>
    </div>
  );
}
