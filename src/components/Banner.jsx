import React from "react";
import cta_car_action from "../assets/images/cta_car_action.png";
import Button from "./Button";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger)
function Banner() {


  useGSAP(()=>{
    gsap.from('.banner',{
      y:200,
      opacity:0,
      scrollTrigger:{
        trigger:'.banner',
        scroller:'body'
      }
    })
  })

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${cta_car_action})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition:'right'
        }}
        className="w-full banner h-[300px] mt-[90px] bg-slate-600 flex justify-center relative items-center"
      >
        <div className="w-[887px] z-10">
            <h1 className="font-bold text-7xl text-white 940:text-4xl">Save big with our cheap car rental!</h1>
            <p className="text-xl text-white pt-4">Top Airports. Local Suppliers. 24/7 Support</p>
        </div>

            <div className="z-10">

       <Button text="Book Ride"/>
            </div>

        <div style={{background:'rgba(0,0,0,0.7)'}} className="absolute h-full w-full pointer-events-none z-0">

        </div>

      </div>
    </>
  );
}

export default Banner;
