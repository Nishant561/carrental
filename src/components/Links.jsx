import React from 'react'
import { NavLink } from 'react-router-dom'
function Links() {
  return (
    <>
       <NavLink to=''  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap `}>Home</NavLink>
                        <NavLink to='about'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap `}>About</NavLink>
                        <NavLink to='vehiclemodels'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap  `}>Vehicle Models</NavLink>
                        <NavLink to='testimonials'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap `}>Testimonials</NavLink>
                        <NavLink to='team'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap `}>Our Team</NavLink>
                        <NavLink to='contact'  className={({isActive})=> `${isActive? 'text-orange-500' : 'text-black'} text-nowrap `}>Contact</NavLink>
    </>
  )
}

export default Links
