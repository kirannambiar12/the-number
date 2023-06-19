import React from "react";
import hacker from "@/app/global/assets/images/hacker.png";
import Image from "next/image";
import layeredBg from "@/app/global/assets/svgs/texture.svg";
import { useRouter } from "next/navigation";

const Intro = () => {
  const { push } = useRouter();
  return (
    <div
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url(${layeredBg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "1% 20px",
      }}
      className="min-h-screen px-10 md:px-20 flex flex-col justify-center mb-36 py-20 lg:py-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full mt-20">
        <div className="flex flex-col justify-center mx-auto h-full">
          <div>
            <h1 className="font-[FaseBulan] text-8xl text-center md:text-left">
              Welcome to TN,
            </h1>
            <Image
              className="h-auto max-w-full hover:scale-95 ease-in duration-500 mt-5 md:mt-0 block md:hidden"
              src={hacker}
              alt="The Number Homepage Hacker"
            />
            <p className="mt-10 font-[Electronic] text-xl">
              Are you tired of receiving spam calls? Do you want to know more
              about the person behind a particular mobile number? Look no
              further! The Number is the ultimate destination for all your
              mobile number-related queries and concerns.
            </p>
            <p className="mt-5 font-[Electronic] text-xl">
              At The Number, we have created a unique online community where
              individuals can come together to share their experiences, provide
              ratings, and voice their opinions about mobile numbers. Our
              platform is designed to empower users with valuable insights,
              enabling them to make informed decisions and stay connected in
              today&lsquo;s digital age.
            </p>
            <button
              onClick={() => push("/search")}
              type="button"
              className="mt-12 m-auto block text-white bg-blue-600 hover:bg-blue-800 w-1/2 md:w-1/3 text-center focus:outline-none font-medium rounded-full text-sm items-center px-5 py-5"
            >
              Search Now
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center mx-auto h-full">
          <Image
            className="h-auto max-w-full hover:scale-95 ease-in duration-500 mt-16 md:mt-0 hidden md:block"
            src={hacker}
            alt="The Number Homepage Hacker"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
