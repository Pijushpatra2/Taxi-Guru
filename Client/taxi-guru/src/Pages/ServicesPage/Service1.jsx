import React from "react";
import Background from "/images/home/home_1.jpeg";
export default function Service1() {
  return (
    <div>
        <img src={Background} className="h-[680px] w-screen bg-cover object-cover"  alt="" />
      <div className=" flex justify-center items-center px-8">
        <div className="h-[30%] border-2 border-black shadow-2xl rounded-md flex justify-center items-center">
          <img src={Background} className="h-[30rem] bg-cover object-cover" alt="error" />
          <p>
            Enjoy the exemplification of solace and style with our Sedans. Our
            cutting edge fleet guarantees a smooth ride, including extensive
            insides, environment control, Wi-Fi network, and USB charging ports.
            Ideal for air terminal exchanges, conferences, or city visits, our
            vehicles guarantee a dependable and rich transportation experience.
          </p>
        </div>
      </div>
    </div>
  );
}
