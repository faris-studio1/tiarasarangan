"use client";
import React from "react";
import UserTemplate2 from "@/app/(templates)/(User)/UserTemplate2";
import {
  FaConciergeBell,
  FaParking,
  FaUtensils,
  FaCoffee,
  FaWifi,
  FaBed,
} from "react-icons/fa";
import Standart from "@/public/Standart.JPG";
import Family from "@/public/Family.JPG";
import Deluxe from "@/public/Deluxe.JPG";
import Image from "next/image";

const TipeKamarPage = () => {
  // Data untuk kamar
  const rooms = [
    {
      type: "standart",
      title: "Kamar Standar",
      image: Standart,
      bedDescription: "1 Double Bed & 1 Sliding Bed",
    },
    {
      type: "family",
      title: "Kamar Family",
      image: Family,
      bedDescription: "1 Double Bed & 1 Single Bed",
    },
    {
      type: "deluxe",
      title: "Kamar Deluxe",
      image: Deluxe,
      bedDescription: "2 Double Beds",
    },
  ];

  // Data fasilitas umum
  const facilities = [
    { icon: <FaWifi />, text: "Wi-Fi Gratis" },
    { icon: <FaCoffee />, text: "Pembuat Kopi/Teh" },
    { icon: <FaConciergeBell />, text: "Layanan Kamar 24 Jam" },
    { icon: <FaParking />, text: "Parkir Gratis" },
    { icon: <FaUtensils />, text: "Sarapan Gratis" },
  ];

  return (
    <UserTemplate2>
      <div className="tentang-container py-10 px-10 md:px-20 mt-24 text-gray-800">
        {/* Hero Section */}
        <section className="hero-section relative text-center bg-cover bg-center rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-red-600 px-10 md:px-40 py-8 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Tipe Kamar
            </h1>
            <p className="text-sm md:text-md font-light">
              Nikmati berbagai pilihan kamar dengan desain modern dan fasilitas
              unggulan yang akan membuat pengalaman menginap Anda di Villa Tiara
              Sarangan tak terlupakan.
            </p>
          </div>
        </section>

        {/* List Tipe Kamar */}
        <section className="grid grid-cols-1 md:grid-cols-3 text-md gap-6 my-6 font-extrabold">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="flex flex-col text-center text-gray-800 hover:text-white justify-center items-center bg-white hover:bg-red-600 border-4 border-gray-300 py-6 rounded-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => {
                // Scroll ke section sesuai id
                document.getElementById(room.type)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <h1 className="text-xl font-extrabold">{room.title}</h1>
            </div>
          ))}
        </section>

        {/* Detail Tipe Kamar */}
        {rooms.map((room, index) => (
          <section
            key={index}
            id={room.type} // Menambahkan ID sesuai tipe kamar
            className="room-section bg-white rounded-2xl shadow-lg p-10 mb-10 animate-fade-in-up"
          >
            <h2 className="text-3xl text-center md:text-justify font-extrabold mb-6 text-red-600">
              {room.title}
            </h2>
            <div className="flex flex-col items-start md:flex-row">
              <Image
                src={room.image}
                alt={room.title}
                className="w-full md:w-4/6 lg:w-3/5 rounded-3xl mb-6 md:mb-0 mr-10 lg:mr-12 transform hover:scale-105 transition-transform duration-300"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Fasilitas
                </h3>
                <ul className="list-none space-y-2 lg:space-y-4">
                  {/* Bed Description */}
                  <li className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300">
                    <div className="text-2xl text-red-500 mr-3">
                      <FaBed />
                    </div>
                    {room.bedDescription}
                  </li>
                  {/* General Facilities */}
                  {facilities.map((facility, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300"
                    >
                      <div className="text-2xl text-red-500 mr-3">
                        {facility.icon}
                      </div>
                      {facility.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </UserTemplate2>
  );
};

export default TipeKamarPage;
