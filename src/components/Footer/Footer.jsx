import React from "react";
import logo from "../../assets/Logo.png";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import cart1 from '../../assets/Cert1.jpg';
import cart2 from '../../assets/Cert2.jpg';

const Footer = () => {
  return (
    <div className="w-full h-[552px] bg-[#1F1F1F] flex text-white pt-[149px] pl-[100px] overflow-hidden">
      {/* Logo and Contact Section */}
      <div className="pr-[50px]">
        <img src={logo} alt="Logo" />

        <div className="flex items-center pt-5">
          <IoMailUnreadOutline className="text-[20px]" />
          <p className="text-[12px] pl-2">mail@yourcompany.com</p>
        </div>

        <div className="flex items-center pt-2">
          <MdOutlinePhoneInTalk className="text-[20px]" />
          <p className="text-[12px] pl-2">+1234567890</p>
        </div>

        <div className="flex items-center pt-2">
          <FaLocationDot className="text-[20px]" />
          <p className="text-[12px] pl-2">
            101 Baker Street, New York, USA, 12345
          </p>
        </div>

        <div className="pt-4 flex gap-x-4">
          {/* Social Media Icons with Background */}
          <div className="bg-[#F40404] p-1 rounded-full flex items-center justify-center h-[29px] w-[29px]">
            <FaFacebookF className="text-black text-base" />
          </div>
          <div className="bg-[#F40404] p-1 rounded-full flex items-center justify-center h-[29px] w-[29px]">
            <FaXTwitter className="text-black text-base" />
          </div>
          <div className="bg-[#F40404] p-1 rounded-full flex items-center justify-center h-[29px] w-[29px]">
            <FaLinkedinIn className="text-black text-base" />
          </div>
          <div className="bg-[#F40404] p-1 rounded-full flex items-center justify-center h-[29px] w-[29px]">
            <FaInstagram className="text-black text-base" />
          </div>
        </div>
      </div>

      {/* Company Links Section */}
      <div className="pl-[100px]">
        <p className="font-bold text-[16px]">Company</p>
        <p className="pt-2">Home</p>
        <p className="pt-2">About</p>
        <p className="pt-2">Services</p>
        <p className="pt-2">Gallery</p>
      </div>

      {/* Other Links Section */}
      <div className="pl-[100px]">
        <p className="font-bold text-[16px]">Others</p>
        <p className="pt-2">Blog</p>
        <p className="pt-2">Contact</p>
        <p className="pt-2">Terms & Conditions</p>
        <p className="pt-2">Privacy Policy</p>
      </div>

      {/* Certificate Section */}
      <div className="pl-[100px]">
        <p className="font-bold text-[16px]">Certificate</p>
        <div className="flex pt-5">
          <img className="rounded-md" src={cart1} alt="" />
          <div className="pl-2">
            <img className="rounded-md" src={cart2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
