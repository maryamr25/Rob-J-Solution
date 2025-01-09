'use client'
import React, { useState } from 'react'
import { faqs, SingleFaq } from '../SingleFaqs'



const FAQ = () => {
        const [openIndex, setOpenIndex] = useState<number | null>(null);
      
        const toggleFaq = (index: number) => {
          setOpenIndex(openIndex === index ? null : index);
        }
  return (
    <section className='py-10 md:py-20 '>
    <div className='resContainer'>
        <div className='w-full max-w-[962px] mx-auto flex flex-col gap-1.5 sm:gap-3 items-center  '>
           <div className='text-lg font-medium font-serif text-center text-primary'>
           FAQs
            </div> 

            <div className='text-2xl  font-semibold font-serif'>
                Frequently Ask Questions
            </div>
        </div>
    </div>

 {/* single Faqs */}

<div className="resContainer text-secondary py-6 sm:py-10 bg-no-repeat bg-contain bg-center text-lg font-medium" >
      {faqs.map((faq, index) => (
        <SingleFaq
          key={index}
          faq={faq}
          index={index}
          isActive={openIndex === index}
          toggle={() => toggleFaq(index)}
        />
      ))}
    </div>
    </section>
  )
}

export default FAQ