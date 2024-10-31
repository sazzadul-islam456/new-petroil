import React from 'react';
import banner from '../../assets/banner.png';
import Container from '../Container/Container';

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <Container>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white space-y-4 pt-[257px] px-4">
          <p className="text-left font-bold text-[64px] w-[390px] leading-tight">
            We exist since 1975 <br /> in the oil and gas industry.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600">
            Learn More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
