import React from 'react'
import TeamList from './TeamList'
import Testimonials from './Testimonials'
import Banner from './Banner'
import Footer from './Footer'

function Team() {
  return (
    <>
      <div className='w-[90%] pt-5 pb-16 flex justify-center mx-auto'>
          <TeamList />
    </div>
    <Testimonials/>
    <Banner/>
    <Footer/>
    </>
    
  )
}

export default Team
