import React from "react";
import Bg from "/images/services/bg.png";
import Slider from "./Slider";
import { HiPhone } from "react-icons/hi";

export default function ServiceComponent(props) {
  return (
    <div>
      <section>
        <div
          className={`bg-[url('/images/services/bg.png')] bg-center bg-no-repeat bg-cover pt-8 pb-[100px] `}
        >
          <div className="text-center  w-[60%] mx-auto">
            <p className="text-white font-extrabold text-[64px]">
              Chandigarh to Delhi taxi Services
            </p>
          </div>
          <div className="text-center  mt-[100px]">
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
        <div className= "h-[46.875rem]">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89797153295!2d77.04417330746466!3d28.527554408468337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710326830618!5m2!1sen!2sin"  height="751" className="border:0; w-[100%]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* map here */}



      </section>
      <section>
        <div className="bg-[url('/images/services/bg.png')] p-8 bg-center bg-cover">
          <div>
            <p className=" text-white text-fa-bold text-[40px] text-center">
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
          <div className=" flex justify-center mt-4">
            <div className="bg-[#fa8907]  w-[20%] flex justify-center p-2 gap-2 rounded-full ">
              <HiPhone size={35} />
              <p className=" text-[24px] font-bold">contact Us</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[550px]">{/* <Slider></Slider> */}</div>
      {/* footer */}
      <div className="justify-between">
          <div className=" flex  justify-between items-center bg-primary p-6   font-bold text-4xl relative opacity-90">
            <div className="h-20 font-black py-4">Need Taxi ?</div>

            <button className="bg-black uppercase text-white rounded-sm px-6 font-bold text-sm  py-2">
              Contact
            </button>
          </div>
        </div>
    </div>
  );
}
