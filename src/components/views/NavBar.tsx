"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../../public/001-Logo.webp";
import { NavBarItemsType, NavbarArray } from "@/components/uitils/NavBarItems";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Dropdowndata } from "./subcomponents/Dropdowndata";
import { DineMarketContext } from "@/context/DineMarketContext";
import { getUserIdentifier, setUserIdentifier } from "@/lib/cookies";
import { v4 as uuidv4 } from "uuid";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
export default function NavBar() {
  const [isNavBarOpen, setNavBarOpen] = useState<boolean>(false);
  const dmContext = useContext(DineMarketContext);
  const [reFetch, setReFetch] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  async function getNumCartItems(userId: string) {
    fetch(`${baseUrl}api/cartItems`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${userId}`,
      },
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response[0].numItems) {
          dmContext?.setCartItems(response[0].numItems);
        } else {
          dmContext?.setCartItems(0);
        }
      })
      .catch(() => {
        dmContext?.setCartItems(0);
      })
      .finally(() => {
        dmContext?.setNbFetchCompleted(true);
      });
  }

  useEffect(() => {
    const identifier = getUserIdentifier();
    if (!identifier) {
      const newIdentifier = uuidv4();
      setUserIdentifier(newIdentifier);
      setReFetch(!reFetch);
    } else {
      getNumCartItems(identifier);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reFetch]);

  return (
    <>
      <div className="relative p-5 flex md:flex-row space-x-0 md:space-x-2 justify-between items-center">
        <div className="w-40 flex-shrink-0">
          <Image src={logo} alt="" width={500} height={500} />
        </div>
        <div className="hidden md:flex md:flex-row md:space-x-2 lg:space-x-4 text-sm md:lg:text-lg font-semibold ">
          {NavbarArray.map((item: NavBarItemsType, index: number) => (
            <ul
              key={index}
              className="relative flex items-center px-3 py-1 rounded-lg hover:bg-gray-100 group"
            >
              <Link
                href={item.href}
                className="text-purple-700 hover:text-red-400 cursor-pointer"
              >
                {item.label}
              </Link>
              {item.isDropDown ? (
                <RiArrowDropDownLine
                  fill="blue"
                  size={25}
                  className="mt-1 -rotate-180 group-hover:rotate-0 duration-500"
                />
              ) : (
                ""
              )}
              {item.isDropDown && (
                <div
                  className={`invisible group-hover:visible absolute bg-gray-50 top-10 left-0 rounded px-6 py-4 font-light min-w-[6rem]`}
                >
                  <Dropdowndata item={item} />
                </div>
              )}
            </ul>
          ))}
        </div>
        <div className="focus:outline-none hidden xl:border rounded xl:flex xl:flex-row items-center px-0 xl:px-2 py-0 xl:py-1 space-x-0 xl:space-x-3">
          <BiSearch fill="blue" size="15px" />
          <input
            type="text"
            placeholder="What are you looking for"
            className="w-72 text-sm flex"
          />
        </div>
        <Link
          href={"/cart"}
          className="flex-shrink-0 relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-200"
        >
          <div className="absolute w-3.5 h-3.5 top-1.5 right-1 text-sm text-white bg-red-500 rounded-full flex items-center justify-center">
            {dmContext?.cartItems}
          </div>
          <BsCart2 size={25} fill="blue" />
        </Link>
        <div className="flex md:hidden">
          <div>
            {!isNavBarOpen ? (
              <div onClick={() => setNavBarOpen(true)} className="">
                <RxHamburgerMenu size={22} fill="green" />
              </div>
            ) : (
              <div onClick={() => setNavBarOpen(false)}>
                <IoIosClose size={25} fill="red" />
              </div>
            )}
            {isNavBarOpen && (
              <div className="absolute z-50 right-0 top-16 w-full h-screen bg-gray-50 flex flex-col justify-center items-center">
                {NavbarArray.map((item: NavBarItemsType, index: number) => (
                  <ul key={index} className="">
                    <div className="p-2">
                      <Link
                        onClick={() => {
                          setNavBarOpen(false);
                        }}
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </div>
                  </ul>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
