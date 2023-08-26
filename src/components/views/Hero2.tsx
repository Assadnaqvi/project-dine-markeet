import Image from "next/image";
import React from "react";
import pic5 from "@/../public/007-event1.webp"
import pic6 from "@/../public/008-event2.webp"
import pic7 from "@/../public/009-event3.webp"

export const Hero2 = () => {
  return (
    <div className="py-10 px-4">
      <div className="text-center space-y-3 ">
        <p className="text-blue-800 text-sm font-bold">PROMOTIONS</p>
        <h3 className=" text-3xl md:text-4xl font-semibold text-gray-700">
          Our Promotions Events
        </h3>
      </div>
      <div className="pt-5 md:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 px-2 md:px-10">
        <div className=" order-1 lg:-order-none w-full col-span-1 md:col-span-2 bg-[#D6D6D8] flex flex-col md:flex-row item-center justify-between px-0 md:px-8">
          <div className="pt-4 md:max-w-[10rem] space-y-2 md:space-y-5 px-2 md:px-0">
            <h4 className="text-xl md:text-3xl font-semibold">
              GET UP TO <span className="text-2xl md:text-4xl"> 60%</span>
            </h4>
            <p className="text-sm md:text-lg text-gray-600 font-semibold">
              For the summer season
            </p>
          </div>
          <div className="lg:w-72 w-60">
            <Image
              src={pic5}
              alt="Summer season"
              height={1000}
              width={1000}
              className=""
            ></Image>
          </div>
        </div>
        <div className=" order-3 lg:-order-none w-full row-span-1 lg:row-span-2 flex flex-col items-center justify-center bg-[#EFE1C7] h-full space-y-2 ">
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p>
              {" "}
              <del>$100.00</del> &nbsp;&nbsp;
              <b>
                <ins className="">$75.00 </ins>
              </b>{" "}
            </p>
          </div>
          <div className="w-64 md:w-auto ">
            <Image
              src={pic6}
              alt="Flex Sweatshirt"
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div>
        <div className=" order-4 lg:-order-none w-full row-span-1 lg:row-span-2 flex flex-col items-center justify-center bg-[#D7D7D9] h-full">
          <div className="p-4">
            <p>Flex Push Button Bomber</p>
            <p>
              {" "}
              <del>$225.00</del> &nbsp;&nbsp;
              <b>
                <ins className="">$190.00 </ins>
              </b>{" "}
            </p>
          </div>
          <div className="w-64 md:w-auto">
            <Image
              src={pic7}
              alt="Flex Push Button Bomber"
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div>
        <div className="order-2 lg:-order-none py-5 w-full col-span-1 md:col-span-2 bg-[#212121] text-white text-center items-center">
          <h2 className="text-4xl font-bold pb-5">GET 30% Off</h2>
          <p className="pb-1">USE PROMO CODE</p>
          <button
            aria-label="Redirect user to Dine weekend sale"
            className="px-10 py-2 bg-[#474747] rounded-lg font-semibold tracking-widest "
          >
            DINEWEEKENDSALE
          </button>
        </div>
      </div>
    </div>
  );
};
