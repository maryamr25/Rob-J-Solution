
import Link from 'next/link';
import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineAccessTime, MdOutlineEmail } from 'react-icons/md';

export const socials = [
    {
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/profile.php?id=61560674022314/',
    },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/' },
    { icon: <FaTwitter />, link: 'https://www.twitter.com/' },
    {
        icon: <FaLinkedinIn />,
        link: 'https://www.linkedin.com/company/rob-j-solutions/',
    },
];

export const MiniNav = (): React.ReactElement => (
    <section className="hidden md:block h-[46px] bg-lightBg text-secondary">
        <div className="resContainer h-full flex justify-between items-center">
            <div className="flex gap-4">
                {socials.map((social, index) => (
                    <Link key={index} href={social.link} target="_blank">
                        <span className="w-[27px] h-[27px] rounded-full border-2 border-gray-400 inline-flex justify-center items-center text-sm hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                            {social.icon}
                        </span>
                    </Link>
                ))}
            </div>
            <div className="flex gap-5">
                <div className="flex gap-1 items-center">
                    <MdOutlineAccessTime className="text-xl text-primary" />
                    <div >24 x 7</div>
                </div>
                <div className="flex gap-1 items-center">
                    <IoCallOutline className="text-xl text-primary" />
                    <div >07376048091</div>
                </div>
                <div className="flex gap-1 items-center">
                    <MdOutlineEmail className="text-xl text-primary" />
                    <div >
                        office@robjsolutions.co.uk
                    </div>
                </div>
            </div>
        </div>
    </section>
);
