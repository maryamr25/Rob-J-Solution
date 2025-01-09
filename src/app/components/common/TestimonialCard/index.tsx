import Image from 'next/image';
import React from 'react'
import { IoStarSharp } from 'react-icons/io5';


interface ITestimonial {
    id?: number;
    clientName: string;
    image: string;
    description: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    clientDesignation: string;
    rating: number;
    value?:number
}


const reviews: ITestimonial[] = [
    {
        image: '/images/srs.png',
        clientName: 'Robert Hammerton',
        clientDesignation: 'Delivery Manager',
        rating: 5,
        description: 'The Mid-Norfolk Railway Preservation Trust employed Rob J Solutions to carry out urgent work on one of the bridges on the line from Dereham to Wymondham Abbey in April 2024. The work involved a thorough clean and repaint of the structure before new wooden beams we..',
    },
    {
        image: '/images/rail.png',
        clientName: 'Robbie Robson',
        clientDesignation: 'AW Rail',
        rating: 5,
        description: 'Rob J Solutions, are a very reliable labour supply, nothing is to much trouble and very reactive to any late requirements, Rob always goes the extra mile to ensure competent operatives arrive onsite and carry out the works in a professional and safe manner',
    },
    {
        image: '/images/heart.png',
        clientName: 'Charlie Robinson',
        clientDesignation: 'Trustee, Mid-Norfolk Railway',
        rating: 5,
        description: 'The Mid-Norfolk Railway Preservation Trust employed Rob J Solutions to carry out urgent work on one of the bridges on the line from Dereham to Wymondham Abbey in April 2024. The work involved a thorough clean and repaint of the structure before new wooden beams we..',
    },
];

function TestimonialCard() {
  return (
    <div   className="grid grid-cols-1 md:grid-cols-3 gap-6 "
    style={{
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Ensure consistent item width
    }}>
        { reviews.map((review) => (
            <div key={review.id} className=" w-full bg-white shadow-md hover:shadow-xl">

            <div className="relative w-full h-[216px] bg-lightBg flex justify-center items-center">
      
            <Image
                
                src={review?.image}
                alt=""
                width={250}
                height={87}
                className="max-h-[140px] object-contain"
            />
       
    </div>
    <div className="p-5 text-secondary flex flex-col gap-3 sm:gap-5">
        <div className="flex flex-col sm:gap-1 italic">
            <div  className='font-medium text-lg '>
                {review?.clientName}
            </div>
            <div className=''>
                {review?.clientDesignation}
            </div>
        </div>
        <div className="italic ">
            {typeof review?.description !== 'undefined' &&
            review?.description?.length > 380
                ? `${review?.description?.substring(0, 380)}...`
                : review?.description}
        </div>
        <div className="flex gap-2 justify-center">
            <IoStarSharp className="w-6 h-[20px] text-yellow-600"/>
            <IoStarSharp className="w-6 h-[20px] text-yellow-600"/>
            <IoStarSharp className="w-6 h-[20px] text-yellow-600"/>
            <IoStarSharp className="w-6 h-[20px] text-yellow-600"/>
            <IoStarSharp className="w-6 h-[20px] text-yellow-600"/>
 </div>
        
          
       
    </div>

                </div>
        ))}

  
</div>
  )
}

export default TestimonialCard