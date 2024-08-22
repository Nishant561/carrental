import React from "react";
import bgphone from "../assets/images/bgphone.png";
import playstore from "../assets/images/playstore.png";
import ip from "../assets/images/ip.png";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger)
function Play() {
  useGSAP(()=>{
    gsap.from('.play',{
      y:200,
      opacity:0,
      scrollTrigger:{
        trigger:'.play',
        scroller:'body'
      }
    })
  })
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgphone})`, backgroundSize:'cover' ,backgroundPosition:'right' ,backgroundRepeat:'no-repeat' }}
        className="w-full play h-[400px] flex items-center bg-zinc-200 mt-9 mb-[150px] pl-10"
      >
        <div className="w-[50%] ">
            <h5 className="font-bold text-5xl 879:text-2xl">Download our app to get most out of it</h5>
            <p className="text-xl text-zinc-500 pt-7 879:text-sm">Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
            <div className="flex gap-9 pt-10 955:hidden">
                <img src={playstore} />
                <img src={ip} />
            </div>
        </div>

      </div>
    </>
  );
}

export default Play;
