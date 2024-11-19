import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-green-100 p-6 md:p-10 lg:p-20">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold mb-4">
          Beautify Your Home With Plants
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-4">
          Explore our wide collection of plants to make your space lively and fresh.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;