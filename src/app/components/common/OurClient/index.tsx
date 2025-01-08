import Image from 'next/image';
import React from 'react'

interface Client {
    id ?: number;
    image: string
}

const ourclient : Client[] = [
    {id : 1 , image : '/images/rail.png'},
    {id : 2 , image : '/images/heart.png'},
    {id : 3 , image : '/images/srs.png'},
    {id : 4 , image : '/images/client4.svg'}

]


function OurClients() {
  return (
    <section className="pb-8 md:pb-16">
        <div className='resContainer'>
        <div className='w-full max-w-[962px] mx-auto flex flex-col gap-1.5 sm:gap-3 items-center  '>
           <div className='text-lg font-medium font-serif text-center text-primary'>
           Our clients
            </div> 

            <div className='md:text-2xl  text-1xl font-semibold text-center font-serif'>
            We’re proud to work with a broad spectrum of industry
            leaders
            </div>
        </div>
    </div>

    <div className="resContainer flex flex-wrap justify-center gap-y-6 gap-x-10 sm:gap-x-16 lg:gap-x-24 p-10">
    {ourclient.map((item)=> (
        <div
        key={item?.id}
        className=" flex justify-center items-center">
            <Image  alt='' src={item.image} width={135} height={135} className='object-contain'/>
        </div>
    ))}
    </div>

    </section>
  )
}

export default OurClients