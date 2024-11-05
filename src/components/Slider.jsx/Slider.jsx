import React from 'react';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.png';
import slider4 from '../../assets/slider4.png';

const Slider = () => {
  return (
    <div className="flex justify-between w-full overflow-hidden">
      <img src={slider1} alt="Slider 1" className="w-full max-w-[480px] object-cover" />
      <img src={slider2} alt="Slider 2" className="w-full max-w-[480px] object-cover  pl-[30px]" />
      <img src={slider3} alt="Slider 3" className="w-full max-w-[480px] object-cover pl-[30px]" />
      <img src={slider4} alt="Slider 4" className="w-full max-w-[480px] object-cover pl-[30px]" />
    </div>
  );
}

export default Slider;
