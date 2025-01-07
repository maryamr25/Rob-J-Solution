import React from 'react'
import { HomeHeroHeadline } from '../HomeHeroHeadline'
import ImageSlider from '../ImageSlider'
import Features from '../Features'

function HomeBlock() {
  return (
    <>
    

<section className="relative h-[390px] sm:h-[450px] md:h-screen">
  {/* Background Image */}
  <div className="absolute inset-0">
    <ImageSlider /> 
  </div>
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div> 

  {/* Text Content */}
  <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4">
   
<HomeHeroHeadline />
  </div>
 

</section>

{/* features section */}
<Features/>




    </>
  )
}

export default HomeBlock