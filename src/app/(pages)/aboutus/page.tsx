import AboutHero from '@/app/components/about/AboutHero'
import { OurMission } from '@/app/components/about/OurMission'
import { OurTeam } from '@/app/components/about/OurTeam'

import { WhyChooseCard } from '@/app/components/career/WhyChoose'
import HomeTestimonials from '@/app/components/common/HomeTestimonials'
import OurClients from '@/app/components/common/OurClient'
import React from 'react'

function About() {
  return (
    <>
    <AboutHero/>
    <WhyChooseCard/>
    <OurMission/>
    <OurTeam/>

    <HomeTestimonials/>
    <div className='py-10 md:py-18'>
    <OurClients/>
    </div>
   
    </>
  )
}

export default About