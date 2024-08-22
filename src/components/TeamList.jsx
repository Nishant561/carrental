import React from 'react'
import nishant3 from '../assets/images/nishant3.jpg'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
function TeamList() {

  useGSAP(()=>{
       gsap.fromTo('.team',{
          scale:0,
          opacity:0
       },
      {scale:1 , stagger:0.2 ,opacity: 1, duration: 0.8 ,ease:'power2.inOut'})
  })




  return (
    <>
        <div className='w-[300px] team h-[450px] border-2 shadow-lg rounded-lg'>
                <img className='w-full h-[75%] object-cover object-center' src={nishant3}/>

                <div className='p-6'>
                    <h1 className='text-2xl font-semibold'>Nishant Baruwal</h1>
                    <p className='text-xl pt-3 text-zinc-500'>CEO</p>
                </div>
        
        </div>
    </>
  )
}

export default TeamList
