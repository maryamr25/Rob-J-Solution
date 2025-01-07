import React from 'react'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'

function CivilHeroSection() {
  return (
    <section className="relative sm:h-[450px] md:h-[80vh]">
  <div
            className={`w-full h-full bg-no-repeat pb-20 pt-10 sm:pb-0 md:pt-24 bg-cover bg-center before:contents-[] before:w-full before:h-full before:absolute before:inset-0 before:bg-black/45`}
            style={{
                backgroundImage: "url('/images/services/civilBg.png')",
            }}
        >

          <div className="resContainer">
           <div className="flex flex-col gap-y-6 xl:gap-y-12 w-full max-w-[712px] z-10 relative">

           <div className="flex  flex-wrap  text-white gap-2 sm:gap-4 font-medium  items-center">
            <Link href='/'> Home </Link> {">"} <Link href='/services/civilengineering'>Civil Engineering</Link>
           </div>

           <div className="flex flex-col  gap-y-4 md:gap-y-8 w-full max-w-[566px]  text-left  ">
                    <div  className="md:text-4xl font-serif text-2xl font-bold text-white !leading-snug">

                  Civil Engineering
                </div>
                    <div  className="  md:font-medium md:text-lg text-lg   text-white">
                    At Rob J Solutions, we are committed to delivering high-quality civil engineering services that support sustainable and resilient infrastructure development. Our experienced team ensures every project is executed with precision and innovation.
                    </div>
                   


          <Link
            href="/contactus"
            className="w-[140px] sm:w-[145px] h-[40px] md:h-[49px] bg-primary text-white text-sm font-normal sm:text-base hover:bg-orange-500 flex justify-center items-center gap-2"
          >
            <span className="text-lg sm:text-xl transition-all duration-500 text-white sm:inline-block group-hover:scale-110">
              <MdArrowOutward />
            </span>
            Enquire Now
          </Link>
        
                </div>
            </div>

            </div>
           </div>

          


  </section>
  )
}

export default CivilHeroSection