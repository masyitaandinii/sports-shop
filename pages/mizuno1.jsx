import Image from "next/image";
import React, { useState } from "react";
import mizuno1bImg from "../public/assets/projects/mizuno1b.png";
import Link from "next/link";
import { TiDelete } from "react-icons/ti";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { RiRadioButtonFill } from "react-icons/ri";

const mizuno1 = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mizuno1bImg}
          alt="/"
        />
        <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
          MIZUNO MORELIA SALA CLASSIC TF-HIGH RISK RED/WHITE/SILVER
          </h2>
          <h3>Rp 1.099.800</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-4 gap-8 py-8">
        <div className="col-span-4">
          <p>Product</p>
          <h2>Overview</h2>
          <p className="mt-5">
            ELITE FIT
            <br />
            This lightweight, flexible boot is perfect for indoor futsal. It has
            a last specialized for futsal and an IN sole that gives a barefoot
            feeling. The boot is made with high-quality kangaroo leather and has
            the MORELIA II fit.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-left font-bold pb-2">Spesification</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Colour : Blue
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Country Size : EURO
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Category : Football
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Brand : Mizuno
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Gender : Women
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex ">
            <button onClick={incrementCount}>
              <AiFillPlusCircle size="40" />
            </button>
            <h1 className="text-2xl ml-4 mr-4">{count}</h1>
            <button
              onClick={decrementCount}
              className="mr-2"
              disabled={count <= 0}
            >
              <AiFillMinusCircle size="40" />
            </button>
            <button onClick={resetCount}>
              <TiDelete size="40" />
            </button>
                      
          </div>
          <Link href="/#products">
            <button className="px-8 py-2 mt-4 mx-auto">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default mizuno1;
