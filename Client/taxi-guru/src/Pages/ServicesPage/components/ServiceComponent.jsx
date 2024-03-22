import Slider from "./Slider";
import { HiPhone } from "react-icons/hi";
import ServiceData from "../data/ServiceData";
import home_taxi from "/images/home/home_taxi.png";
// import CountUpComponent from "../../HomePage/components/CountUpComponent";
import DiamondComponent from "./DiamondComponent";
import Footer from "../../../Common/components/Footer";
export default function ServiceComponent(props) {
  const data = ServiceData[props.id];

  return (
    <div>
      <section>
      {/* pt-8 pb-[100px] */}
        <div
          className={`bg-[url('/images/services/bg.png')] bg-center bg-no-repeat bg-cover  xs:min-h-[250px] flex flex-col justify-center items-center md:min-h-[500px]`}
        >
          <div className="text-center mt-4  mx-auto md:[60%]  md:mt-0">
            <p className="text-white font-extrabold md:text-[32px] xs:text-[20px] ">
              {data["div1"]["text1"]}
            </p>
          </div>
          <div className="text-center  w-[70%] mx-auto  space-y-3  mt-8  lg:w-[37%]">
            <p className="md:text-[32px] font-extrabold text-white xs:text-[18px]">
              {data["div1"]["text2"]}
            </p>
            <p className=" font-extrabold text-white md:text-[32px] ">
              {data["div1"]["text3"]}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="">
          {/* map here */}
          <img
            src={data["div2"]["imgPath"]}
            alt=""
            className="w-screen bg-no-repeat object-cover"
          />
        </div>
      </section>
      <section>
        <div className="bg-[url('/images/services/bg.png')] p-8 bg-center bg-cover bg-no-repeat ">
          <div className="">
        <div>
        <p className=" text-white text-fa-bold text-[25px] text-center md:text-[40px]">
              {data["div3"]["text1"]}
            </p>
        </div>
          <div className=" text-center leading-tight">
          <p className="text-white md:text-[32px] mt-8 xs:text-[20px]  ">
              {data["div3"]["text2"]}
            </p>
          </div>
            <p className="md:text-[20px] text-white mt-8 text-center xs:text-[16px]">
              {data["div3"]["text3"]}
            </p>

            <p className="text-white md:text-[20px] mt-8 text-center xs:text-[16px]">
              {data["div3"]["text4"]}
            </p>

            <p className="text-white md:text-[20px] mt-8 text-center xs:text-[16px]">
              {data["div3"]["text5"]}
            </p>
          </div>
          <div className=" flex justify-center mt-4">
            <div className="bg-[rgb(250,137,7)]  flex justify-center p-3 gap-2 rounded-full  ">
              <HiPhone size={30} />
              <p className=" text-[24px] font-bold">Contact Us</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[550px]">
        <Slider></Slider>
      </div>

      <section className=" ">
        <div className=" bg-black  flex justify-center items-center p-2">
          <div className=" justify-center items-center">
            <div className="flex"></div>
            <div className="text-center ">
              <p className="text-white font-bold text-[35px] md:text-3xl">
                Why Book with Us?
              </p>
            </div>
            <div className="flex justify-center items-center  mt-2">
              <div className="bg-white h-0.5  text-center ">
                <div className="w-12 mx-4 text-white"></div>
              </div>
              <img src={home_taxi} alt="" className="h-8" />
              <div className="bg-white h-0.5  text-center">
                <div className="w-12 mx-4 "></div>
              </div>
            </div>
            <p className="text-white text-xl text-center"></p>

            <div className="md:flex mt-8  justify-center items-center  ">
              <DiamondComponent
                image={ServiceData.diamonds.img1}
                title={ServiceData.diamonds.t1}
              ></DiamondComponent>
              <DiamondComponent
                image={ServiceData.diamonds.img2}
                title={ServiceData.diamonds.t2}
              ></DiamondComponent>
              <DiamondComponent
                image={ServiceData.diamonds.img3}
                title={ServiceData.diamonds.t3}
              ></DiamondComponent>
              <DiamondComponent
                image={ServiceData.diamonds.img4}
                title={ServiceData.diamonds.t4}
              ></DiamondComponent>
            </div>
          </div>
        </div>
      </section>
<Footer></Footer>
      {/* footer */}
      <div className="justify-between">
        <div className=" flex  justify-between items-center bg-primary p-6   font-bold text-4xl relative opacity-90">
          <div className="h-20 font-black py-4 text-[25px] text-nowrap  ">Need Taxi ?</div>

          <button className="bg-black uppercase text-white rounded-sm px-6 font-bold text-sm  py-2">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
