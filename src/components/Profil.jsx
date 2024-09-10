import React from 'react';

const ProfileSection = () => {
  return (
    <section className="py-16 bg-[#E9E5FF]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Profil</h1>
        <p className="text-lg">
          Kunjungi profil guru dan siswa PPLG lewat card di bawah ini untuk mengenal mereka lebih dekat.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-24">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <img
            src="../public/guru.png" 
            alt="Guru Pengembangan Perangkat Lunak"
            className="w-full h-auto"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Guru Pengembangan Perangkat Lunak dan Gim</h2>
            <p className="text-gray-600 mb-4">
              Temukan profil para ahli yang mengajarkan pengembangan perangkat lunak dan gim di sini.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#6B46E4] text-white w-[171px] h-[44px] rounded-[15px] hover:bg-black transition duration-300">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <img
            src="../public/siswa.png"
            alt="Guru Pengembangan Perangkat Lunak"
            className="w-full h-auto"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Siswa pengembangan perangkat lunak dan gim</h2>
            <p className="text-gray-600 mb-4">
            Temukan profil siswa di bidang pengembangan perangkat lunak dan gim di sini.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#6B46E4] text-white w-[171px] h-[44px] rounded-[15px] hover:bg-black transition duration-300">
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
