import React from 'react'

const Map = () => {
  return (
    <div className='font-primary overflow-hidden'>
        <div className="">
        <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233738.90505383417!2d90.09418908671876!3d23.741302499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1730783013412!5m2!1sen!2sbd" 
    width="1920px" 
    height="450px" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </div>
        <div className="w-[1920px] h-[145px] bg-[#F40404] ">
            <div className="flex py-[46px] pl-[100px]">
                <p className='w-[959px] font-bold text-[36px] text-white'>Want to join as member branch in your area?</p>
                <div className="hover:bg-transparent hover:border border-white border border-transparent cursor-pointer transition duration-750 inline-block bg-red-600 text-white py-[14px] px-[30px]  ">
                CONTACT
            </div>
            </div>
        </div>
        <div className="w-[1920px] h-[5px] bg-[#FFB800]">

        </div>
    </div>
  )
}

export default Map