
import HomeTestimonials from '@/app/components/common/HomeTestimonials'
import OurClients from '@/app/components/common/OurClient'
import RecentProjects from '@/app/components/home/RecentProjects'
import CivilHeroSection from '@/app/components/services/civil/HeroSection'
import { SupplyLabor } from '@/app/components/services/civil/SupplyLabor'
import { OurExpertise } from '@/app/components/services/civil/OurExpertise'
import React from 'react'

function page () {
  return (
    <>
   <CivilHeroSection/>
   <OurExpertise/>

   <SupplyLabor/>
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

export default page