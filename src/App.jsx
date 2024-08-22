import { useState } from 'react'

import './App.css'
import { Home ,About ,Testimonials,VehicleList, Vehicle,Contact,Team,Layout } from './components/index'
import {Routes ,Route} from 'react-router-dom'
import MainAbout from './components/MainAbout'
import MainTestimonials from './components/MainTestimonials'

function App() {
  

  return (
    <>

        
        
          <Routes>
              <Route path='/' element={<Layout/>}>
              <Route index element={<Home />} />
            <Route path='/about' element={<MainAbout/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/vehiclemodels' element={<VehicleList/>}/>
            <Route path='/testimonials' element={<MainTestimonials/>} />
              
              </Route>



          </Routes>
    </>
  )
}

export default App
