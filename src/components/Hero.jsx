import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-28 relative"> 
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 mt-1 md:mt-10 md:mb-0 max-w-[500px]">
          <h3 className="text-[#604CC3] font-semibold text-xl mb-4">Class Website PPLG 2</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hai, selamat datang <span className='text-[#604CC3]'>di situs kelas kami</span>
          </h1>
          <p className="text-gray-600 text-lg font-light">
            Halo, selamat datang di situs kelas kami! pemahaman dalam mengeksplorasi berbagai topik menarik di kelas ini. 
            Temukan pengetahuan baru dan tingkatkan keterampilan Anda bersama kami.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end ml-60">
          <img
            src="../public/hero.png"
            alt="Hero Section"
            className="hidden md:block md:absolute bottom-0 right-0 md:max-w-[872px] md:h-[550px] md:object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
