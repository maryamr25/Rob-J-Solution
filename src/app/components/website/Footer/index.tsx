// import { MImage, Typography } from '@/app/components/common';
import Link from 'next/link';
import React from 'react';
// import { mImages } from '../../../../../../public/images';
import { socials } from '../MiniNav';
// import { routes } from '@/app/utils/constants';

interface ILink {
    name: string;
    link: string;
}
interface ILinksColumn {
    title: string;
    links?: ILink[];
    className?: string;
}

export const Footer = (): React.ReactElement => {
    const services: ILink[] = [
        { name: 'Motorway', 
            link: '/services/motorway' 
        },
        { name: 'Civil Engineering', 
            link: '/services/civilengineering'
         },
        { name: 'Railways', 
            link: '/services/railway '
        },
    ];
    const information: ILink[] = [
        { name: 'FAQ',
             link: '/', 
            },
        { name: 'Support', 
            link: '/contactus'
         },
    ];
    const company: ILink[] = [
        { name: 'About us',
             link: '/aboutus' 
            },
        { name: 'Careers', 
            link: '/career'
         },
        { name: 'Contact us', 
            link:'/contactus'
         },
    ];

    return (
        <footer className="w-full bg-primary/10">
            <div className="resContainer py-8 sm:py-12">
                <div className="flex flex-wrap justify-between gap-7">
                    <LinksColumn title="Services" links={services} />
                    <LinksColumn title="Information" links={information} />
                    <LinksColumn title="Company" links={company} />
                    {/* <div className="xl:w-[254px] lg:ml-auto flex flex-col gap-y-5 sm:gap-y-8">
                        <Link href={routes.home}>
                            <MImage
                                src={mImages.logo}
                                alt="Logo"
                                w={190}
                                h={66}
                            />
                        </Link>
                        <Typography variant="ExtraSmallRegular">
                            Hello, we are Rob J Solution. Our goal is to
                            translate the positive effects from revolutionizing
                            how companies engage with their clients.
                        </Typography>
                    </div> */}
                </div>
                <hr className="border-b border-secondary opacity-15 my-8" />
                <div className="flex justify-center sm:justify-between items-center flex-wrap gap-5">
                    <img src='/images/footerLogo.svg' alt="Logo" width={56} height={53} />
                    <ul className="flex gap-x-10">
                        {['Terms', 'Privacy', 'Cookies'].map((link, i) => (
                            <li key={i}>
                                <Link href="#">
                                    <div >
                                        {link}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4">
                        {socials.map((social, index) => (
                            <Link
                                key={index}
                                href={social.link}
                                target="_blank"
                            >
                                <span className="w-[36px] h-[36px] rounded-full border-2 border-gray-400 inline-flex justify-center items-center text-sm hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                                    {social.icon}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

const LinksColumn = ({
    title,
    links,
    className,
}: ILinksColumn): React.ReactElement => (
    <div className={`flex flex-col gap-y-6 ${className}`}>
        <div className="mt-4">
            {title}
        </div>
        <ul className="flex flex-col gap-y-3">
            {Array.isArray(links) &&
                links.map((item, index) => (
                    <li key={item.name + index}>
                        <Link href={item.link}>
                            <div>
                                {item.name}
                            </div>
                        </Link>
                    </li>
                ))}
        </ul>
    </div>
);
