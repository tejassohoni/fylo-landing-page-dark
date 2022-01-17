import Image from "next/image";
import logo from "../images/logo white.svg";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between bg-lightGrayBlue py-14 px-24">
      <div className="relative h-20 w-32 md:h-20 md:w-40">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-row space-x-10 font-inter md:text-lg text-white">
        <p className="navbarOption">Features</p>
        <p className="navbarOption">Team</p>
        <p className="navbarOption">Sign In</p>
      </div>
    </div>
  );
}
