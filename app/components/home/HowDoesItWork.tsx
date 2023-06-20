import React from "react";
import layeredBg from "@/app/global/assets/svgs/rain.svg";
import { useRouter } from "next/navigation";

const HowDoesItWork = () => {
  const { push } = useRouter();
  return (
    <div
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url(${layeredBg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "1% 20px",
      }}
      className="min-h-screen mt-32 px-10 md:px-20 pb-20 flex flex-col justify-center py-20 lg:py-0"
    >
      <h1 className="font-[FaseBulan] text-8xl text-center">
        How does it work?
      </h1>
      <div className="mt-10 max-w-4xl mx-auto block">
        <p className="font-[Electronic] text-xl">
          Our website allows you to search for a mobile number and access
          information such as comments, ratings, and complaints from other
          users. You can also contribute your own comments and ratings.
        </p>
        <p className="mt-5 font-[Electronic] text-xl">
          When you search for a mobile number, our system checks if there&apos;s
          an existing entry. If there is, you can read and add comments,
          ratings, and complaints. If there isn&apos;t, we create a new entry
          where you can be the first to contribute.
        </p>
        <p className="mt-5 font-[Electronic] text-xl">
          By using our website, you contribute to a valuable resource that helps
          people make informed decisions about who they call. We aim to create a
          safe and inclusive community and encourage your participation.
        </p>
        <button
          onClick={() => push("/search")}
          type="button"
          className="mt-20 m-auto block text-white bg-blue-600 hover:bg-blue-800 w-1/3 text-center focus:outline-none font-medium rounded-full text-sm items-center px-5 py-5"
        >
          Search Now
        </button>
      </div>
    </div>
  );
};

export default HowDoesItWork;
