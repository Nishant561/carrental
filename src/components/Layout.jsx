import React from 'react'
import {Footer, Nav} from './index'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>


      <div className='w-[100%] h-screen relative'>
        <Nav />

        <Outlet />

        
      </div>
        



    </>
  )
}

export default Layout
