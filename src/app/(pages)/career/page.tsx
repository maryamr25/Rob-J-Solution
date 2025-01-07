import Hero from '@/app/components/career/Hero'
import { WhyChooseCard } from '@/app/components/career/WhyChoose'
import FAQ from '@/app/components/common/FAQ'
import QuteBlock from '@/app/components/common/QuteBlock'

import React from 'react'

function Career() {
  return (
   <>
   <Hero/>
   <WhyChooseCard/>
   <FAQ/>
   <QuteBlock/>
   </>
  )
}

export default Career