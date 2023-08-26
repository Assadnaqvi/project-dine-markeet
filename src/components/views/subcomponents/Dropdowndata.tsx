import { NavBarItemsType } from "@/components/uitils/NavBarItems";
import Link from "next/link";
import React, { FC } from "react";
export const Dropdowndata: FC<{ item: NavBarItemsType }> = ({ item }) => {
  return (
    <ul>
      {item.dropDownData?.map((item: NavBarItemsType, index: number) => (
        <li
          key="index"
          className="hover:ml-2 group-hover:duration-300 hover:text-red-500 py-2"
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
