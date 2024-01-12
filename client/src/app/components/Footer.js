//img 
import { Linden_Hill } from "next/font/google";
import Image from "next/image";
//link
import Link from "next/link";
//icons
import {
   FaYoutube,
   FaFacebook, 
   FaInstagram,
   FaPinterest,
  
  } 
   from 'react-icons/fa'

const Footer = () => {
  return ( 
  <footer className='bg-primary bg-pattern py-16'>
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-y-6 justify-center">
        {/* logo */}
        <Link href={'#'}><Image
        src={'logo.svg'}
        width={180}
        height={180}
        alt=""
        /></Link>
        {/* social icons */}
        <div className='flex gap-x-6 text-xl text-white'>
        <Link href={'#'}>
         <FaYoutube/>
       </Link>
        <Link href={'#'}>
         <FaFacebook/>
       </Link>
        <Link href={'#'}>
         <FaInstagram/>
       </Link>
        <Link href={'#'}>
         <FaPinterest/>
       </Link>

        </div>
        {/* copyright */}
        <div className='text-white font-medium'>Copyright &copy; Pizzaland 2024. All rights reserved. </div>
      </div>
    </div>
  </footer>);
};

export default Footer;
