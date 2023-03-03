import Image from "next/image";
import React, { useState } from "react";
import mizuno4bImg from "../public/assets/projects/mizuno4b.png";
import Link from "next/link";
import { TiDelete } from "react-icons/ti";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

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
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mizuno4bImg}
          alt="/"
        />

        <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
          MIZUNO WAVE CLAW NEO 2-BLUEFISH/WHITE/LIGHT ORANGE
          </h2>
          <h3>Rp 1.619.820</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mt-4">
        <div className="">
          <p>Product</p>
          <h2>Overview</h2>
          <div>
            <table class="table-auto w-full ml-2 mt-5 text-xl">
              <thead>
              </thead>
              <tbody>
                <tr>
                  <th className="text-left w-40">Colour</th>
                  <td>Blue</td>
                </tr>
                <tr>
                  <th className="text-left">Country Size</th>
                  <td>EURO</td>
                </tr>
                <tr>
                  <th className="text-left">Category</th>
                  <td>Indoor</td>
                </tr>
                <tr>
                  <th className="text-left">Brand</th>
                  <td>Mizuno</td>
                </tr>
                <tr>
                  <th className="text-left">Gender</th>
                  <td>Men</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pt-6">
            <div className="flex ">
              <button onClick={incrementCount}>
                <BsFillPlusCircleFill />
              </button>
              <h1 className="text-sm ml-4 mr-4">{count}</h1>
              <button
                onClick={decrementCount}
                className="mr-2"
                disabled={count <= 0}
              >
                <AiFillMinusCircle />
              </button>
              <button onClick={resetCount}>
                <TiDelete />
              </button>

                        
            </div>
            <Link href="/#projects">
        <button className="px-8 py-2 mt-4 mx-auto">Back</button>
      </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default mizuno1;
