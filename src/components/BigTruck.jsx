import React from 'react'
import big from '../assets/images/big.png'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger)
function BigTruck() {
  useGSAP(()=>{
    gsap.from('.bigtruck',{
      y:200,
      opacity:0,
      scrollTrigger:{
        trigger:'.bigtruck',
        scroller:'body'
      }
    })
  })
  return (
    <>
        <div className='bigtruck w-full h-auto mt-20'>
                <img className='w-full h-full object-contain object-center' src={big} />
        </div>
    </>
  )
}

export default BigTruck
