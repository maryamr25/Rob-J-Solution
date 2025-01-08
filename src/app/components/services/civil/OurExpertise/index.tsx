

import React from 'react';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

 
export const OurExpertise = (): React.ReactElement => (
    <section className="py-10 sm:py-20 bg-no-repeat bg-contain md:bg-[center_top_250px] lg:bg-[center_top_280px] xl:bg-[center_top_245px]">
        <div className="resContainer">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center pt-7 sm:pt-10">
                <div className="order-2 lg:order-1">
                    <div
                        className="mb-2 text-lg text-primary"
                    >
                        Our Expertise
                    </div>
                    <div className="mb-4 font-serif font-semibold text-lg">
                    Broad Civil Engineering Expertise
                    </div>
                    <div>
                    With a deep understanding of civil engineering principles, we manage a wide range of projects from conception to completion. Our expertise includes urban development, water management, and infrastructure projects.
                    </div>

           <Link
            href="/contactus"
            className="w-[140px] sm:w-[145px] h-[40px] md:h-[49px] bg-primary text-white text-sm font-normal sm:text-base hover:bg-orange-500 flex justify-center items-center gap-2 mt-6"
          >
            <span className="text-lg sm:text-xl transition-all duration-500 text-white sm:inline-block group-hover:scale-110">
              <MdArrowOutward/>
            </span>
            Enquire Now
          </Link>
                </div>
                <div className="order-1 lg:order-2">
                    <Image
                        src="/images/services/civilExpertiese.png"
                        alt="Project"
                        
                        width={500}
                        height={350}
                        // className="w-full"
                    />
                </div>
            </div>
        </div>
    </section>
);
