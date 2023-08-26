import Image from "next/image";
import React from "react";
import hero1GirlImage from "@/../public/002-header.webp"
import ftr1 from "@/../public/003-Featured1.webp"
import ftr2 from "@/../public/004-Featured2.webp"
import ftr3 from "@/../public/005-Featured3.webp"
import ftr4 from "@/../public/006-Featured4.webp"
import { BsCart2 } from "react-icons/bs";
const Hero1 = () => {
  const btnText = "Start\nShopping";
  return (
    <div className="py-10 md:py-16 flex justify-around items-center">
      <div className="space-y-10 max-w-[19rem]">
        <button
          aria-label="redirect the user to inform him about sale "
          className="bg-blue-100 rounded-md text-blue-800 font-bold px-4 py-2"
        >
          Sale 70%
        </button>
        <h1 className="text-5xl font-bold text-left text-gray-900 px-1 md:px-0 ">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-[14px] md:text-lg text-gray-500 px-1 md:px-0">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button
          aria-label="redirect the user to inform him about start the sale "
          className="bg-gray-900 rounded-md font-semibold px-8 md:px-7 py-2 md:py-4  flex items-center space-x-2 mx-auto"
        >
          <BsCart2 size={20} fill="white" />
          <p className="whitespace-pre text-lg text-gray-100 leading-5 text-center">
            {btnText}
          </p>
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-4 md:pl-0">
          <Image width={150} height={150} src={ftr1} alt="Bazar" />
          <Image width={150} height={150} src={ftr2} alt="Bustle" />
          <Image width={150} height={150} src={ftr3} alt="versece" />
          <Image width={150} height={150} src={ftr4} alt="inStyle" />
        </div>
      </div>
      <div className="hidden lg:block lg:md:bg-[#ffece3] lg:rounded-full  ">
        <Image src={hero1GirlImage} alt="hero 1 girl" className="-mt-7" />
      </div>
    </div>
  );
};

export default Hero1;
