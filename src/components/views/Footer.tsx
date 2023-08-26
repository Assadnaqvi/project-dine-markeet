import React from "react";
import Image from "next/image";
import logo from "../../../public/001-Logo.webp";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
export default function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-around py-10 px-14 text-center md:text-left border border-b-1 border-b-gray-600">
        <div className="lg:w-1/4">
          <Image src={logo} alt="logo" width={200} height={200}></Image>
          <p className="py-10 text-gray-500 font-bold ">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex space-x-4">
            <div className="bg-gray-100 rounded-lg p-2">
              <AiOutlineTwitter size={20} />
            </div>
            <div className="bg-gray-100 rounded-lg p-2">
              <FaFacebookF size={20} />
            </div>
            <div className="bg-gray-100 rounded-lg p-2">
              <RiLinkedinFill size={20} />
            </div>
          </div>
        </div>
        <div className="pt-3 lg:pt-0">
          <h2 className="text-xl font-bold text-gray-500 font-mono ">
            Company
          </h2>
          <div className="py-2 text-gray-400 ">
            <ul>
              <li className="py-2">About</li>
              <li className="py-2">Terms of Use</li>
              <li className="py-2">Privacy Policy</li>
              <li className="py-2">How it Works</li>
              <li className="py-2">Contact Us</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-500 font-mono ">
            Support
          </h2>
          <div className="py-2  text-gray-400">
            <ul>
              <li className="py-2">Support Carrer</li>
              <li className="py-2">24h Service</li>
              <li className="py-2">Quick Chat</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-500 font-mono ">
            Contact
          </h2>
          <div className="py-2  text-gray-400">
            <ul>
              <li className="py-2">Whatsapp</li>
              <li className="py-2">Support 24h</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:px-10 md:py-10">
        <div>Copyright © 2022 Dine Market</div>
        <div>Design by. Weird Design Studio</div>
        <div>Code by. Assad on github</div>
      </div>
    </>
  );
}
