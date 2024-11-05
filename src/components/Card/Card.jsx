import React from 'react'
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'

const Card = () => {
  return (
    <div>
        <div className="py-[130px] bg-[#F0F0F0]">
            <div className="flex justify-center gap-[60px]">
                {/* Card 1 */}
                <div 
                    style={{ backgroundImage: `url(${card1})` }}
                    className="w-[339px] h-[401px] bg-red-300 relative">
                    <div className="absolute inset-0 bg-[#00000099]"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-[24px] font-bold w-[249px] pl-[46px] pb-[90px]">
                        lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                    </div>
                    <div 
                        className="absolute bottom-5 left-[46px] hover:bg-transparent hover:border hover:border-white border border-transparent cursor-pointer transition duration-750 inline-block bg-red-600 text-white py-[14px] px-[30px]">
                        Learn More
                    </div>
                </div>

                {/* Card 2 */}
                <div 
                    style={{ backgroundImage: `url(${card2})` }}
                    className="w-[339px] h-[401px] bg-red-300 relative">
                    <div className="absolute inset-0 bg-[#00000099]"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-[24px] font-bold w-[249px] pl-[46px] pb-[90px]">
                        lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                    </div>
                    <div 
                        className="absolute bottom-5 left-[46px] hover:bg-transparent hover:border hover:border-white border border-transparent cursor-pointer transition duration-750 inline-block bg-red-600 text-white py-[14px] px-[30px]">
                        Learn More
                    </div>
                </div>

                {/* Card 3 */}
                <div 
                    style={{ backgroundImage: `url(${card3})` }}
                    className="w-[339px] h-[401px] bg-red-300 relative">
                    <div className="absolute inset-0 bg-[#00000099]"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-[24px] font-bold w-[249px] pl-[46px] pb-[90px]">
                        lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                    </div>
                    <div 
                        className="absolute bottom-5 left-[46px] hover:bg-transparent hover:border hover:border-white border border-transparent cursor-pointer transition duration-750 inline-block bg-red-600 text-white py-[14px] px-[30px]">
                        Learn More
                    </div>
                </div>
            </div>
            <div className="">
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Card
