import React from "react";
import Container from "../Container/Container";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-red-500 min-h-[106px] py-4">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="max-w-[390px] min-h-[81px]">
            <img src={logo} alt="Logo" className="pt-2 pr-4" />
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-8 items-center">
            <a href="#home" className="text-white hover:text-gray-200">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-200">
              About
            </a>
            <a href="#services" className="text-white hover:text-gray-200">
              Services
            </a>
            <a href="#gallery" className="text-white hover:text-gray-200">
              Gallery
            </a>
            <a href="#blog" className="text-white hover:text-gray-200">
              Blog
            </a>
            {/* Contact Button */}
            <button className="bg-red-500 text-white px-4 py-2 rounded-md border border-white ">
              Contact
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
