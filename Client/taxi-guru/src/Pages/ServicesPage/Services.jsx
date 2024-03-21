import Footer from "../../Common/components/Footer";
import ServiceData from "./data/ServiceData";
export default function Services() {
  const data = ServiceData["main"];
  return (
    <div>
      <div className=" ">
        <img
          src={data["div1"]["imgPath"]}
          className=" w-[100%] bg-cover object-cover "
          alt="error"
        />
      </div>
      <div className="flex flex-col items-center relative bottom-16  ">
        <div className=" flex flex-col gap-8 sm:w[80%] md:w-[80%] bg-white rounded-full">
          <div className="flex gap-4 border-4 p-4 rounded-3xl lg:flex-row flex-col bg-white">
            <div className="flex-1 ">
              <img
                className="w-full h-full  object-center object-cover"
                src={data["div2"]["imgPath"]}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className=" flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-center ">
                  {data["div2"]["text1"]}
                </h1>

                <p className="text-center text-xl md:text-2xl  ">
                  {data["div2"]["text2"]}
                </p>
                <div className="text-center">
                  <button className="bg-[#FA8907] text-black px-8 py-4 rounded-full text-3xl font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 border-4 p-4 rounded-3xl lg:flex-row flex-col ">
            <div className="flex-1">
              <div className=" flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-center ">
                  {data["div3"]["text1"]}
                </h1>

                <p className="text-center text-xl md:text-2xl  ">
                  {data["div3"]["text2"]}
                </p>
                <div className="text-center">
                  <button className="bg-[#FA8907] text-black px-8 py-4 rounded-full text-3xl font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 ">
              <img
                className="w-full h-full  object-center object-cover"
                src={data["div3"]["imgPath"]}
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-4 border-4 p-4 rounded-3xl lg:flex-row flex-col ">
            <div className="flex-1 ">
              <img
                className="w-full h-full  object-center object-cover"
                src={data["div1"]["imgPath"]}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className=" flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-center ">
                  {data["div4"]["text1"]}
                </h1>

                <p className="text-center text-xl md:text-2xl  ">
                  {data["div4"]["text2"]}
                </p>
                <div className="text-center">
                  <button className="bg-[#FA8907] text-black px-8 py-4 rounded-full text-3xl font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" ">
          <img
            src={data["div1"]["imgPath"]}
            className=" w-[100%] bg-cover object-cover "
            alt="error"
          />
        </div>

        <div className="  border-green-700   flex justify-center items-center px-6 relative top-[120px]">
          <div className="  border-2 border-black bg-white shadow-lg rounded-[30px] md:flex flex-row">
            <div className="flex justify-centerh-[35%] w-[100%] px-5 py-5 md:h-[100%] md:flex ">
              <img
                src={data["div2"]["imgPath"]}
                className="text-center h-[273px] w-[360px] object-cover md:h-[100%] md:w-screen md:bg-contain"
                alt="error"
              />
            </div>

            <div className="w[141%] md:item-end md:w-[150%]">
              <div className="">
                <h1 className="text-4xl font-bold text-center md:text-center md:font-bold md:text-6xl md:mt-[30px]">
                  {data["div2"]["text1"]}
                </h1>

                <p className="text-center text-xl md:text-2xl my-5 md:mr-[70px] md:mt-[25px] md:text-start px-5 ">
                  {data["div2"]["text2"]}
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
      </div>

      {/* 2st conatiner */}
      <div className="flex justify-center items-center px-6 mt-16 ">
        <div className="flex flex-col-reverse justify-end h-[900px] md:h-[550px] border-2 border-black bg-white shadow-lg rounded-[30px] md:flex md:flex-row">
          <div className="w[141%] md:item-end md:w-[150%]">
            <div className="">
              <h1 className="text-4xl font-bold text-center md:text-center md:font-bold md:text-6xl md:mt-[30px]">
                {data["div3"]["text1"]}
              </h1>

              <p className="text-center text-xl md:text-2xl my-5 md:ml-[70px] md:mt-[25px] md:text-start px-5">
                {data["div3"]["text2"]}
              </p>
              <div className="text-center mt-[30px]">
                <button className="bg-[#FA8907] text-black px-8 py-4 rounded-full text-3xl font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="h-[38%] w-[100%] px-5 py-5 md:h-[100%] md:flex md:w-[150%]">
            <img
              src={data["div3"]["imgPath"]}
              className=" text-center h-[300px] w-[360px] object-cover md:h-[100%] md:w-screen md:bg-contain"
              alt="error"
            />
          </div>
        </div>
      </div>

      {/* 3st conatiner */}
      <div className="flex items-center px-6 mt-16">
        <div className="h-[900px] md:h-[550px] border-2 border-black bg-white shadow-lg rounded-[30px] md:flex flex-row">
          {" "}
          {/*h-[550px] border-2 border-black bg-white shadow-lg rounded-[30px] flex flex-col justify-center items-center*/}
          <div className="h-[35%] w-[100%] px-5 py-5 md:h-[100%] md:flex md:w-[150%]">
            <img
              src={data["div4"]["imgPath"]}
              className="text-center h-[273px] w-[360pxpx] object-cover md:h-[100%] md:w-screen md:bg-contain"
              alt="error"
            />
          </div>
          <div className="w[141%] md:item-end md:w-[150%]">
            <h1 className="text-4xl font-bold text-center md:text-center md:font-bold md:text-6xl md:mt-[30px]">
              {data["div4"]["text1"]}
            </h1>

            <p className="text-center text-xl md:text-2xl my-5 md:mr-[70px] md:mt-[25px] md:text-start px-5">
              {data["div4"]["text2"]}
            </p>
            <div className="text-center mt-[80px]">
              <button className="bg-[#FA8907] text-black px-8 py-4 rounded-full text-3xl font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="cards">
        <div className="flex items-center px-6 mt-16">
          <div className=" border-2 border-black bg-white shadow-lg rounded-[30px] md:flex flex-row ">
            <div className=" w-[50%] px-5 py-5 md:h-[100%] md:flex">
              <img
                src={data["div4"]["imgPath"]}
                className="text-center object-cover h-[100%] w-full md:bg-contain"
                alt="error"
              />
            </div>
            <div className=" md:item-end w-[50%]">
              <h1 className="text-4xl font-bold text-center md:text-center md:font-bold md:text-6xl md:mt-[30px]">
                {data["div4"]["text1"]}
              </h1>

              <p className="text-center text-xl md:text-2xl my-5 md:mr-[70px] md:mt-[25px] md:text-start px-5">
                {data["div4"]["text2"]}
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
        <Footer></Footer>
      </div>
    </div>
  );
}
