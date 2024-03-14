

export default function DiamondComponent(props) {
  return (
    <div className="flex-col justify-center m-8 ">
      <div className=" flex justify-center items-center"></div>
      <div className=" flex justify-center">
        <div className="h-20 w-20 transform rotate-45  border-black flex flex-col items-center justify-center bg-white">
          <div className="transform -rotate-45 ">
            <img src={props.image} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="mx-4  mt-8">
    
        <div className="uppercase text-3xl font-bold  mt-4 text-white text-center text-[32px]">
          {props.title}
        </div>
      </div>
    </div>
  );
}
