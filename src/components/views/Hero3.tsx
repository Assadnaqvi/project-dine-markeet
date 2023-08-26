"use client";
import React from "react";
import Image from "next/image";
import litepent from "@/../public/010-flexpent.png";
export default async function Hero3() {
  return (
    <>
      <div className="p-5 text-center space-y-3 ">
        <p className="text-blue-800 text-sm font-bold">PRODUCTS</p>
        <h3 className=" text-2xl md:text-4xl font-semibold text-gray-700">
          Check What We Have
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={litepent}
          alt=""
          width={350}
          height={300}
          className="hover:scale-110 ease-in duration-300"
        />
      </div>
    </>
  );
}
