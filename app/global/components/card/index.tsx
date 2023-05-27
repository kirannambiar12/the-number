import React from "react";

const Card = () => {
  return (
    <div
      //   style={{
      //     backgroundColor: "#000000",
      //     backgroundImage: `url(${X.src})`,
      //   }}
      className="!z-5 relative rounded-[20px] max-w-[300px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] h-96 mx-auto mt-20 hover:border-2 hover:border-blue-600 cursor-pointer border-2 border-white"
    >
      <div className="h-1/2 w-full rounded-lg px-3 py-10 justify-center flex flex-col text-black ">
        <h2 className="text-center text-white text-2xl"> 999999999999 </h2>
      </div>
      <div className="flex text-white justify-around h-full">
        <div className="flex flex-col justify-center">
          <span>Ratings</span>
          <span>4+</span>
        </div>
        <div className="flex flex-col justify-center">
          <span>Comments</span>
          <span>3+</span>
        </div>
        <div className="flex flex-col justify-center">
          <span>Complaints</span>
          <span>2+</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
