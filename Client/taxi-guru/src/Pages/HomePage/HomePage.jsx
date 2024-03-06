import homeImage_1 from "/images/home/home_1.jpeg";

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
        <div>
          <button>Rental</button>
          <button>Daily</button>
          <button>Outstation</button>
        </div>
        <div className="h-36 bg-primary"></div>
        <div className="flex justify-around mt-16 ">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
}

const Cards = (props) => {
  return (
    <>
      <div>
        <div className="h-24 w-24 border-8 transform rotate-45 border-[#F9973D]">
          <div className="transform -rotate-45">test</div>
        </div>
      </div>
    </>
  );
};
