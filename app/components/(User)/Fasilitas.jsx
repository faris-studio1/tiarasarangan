"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import {
  FaArrowRight,
  FaParking,
  FaWifi,
  FaConciergeBell,
  FaUtensils,
  FaMapMarkerAlt,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const FasilitasComponent = () => {
  useEffect(() => {
    new Glide(".glide").mount();
  }, []);

  return (
    <div className="bg-red-600">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-14 rounded-xl shadow-md animate-fadeIn">
        {/* GlideJS Section */}
        <section className="w-full md:w-1/2 rounded-xl">
          <div className="glide rounded-xl">
            <div className="glide__track rounded-xl" data-glide-el="track">
              <ul className="glide__slides rounded-xl">
                <li className="glide__slide">
                  <Image
                    className="object-cover rounded-xl hover:scale-105"
                    src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-74c2b886c0303fb917779d9ac5940ae4.jpeg"
                    alt="Tiara Village"
                    width={800}
                    height={420}
                    layout="responsive"
                  />
                </li>
                <li className="glide__slide">
                  <Image
                    className="object-cover rounded-xl hover:scale-105"
                    src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-147640908bf0184df67e31f2c26009fa.jpeg"
                    alt="Villa Tiara"
                    width={800}
                    height={420}
                    layout="responsive"
                  />
                </li>
                <li className="glide__slide">
                  <Image
                    className="object-cover rounded-xl hover:scale-105"
                    src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-5c9c6a49c99dee99b1ea62a8b1122086.jpeg"
                    alt="Beautiful Villa"
                    width={800}
                    height={420}
                    layout="responsive"
                  />
                </li>
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <FaChevronCircleLeft />
              </button>
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <FaChevronCircleRight />
              </button>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
              <button className="glide__bullet" data-glide-dir="=0"></button>
              <button className="glide__bullet" data-glide-dir="=1"></button>
              <button className="glide__bullet" data-glide-dir="=2"></button>
            </div>
          </div>
        </section>

        {/* Fasilitas Section */}
        <section className="w-full pl-4">
          <h2 className="text-5xl font-bold mb-8 text-white">
            Fasilitas Villa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fasilitas Utama */}
            <div className="col-span-1 text-white">
              <h3 className="text-xl font-medium mb-3">Fasilitas Utama</h3>
              <div className="flex items-center mb-2 text-sm">
                <FaUtensils className="mr-2" /> <span>Restoran</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaParking className="mr-2" /> <span>Parkir</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaConciergeBell className="mr-2" />{" "}
                <span>Resepsionis 24 Jam</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaWifi className="mr-2" /> <span>WiFi</span>
              </div>
            </div>
            {/* Tempat di Sekitar Villa */}
            <div className="col-span-2 text-white mb-6">
              <h3 className="text-xl font-medium mb-3">
                Tempat di Sekitar Villa
              </h3>
              <div className="flex items-center mb-2 text-sm">
                <FaMapMarkerAlt className="mr-2" />{" "}
                <span>Telaga Sarangan (383 m)</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaMapMarkerAlt className="mr-2" />{" "}
                <span>Bank Jatim KCP Plaosan (2.79 km)</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaMapMarkerAlt className="mr-2" />{" "}
                <span>Mojosemi Forest Park (1.23 km)</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaMapMarkerAlt className="mr-2" />{" "}
                <span>Rumah Retret & Kapel Domus (456 m)</span>
              </div>
            </div>
          </div>
          <Link
            href="/Fasilitas"
            className="inline-flex text-lg font-bold py-2 px-4 text-red-600 bg-white rounded-lg shadow-lg items-center justify-center hover:bg-yellow-500 transition duration-300 transform hover:-translate-y-1"
          >
            <span>Selengkapnya</span>
            <FaArrowRight className="ml-2" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default FasilitasComponent;
