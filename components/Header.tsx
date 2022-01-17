import Banner from "./banner";
import Image from "next/image";
import Navbar from "./Navbar";
import desktopCurve from "../images/bg-curvy-desktop.svg";

export default function Header() {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}
