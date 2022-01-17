import Image from "next/image";
import stayProductive from "../images/illustration-stay-productive.png";
import quotesIcon from "../images/bg-quotes.png";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import avatar1 from "../images/profile-1.jpg";

export default function StayProductive() {
  return (
    <div className="flex flex-col bg-darkGrayBlue">
      <div className="flex flex-row items-center px-72 pb-20">
        <div className="relative h-sm w-sm">
          <Image src={stayProductive} layout="fill" objectFit="contain" />
        </div>
        <div className="ml-20 w-sm">
          <h1 className="font-inter text-white text-5xl font-semibold leading-snug">
            Stay productive, wherever you are
          </h1>
          <p className="mt-6 font-inter text-gray-400 ">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="mt-6 font-inter text-gray-400 ">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="flex flex-row mt-6 cursor-pointer items-center text-lightTeal border-b w-44 mb-14 border-lightTeal hover:text-gray-400 hover:border-gray-400 transition duration-300 ease-out">
            <h4 className="font-inter">See how fylo works</h4>
            <div className="ml-1 relative h-5 w-5">
              <ArrowCircleRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
