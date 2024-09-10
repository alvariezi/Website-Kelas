import React, { useState, useEffect } from 'react';

const Keseruan = () => {
  const [randomKekompakan, setRandomKekompakan] = useState(0);
  const [randomTataKrama, setRandomTataKrama] = useState(0);
  const [RandomKelas, setRandomKelas] = useState(0);

  useEffect(() => {
    const generateRandomNumber = (min, max) => {
      return (Math.random() * (max - min) + min).toFixed(2);
    };

    const kekompakanInterval = setInterval(() => {
      setRandomKekompakan(generateRandomNumber(0, 1)); 
    }, 100);

    const tataKramaInterval = setInterval(() => {
      setRandomTataKrama(generateRandomNumber(0, 1)); 
    }, 100);

    const RandomKelas = setInterval(() => {
      setRandomKelas(generateRandomNumber(0, 1));
    }, 100);

    setTimeout(() => {
      clearInterval(kekompakanInterval);
      clearInterval(tataKramaInterval);
      clearInterval(RandomKelas);
      setRandomKekompakan(0.01); 
      setRandomTataKrama(0.5);   
      setRandomKelas(34);
    }, 5000);

    return () => {
      clearInterval(kekompakanInterval);
      clearInterval(tataKramaInterval);
      clearInterval(RandomKelas)
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:mt-10 mb-10 max-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 ">
        Keseruan <span className='text-[#604CC3]'>Kelas</span>
      </h1>

      <div className="flex flex-col sm:flex-row justify-around w-full">
        
        <div className="flex flex-col items-center">
          <span className="text-[55px] font-bold">
            {randomKekompakan} <span className='text-[#604CC3]'>%</span>
          </span>
          <span className="text-[31px] font-semibold text-[#9A9A9A]">Kekompakan</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-[55px] font-bold">
            {randomTataKrama} <span className='text-[#604CC3]'>%</span>
          </span>
          <span className="text-[31px] font-semibold text-[#9A9A9A]">Tata Krama</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-[55px] font-bold">
            {RandomKelas}
          </span>
          <span className="text-[31px] font-semibold text-[#9A9A9A]">Jumlah Siswa</span>
        </div>
        
      </div>
    </div>
  );
};

export default Keseruan;
