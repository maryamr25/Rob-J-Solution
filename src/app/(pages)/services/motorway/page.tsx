import HomeTestimonials from '@/app/components/common/HomeTestimonials'
import OurClients from '@/app/components/common/OurClient'
import RecentProjects from '@/app/components/home/RecentProjects'
import { MotorwayOurExpertise } from '@/app/components/services/motorway/Expertise'
import MotorwayHeroSection from '@/app/components/services/motorway/MotorwayHero'
import React from 'react'

function Motorway() {
  return (
    <>
    <MotorwayHeroSection/>
    <MotorwayOurExpertise/>
    <div className='mt-20'>
   <RecentProjects/>
   </div>
   <div className='mt-20'>
   <HomeTestimonials/>
   </div>
   <OurClients/>
    </>
  )
}

export default Motorway