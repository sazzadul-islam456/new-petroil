// import React from "react";
// import Container from "../Container/Container";
// import logo from "../../assets/Logo.png";

// const Navbar = () => {
//   return (
//     <div className="bg-red-500 min-h-[106px] py-4">
//       <Container>
//         <div className="flex items-center justify-between">
//           {/* Logo Section */}
//           <div className="max-w-[390px] min-h-[81px]">
//             <img src={logo} alt="Logo" className="pt-2 pr-4" />
//           </div>
//           {/* Navigation Links */}
//           <div className="flex space-x-8 items-center">
//             <a href="#home" className="text-white hover:text-gray-200">
//               Home
//             </a>
//             <a href="#about" className="text-white hover:text-gray-200">
//               About
//             </a>
//             <a href="#services" className="text-white hover:text-gray-200">
//               Services
//             </a>
//             <a href="#gallery" className="text-white hover:text-gray-200">
//               Gallery
//             </a>
//             <a href="#blog" className="text-white hover:text-gray-200">
//               Blog
//             </a>
//             {/* Contact Button */}
//             <button className="bg-red-500 text-white px-4 py-2 rounded-md border border-white ">
//               Contact
//             </button>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import Container from "../Container/Container";
import logo from "../../assets/Logo.png";
import { MdMenu } from "react-icons/md"; // Ensure this import is correct
import ResponsiveMenu from "../../components/Newnav/ResponsciveMenu"; // Corrected the typo in file path

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavbarMenu = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "About", link: "#about" },
    { id: 3, title: "Services", link: "#services" },
    { id: 4, title: "Gallery", link: "#gallery" },
    { id: 5, title: "Blog", link: "#blog" },
  ];

  return (
    <div className="bg-[#F40404] min-h-[106px] py-4 font-primary">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="max-w-[390px] min-h-[81px]">
            <img src={logo} alt="Logo" className="pt-2 pr-4" />
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:block">
              <ul className="flex items-center text-white font-semibold text-[16px] gap-6">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl text-white" />
            </div>
            
            {/* Contact Button */}
            <button className="bg-[#F40404] font-semibold text-white px-4 py-2 rounded-md border border-white hover:bg-[#FFB800]">
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Slider Menu */}
        {open && <ResponsiveMenu open={open} setOpen={setOpen} />}
      </Container>
    </div>
  );
};

export default Navbar;
