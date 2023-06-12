import { formatPhoneNumber } from "@/app/global/utils";
import { toastActions } from "@/app/store/Toast/slice";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import CommentSection from "./CommentSection";
import scroll from "@/app/global/assets/images/scroll.png";
import Image from "next/image";
import layeredBg from "@/app/global/assets/svgs/4-point-stars.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getNumber, getUser, rateNumber } from "./util";
import { auth } from "@/app/global/configStore/firebase";

const NumberDetail = ({ data }: any) => {
  const dispatch = useDispatch();
  const { phoneNumber, ratings } = data?.doc;

  const { data: rating, refetch } = useQuery(
    ["number", phoneNumber],
    async () => await getNumber(phoneNumber),
    {
      enabled: false,
      select: (resp) => resp?.ratings,
    }
  );

  const { data: canRate, refetch: refetchUser } = useQuery(
    ["user", phoneNumber],
    async () => await getUser(auth?.currentUser?.uid as string),
    {
      select: (data) => data?.canRate,
    }
  );

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

  const { mutate } = useMutation(rateNumber, {
    onSuccess: () => {
      refetch();
      refetchUser();
      dispatch(
        toastActions.displayToast({
          message: `You have successfully rated ${formatPhoneNumber(
            phoneNumber
          )}.`,
          type: "success",
        })
      );
    },
  });

  const rate = rating?.score
    ? rating?.score / rating?.numberOfPeopleRated
    : ratings?.score / ratings?.numberOfPeopleRated;

  const getScore = (val: number) =>
    rating?.score ? rating?.score + val : ratings?.score + val;

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
            <Rating
              className="number-rater"
              initialValue={rate}
              size={70}
              transition
              allowFraction
              readonly={!canRate}
              onClick={(val) => {
                if (canRate) {
                  mutate({
                    collectionName: "numbers",
                    doc: {
                      score: getScore(val),
                      number: phoneNumber,
                      uid: auth?.currentUser?.uid,
                    },
                  });
                }
              }}
            />
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
              <span>Ratings:</span> <span>{rate}</span>
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
