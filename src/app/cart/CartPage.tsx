"use client";
import { ShoppingBag } from "lucide-react";
import React, { useContext } from "react";
import { CartItem } from "@/lib/db/dbTypes";
import { useEffect, useState } from "react";
import { getUserIdentifier } from "@/lib/cookies";
import { DineMarketContext } from "@/context/DineMarketContext";
import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { CartSummary } from "./CartSummary";
export default function CartPage() {
  const [loading, setLoading] = useState(true);
  const [reFetch, setReFetch] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [bDisabled, setBDisabled] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const userId = getUserIdentifier() as string;
  const dmContext = useContext(DineMarketContext);
  async function getCartDetail(userId: string) {
    fetch(`${baseUrl}api/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${userId}`,
      },
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.length != 0) {
          setCartItems(response);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }
  async function onDeleteHandle(cartId: number, quantOriginal: number) {
    setBDisabled(true);
    const toastId = toast.loading("deleting order");
    fetch(`${baseUrl}api/cart`, {
      method: "DELETE",
      headers: { Authorization: userId, cartId: cartId.toString() },
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((response) => {
        toast.dismiss(toastId);
        if (response.response == "success") {
          dmContext?.decCartItems(quantOriginal);
          setReFetch(!reFetch);
          setCartItems([])
          toast.success("order deleted");
        } else {
          toast.error("delete failed");
        }
      })
      .catch(() => {
        toast.dismiss(toastId);
        toast.error("delete failed");
      })
      .finally(() => {
        setBDisabled(false);
      });
  }
  useEffect(() => {
    setLoading(true);
    getCartDetail(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reFetch]);
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mb-6">
        <ShoppingBag size={150} />
        <p className="text-2xl font-bold text-[#212121] mt-6">
          Loading ...
        </p>
      </div>
    );
  }
  return (
    <div className="mx-auto mt-6 flex max-w-[1560px] flex-col space-y-12 px-5 sm:px-10 md:px-16 lg:px-20">
      <div className="text-left text-3xl font-bold text-[#212121]">
        Shopping Cart
      </div>
      <div>
        <div className="flex flex-col space-y-10 lg:flex-row lg:justify-between lg:space-x-10 lg:space-y-0 xl:space-x-14">
          <div className="basis-full flex-col space-y-5 lg:basis-4/5 xl:basis-2/3">
            {cartItems.map((item) => (
              <div
                key={item.cart_id}
                className="flex flex-col space-y-10 rounded-md bg-gray-50 p-5 sm:flex-row sm:items-stretch sm:space-x-10 sm:space-y-0"
              >
                <div className="flex flex-row justify-between sm:basis-1/3">
                  <div className="w-fit overflow-hidden rounded-xl bg-blue-100">
                    <Image
                      src={item.product_image_url || ""}
                      alt=""
                      width={200}
                      height={200}
                      className="h-[133px] w-[125px] object-cover custom1:h-[160px] custom1:w-[150px] sm:h-[187px] sm:w-[175px]"
                    ></Image>
                  </div>
                  <div className="inline-flex flex-col items-end justify-between sm:hidden">
                    <button
                      disabled={bDisabled}
                      onClick={() => {
                        onDeleteHandle(item.cart_id, item.product_quantity);
                      }}
                      className={`${
                        !bDisabled
                          ? "cursor-pointer"
                          : "cursor-not-allowed disabled:opacity-50"
                      }`}
                    >
                      <Trash2 size={25} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 sm:basis-2/3 sm:justify-between sm:space-y-0">
                  <div className="text-xl font-medium sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <span>{item.product_name}</span>
                    <button
                      className={`hidden sm:block ${
                        !bDisabled
                          ? "cursor-pointer"
                          : "cursor-not-allowed disabled:opacity-50"
                      }`}
                      disabled={bDisabled}
                      onClick={() => {
                        onDeleteHandle(item.cart_id, item.product_quantity);
                      }}
                    >
                      <Trash2 size={25} />
                    </button>
                  </div>
                  <p className="inline-flex space-x-5 text-base font-semibold text-[#666]">
                    <span>{item.product_type}</span>
                    <span>({item.product_size})</span>
                  </p>
                  <p className="text-base font-semibold">Delivery Estimation</p>
                  <div className="h-[26px] text-base font-semibold text-[#ffc700] sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <span>5 Working Days</span>
                  </div>
                </div>
                <Toaster position="top-center" />
              </div>
            ))}
          </div>
          <div className="basis-full lg:basis-1/5 xl:basis-1/3">
            <CartSummary bDisabled={bDisabled} setBDisabled={setBDisabled} />
          </div>
        </div>
      </div>
    </div>
  );
}
