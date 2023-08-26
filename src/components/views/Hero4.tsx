import React from "react";
import Image from "next/image";
import Link from "next/link";
import pic8  from "@/../public/011-hero4.webp";
export default function Hero4() {
  return (
    <>
      <div className="pt-2 md:p-10">
        <div className="relative">
          <div className="text-2xl md:text-5xl font-bold text-center md:text-right md:pr-32 ">
            <p>Unique and</p>
            <p>Authentic Vintage</p>
            <p>Designer Jewelry</p>
          </div>
          <div className="flex flex-col xl:flex-row p-10 xl:space-x-5 space-y-10 items-stretch">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-1 px-0 lg:px-8 w-full xl:w-1/2 ">
              <div className="">
                <h4 className=" text-lg md:text-xl font-semibold pt-2 md:pt-4">
                  Using Good Quality Materials
                </h4>
                <p className=" pt-2 md:pt-5 text-sm md:text-lg">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="">
                <h4 className=" text-lg md:text-xl font-semibold pt-2 md:pt-4">
                  Using Good Quality Materials
                </h4>
                <p className=" pt-2 md:pt-5 text-sm md:text-lg">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="">
                <h4 className=" text-lg md:text-xl font-semibold pt-2 md:pt-4">
                  Using Good Quality Materials
                </h4>
                <p className=" pt-2 md:pt-5 text-sm md:text-lg">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="">
                <h4 className=" text-lg md:text-xl font-semibold pt-2 md:pt-4">
                  Using Good Quality Materials
                </h4>
                <p className=" pt-2 md:pt-5 text-sm md:text-lg">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col justify-center lg:flex-row py-3 lg:py-0 items-stretch  space-x-0 lg:space-x-8">
              <div className="bg-[#d7d7d9] mx-auto w-full lg:w-1/2 items-stretch">
                <Image src={pic8} alt="" width={800} height={1000}></Image>
              </div>
              <div className="py-2 md:py-8 pr-0 lg:pr-16 w-full lg:w-1/2 text-center">
                <p className="pb-6 ">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <Link
                  href="/product"
                  className="px-3 py-3 rounded-lg bg-green-500 text-white"
                >
                  See All Product
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-50 flex items-center justify-left pl-10 md:pl-20">
            <div className="text-[32px] md:text-[54px] font-bold text-gray-200 sm:font-extrabold">
              <p>Different </p>
              <p>from </p>
              <p>Others</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
