"use client";

import Image from "next/image";
import React from "react";

// this is the Image section components use in single product detail page

interface ImageSecProp {
  url: string;
}

export const ImageSec: React.FC<ImageSecProp> = ({ url }) => {
  return (
    <>
      <div className="flex space-x-10">
        <div className="flex flex-col space-y-5 md:space-y-6 ">
          <Image src={url} alt="" width={75} height={75}></Image>
        </div>

        <div className="">
          <Image src={url} alt="" width={450} height={450}></Image>
        </div>
      </div>
    </>
  );
};
