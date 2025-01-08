'use client'
import Image from 'next/image';
import { useState } from 'react'

import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5';


function ImageSlider() {

    const slides = [
        {id:1 , images:'/images/services/civilExpertiese.png'},
        {id:2 , images:'/images/expert1.png '},
        {id:3 , images:'/images/supply1.png'}
    ]


    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  return ( 
    <>
    <div className="relative">
        <div className="h-[390px] sm:h-[450px] md:h-screen">
<div 
className={`h-full bg-no-repeat bg-cover bg-center before:contents-[] before:absolute before:inset-0 before:bg-black/60 before:z-0 z-10 relative`}
 >
       

        <Image src={slides[current].images} alt='images' width={300} height={300} 
        // className={`h-[390px] sm:h-[450px] md:h-screen w-full bg-no-repeat bg-cover bg-center before:contents-[] before:absolute before:inset-0 before:bg-black/60 before:z-0 z-10 relative`} 
        className = 'w-full h-full bg-no-repeat bg-cover bg-center'/>
        </div>
        </div>
        

{/* Left Right Arrows */}
    <div className="flex gap-1.5 md:gap-3 absolute top-[85%] right-6 sm:top-[75%] sm:right-10 xl:static">
                <button
                    className="z-10 xl:absolute xl:top-1/2 xl:left-10 xl:-translate-y-1/2 w-[30px] h-[30px] md:w-[46px] md:h-[46px] border-2 border-white rounded-full inline-flex justify-center items-center"
                    onClick={prevSlide}
                >
                    <IoMdArrowBack className="text-white text-base md:text-2xl" />
                </button>
                <button
                    className="z-10 xl:absolute xl:top-1/2 right-10 xl:-translate-y-1/2 w-[30px] h-[30px] md:w-[46px] md:h-[46px] border-2 border-white rounded-full inline-flex justify-center items-center"
                    onClick={nextSlide}
                >
                    <IoArrowForward className="text-white text-base md:text-2xl" />
                </button>
            </div>



            
            </div>






</>
            
  )
}

export default ImageSlider

