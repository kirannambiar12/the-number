import { formatPhoneNumber, getSVGComponent } from "@/app/global/utils";
import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const NumberDetail = ({ data }: any) => {
  return (
    <div className="mt-52 min-h-screen">
      <h1 className="font-[FaseBulan] text-9xl text-center">
        {data?.phoneNumber && `(+91) ${formatPhoneNumber(data.phoneNumber)}`}
      </h1>
      <div className="flex items-center mx-auto justify-center">
        <Rater interactive total={5} rating={2.6} />
      </div>
      <div className="flex flex-col font-[Electronic] text-2xl w-full max-w-md justify-center mx-auto">
        <div className="mt-16 flex justify-between hover:underline cursor-default">
          <span>First Name:</span> <span>Unkown</span>
        </div>
        <div className="mt-5 flex justify-between hover:underline cursor-default">
          <span>Last Name:</span> <span>Unkown</span>
        </div>
        <div className="mt-5 flex justify-between hover:underline cursor-default">
          <span> Email Name:</span> <span>Unkown</span>
        </div>
        <div className="mt-5 flex justify-between hover:underline cursor-default">
          <span>Ratings:</span> <span>{data?.ratings?.score}</span>
        </div>
      </div>
    </div>
  );
};

export default NumberDetail;
