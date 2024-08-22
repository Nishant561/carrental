import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
<IoCloseCircleOutline />
import logo_v4 from '../assets/images/logo_v4.png'
import { NavLink } from 'react-router-dom'
import {Button} from './index'
import { RiMenuAddFill } from "react-icons/ri";
import {Links} from './index'
import { IconContext } from "react-icons";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
function Nav() {


    var tl = gsap.timeline({paused:true})
    useGSAP(()=>{
        tl.from('.small-navbar',{
            x:1500,
            duration:.6,
        })
    })


    function handelMenuButton(){
            tl.play()
    }


    function handelCloseButton(){
        tl.reverse()
    }

  return (
    <>

      <nav className='w-full h-[90px] shadow-lg z-10 flex  items-center justify-between relative transparent px-12'>
                  <div className="logo w-[167px] 1099:w-[90px]">

                        <NavLink to={''}><img className='w-full object-contain object-center' src={logo_v4} /></NavLink>
                            
                  </div>

                  <div className="links-container text-xl font-semibold flex items-center gap-9 1290:text-sm 1009:hidden">
                       
                        <Links/>

                  
                  </div>

                  <div className="nav-button flex gap-5 items-center 1009:hidden">
                            <Button text='sign-in' />
                            <Button text='Register' />   
                  </div>


                  <div onClick={handelMenuButton} className=''>
                        <IconContext.Provider value={{className:"text-[#ff4c31] w-[40px] h-[40px] cursor-pointer hidden 1009:block"}}>
                            <RiMenuAddFill/>
                        </IconContext.Provider>
                  </div>


                
                


        </nav>

        <div className="small-navbar absolute top-0 z-10  right-0 w-[50%] h-full backdrop-blur-lg fill-transparent 1009min:hidden  421:w-[80%]">

            <div className='flex px-5 py-9 gap-4 flex-col items-start text-2xl font-semibold'>
            <NavLink to='/'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap `}>Home</NavLink>
                        <NavLink to='/about'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap `}>About</NavLink>
                        <NavLink to='/vehiclemodels'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap  `}>Vehicle Models</NavLink>
                        <NavLink to='/testimonials'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap `}>Testimonials</NavLink>
                        <NavLink to='/team'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap `}>Our Team</NavLink>
                        <NavLink to='/contact'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap `}>Contact</NavLink>
            </div>

            <div onClick={handelCloseButton} className=''>

            <IconContext.Provider  value={{className:"w-[40px] h-[40px] cursor-pointer absolute top-2 right-5 transition-all hover:text-[#ff4c31]"}}>
                    <IoCloseCircleOutline />
            </IconContext.Provider>
            </div>

        </div>
    </>
  )
}

export default Nav
