import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Container from '../Container/Container';

const Navbar = () => {
  return (
    
    <div className='bg-black text-white border-b-[5px] border-b-[#FFB800]'>
      <div className="max-w-container mx-auto bg-black py-4 px-5 md:px-0">
        <div className="md:flex justify-between ">
          <div className="w-[1/2] md:flex gap-x-[54px]">
          <div className="relative w-1/2 md:flex items-center gap-x-[5px] after:absolute after:content-[''] after:w-[2px] after:h-[16px] after:bg-white after:top-1 after:right-[-27px]">
          <IoMailUnreadOutline  className='text-[20px]'/>
          <p className='text-[12px]'>mail@yourcompany.com</p>
          </div>

          <div className="w-1/2 md:flex items-center md:gap-x-[5px] sm:my-2 md:my-0 ">
          <MdOutlinePhoneInTalk  className='text-[20px]'/>
          <p className='text-[12px]'>+896 120 5889 </p>
          </div>
          </div>
          <div className="w-1/2 flex gap-x-4 justify-end">
          <FaFacebookF className='text-base'/>
          <FaXTwitter className='text-base'/>
          <FaLinkedinIn className='text-base'/>
          <FaInstagram className='text-base'/>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar