import HomeTestimonials from '@/app/components/common/HomeTestimonials'
import OurClients from '@/app/components/common/OurClient'
import RecentProjects from '@/app/components/home/RecentProjects'
import { RailwaySupplyLabor } from '@/app/components/services/railway/OurSupply'
import { RailwayOurExpertise } from '@/app/components/services/railway/RailwayExpertise'
import RailwayHeroSection from '@/app/components/services/railway/RailwayHero'
import React from 'react'

function page() {
  return (
   <>
   <RailwayHeroSection/>
   <RailwayOurExpertise/>
   <RailwaySupplyLabor/>
   
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