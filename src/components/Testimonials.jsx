import React from "react";

import {About, Banner, Footer, TestimonialBox} from './index'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger)
function Testimonials() {
  useGSAP(()=>{
    gsap.from('.testimonials',{
      y:200,
      opacity:0,
      scrollTrigger:{
        trigger:'.testimonials',
        scroller:'body'
      }
    })
  })
  return (
    <>
      <div className="w-full testimonials h-auto pb-36 bg-slate-200  items-center pt-[70px] flex flex-col">
        <h5 className="text-xl font-medium">Reviewed by People</h5>
        <h1 className="text-6xl font-bold 879:text-3xl">Clients' Testimonials</h1>
        <p className="w-[900px] text-center text-xl pt-[40px] text-zinc-600 879:text-sm 879:w-[700px]">
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed.
        </p>
        <TestimonialBox />
      </div>

      
    </>
  );
}

export default Testimonials;
