import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Home from "../public/assets/Home.jpg";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">Get Your Favourite</h1>
          <h1 className="mb-2 text-4xl text-[#3389FF] md:text-6xl">
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                SPORTSWEAR <span className="text-3xl md:text-5xl"></span>
              </span>
              <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-white w-full animate-type will-change`}"></span>
            </span>
          </h1>
          <p className="py-4 text-gray-600 text-xl sm:max-w-[80%] m-auto">
            running - cycling - volleyball - football
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
