import Image from "next/image";
import desktopCurve from "../images/bg-curvy-desktop.svg";
import illustrationIntro from "../images/illustration-intro.png";

export default function Banner() {
  return (
    <div className="bg-lightGrayBlue flex flex-col items-center -mt-14">
      <div className="relative h-sm w-sm z-20">
        <Image src={illustrationIntro} layout="fill" objectFit="contain" />
      </div>
      <div className="text-white text-center font-inter w-sm z-20">
        <h1 className="text-4xl leading-snug font-bold mb-5">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="leading-snug text-gray-400 mb-5">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="bg-cyan-500 font-semibold py-4 px-12 rounded-full hover:bg-cyan-400 active:scale-90 transition duration-300 ease-out">
          Get Started
        </button>
      </div>
      <div className="absolute mt-20 h-md w-xl z-10">
        <Image src={desktopCurve} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
