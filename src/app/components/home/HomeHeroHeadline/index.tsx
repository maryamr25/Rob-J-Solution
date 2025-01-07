import React from 'react';
// import { PrimaryButton, div } from '../../common';
// import { routes } from '@/app/utils/constants';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

export const HomeHeroHeadline = (): React.ReactElement => (
    <div className="absolute inset-0 pb-20 pt-10 sm:pb-0 md:pt-24 md:mx-18  ">
        <div className="resContainer">
            <div>
                <div className="flex flex-col font-serif gap-y-4 md:gap-y-8 w-full max-w-[566px]  text-left  ">
                    <div  className="md:text-4xl  text-2xl font-bold text-white !leading-snug">
                        Leverage the collective{' '}
                        <span className="text-primary">energy</span> and talent
                        of our team to achieve the extraordinary for your
                        projects
                    </div>
                    <div  className="  md:font-medium md:text-2xl  text-sm  text-gray-100">
                        We are a leading, family-owned labour supply company in
                        the UK, dedicated to providing exceptional workforce
                        solutions with a commitment to quality, reliability, and
                        personalised service
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
);
