import React from "react";
import hacker from "@/app/global/assets/images/hacker.png";
import Image from "next/image";
const Intro = () => {
  return (
    <div className="h-screen px-20">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col justify-center mx-auto h-full">
          <h1 className="font-[FaseBulan] text-8xl">Welcome to TN,</h1>
          <p className="mt-10 font-[Electronic] text-xl">
            Are you tired of receiving spam calls? Do you want to know more
            about the person behind a particular mobile number? Look no further!
            The Number is the ultimate destination for all your mobile
            number-related queries and concerns.
          </p>
          <p className="mt-5 font-[Electronic] text-xl">
            At The Number, we have created a unique online community where
            individuals can come together to share their experiences, provide
            ratings, and voice their opinions about mobile numbers. Our platform
            is designed to empower users with valuable insights, enabling them
            to make informed decisions and stay connected in today&lsquo;s
            digital age.
          </p>
        </div>
        <div className="flex flex-col justify-center mx-auto h-full">
          <Image
            className="h-auto max-w-xl hover:scale-75 ease-in duration-500"
            src={hacker}
            alt="The Number Homepage Hacker"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
