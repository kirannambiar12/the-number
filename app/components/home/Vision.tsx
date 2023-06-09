import React from "react";
import { useLottie, useLottieInteractivity } from "lottie-react";
import vision from "@/app/global/assets/lottie/vision.json";
import layeredBg from "@/app/global/assets/svgs/aztec.svg";

const Vision = () => {
  const options = {
    animationData: vision,
  };
  const lottieObj = useLottie(options);
  const Animation = useLottieInteractivity({
    mode: "scroll",
    lottieObj: lottieObj,
    actions: [
      {
        visibility: [-0.3, 1],
        type: "seek",
        frames: [30, 90],
      },
    ],
  });
  return (
    <div
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url(${layeredBg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "2% 50px",
      }}
      className="min-h-screen flex flex-col justify-evenly px-10 md:px-20 py-20 lg:py-0"
    >
      <div className="max-w-sm block mx-auto"> {Animation}</div>
      <div className="max-w-4xl mx-auto">
        <p className="font-[Electronic] text-xl">
          We believe that everyone has the right to be informed about the people
          they call. We also believe that everyone has the right to share their
          experiences with others.
        </p>

        <p className="mt-5 font-[Electronic] text-xl">
          At our website, we aim to create a vibrant and inclusive community
          where individuals can share their experiences, insights, and concerns
          about mobile numbers. Our platform is designed to empower users by
          providing a space for open dialogue, rating, and commenting, enabling
          them to make more informed decisions and stay connected with others.
        </p>
      </div>
    </div>
  );
};

export default Vision;
