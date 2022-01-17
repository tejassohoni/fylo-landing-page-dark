import Image from "next/image";
import desktopCurve from "../images/bg-curvy-desktop.svg";
import accessIcon from "../images/icon-access-anywhere.svg";
import securityIcon from "../images/icon-security.svg";
import collabIcon from "../images/icon-collaboration.svg";
import filesIcon from "../images/icon-any-file.svg";

export default function FeaturesGrid() {
  return (
    <div className="bg-darkGrayBlue flex flex-col items-center">
      <div className="mt-44 grid grid-cols-2 justify-between text-center">
        <div className="flex flex-col items-center mb-20 px-96">
          <div className="relative h-16 w-16 mb-5">
            <Image src={accessIcon} layout="fill" objectFit="contain" />
          </div>
          <h1 className="font-inter text-white text-xl font-semibold w-md">
            Access your files, anywhere
          </h1>
          <p className="font-inter text-sm text-gray-400 pt-2 w-sm">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative h-16 w-16 mb-5">
            <Image src={securityIcon} layout="fill" objectFit="contain" />
          </div>
          <h1 className="font-inter text-white text-xl font-semibold">
            Security you can trust
          </h1>
          <p className="font-inter text-sm text-gray-400 pt-2 w-sm">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="flex flex-col items-center mb-20 px-96">
          <div className="relative h-16 w-16 mb-5">
            <Image src={collabIcon} layout="fill" objectFit="contain" />
          </div>
          <h1 className="font-inter text-white text-xl font-semibold">
            Real-time collaboration
          </h1>
          <p className="font-inter text-sm text-gray-400 pt-2 w-sm">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative h-16 w-16 mb-5">
            <Image src={filesIcon} layout="fill" objectFit="contain" />
          </div>
          <h1 className="font-inter text-white text-xl font-semibold">
            Store any type of file
          </h1>
          <p className="font-inter text-sm text-gray-400 pt-2 w-sm">
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </div>
  );
}
