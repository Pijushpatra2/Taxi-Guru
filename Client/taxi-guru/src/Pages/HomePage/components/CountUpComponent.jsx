
import CountUp from "react-countup";
export default function CountUpComponent(props) {
  return (
    <div className="flex m-8">
      <div className=" flex justify-center items-center"></div>
      <div>
        <div className="h-20 w-20 transform rotate-45 border border-black flex flex-col items-center justify-center bg-white">
          <div className="transform -rotate-45 ">
            <img src={props.image} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="mx-4">
        <div>
          <CountUp
            start={0}
            end={props.end}
              enableScrollSpy={true}
            className="font-bold text-5xl text-white"
            suffix="+"
          ></CountUp>
        </div>
        <div className="uppercase text-3xl font-bold text-primary">
          {props.title}
        </div>
      </div>
    </div>
  );
}
