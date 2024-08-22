import React from "react";
import about_image from "../assets/images/about_image.jpg";
import car from '../assets/images/car.png'
import parking from '../assets/images/parking.png'
import transportation from '../assets/images/transportation.png'
import { Link } from "react-router-dom";
import { IoIosPlay } from "react-icons/io";
import { IconContext } from "react-icons";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger)
import {Banner, BigTruck, Deals, Description, Testimonials} from './index'
import MainHome from "./MainHome";
function About() {
  useGSAP(()=>{
    gsap.from('.about',{
      y:200,
      opacity:0,
      scrollTrigger:{
        trigger:'.about',
        scroller:'body'
      }
    })
  })

  return (
    <>
      <div className="w-[90%] about justify-center mx-auto pt-8  flex gap-[70px] 1028:flex-col 1028:gap-0 1028:items-center">
        <div className="about-left-container h-[534px]  relative w-[35%]  1028:w-fit">
          <img className="w-full object-cover object-center h-full 1028:object-contain" src={about_image} />
          <Link
            target="_blank"
            to={
              "https://www.youtube.com/watch?v=B_6d3RBiEN0&list=RDB_6d3RBiEN0&start_radio=1"
            }
            className="w-[102px] bottom-[-13px] right-[-7%] h-[92px] bg-[#ff4c31] absolute flex items-center justify-center"
          >
            <IconContext.Provider
              value={{ className: "text-white w-[40px] h-[40px] " }}
            >
              <IoIosPlay />
            </IconContext.Provider>
          </Link>
        </div>

        <div className="about-right-container p-2 h-[534px] w-[55%] flex-none  1028:w-full">
          <div className="contents">
            <h5 className="font-semibold text-4xl">About Company</h5>
            <h1 className="font-bold text-5xl py-3 ">You start the engine and your adventure begins</h1>
            <p className="text-xl text-zinc-500 text-justify pt-7 ">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
          </div>
          <div className="types w-full flex justify-between mt-5">
              <div className="w-[30%]">
                  <img src={transportation} />
                  <div className="flex w-full items-center justify-between">
                      <h1 className="font-bold text-[50px]">0</h1>
                      <p className="text-xl font-semibold text-zinc-500 ">Car Types</p>
                  </div>
              </div>
              <div className="w-[30%]">
                  <img src={car} />
                  <div className="flex w-full items-center justify-between">
                      <h1 className="font-bold text-[50px]">0</h1>
                      <p className="text-xl font-semibold text-zinc-500 ">Rental Outlets</p>
                  </div>
              </div>
              <div className="w-[30%]">
                  <img src={parking} />
                  <div className="flex w-full items-center justify-between">
                      <h1 className="font-bold text-[50px]">0</h1>
                      <p className="text-xl font-semibold text-zinc-500 text-nowrap">Repair Shop</p>
                  </div>
              </div>
          </div>
        </div>
      </div>

            
      
    </>
  );
}

export default About;
