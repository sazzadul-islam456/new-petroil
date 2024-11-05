import React from "react";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const Services = () => {
  return (
    <div className="py-[200px] font-primary overflow-hidden">
      <div className="flex">
        <div className="w-1/2">
          <div className="flex items-center h-[100%]">
          <div className="ml-[100px]">
          <h3 className="text-[64px] font-bold">Our Services</h3>
          <p className="w-[405px] text-base font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          </div>
          </div>
        </div>
        <div
          className="w-1/2 relative bg-cover bg-no-repeat bg-center h-[410px]"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="absolute inset-0 bg-[#00000099] pt-[147px] pb-[139px]">
            <p className="text-white text-[36px] font-bold ml-[116px]">Modern natural oil and gas refineries.</p>
            <div className="hover:bg-transparent hover:border hover:border-white border border-transparent cursor-pointer transition duration-750 inline-block bg-red-600 text-white py-[14px] px-[30px] ml-[116px]">
                Learn More
            </div>
          </div>
        </div>


        
      </div>
     <div className="flex justify-between">
     <div
          className="w-1/2 relative bg-cover bg-no-repeat bg-center h-[410px]"
          style={{ backgroundImage: `url(${banner2})` }}
        >
          <div className="absolute inset-0 bg-[#00000099] pt-[147px] pb-[139px]">
            <p className="text-white text-[36px] font-bold ml-[116px]">Modern natural oil and gas refineries.</p>
            <div className="hover:bg-transparent hover:border hover:border-white border border-transparent cursor-pointer transition duration-750 inline-block bg-red-600 text-white py-[14px] px-[30px] ml-[116px]">
                Learn More
            </div>
          </div>
        </div>
        
        <div
          className="w-1/2 relative bg-cover bg-no-repeat bg-center h-[410px]"
          style={{ backgroundImage: `url(${banner3})` }}
        >
          <div className="absolute inset-0 bg-[#00000099] pt-[147px] pb-[139px]">
            <p className="text-white text-[36px] font-bold ml-[116px]">Modern natural oil and gas refineries.</p>
            <div className="hover:bg-transparent hover:border hover:border-white border border-transparent cursor-pointer transition duration-750 inline-block bg-red-600 text-white py-[14px] px-[30px] ml-[116px]">
                Learn More
            </div>
          </div>
        </div>
     </div>
    </div>
  );
};

export default Services;
