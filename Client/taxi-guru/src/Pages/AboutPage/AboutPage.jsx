import about1 from "/images/about us/about1.png";
import about2 from "/images/about us/about2.png";
import gallery from "/images/about us/gallery.png";
import section from "/images/about us/section.png";
import action1 from "/images/about us/1800 1.png";
import maskgroup1 from "/images/about us/Mask Group.png";
import Footer from "../../Common/components/Footer";

function AboutPage() {
  return (
    <>
      <div className="h-[50rem] w-[100%]  mt-11 sm :h-[30rem] sm:flex  lg:h-[33rem] lg:text-xl  xl:h-[42rem]">
        <div className="h-[26rem] w-[100%]  p-3 sm:h-[29.7rem]  sm:text-lg sm:w-[50%] lg:h-[32.7rem] lg:text-[25px] lg:pl-7 xl:h-[41.7rem] xl:text-4xl xl:pr-3">
          <h1 className="h-[4rem] w-[100%]  p-5 text-[#FA8907] font-bold text-4xl lg:pl-6 lg:text-[50px]">
            Who we are?
          </h1>

          <p className="mt-4 drop-shadow-lg">
            At “the taxi guru”, we rethink travel in Seunk Mullanpur, New
            Chandigarh, with a promise to somewhere safe and secure, comfort,
            and reasonableness. <br />
            <br /> Our different fleet of sedans, SUVs, and hatchbacks
            guarantees custom-made answers for each explorer. <br />
            <br />
            Book effortlessly through our easy to use application or a basic
            call, and trust “the taxi guru” for a dependable, secure, and
            pleasant excursion.
          </p>
        </div>

        <div className="h-[24rem] w-[100%]  sm:h-[29.7rem] sm:w-[50%] lg:h-[32.7rem] xl:h-[41.7rem] ">
          <img
            className="h-[100%] w-[100%] sm:h-[100%] "
            src={about1}
            alt=""
          />
        </div>
      </div>

      <div className="h-[60em] w-[100%] mt-3  sm:h-[35rem] sm:mt-10 sm:flex sm:flex-row-reverse lg:h-[42rem]  xl:h-[42.5rem]">
        <div className="h-[35rem] w-[100%]  sm:text-[17px]  sm:font-normal lg:text-[22px] xl:font-normal xl:text-3xl">
          <h1 className="h-[3rem] w-[100%] pl-7 text-[#FA8907] font-bold text-4xl sm:mt-5 sm:pl-[5rem]  lg:text-[50px] xl:pl-56">
            Our Mission
          </h1>

          <p className="p-3 drop-shadow-lg  ">
            “At “the taxi guru”, our mission is to give protected, dependable,
            and advantageous transportation arrangements in Seunk Mullanpur, New
            Chandigarh, and beyond. <br />
            <br /> We are focused on guaranteeing the prosperity of our
            travelers by keeping an fleet of well-equipped vehicles driven by
            proficient and respectful drivers.
            <br />
            <br /> Through straightforward valuing, and a devotion to consumer
            loyalty, we mean to reclassNameify the movement experience for
            people and families. <br />
            <br /> At “the taxi guru”, we don’t simply drive; we prepare for
            consistent, charming excursions, making each ride with us a vital
            encounter.”
          </p>
        </div>

        <div className="h-[25.7rem] w-[100%]  sm:h-[34.7rem] lg:h-[41.7rem] xl:h-[42rem]">
          <img
            className="h-[100%] w-[100%]"
            src={maskgroup1}
            alt=""
          />
        </div>
      </div>

      <h1 className="h-[4rem] w-[100%] mt-7  text-center text-4xl text-[#FA8907] font-bold p-2 lg:text-[50px]">
        Why choose us
      </h1>

      <div className="h-[65.2rem] w-[100%] sm:h-[30rem] sm:flex  lg:h-[27.5rem] xl:h-[33rem] sm:pl-2 xl:pl-0 ">
        <div className="h-[23rem]     w-[100%] sm:flex flex-col sm:h-[26.7rem] sm:w-[15.5rem] lg:w-[21rem] xl:h-[32rem] xl:w-[30rem] 2xl:w-[53rem]">
          <div className="h-[11rem] w-[100%]  sm:h-[11.4rem] sm:w-[15.4rem] sm:object-contain lg:w-[20.7rem] xl:h-[17rem] xl:w-[29.9rem] 2xl:w-[52.8rem]">
            <img
              className="h-[100%] w-[100%]"
              src={action1}
              alt=""
            />
          </div>

          <div className="">
            <h3 className="h-[2.3rem] w-[100%]   text-xl font-normal text-center p-1 sm:pt-4  xl:text-2xl">
              Safety Assurance
            </h3>

            <p className="text-center sm:text-xl sm:pt-4 xl:text-[26px] xl:mt-4">
              For us, your security is our first concern. Our fleet goes through
              customary support, and our expert drivers, dependent upon thorough
              historical verifications, focus on your prosperity.  
            </p>
          </div>
        </div>

        <div className="h-[21rem]   w-[100%] sm:flex flex-col sm:h-[26.7rem] sm:ml-2 sm:w-[15.5rem]  lg:w-[21rem] xl:h-[32rem] xl:w-[30rem]  2xl:w-[53rem]">
          <div className="h-[11rem]  w-[100%] sm:h-[11.4rem] sm:w-[15.4rem] sm:object-contain lg:w-[20.9rem] xl:h-[17rem] xl:w-[29.9rem] 2xl:w-[52.8rem]">
            <img
              className="h-[100%] w-[100%]"
              src="/dist/picture/first picture.png"
              alt=""
            />
          </div>

          <div>
            <h3 className="h-[2.3rem] w-[100%]   text-xl font-normal text-center p-1 sm:pt-4  xl:text-2xl ">
              Reliable Service
            </h3>

            <p className="text-center sm:text-xl sm:pt-4 xl:text-[26px]  xl:mt-4">
              Rely on “the taxi guru” for reliable and trustworthy
              transportation. Our obligation to provoke administration
              guarantees you arrive at your objective on time, without fail.
            </p>
          </div>
        </div>

        <div className="h-[22rem]  w-[100%] sm:flex flex-col sm:h-[29.7rem] sm:ml-2 sm:w-[15.5rem] lg:h-[27rem] lg:w-[21rem] xl:h-[32rem] xl:w-[30rem]  2xl:w-[53rem]">
          <div className="h-[11rem]  w-[100%] sm:h-[11.2rem] sm:w-[15.4rem] sm:object-contain lg:w-[20.9rem] xl:h-[17rem] xl:w-[29.2rem] 2xl:w-[52.8rem]">
            <img
              className="h-[100%] w-[100%]"
              src={action1}
              alt=""
            />
          </div>

          <div>
            <h3 className="h-[2.3rem] w-[100%]   text-xl font-normal text-center p-1 sm:pt-4  xl:text-2xl">
              Affordability
            </h3>

            <p className="text-center sm:text-[18.2px] sm:pt-3 lg:text-xl xl:text-[26px]  xl:mt-4">
              we have confidence in conveying quality transportation at open
              rates. Our obligation to moderateness guarantees you partake in an
              agreeable and solid excursion without settling for less on help
              greatness.  
            </p>
          </div>
        </div>
      </div>

      <div className="h-[25.2rem] w-[100%] mt-5   sm:flex sm:h-[10.3rem] sm:w-[100%] lg:h-[16rem]">
        <img
          className="h-[12.3rem] w-[100%] sm:h-[10rem] sm:w-[49.2%] lg:h-[15.8rem]  lg:w-[49.5%]"
          src={maskgroup1}
          alt=""
        />
        <img
          className="h-[12.3rem] w-[100%] mt-2 sm:h-[10rem] sm:w-[49.2%] sm:mt-0 sm:ml-3 lg:h-[15.8rem] lg:w-[49.5%]"
          src="/dist/picture/picture987.png"
          alt=""
        />
      </div>

      <h1 className="text-4xl text-[#FA8907] text-center mt-4 font-bold lg:text-[50px] ">
        How to Book
      </h1>

      <p className="h-[22rem] w-[100%]  mt-2 p-2 text-center sm:h-[20rem] sm:text-2xl  sm::text-[30px] lg:h-[13rem] xl:text-[33px]">
         Booking a ride with “the taxi guru” is fast and hassle-free. Choose the
        method that suits you best – use our easy to user-friendly app for
        consistent online appointments, visit our site to reserve a spot, or
        essentially call us. Our devoted client support group is prepared to
        help you. Partake in the accommodation of efficient booking, and trust
        us to give a reliable and agreeable excursion custom-made to your
        inclinations. Any place you’re going, “the taxi guru” is here to make
        your movement experience smooth and peaceful. 
      </p>

      <div className="h-[36.3rem] w-[100%] bg-black mt-9 ">
        <h1 className="h-[4rem] w-[100%] p-4 font-mono  text-4xl font-bold text-yellow-300 text-center lg:text-[50px] ">
          HOW IT WORKS
        </h1>

        <div className="h-[32rem] w-[100%] bg-yellow-300 sm:flex ">
          <div className="h-[10rem] w-[100%] bg-pink-400 flex flex-col justify-center items-center">
            <img
              className="h-[7rem] w-[7rem] rounded-[50%] "
              src="/dist/picture/first picture.png"
              alt=""
            />
            <h4 className="text-xl text-yellow-300 text-[30px] pt-3 font-bold">
              Call
            </h4>
          </div>

          <div className="h-[10rem]  mt-2 w-[100%] bg-red-50 flex flex-col justify-center items-center">
            <img
              className="h-[7rem] w-[7rem] rounded-[50%] "
              src="/dist/picture/first picture.png"
              alt=""
            />
            <h4 className="text-xl text-yellow-300 text-[30px] pt-3 font-bold">
              Choose a car
            </h4>
          </div>

          <div className="h-[10rem] mt-2 w-[100%] bg-red-500 flex flex-col justify-center items-center">
            <img
              className="h-[7rem] w-[7rem] rounded-[50%] "
              src="/dist/picture/first picture.png"
              alt="image"
            />
            <h4 className="text-xl text-yellow-300 text-[30px] pt-3 font-bold">
              Enjoy the ride
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
