import React from 'react'
import aboutImg from '../../assets/about-bg.jpg'

import comLogo1 from '../../assets/cmLogo1.jpg'
import comLogo2 from '../../assets/cmLogo2.jpg'
import comLogo3 from '../../assets/cmLogo3.jpg'
import comLogo4 from '../../assets/cmLogo4.jpg'

const About = () => {
  return (
    <div className="">
        <div className=" flex justify-center py-[136px] bg-[#F0F0F0]">
        <div className='bg-[#F40404] w-[413px] h-[361px] font-primary'>
        <div className="pt-[100px] pl-[75px]">
            <p className='text-white text-[36px] font-bold w-[262px] h-[162px] leading-[54px] '>
                Learn more about our company</p>
        </div>
    </div>

    <div className="">
        <div 
        style={{ backgroundImage: `url(${aboutImg})` }}
        className="bg-cover bg-no-repeat bg-center h-[361px] w-[726px]">
            <div className="pt-[168px] pl-[282px]">
            <div className="hover:bg-transparent hover:border hover:border-white border border-transparent cursor-pointer transition duration-750 inline-block bg-red-600 text-white py-[14px] px-[30px] ">
                Learn More
            </div>
            </div>
        </div>
        
    </div>
    </div>

{/* companny logo part */}

    <div className="py-[117px]">
        <div className="flex justify-center">
            <img src={comLogo1} alt="" />
            <img src={comLogo2} alt="" />
            <img src={comLogo3} alt="" />
            <img src={comLogo4} alt="" />
        </div>
    </div>
    </div>
    

    
  )
}

export default About