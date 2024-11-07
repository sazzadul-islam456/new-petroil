import React from 'react';
import banner from '../../assets/banner.png';


const Banner = () => {
  return (
    
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="px-5 md:px-0 bg-cover bg-no-repeat w-full py-[20px] md:py-[257px] relative font-primary"
    >
      <div className="absolute inset-0 bg-[#00000099]" />
      <div className="max-w-[1140px] mx-auto relative z-10">
        <h1 className="md:w-[840px] text-[20px] text-white font-bold md:text-[64px] mb-10">
          We exist since 1975 in the oil and gas industry.
        </h1>
        <button className="bg-[#F40404] text-[12px] py-[8px] px-[10px] md:py-[13px] md:px-10 text-white md:font-semibold hover:bg-white hover:text-black hover:border-black">
          LEARN MORE
        </button>
      </div>
    </div>
    
  );
};

export default Banner;
