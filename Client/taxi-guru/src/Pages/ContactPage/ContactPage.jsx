import React from "react";
import Ellipse1 from "/images/contact/Ellipse 793.png";
import Ellipse2 from "/images/contact/Ellipse 794.png";
import Footer from "../../Common/components/Footer";
import Map from "/images/contact/Map.png";
import { styles } from "../../Style";
export default function ContactPage() {
  return (
    <div className="w-[100%] m-0 lg:w-[70%] lg:mx-[15%]">
      <div className="text-center">
        <h2 className={`${styles.forResponsive}font-sans font-bold mt-8`}>
          Contact Us
        </h2>
        <p
          className={`${styles.forResponsive}text-gray-500 font-semibold mt-5 tracking-wider`}
        >
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* from dev */}

      <div className="flex-row lg:flex mt-16">
        <div className=" h-[650px] bg-[#FA8907] rounded-xl pt-7  shadow-3xl lg:w-[40%] ">
          <h4 className="text-3xl font-semibold tracking-wider pl-8 text-white">
            Contact Information
          </h4>
          <p className="mt-4 text-lg pl-8 font-extralight tracking-widest text-white ">
            Say something to start a live chat!
          </p>
          <div className="mt-24 ml-9 flex items-center text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="pb-1 ml-5 text-lg font-thin">
              <p>+91–9465342092</p>
            </div>
          </div>
          <div className="mt-10 ml-9 flex items-center text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
            <div className="pb-1 ml-5 text-lg font-thin">
              <p>parvinderlidder8092@gmail.com</p>
            </div>
          </div>
          <div className="mt-10 ml-9 flex items-center text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="pb-1 ml-5 text-lg font-thin">
              <p>
                Seunk, Mullanpur Garibdass, New <br /> Chandigarh, 140901
              </p>
            </div>
          </div>
          <div className="flex mt-40 ml-8 ">
            <div className="bg-[#1B1B1B] h-7 w-7 rounded-full mr-6"></div>
            <div className="bg-[#FFFFFF] h-7 w-7 rounded-full mr-6"></div>
            <div className="bg-[#1B1B1B] h-7 w-7 rounded-full"></div>
          </div>
        </div>

        {/* From */}

        <div className="w-[100%] bg-gray-700 mt-4 p-3 lg:w-[60%] lg:mt-10">
          <form className="text-gray-500">
            <div className="flex lg:w-[100%] gap-[10%]">
              <div className="mb-4 text-lg w-[45%]">
                <label htmlFor="First Name">First Name</label>
                <input
                  type="text"
                  className="border-b-2 border-gray- h-12 outline-none text-base w-full"
                />
              </div>

              <div className="mb-4 text-lg w-[45%]">
                <label htmlFor="First Name">Last Name</label>
                <input
                  type="text"
                  className="border-b-2 border-gray- h-12 outline-none text-base w-full"
                />
              </div>
            </div>

            <div className="flex lg:w-[100%] gap-[10%]">
              <div className="mb-4 text-lg w-[45%]">
                <label htmlFor="First Name">Email</label>
                <input
                  type="text"
                  className="border-b-2 border-gray- h-12 outline-none text-base w-full"
                />
              </div>

              <div className="mb-4 text-lg w-[45%]">
                <label htmlFor="First Name">Phone no</label>
                <input
                  type="text"
                  inputMode="numeric"
                  className="border-b-2 border-gray- h-12 outline-none text-base w-full"
                />
              </div>
            </div>

            <div className="mb-4 text-lg w-full">
              <label htmlFor="First Name">Journey Type</label>
              <input
                type="text"
                className="border-b-2 border-gray- h-12 outline-none text-base w-full"
              />
            </div>

            <div className="mb-4 text-lg w-full">
              <label htmlFor="First Name">Pick up and Drop Address *</label>
              <input
                type="text"
                className="border-b-2 border-gray- h-12 outline-none text-base w-full"
              />
            </div>

            <div className=" mt-16">
              <button className="bg-[#FA8907] text-white h-[56px] w-[195px] rounded-md text-lg shadow-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* from end */}

      <div>
        <h2 className={`${styles.forResponsive}mt-10 text-center font-extrabold`}>
          24/7 available for customer support
        </h2>
        <p className="text-center text-xl font-medium tracking-wider mt-5">
          At “The Taxi Guru”, we understand that travel plans can change at any
          time. That’s why our customer support <br />
          team is available 24/7 to assist you.
        </p>
      </div>
      <div className="mt-12 ml-6 mr-6 ">
        <img src={Map} alt="" className="w-full h-30" />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
