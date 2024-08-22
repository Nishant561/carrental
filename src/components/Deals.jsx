import React, { useRef } from "react";
import charge from "../assets/images/charge.png";
import price from "../assets/images/price.png";
import drive from "../assets/images/drive.png";
import { Button } from "./index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Deals() {
  const image = useRef();

  const handelRotateY = (e) => {
    const img = e.currentTarget.querySelector("img");
    gsap.killTweensOf(img);

  gsap.fromTo(img, 
    { rotateY: 0 }, // Start from 0 degrees rotation
    {
      rotateY: 360, // Rotate the image 360 degrees
      duration: 0.5, // Duration of the rotation
      ease: "power1.inOut", // Easing function
    })
  };
  return (
    <>
      <div className="w-[90%] flex justify-center gap-[9rem]  mx-auto mt-14 p-5 mb-20 1250:flex-col 1250:gap-[5rem] ">
        <div className="w-[45%] 1250:w-[100%]">
          <h5 className="text-2xl font-medium">Why Choose Us</h5>
          <h1 className="text-6xl font-bold">
            Best valued deals you will ever find
          </h1>
          <p className="py-9 text-xl text-zinc-500">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <Button text="Find Deals" />
        </div>
        <div className="w-[37%] flex flex-col gap-7 items-start 1250:w-[100%]">
          <div onMouseEnter={handelRotateY} className="flex gap-6">
            <img ref={image} className="w-[120px] h-[120px]" src={charge} />
            <div>
              <h5 className="font-medium text-2xl">Cross Country Drive</h5>
              <p className="text-xl text-zinc-500 pt-6 text-justify">
                Speedily say has suitable disposal add boy. On forth doubt miles
                of child. Exercise joy man children rejoiced.
              </p>
            </div>
          </div>
          <div onMouseEnter={handelRotateY} className="flex gap-6">
            <img className="w-[120px] h-[120px]" src={price} />
            <div>
              <h5 className="font-medium text-2xl">All inclusive pricing</h5>
              <p className="text-xl text-zinc-500 pt-6 text-justify">
                Yet uncommonly his ten who diminution astonished. Demesne new
                manners savings staying had,
              </p>
            </div>
          </div>
          <div onMouseEnter={handelRotateY} className="flex gap-6">
            <img className="w-[120px] h-[120px]" src={drive} />
            <div>
              <h5 className="font-medium text-2xl">No hidden charges</h5>
              <p className="text-xl text-zinc-500 pt-6 text-justify">
                Under folly balls death own point now men. Match way these she
                avoid see. She whose drift their fat off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deals;
