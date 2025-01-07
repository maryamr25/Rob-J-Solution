import React from 'react'
import Project from '../../common/Project'

function KeyProject() {
  return (
    <section className='py-10 md:py-20'>
        <div className='resContainer'>
        <div className='w-full max-w-[962px] mx-auto flex flex-col gap-1.5 sm:gap-3 items-center  '>
           <div className='text-lg font-medium font-serif text-center text-primary'>
          Our Projects
            </div> 

            <div className='md:text-2xl  text-1xl font-semibold text-center font-serif'>
           Key projects
            </div>
        </div>

        
    </div>
    <div className='resContainer'>
    <Project />
    </div>
    </section>
  )
}

export default KeyProject