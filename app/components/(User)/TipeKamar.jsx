import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa"; // Import icon bintang
import Image from "next/image";
import Standart from "@/public/Standart.JPG";
import Family from "@/public/Family.JPG";
import Deluxe from "@/public/Deluxe.JPG";

const TipeKamarComponent = () => {
  const rooms = [
    {
      type: "Standar",
      description:
        "Kamar dengan tempat tidur double sliding, ideal untuk pasangan. Dilengkapi fasilitas modern.",
      img: Standart,
      stars: 3, // Tambahkan jumlah bintang
    },
    {
      type: "Family",
      description:
        "Kamar keluarga dengan 1 double bed dan 1 single bed. Cocok untuk keluarga kecil.",
      img: Family,
      stars: 4, // Tambahkan jumlah bintang
    },
    {
      type: "Deluxe",
      description:
        "Kamar deluxe dengan 2 double bed, menawarkan kenyamanan ekstra untuk grup atau keluarga.",
      img: Deluxe,
      stars: 5, // Tambahkan jumlah bintang
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Tipe <span className="text-red-600">Kamar</span>
          </h1>
          <p className="text-md text-gray-600 mt-4 max-w-3xl mx-auto">
            Nikmati berbagai pilihan kamar dengan desain modern dan fasilitas
            unggulan yang akan membuat pengalaman menginap Anda di Villa Tiara
            Sarangan tak terlupakan.
          </p>
        </section>

        {/* Rooms Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-16">
          {rooms.map((room) => (
            <div
              key={room.type}
              className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={room.img}
                  alt={room.type}
                  className="object-cover w-full h-40 transform group-hover:scale-110 transition-transform duration-300"
                  layout="fill"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 relative">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {room.type}
                </h2>
                <div className="flex mb-3">
                  {[...Array(room.stars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 mr-1" />
                  ))}
                </div>
                <p className="text-gray-600 text-md mb-6">{room.description}</p>

                <Link
                  href="/tipe-kamar"
                  className="inline-flex items-center px-6 py-3 mb-3 bg-red-600 text-white text-sm font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105"
                >
                  Selengkapnya <FaAngleRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TipeKamarComponent;
