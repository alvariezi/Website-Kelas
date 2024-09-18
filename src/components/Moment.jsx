import React, { useState } from "react";

const moments = [
  {
    id: 1,
    image: "../public/1.png",
    title: "Moment 1",
    date: "10 September 2023",
  },
  {
    id: 2,
    image: "../public/2.png",
    title: "Moment 2",
    date: "11 September 2023",
  },
  {
    id: 3,
    image: "../public/3.png",
    title: "Moment 3",
    date: "12 September 2023",
  },
  {
    id: 4,
    image: "../public/4.png",
    title: "Moment 4",
    date: "13 September 2023",
  },
  {
    id: 5,
    image: "../public/5.png",
    title: "Moment 5",
    date: "14 September 2023",
  },
  {
    id: 6,
    image: "../public/6.png",
    title: "Moment 6",
    date: "15 September 2023",
  },
  {
    id: 7,
    image: "../public/7.png",
    title: "Moment 7",
    date: "16 September 2023",
  },
  {
    id: 8,
    image: "../public/8.png",
    title: "Moment 8",
    date: "17 September 2023",
  },
  {
    id: 9,
    image: "../public/9.png",
    title: "Moment 9",
    date: "18 September 2023",
  },
];

const MomentSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-8 px-4 sm:px-8">
      {/* Teks di atas */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Moment
        </h1>
        <p className="text-sm sm:text-lg text-gray-600">
          Kalian bisa kunjungi card di bawah ini untuk melihat <br /> moment -
          moment pplg
        </p>
      </div>

      {/* Grid card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {moments.map((moment) => (
          <div
            key={moment.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={moment.image}
              alt={moment.title}
              className="w-full h-auto object-cover cursor-pointer"
              onClick={() => openPopup(moment.image)}
            />
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                {moment.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {moment.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bagian Lihat Momen Lainnya dan Tombol Lihat Selengkapnya */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 sm:mt-14 space-y-4 sm:space-y-0 sm:space-x-4">
        <p className="text-[20px] sm:text-[25px] lg:text-[30px] font-semibold">
          Lihat moment - moment <span className="text-[#604CC3]">lainnya</span>
        </p>
        <button className="bg-[#604CC3] text-white w-full sm:w-[171px] h-[44px] rounded-[15px] hover:bg-black transition duration-300">
          Lihat Selengkapnya
        </button>
      </div>

      {/* Pop-up Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg">
            <img
              src={selectedImage}
              alt="Selected Moment"
              className="max-w-[90vw] max-h-[80vh] object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-300 text-gray-800 rounded-full p-2"
              onClick={closePopup}
            >
              &#10005; {/* Icon "X" */}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MomentSection;
