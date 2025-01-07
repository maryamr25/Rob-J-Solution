
'use client'

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../../public/images/logo.svg';
import React, { useState } from 'react';
import { MdArrowOutward, MdMenu, MdClose } from 'react-icons/md';

type NavLink = {
  href: string;
  label: string;
  subLinks?: NavLink[]; // For dropdown links
};

interface NavigationProps {
  currentPath?: string;
}

const Navbar: React.FC<NavigationProps> = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Sidebar toggle state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle state

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { 
      href: '/ourprojects',
      label: 'Our Projects',
    
    },
    { href: '#', label: 'Services 🢓' ,
      subLinks: [
        { href: '/services/civilengineering', label: 'Civil Engineering' },
        { href: '/services/motorway', label: 'Motorway' },
        { href: '/services/railway', label: 'Railway' },
      ],
    },
    { href: '/career', label: 'Career' },
    { href: '/aboutus', label: 'About Us' },
  ];

  return (
    <nav className="bg-white h-[70px] md:h-[100px] sticky top-0 z-50 shadow-lg shadow-black/5">
      <div className="resContainer flex items-center justify-between h-full px-5 md:px-10">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={190}
            height={66}
            className="w-[120px] md:w-[190px]"
          />
        </Link>

      
   

        {/* Main Navigation */}
        
       

<ul
className={`flex gap-9 flex-col lg:flex-row items-center flex-1 justify-center h-screen w-[300px] z-[99] bg-orange-500 fixed top-0 right-0 p-7 lg:p-0 lg:bg-transparent lg:w-auto lg:h-full lg:relative transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible lg:translate-x-0 lg:opacity-100 lg:visible'}`}
 
>
  {/* Close Icon (Visible only when menu is open) */}
  {isMenuOpen && (
    <MdClose
      className="absolute top-5 right-5 text-3xl cursor-pointer text-white"
      onClick={() => setIsMenuOpen(false)}
    />
  )}
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`relative group hover:text-primary cursor-pointer ${
                currentPath === link.href ? 'bg-gray-500 text-orange-500' : ''
              } py-2 lg:py-0 px-3 lg:px-0 rounded-md`}
              onClick={() =>
                link.subLinks && setIsDropdownOpen((prev) => !prev)
              }
            >
              <Link href={link.href}>
                <span>{link.label}</span>
              </Link>
              {/* Dropdown for "Serivces" */}
              {link.subLinks && isDropdownOpen && (
                <ul className=" absolute top-10 left-0 right-0 w-[200px]  bg-white shadow-md rounded-md group-hover:block">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.href} className= "ml-4 bg-white hover:bg-gray-200 hover:text-primary p-2">
                      <Link href={subLink.href}>{subLink.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <div className=" lg:flex gap-x-5 flex sm:gap-x-3 items-center ">
          <Link
            href="/contactus"
            className="w-[100px] sm:w-[145px] h-[40px] md:h-[49px] bg-primary text-white text-sm font-normal sm:text-base hover:bg-orange-500 flex justify-center items-center gap-2"
          >
            <span className="text-lg sm:text-xl transition-all duration-500 text-white sm:inline-block group-hover:scale-110">
              <MdArrowOutward />
            </span>
            Contact Us
          </Link>
           {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          {isMenuOpen ? (

            ""
          ) : (
            <MdMenu
              className="text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




