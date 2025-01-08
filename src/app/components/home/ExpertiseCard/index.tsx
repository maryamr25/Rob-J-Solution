import React from 'react';

import { IoArrowForward } from 'react-icons/io5';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';




interface Expertise {
  title: string;
  image: string;
  description: string;
  link: string
}

const data: Expertise[] = [
  {
    title: "Civil Engineering",
    image: "/images/expert1.png",
     link: "/services/civilengineering",
    description:
      "We specialise in providing skilled and experienced personnel for civil engineering projects, including road construction, bridge refurbishment, excavation, and site preparation.",
  },
  {
    title: "Motorway",
    image: "/images/expert2.png",
     link: "/services/motorway",
    description:
      "Our company excels in providing skilled workers for motorway projects, including road construction, maintenance, resurfacing, and safety barrier installation.",
  },
  {
    title: "Railway",
    image: "/images/expert3.png",
    link: "/services/railway",
    description:
      "Our labor supply company provides highly trained and certified personnel for railway projects, including track installation, maintenance, signaling, and electrification.",
  },
];

const ExpertiseCard: React.FC = () => {
  return (
   
    

    <div 
    className="grid grid-cols-1 md:grid-cols-3 "
    style={{
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Ensure consistent item width
    }}
  >
      {data.map((item, index) => (
   <div
   className={`h-[413px]  bg-cover bg-no-repeat bg-center group overflow-hidden before:contents-[] before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:to-black/70 before:absolute before:top-0 before:left-0 before:z-0 relative transition-all duration-500`}
   style={{ backgroundImage: `url(${item.image})` }} key={index}>
                
             
                <div className="flex flex-col justify-end h-full group-hover:gap-4 px-4 py-3 xl:px-7 md:py-7 z-10 relative">
                    <div className="flex gap-3 items-center">
                        <IoArrowForward className="text-2xl text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                        <div className="text-white font-semibold md:text-2xl text-1xl">
                            {item?.title}
                        </div>
                    </div>
                    <div className="flex flex-col justify-end gap-4 translate-y-full opacity-0 invisible h-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible group-hover:h-auto">
                        <div className="text-white !leading-loose">
                            {item?.description}
                        </div>
                        <Link href={item?.link}>
                            <button
                                className={`w-[142px] group h-[40px] md:h-[49px] bg-transparent border border-white hover:border-orange-500 text-white text-sm font-normal sm:text-base hover:bg-orange-500 transition-all duration-500 flex justify-center items-center gap-2`}
                            >
                                <span className="text-lg sm:text-xl transition-all duration-500 text-white inline-block group-hover:scale-110">
                                    <MdArrowOutward />
                                </span>
                                Lean More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
      ))}
    </div>
  );
};

export default ExpertiseCard;
