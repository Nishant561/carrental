import React from 'react'
import Vehicle from './Vehicle'
import {useSelector} from 'react-redux'
import Banner from './Banner'
import Deals from './Deals'
import Footer from './Footer'
import Play from './Play'
function VehicleList() {

const carData = useSelector((state)=> state.description.cars)
  return (
    <>
      <div className='w-[90%] mx-auto mt-3 flex gap-6 flex-wrap'>
            {
                carData.map((items,index)=>(
                    <Vehicle key={index} item={items} />
                ))
            }
      </div>
      <Banner />
      <Deals/>
      <Play/>
      <Footer/>
    </>
  )
}

export default VehicleList
