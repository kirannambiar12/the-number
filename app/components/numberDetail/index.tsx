import { formatPhoneNumber } from "@/app/global/utils";
import { toastActions } from "@/app/store/Toast/slice";
import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useDispatch } from "react-redux";
import CommentSection from "./CommentSection";

const NumberDetail = ({ data }: any) => {
  const dispatch = useDispatch();
  const { phoneNumber, ratings } = data?.doc;

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
      <div className="mt-52 min-h-fit">
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
      <CommentSection uid={data?.doc?.uid?.trim()} />
    </>
  );
};

export default NumberDetail;
