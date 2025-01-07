// import { MImage, PrimaryButton, Typography } from '../../common';

import React from 'react';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
// import { routes } from '@/app/utils/constants';
// 
export const RailwayOurExpertise = (): React.ReactElement => (
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
                    Comprehensive  Engineering Expertise
                    </div>
                    <div>
                    With extensive experience in the industry, we specialise in all aspects of railway engineering. Providing staffing to construction and maintenance, we offer tailored end-to-end solutions that meet the unique requirements of every project.
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
                    <img
                        src='/images/expert1.png'
                        alt="Project"
                        className="w-full"
                        width={700}
                        height={350}
                    />
                </div>
            </div>
        </div>
    </section>
);
