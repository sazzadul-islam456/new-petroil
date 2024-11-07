import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";

import logo from "../../assets/Logo.png"
import Container from "../Container/Container";



const Newnav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
       <Container>
       <div className="container flex justify-between items-center py-4 bg-red-500">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <img src={logo} alt="" />
            
          </div>
          {/* menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center text-gray-600 gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* icon section */}
          {/* <div className="flex items-center gap-4">
            <button className=" bg-red-500 text-white px-4 py-2 rounded-md border border-white  hidden md:block">
              Contact
            </button>
          </div> */}
          {/* mobile hamburger section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
       </Container>
      </nav>

      {/* mobile slider section */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Newnav;
