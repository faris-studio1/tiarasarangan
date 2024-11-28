"use client";

import React from "react";
import {
  FaParking,
  FaWifi,
  FaConciergeBell,
  FaUtensils,
  FaMapMarkerAlt,
  FaAngleRight,
} from "react-icons/fa";
import Link from "next/link";

const FasilitasComponent = () => {
  return (
    <div className="bg-gradient-to-b from-red-500 to-red-700 py-16">
      <div className="container mx-auto px-6 md:px-20">
        {/* Title Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Fasilitas Villa
          </h1>
          <p className="text-md text-gray-100 mt-4 max-w-2xl mx-auto">
            Temukan beragam fasilitas modern dan premium untuk mendukung
            kenyamanan Anda selama menginap.
          </p>
        </section>

        {/* Fasilitas Utama */}
        <div className="grid grid-cols-1">
          <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10 px-5">
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaUtensils className="text-5xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Restoran</h3>
              <p className="text-gray-600 text-md mt-2">
                Nikmati berbagai hidangan lezat dengan pemandangan alam yang
                memukau.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaParking className="text-5xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Parkir Luas
              </h3>
              <p className="text-gray-600 text-md mt-2">
                Area parkir yang aman dan nyaman untuk kendaraan Anda.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaWifi className="text-5xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                WiFi Gratis
              </h3>
              <p className="text-gray-600 text-md mt-2">
                Akses internet berkecepatan tinggi di seluruh area villa.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaConciergeBell className="text-5xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Resepsionis 24/7
              </h3>
              <p className="text-gray-600 text-md mt-2">
                Pelayanan resepsionis profesional siap membantu kapan saja.
              </p>
            </div>
          </section>

          {/* Nearby Locations */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-8">
            Terdekat dari Villa
          </h1>
          <section className="grid grid-cols-2 text-center px-5 gap-6">
            {/* Telaga Sarangan */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-md flex justify-between items-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-4xl text-red-600 mr-4" />
                <div className="items-start flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Telaga Sarangan
                  </h4>
                  <p className="text-md text-gray-600">383 m dari lokasi.</p>
                </div>
              </div>
              <FaAngleRight className="text-red-600 text-3xl" />
            </div>
            {/* Bank Jatim KCP Plaosan */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-md flex justify-between items-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-4xl text-red-600 mr-4" />
                <div className="items-start flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Bank Jatim KCP Plaosan
                  </h4>
                  <p className="text-md text-gray-600">2.79 km dari lokasi.</p>
                </div>
              </div>
              <FaAngleRight className="text-red-600 text-3xl" />
            </div>
            {/* Mojosemi Forest Park */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-md flex justify-between items-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-4xl text-red-600 mr-4" />
                <div className="items-start flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Mojosemi Forest Park
                  </h4>
                  <p className="text-md text-gray-600">1.23 km dari lokasi.</p>
                </div>
              </div>
              <FaAngleRight className="text-red-600 text-3xl" />
            </div>
            {/* Rumah Retret & Kapel Domus Marlae */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-md flex justify-between items-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-4xl text-red-600 mr-4" />
                <div className="items-start flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Rumah Retret & Kapel Domus Marlae
                  </h4>
                  <p className="text-md text-gray-600">456 m dari lokasi.</p>
                </div>
              </div>
              <FaAngleRight className="text-red-600 text-3xl" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FasilitasComponent;
