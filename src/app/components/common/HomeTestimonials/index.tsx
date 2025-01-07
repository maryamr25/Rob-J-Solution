import React from 'react'
import TestimonialCard from '../TestimonialCard'

function HomeTestimonials() {
  return (
    <section className='py-10 md:py-20'>
        <div className='resContainer'>
            <div className='w-full max-w-[962px] mx-auto flex flex-col gap-1.5 sm:gap-3 items-center  '>
               <div className='text-2xl font-medium font-serif text-center text-primary'>
                Testimonial
                </div> 

                <div className='text-2xl font-semibold'>
                    What our Customer say
                </div>
            </div>
        </div>

         {/* Testimonials cards */}
         <div
                className="py-6 sm:py-10 bg-no-repeat bg-contain bg-center"
                style={{ backgroundImage: `url("/images/testimonialBg.svg")` }}
            >
                <div className="resContainer grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3"
                style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      }}
                      >
                    {/* {Array.isArray(data?.data?.testimonials) &&
                        data?.data?.testimonials?.map((review, index) => (
                            <TestimonialCard key={index} review={review} />
                        ))} */}
                        <TestimonialCard/>
                </div>
            </div>

    </section>
  )
}

export default HomeTestimonials