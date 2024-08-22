import React from 'react'
import {Description ,Play,VehicleModel,Footer, Questions ,About,Banner,BigTruck,Deals,Testimonials} from './index'

function MainHome() {
  return (
    <>
      <Description />
      <VehicleModel />
      <About />
      <Banner />
      <BigTruck />
      <Deals />
      <Testimonials />
      
      <Play/>
      <Footer/>
    </>
  )
}

export default MainHome
