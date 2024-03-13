import Slider from "./Slider";
import { HiPhone } from "react-icons/hi";
import ServiceData from "../data/ServiceData";
import home_taxi from "/images/home/home_taxi.png";
import CountUpComponent from "../../HomePage/components/CountUpComponent";
export default function ServiceComponent(props) {
  const data = ServiceData[props.id];
  return (
    <div>
      <section>
        <div
          className={`bg-[url('/images/services/bg.png')] bg-center bg-no-repeat bg-cover pt-8 pb-[100px] `}
        >
          <div className="text-center  w-[60%] mx-auto">
            <p className="text-white font-extrabold text-[64px]">
              {data['div1']['text1']}
            </p>
          </div>
          <div className="text-center  mt-[100px]">
            <p className="text-[32px] font-extrabold text-white">
            {data['div1']['text2']}
            </p>
            <p className="text-[32px] font-extrabold text-white">
            {data['div1']['text3']}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className= "">
{/* map here */}
        <img src={data['div2']['imgPath']} alt=""  className="w-screen bg-no-repeat object-cover"/>
        </div>
        



      </section>
      <section>
        <div className="bg-[url('/images/services/bg.png')] p-8 bg-center bg-cover">
          <div>
            <p className=" text-white text-fa-bold text-[40px] text-center">
            {data['div3']['text1']}

            </p>
            <p className="text-white text-[32px] mt-8 text-center">
            {data['div3']['text2']}
             
            </p>
            <p className="text-[20px] text-white mt-8">
            {data['div3']['text3']}

            </p>

            <p className="text-white text-[20px] mt-8">
            {data['div3']['text4']}

            </p>

            <p className="text-white text-[20px] mt-8">
            {data['div3']['text5']}
             
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
      <div className="h-[550px]"><Slider></Slider></div>

<section>
<div className=" bg-black py-16 flex justify-center items-center ">
          <div className=" justify-center items-center">
            <div className="flex"></div>
            <div className="text-center">
              <p className="text-white font-bold text-3xl">THETAXIGURU</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white h-0.5  text-center">
                <div className="w-12 mx-4 "></div>
              </div>
              <img src={home_taxi} alt="" className="h-8" />
              <div className="bg-white h-0.5  text-center">
                <div className="w-12 mx-4 "></div>
              </div>
            </div>
            <p className="text-white text-xl text-center">
              Counting on us for your travels – precision, reliability, and
              comfort at every turn with us
            </p>

            <div className="md:flex mt-8 md:flex-wrap justify-center items-center flex flex-wrap border-2">
              <CountUpComponent
                image={home_taxi}
           
                title="CLIENTS"
              ></CountUpComponent>
              <CountUpComponent
                image={home_taxi}
            
                title="TRIPS DAILY"
              ></CountUpComponent>
              <CountUpComponent
                image={home_taxi}
            
                title="KILOMETERS"
              ></CountUpComponent>
              <CountUpComponent
                image={home_taxi}
              
                title="CARS"
              ></CountUpComponent>
            </div>
          </div>
        </div>
</section>

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
