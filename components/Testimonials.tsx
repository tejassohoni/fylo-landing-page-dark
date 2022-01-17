import Image from "next/image";
import avatar1 from "../images/profile-1.jpg";
import avatar2 from "../images/profile-2.jpg";
import avatar3 from "../images/profile-3.jpg";
import quotesIcon from "../images/bg-quotes.png";

export default function Testimonials() {
  return (
    <div className=" bg-darkGrayBlue">
      <div className=" bg-darkGrayBlue flex flex-col pt-20 pb-96 max-w-7xl mx-auto">
        <div className="relative h-16 w-16 -mb-5 -ml-2 z-10">
          <Image src={quotesIcon} layout="fill" objectFit="contain" />
        </div>
        <div className="grid grid-cols-3 space-x-10 z-20">
          <div className="bg-desatBlue rounded-lg p-8">
            <p className="font-inter text-gray-400 mb-8">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex flex-row items-center">
              <div className="relative h-10 w-10">
                <Image
                  src={avatar1}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="ml-4 flex flex-col">
                <h2 className="font-inter text-white text-lg font-semibold">
                  Kyle Burton
                </h2>
                <h4 className="font-inter text-gray-400 text-sm">
                  Founder & CEO, Huddle
                </h4>
              </div>
            </div>
          </div>
          <div className="bg-desatBlue rounded-lg p-8">
            <p className="font-inter text-gray-400 mb-8">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex flex-row items-center">
              <div className="relative h-10 w-10">
                <Image
                  src={avatar2}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="ml-4 flex flex-col">
                <h2 className="font-inter text-white text-lg font-semibold">
                  Bruce McKenzie
                </h2>
                <h4 className="font-inter text-gray-400 text-sm">
                  Founder & CEO, Huddle
                </h4>
              </div>
            </div>
          </div>
          <div className="bg-desatBlue rounded-lg p-8">
            <p className="font-inter text-gray-400 mb-8">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex flex-row items-center">
              <div className="relative h-10 w-10">
                <Image
                  src={avatar3}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="ml-4 flex flex-col">
                <h2 className="font-inter text-white text-lg font-semibold">
                  Iva Boyd
                </h2>
                <h4 className="font-inter text-gray-400 text-sm">
                  Founder & CEO, Huddle
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
