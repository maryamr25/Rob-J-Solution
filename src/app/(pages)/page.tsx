import React from 'react'

import HomeBlock from '../components/home/HomeBlock'
import HomeOurExperties from '../components/home/HomeOurExperties'
import RecentProjects from '../components/home/RecentProjects'
import HomeTestimonials from '../components/common/HomeTestimonials'
import FAQ from '../components/common/FAQ'
import QuteBlock from '../components/common/QuteBlock'
import OurClients from '../components/common/OurClient'


function Page() {
  return (
    <div>
   
   <HomeBlock/>

   <HomeOurExperties/>
   <RecentProjects/>

   <HomeTestimonials/>
   <FAQ/>
   <QuteBlock/>
   <OurClients/>

    </div>
  )
}

export default Page