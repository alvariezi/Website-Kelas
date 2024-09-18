import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 relative z-10"> {/* Menambahkan z-index */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[30px] font-bold">
          XII<span className='text-[#604CC3]'>PPLG2</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#moments" className="hover:text-[#604CC3] font-bold relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-[#604CC3] hover:after:w-full after:transition-all after:duration-300">
            Moments
          </a>
          <a href="#profile" className="hover:text-[#604CC3] font-bold relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-[#604CC3] hover:after:w-full after:transition-all after:duration-300">
            Profile
          </a>
          <a href="#blog" className="hover:text-[#604CC3] font-bold relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-[#604CC3] hover:after:w-full after:transition-all after:duration-300">
            Blog
          </a>
        </div>
        <div>
          <button className="bg-[#604CC3] text-white px-10 py-2 rounded-[15px] hover:bg-black transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(96,76,195,0.7)] relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10">Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
