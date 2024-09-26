import React from "react";

const ProfileSection = () => {
  return (
    <section className="py-16 bg-[#E9E5FF]">
      <div className="text-center mb-8 px-4">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Profil</h1>
        <p className="text-md sm:text-lg">
          Kunjungi profil guru dan siswa PPLG lewat card di bawah <br /> ini
          untuk mengenal mereka lebih dekat.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-24">
        {/* Card Guru */}
        <div className="bg-white shadow-lg rounded-[30px] overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="/guru.png"
            alt="Guru Pengembangan Perangkat Lunak"
            className="w-full h-auto"
          />
          <div className="p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-2">
              Guru Pengembangan Perangkat Lunak dan Gim
            </h2>
            <p className="text-gray-600 mb-4">
              Temukan profil para ahli yang mengajarkan pengembangan perangkat
              lunak dan gim di sini.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#6B46E4] text-white w-[150px] sm:w-[171px] h-[40px] sm:h-[44px] rounded-[15px] hover:bg-black transition duration-300">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>

        {/* Card Siswa */}
        <div className="bg-white shadow-lg rounded-[30px] overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="/siswa.png"
            alt="Siswa Pengembangan Perangkat Lunak"
            className="w-full h-auto"
          />
          <div className="p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-2">
              Siswa Pengembangan Perangkat Lunak dan Gim
            </h2>
            <p className="text-gray-600 mb-4">
              Temukan profil siswa di bidang pengembangan perangkat lunak dan
              gim di sini.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#6B46E4] text-white w-[150px] sm:w-[171px] h-[40px] sm:h-[44px] rounded-[15px] hover:bg-black transition duration-300">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
