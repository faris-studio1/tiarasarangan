"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const menuItems = [
  { name: "Beranda", target: "/Beranda" },
  { name: "Tentang", target: "#tentang" },
  { name: "Tipe Kamar", target: "#tipe-kamar" },
  { name: "Fasilitas", target: "#fasilitas" },
  { name: "Testimoni", target: "#testimoni" },
  { name: "Galeri", target: "#galeri" },
  { name: "Artikel", target: "#artikel" },
  { name: "FAQ", target: "#faq" },
];

const Navbar2Component = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fungsi untuk toggle menu mobile
  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Fungsi untuk menutup menu mobile
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Menangani perubahan warna navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed left-0 right-0 top-0 z-10 transition-all duration-300 bg-white bg-opacity-100 text-black shadow-lg"`}
    >
      <div
        className={`space-x-4 bg-black bg-opacity-70 text-white text-xs md:text-sm transition-all duration-300 py-3 md:py-4 ${
          scrolled ? "hidden" : "flex"
        }`}
      >
        <div className="container mx-auto md:px-4 flex md:justify-between justify-center">
          <div className="flex space-x-5 items-center">
            <a
              href="https://maps.app.goo.gl/jC6gnaMxtjUnpU8q9"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center hover:text-yellow-300"
              title="Location"
            >
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              <span>No. 193, Jl, Raya Telaga Sarangan 63361 Magetan</span>
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:text-yellow-300"
              title="WhatsApp"
            >
              <FaPhoneAlt className="mr-2 text-red-500" />
              <span>0831-2760-5430</span>
            </a>
            <a
              href="mailto:email@example.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:text-yellow-300"
              title="Email"
            >
              <FaEnvelope className="mr-2 text-red-500" />
              <span>villatiara@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="https://instagram.com/villatiara.sarangan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
              title="Instagram"
            >
              <FaInstagram className="mr-2" />
            </a>
            <a
              href="https://x.com/@username"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
              title="X"
            >
              <FaTwitter className="mr-2" />
            </a>
            <a
              href="https://tiktok.com/@tiarasarangan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
              title="TikTok"
            >
              <FaTiktok className="mr-2" />
            </a>
            <a
              href="https://youtube.com/c/username"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
              title="YouTube"
            >
              <FaYoutube className="mr-2" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`container mx-auto flex justify-between items-center px-6 py-2 md:py-3`}
      >
        <Link href="/Login">
          <h1 id="logo" className={`logo text-3xl md:text-4xl text-red-700`}>
            Villa Tiara
          </h1>
        </Link>

        <nav>
          <button
            id="menu-toggle"
            className={`md:hidden text-2xl focus:outline-none font-semibold`}
            onClick={handleMenuToggle}
          >
            &#9776;
          </button>
          {/* Menu Desktop */}
          <ul
            className={`hidden md:flex space-x-8 text-md py-2 font-bold text-gray-800`}
          >
            {menuItems.map((item) => (
              <li key={item.target}>
                <a
                  href={item.target}
                  className={`cursor-pointer hover:text-red-500`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-60 bg-gray-900 bg-opacity-95 text-white transform transition-transform duration-300 ease-in-out flex flex-col items-start p-5 space-y-6 z-20 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          id="close-menu"
          className="text-xl font-bold self-end focus:outline-none"
          onClick={handleCloseMenu}
          aria-label="Close Menu"
        >
          ✖
        </button>
        <ul className="text-lg w-full pl-2">
          {menuItems.map((item) => (
            <li key={item.target} className="w-full">
              <Link href={item.target} legacyBehavior>
                <a
                  className="block py-2 px-4 w-full hover:bg-yellow-300 hover:text-gray-900 hover:font-semibold rounded transition duration-300 ease-in-out"
                  onClick={handleCloseMenu}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar2Component;
