import { useState } from "react";
import Cards from "./components/Cards";
import home_taxi from "/images/home/home_taxi.png";
import CountUpComponent from "./components/CountUpComponent";
import { Button } from "@mui/material";
import Footer1 from "../../Common/components/Footer1";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div>
        <div
          className={`bg-cover bg-center h-screen  bg-no-repeat bg-[url('/images/home/home_1.jpeg')] flex justify-center items-center`}
        >
          <div className="font-extrabold text-8xl text-white">
            &ldquo;Let&apos;s roll! Book your taxi!&rdquo;
          </div>
        </div>
        {/* TAB  */}
        <div>
          <div className="flex flex-row">
            <Button
              variant="contained"
              size="small"
              onClick={() => handleChange("tab1")}
              className={activeTab === "tab1" ? "active" : ""}
            >
              Tab 1
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleChange("tab2")}
              className={activeTab === "tab2" ? "active" : ""}
            >
              Tab 2
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleChange("tab3")}
              className={activeTab === "tab3" ? "active" : ""}
            >
              Tab 3
            </Button>
          </div>
          <div>
            {activeTab === "tab1" && <div>TAB 1</div>}
            {activeTab === "tab2" && <div>TAB 2</div>}
            {activeTab === "tab3" && <div>TAB 3</div>}
          </div>
        </div>

        <div className="items-center text-center ">
          <div className=" flex   justify-center my-8 ">
            <img src={home_taxi} alt="" className="h-36" />
          </div>
          <p className="text-4xl font-bold text-shadow-lg  py-4">
            {" "}
            BOOK YOUR CARS WE SERVE
          </p>
          <p className="text-3xl text-wrap text-shadow-lg ">
            Ready to hit the road? At the taxi guru, your journey begins with a
            simple click.
          </p>
        </div>

        <div className="flex justify-around mt-16 px-8 items-center gap-x-20  ">
          <Cards
            image={home_taxi}
            title="About Us"
            description="Who We Are?  At “the taxi guru”, we rethink travel in Seunk Mullanpur, New Chandigarh, with a promise to somewhere safe and secure, comfort,..."
          ></Cards>
          <Cards
            image={home_taxi}
            title="Services"
            description="SEDAN Enjoy the exemplification of solace and style with our Sedans. Our cutting edge fleet guarantees a smooth ride, including , environment control,..."
          ></Cards>
          <Cards
            image={home_taxi}
            title="Contact Us"
            description="Thanks for contacting us!! Thank you for reaching out to “The Taxi Guru”. We value your feedback, inquiries, and suggestions. Get in touch with..."
          ></Cards>
        </div>

        <div className="h-[32rem] bg-black flex justify-center items-center ">
          <div>
            <div className="flex justify-center items-center">
              <img src={home_taxi} alt="" className="h-12" />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-primary text-2xl	 ">WHAT WE OFFER </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="font-black text-white text-6xl">OUR SERVICES</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-white text-4xl">
                Book Your Ride in Only a Couple of clicks!
              </p>
            </div>
          </div>
        </div>

        <div className="items-center text-center py-10 mb-8 ">
          <p className="text-4xl font-bold text-shadow-lg "> MEET THE FLEET</p>
          <div className=" flex   justify-center my-8 items-center">
            <div className="bg-black h-0.5  text-center">
              <div className="w-12 mx-4 "></div>
            </div>
            <img src={home_taxi} alt="" className="h-12" />
            <div className="bg-black h-0.5  text-center">
              <div className="w-12  mx-4 "></div>
            </div>
          </div>
          <p className="text-3xl text-wrap text-shadow-lg ">
            Meet the Fleet, Your Ticket to Tailored Travels – the taxi guru,
            Where Every Ride is a Signature Experience..
          </p>
        </div>
        <div className="h-[27rem] bg-black mt-16 mb-28 flex justify-center items-center">
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

            <div className="flex mt-8">
              <CountUpComponent
                image={home_taxi}
                end={100}
                title="CLIENTS"
              ></CountUpComponent>
              <CountUpComponent
                image={home_taxi}
                end={500}
                title="TRIPS DAILY"
              ></CountUpComponent>
              <CountUpComponent
                image={home_taxi}
                end={10000}
                title="KILOMETERS"
              ></CountUpComponent>
              <CountUpComponent
                image={home_taxi}
                end={100}
                title="CARS"
              ></CountUpComponent>
            </div>
          </div>
        </div>

        {/* footer */}

        <Footer1/>
      </div>
    </div>
  );
}
