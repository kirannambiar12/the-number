import { formatPhoneNumber } from "@/app/global/utils";
import { toastActions } from "@/app/store/Toast/slice";
import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useDispatch } from "react-redux";
import CommentSection from "./CommentSection";
import scroll from "@/app/global/assets/images/scroll.png";
import Image from "next/image";
import layeredBg from "@/app/global/assets/svgs/4-point-stars.svg";

const NumberDetail = ({ data }: any) => {
  const dispatch = useDispatch();
  const { phoneNumber, ratings, uid } = data?.doc;

  if (data?.status === 201) {
    dispatch(
      toastActions.displayToast({
        message: `We have created a entry for (+91) ${formatPhoneNumber(
          phoneNumber
        )}.`,
        type: "success",
      })
    );
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",
          backgroundImage: `url(${layeredBg.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1% 10px",
        }}
        className="h-full min-h-screen flex flex-col justify-center"
      >
        <div>
          <h1 className="font-[FaseBulan] text-9xl text-center">
            {phoneNumber && `(+91) ${formatPhoneNumber(phoneNumber)}`}
          </h1>
          <div className="flex items-center mx-auto justify-center">
            <Rater interactive total={5} rating={2.6} />
          </div>
          <div className="flex flex-col font-[Electronic] text-2xl w-full max-w-md justify-center mx-auto">
            <div className="mt-16 flex justify-between hover:underline cursor-default">
              <span>First Name:</span>{" "}
              <span>{data?.doc?.firstName ?? "Unkown"}</span>
            </div>
            <div className="mt-5 flex justify-between hover:underline cursor-default">
              <span>Last Name:</span>{" "}
              <span>{data?.doc?.lastName ?? "Unkown"}</span>
            </div>
            <div className="mt-5 flex justify-between hover:underline cursor-default">
              <span> Email Name:</span>{" "}
              <span>{data?.doc?.email ?? "Unkown"}</span>
            </div>
            <div className="mt-5 flex justify-between hover:underline cursor-default">
              <span>Ratings:</span> <span>{ratings?.score}</span>
            </div>
          </div>
        </div>
        <a href="#commentSection">
          <Image
            width={50}
            height={50}
            src={scroll}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer animate-bounce"
            alt="thick-arrow-pointing-down"
          />
        </a>
      </div>
      <CommentSection number={phoneNumber} />
    </>
  );
};

export default NumberDetail;
