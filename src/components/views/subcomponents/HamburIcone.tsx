"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { NavBarItemsType, NavbarArray } from "@/components/uitils/NavBarItems";
import Link from "next/link";
const HamburIcone = () => {
  const [isNavBarOpen, setNavBarOpen] = useState<boolean>(false);
  return (
    <>
      <div className="relative">
        {!isNavBarOpen ? (
          <div onClick={() => setNavBarOpen(true)} className="">
            <RxHamburgerMenu size={22} />
          </div>
        ) : (
          <div className="" onClick={() => setNavBarOpen(false)}>
            <IoIosClose size={25} fill="red" />
          </div>
        )}
        {isNavBarOpen && (
          <div className="absolute h-screen  bg-gray-100 flex flex-col text-center items-center  ">
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
    </>
  );
};
export default HamburIcone;
