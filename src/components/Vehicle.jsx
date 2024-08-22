import React from 'react'
import {useSelector} from 'react-redux'
import Button from './Button'
import vehicle_01 from '../assets/images/vehicle-01.jpg'
import start from '../assets/images/start.png'
import { FaCar } from "react-icons/fa";
import { BsFillLuggageFill, BsLuggage } from "react-icons/bs";
import { GiCarSeat } from "react-icons/gi";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
function Vehicle({item}) {

  useGSAP(()=>{
    var tl = gsap.timeline()

    gsap.fromTo('.car', 
      { scale: 0, opacity: 0 },  
      { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" ,stagger:0.2 },
        
    );

  })

  return (




    <>
      <div className="w-[31.5%] car rounded-lg flex flex-col border-2 shadow-lg  683:w-[100%!important] 986:w-[48%]">
        <img className='w-full object-cover object-center' src={item.img}  />
        <div className='p-5 flex flex-col gap-4'>
          <div className='w-full justify-between flex items-center text-2xl font-bold'>
            <h1>Audi A3</h1>
            <h1>$75</h1>
          </div>
          <div className='w-full justify-between flex items-center'>
            <img src={start} />
            <p>per day</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='w-[45%] flex items-center gap-3'>
              <FaCar/>
              <p className='text-xl text-zinc-500'>Sedan</p>
            </div>
            <div className='flex items-center gap-3'>
                <BsLuggage/>
                <p className='text-xl text-zinc-500'>2 Luggage</p>
            </div>
          </div>
          <div className='w-full'>
                <div className='w-full justify-end flex items-center gap-3'>
                        <GiCarSeat />
                        <p className='text-xl text-zinc-500'>5 Seats</p>
                </div>
          </div>
          
          <hr></hr>
          <div className='text-center'>
            <Button text='Book Ride' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Vehicle
