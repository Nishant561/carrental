import React from 'react'
import SimpleMap from './SimpleMap'
import { FcCellPhone } from "react-icons/fc";
import { RiMailSendLine } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import Footer from './Footer';
import Banner from './Banner';


function Contact() {
  return (
    <>
      <SimpleMap/>


      <div className='w-full pt-10'>
            <div className='w-[85%] mx-auto flex justify-between 879:flex-col 879:gap-7'>
                  <div className='w-[35%] 879:w-full'>
                    <h1 className='text-4xl font-semibold'>Need additional information?</h1>
                    <p className='py-8 text-zinc-400 text-xl'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                    <h5 className='flex gap-4'><FcCellPhone/> <span>(562) 498-4600</span> </h5>
                    <h5 className='flex gap-4 '><RiMailSendLine/> <span>xyz@carrental.com</span> </h5>
                    <h5 className='flex  gap-4'><AiTwotoneHome/> <span>Level 1, 121 King Street Melbourne, 3000, Australia</span> </h5>
                  </div>

                  <from className="flex flex-col gap-4 w-[55%] 879:w-full">
                    <div className='flex flex-col '>
                    <label htmlFor='name' className='text-xl  font-semibold '>First Name</label>
                    <input id='name' type='text' required name='name' className='text-xl px-3 py-2 border-2 bg-gray-100 border-[#ff4c31]' placeholder='Enter Your Name' />
                    </div>
                    <div className='flex flex-col'>
                    <label htmlFor='email' className='text-xl  font-semibold'>Email Address</label>
                    <input id='email' type='email' required name='email' className='text-xl px-3 py-2 border-2 bg-gray-100 border-[#ff4c31]' placeholder='Enter Your Email' />
                    </div>
                    <div className='flex flex-col'>
                    <label htmlFor='about' className='text-xl  font-semibold'>Tell me about it</label>
                    <textarea id='about' rows={6} className='border-2 border-[#ff4c31] bg-gray-100 text-xl px-3 py-2' placeholder='Enter Yourself' ></textarea>
                    </div>
                  </from>
            </div>
      </div>


      <Banner />

      <Footer />
    </>
  )
}

export default Contact
