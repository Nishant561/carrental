import React from 'react'
import {useSelector} from 'react-redux'
import {Data} from './index'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
function Description() {

    const data = useSelector((state)=> state.description.des)
    
    useGSAP(()=>{
      gsap.from('.description',{
        y:200,
        opacity:0,
        scrollTrigger:{
          trigger:'.description',
          scroller:'body'
        }
      })
    })

  return (
    <>
            <div className=' description w-[100%] flex flex-col items-center pt-10 mt-9'>
                <h5 className='text-3xl mb-4 854:text-[3vw]'>Plan Your Trip Now</h5>
                <h1 className='text-6xl font-bold 854:text-[4vw]'>Quick & easy car rental</h1>
                <div className='w-full flex justify-between px-6 mt-8 854:flex-col'>
                        {
                            data.map((items , index)=>(
                                <Data item = {items} key={index} />
                            ))
                        }
                </div>


                
            </div>
    </>
  )
}

export default Description
