import homeImage_1 from "/images/home/home_1.jpeg";
import Cards from "./components/Cards";
import home_taxi from "/images/home/home_taxi.png"; 
import home_taxi_line from "/images/home/home_taxi_line.png"; 

export default function HomePage() {
  return (
    <div>
      <div>
        <div
          className={`bg-cover bg-center h-screen  bg-no-repeat bg-[url('/images/home/home_1.jpeg')] flex justify-center items-center`}
        >
          <div className="font-extrabold text-8xl text-white">
            “Let's roll! Book your taxi!"
          </div>
        </div>
        {/* piyush ,onkar  */}


         

        <div className="items-center text-center ">
          <div className=" flex   justify-center my-8 ">
           <img src={home_taxi} alt=""  className="h-36" />
          </div>
          <p className="text-4xl font-bold text-shadow-lg  py-4"> BOOK YOUR CARS WE SERVE</p>
         <p className="text-3xl text-wrap text-shadow-lg ">Ready to hit the road? At the taxi guru, your journey begins with a simple click.</p>
        </div>

        
        <div className="flex justify-around mt-16 px-8 items-center gap-x-20  ">
          
          <Cards image={home_taxi} title="About Us" description="Who We Are?  At “the taxi guru”, we rethink travel in Seunk Mullanpur, New Chandigarh, with a promise to somewhere safe and secure, comfort,..."></Cards>
          <Cards image={home_taxi} title="Services" description="SEDAN Enjoy the exemplification of solace and style with our Sedans. Our cutting edge fleet guarantees a smooth ride, including , environment control,..."></Cards>
          <Cards image={home_taxi} title="Contact Us" description="Thanks for contacting us!! Thank you for reaching out to “The Taxi Guru”. We value your feedback, inquiries, and suggestions. Get in touch with..."></Cards>
        
        </div>



        <div className="items-center text-center py-10 mb-8 ">
          <p className="text-4xl font-bold text-shadow-lg "> MEET THE FLEET</p>
          <div className=" flex   justify-center my-8 ">
            
           <img src={home_taxi_line} alt=""  className="h-12" />
          </div>
         <p className="text-3xl text-wrap text-shadow-lg ">Meet the Fleet, Your Ticket to Tailored Travels – the taxi guru, Where Every Ride is a Signature Experience..</p>
        </div>

        {/* footer */}
        
        <div className="   justify-between bg-black h-48">
        <div className=" flex  justify-between items-center bg-primary p-6  sm:mx-10 lg:mx-44 font-bold text-4xl relative -top-12 opacity-90">
          <div className="h-22 font-black py-4" >Need Taxi ?</div>

          <button className="bg-black uppercase text-white rounded-sm px-6 font-bold text-sm  py-2">
            Contact
          </button>
        </div>
      </div>

      </div>

    </div>
  );
}

