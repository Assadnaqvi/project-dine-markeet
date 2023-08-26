"use client";
import { DineMarketContext } from "@/context/DineMarketContext";
import { getUserIdentifier } from "@/lib/cookies";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsCartPlus } from "react-icons/bs";
interface DetailPageProp {
  name: string;
  price: number;
  type: string;
  url: string;
  id: string;
}
export const Detail: React.FC<DetailPageProp> = ({
  name,
  price,
  type,
  url,
  id,
}) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [size, setSize] = useState(sizes[0]);
  const [num, setNum] = useState(1);
  const inc = () => {
    setNum(num + 1);
  };
  const dec = () => {
    if (num > 1) {
      setNum(num - 1);
    } else {
      toast.error("Can't Select Zero Item .");
    }
  };
  const dmContext = useContext(DineMarketContext);
  const userId = getUserIdentifier();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [isDisable, setIsDisable] = useState(false);
  function addToCart() {
    const tostId = toast.loading("adding to cart");
    setIsDisable(true);
    fetch(`${baseUrl}api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${userId}`,
      },
      body: JSON.stringify({
        product_name: name,
        product_id: id,
        product_type: type,
        product_price: price,
        product_image_url: url,
        product_size: size,
        product_quantity: num,
      }),
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((response) => {
        toast.dismiss(tostId);
        if (response[0].product_quantity) {
          dmContext?.incCartItems(num);
          toast.success("added to cart");
        } else {
          toast.error("adding to cart failed");
        }
      })
      .catch(() => {
        toast.dismiss(tostId);
        toast.error("adding to cart failed");
      })
      .finally(() => {
        setIsDisable(false);
      });
  }
  return (
    <>
      <div className="">
        <h2 className="text-xl md:text-3xl font-bold">{name}</h2>
        <p className="text-gray-500 text-md md:text-lg font-semibold">{type}</p>
        <p className="py-2 md:py-3 text-md md:text-xl font-bold">SELECT SIZE</p>
        <div className="flex space-x-2 md:space-x-3 font-semibold py-2 md:py-4">
          {sizes.map((item, index) => (
            <p
              key={index}
              onClick={() => {
                setSize(item);
              }}
              className={`bg-gray-200 px-[6px] md:px-4 py-[6px] md:py-3 border rounded-full text-center min-w-[40px] cursor-pointer 
            ${item === size && "bg-red-300"}`}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex space-x-2">
          <p className="text-lg font-semibold py-4">Quantity: </p>
          <div className=" flex items-center">
            <button
              onClick={inc}
              className="text-lg md:text-xl border-2 bg-gray-200 border-black rounded-full px-2 md:px-4 hover:bg-green-400 hover:text-white"
            >
              +
            </button>
            <h1 className="text-xl md:text-3xl">--{num}--</h1>
            <button
              onClick={dec}
              className="text-lg border-2 bg-gray-100 border-black rounded-full px-2 md:px-4 text-red-500 hover:bg-red-400 hover:text-white"
            >
              -
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart();
          }}
          disabled={isDisable}
          className={`text-red-500 font-semibold inline-flex space-x-2 items-center p-2 md:py-4 border rounded-lg bg-gray-700 w-fit ${
            isDisable ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
        >
          <BsCartPlus size={18} color="white" />
          <span> Add to Cart </span>
        </button>
        <span className="font-bold text-lg md:text-2xl md:pl-6 pl-1">
          = $ {price}.00
        </span>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};
export default Detail;
