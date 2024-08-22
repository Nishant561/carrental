import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import  {Link} from 'react-router-dom'
import {Button} from './index'
function Footer() {
  return (
    <>
      <div className='w-[80%] mx-auto flex flex-col gap-3 mt-11 pb-7'>
            <div className='flex 1069:justify-between'>
                <div className='w-[25%] 1069:w-[20%]'>
                    <h1 className='text-3xl font-bold 1069:text-xl'>Car Rental</h1>
                    <p className='pt-5 text-zinc-500 1069:text-sm'>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion.</p>
                    <div className='flex gap-3 items-center pt-6'>
                    <FaPhoneAlt/>
                        <p className="1069:text-sm">+977 9840876170</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                    <MdMarkEmailUnread />
                        <p className="1069:text-sm">nishant@gmail.com</p>
                    </div>
                    

                    <div>

                    </div>
               
                </div>
                <div className='w-[25%] 1069:w-[20%]'>
                    <h1 className='text-3xl font-bold 1069:text-xl'>Company</h1>
                    <div className='pt-5 flex flex-col gap-3 1069:text-sm 1069:gap-2'>
                            <Link to={'/'}>New York</Link>
                            <Link to={'/'}>Career</Link>
                            <Link to={'/'}>Blog</Link>
                            <Link to={'/'}>Mobile</Link>
                            <Link to={'/'}>How we work</Link>
                    </div>
                    
                    

                    <div>

                    </div>
               
                </div>
                <div className='w-[25%] 1069:w-[20%]'>
                    <h1 className='text-3xl font-bold 1069:text-xl'>Working Hours</h1>
                    <div className='pt-5 flex flex-col gap-3 1069:text-sm'>
                            <p className='group'><span className='text-zinc-500 group-hover:text-black'>Mon-Fri: </span>09:00AM - 09:00PM</p>
                            <p className='group'><span className='text-zinc-500 group-hover:text-black'>Sat: </span>09:00AM - 7:00PM</p>
                            <p className='group'><span className='text-zinc-500 group-hover:text-black'>Sun: </span>Closed</p>
                    </div>
                    
                    
                    
                    
               
                </div>


                <div className='w-[25%] 1069:w-[20%]'>
                    <h1 className='text-3xl font-bold 1069:text-xl'>Subscription</h1>
                    <p className='pt-5 text-zinc-500 1069:text-sm'>Subscribe your Email address for latest news & updates.

</p>
                    <div className='flex gap-3 items-center pt-6'>
                            <input type='text'  className='px-4 py-2 border-2 rounded-sm' placeholder='Enter Your Email' />
                    </div>
                    <div className='mt-3'>
                            <Button text='Submit' />
                    </div>
                    
                
                    <div>

                    </div>
               
                </div>

            </div>
            <hr className="h-[1px] bg-gray-800 border-none w-full" />
            <div>
                <p>©2024 Car Rental. All Rights Reserved</p>
            </div>
      </div>
    </>
  )
}

export default Footer
