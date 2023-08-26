import React from "react";
import { client } from "../../../sanity/lib/client";
import type { Image as Iimage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
export interface SanityDataType {
  title: string;
  price: number;
  _id: string;
  image: Iimage;
  description: string;
  category: {
    name: string;
  };
}
const getSanityData = async () => {
  const response = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    title,
    image,
    category -> {name},
    description
  }`);
  return response;
};
export default async function page() {
  const sanityData: SanityDataType[] = await getSanityData();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4  pt-10 md:py-20 px-16 md:px-14 justify-center">
        {sanityData?.map((item: SanityDataType, index: number) => (
          <Link href={`/product/${item._id}`} key={index} className="">
            <Image
              src={urlForImage(item.image).url()}
              alt=""
              width={250}
              height={250}
              className="hover:scale-110 ease-in duration-300"
            ></Image>
            <p className="font-semibold text-blue-500">{item.title}</p>
            <p className="text-green-600">{item.description}</p>
            <p className="font-bold text-red-600">$ {item.price}.00</p>
          </Link>
        ))}
      </div>
    </>
  );
}
