"use client";

import React from "react";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import "react-photo-view/dist/react-photo-view.css";
import { FaAngleRight } from "react-icons/fa";

const GaleriComponent = () => {
  const images = [
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-9fc40c87b7c08e70296547d0c97dc3cd.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-43300d1713b75257b064b79df6654401.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-5c9c6a49c99dee99b1ea62a8b1122086.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-0317d107c478aa5272bfdcde77220bcc.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-38f3c3cd58fc93e46a54609fb79e8e6f.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-529fba50e81e68b49c0a8de1f780e89f.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-9fc40c87b7c08e70296547d0c97dc3cd.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-43300d1713b75257b064b79df6654401.jpeg",
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Galeri <span className="text-red-600">Villa</span>
          </h1>
          <p className="text-md text-gray-600 mt-4 max-w-3xl mx-auto">
            Jelajahi setiap sudut Villa Tiara Sarangan dengan koleksi foto
            terbaik yang kami tawarkan.
          </p>
        </section>

        {/* Gallery Section */}
        <PhotoProvider>
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {images.slice(0, -1).map((src, index) => (
              <PhotoView key={index} src={src}>
                <div className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    className="w-full h-full object-cover"
                    src={src}
                    alt={`Villa ${index + 1}`}
                    width={800}
                    height={533}
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">
                      Klik untuk memperbesar
                    </span>
                  </div>
                </div>
              </PhotoView>
            ))}
            {/* Last image with "View More" */}
            <Link href="/more-gallery">
              <div className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Image
                  className="w-full h-full object-cover"
                  src={images[images.length - 1]}
                  alt="View More"
                  width={800}
                  height={533}
                  layout="responsive"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white flex items-center justify-center text-lg font-semibold">
                    View More <FaAngleRight className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default GaleriComponent;
