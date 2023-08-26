import React from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { ImageSec } from "@/components/views/subcomponents/ImageSec";
import Detail from "@/components/views/subcomponents/Detail";
const getSingleProduct = async (id: any) => {
  const data = await client.fetch(`*[_type=='product'&&_id=='${id}']{
    price,
    title,
    image,
    category -> {name},
    description
  }`);
  return data;
};
const getProductIds = async () => {
  const ids = await client.fetch(`*[_type=='product']{_id}`);
  return ids;
};
export async function generateStaticParams() {
  let ids = await getProductIds();
  let productIds: string[] = [];
  ids.map((id: any) => {
    productIds.push(id);
  });
  return productIds.map((item: any) => ({ id: item._id }));
}
export default async function page({ params }: { params: { id: string } }) {
  const sizes: string[] = ["XS", "S", "M", "L", "XL"];
  const productData = await getSingleProduct(params.id);
  const imgUrl = urlForImage(productData[0].image).width(300).url();
  return (
    <>
      <div className="py-4 lg:py-10 px-0 lg:px-16 m-10 bg-gray-50 flex flex-col lg:flex-row space-x-0 md:space-x-10 space-y-4 lg:space-y-0 ">
        <div className="">
          <ImageSec url={imgUrl} />
        </div>
        <div className="">
          <Detail
            name={productData[0].title}
            type={productData[0].description}
            price={productData[0].price}
            url={imgUrl}
            id={params.id}
          />
        </div>
      </div>
    </>
  );
}
