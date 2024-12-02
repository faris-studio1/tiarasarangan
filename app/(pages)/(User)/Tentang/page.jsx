import React from "react";
import UserTemplate2 from "@/app/(templates)/(User)/UserTemplate2";
import {
  FaConciergeBell,
  FaParking,
  FaUtensils,
  FaCoffee,
  FaChalkboardTeacher,
  FaWifi,
  FaBed,
  FaTree,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaAngleRight,
  FaWater,
  FaCampground,
  FaTint,
  FaSeedling,
} from "react-icons/fa";
import Link from "next/link";

const TentangPage = () => {
  return (
    <UserTemplate2>
      <div className="tentang-container py-10 px-20 mt-24 text-gray-800">
        {/* Hero Section */}
        <section
          className="hero-section relative text-center bg-cover bg-center rounded-2xl overflow-hidden shadow-xl mb-12"
          style={{
            backgroundImage:
              "url(https://www.hdwallpapers.in/download/white_leaves_branches_white_background_hd_white_background-1920x1080.jpg)",
          }}
        >
          <div className="bg-red-600 px-10 md:px-40 py-10 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-shadow-xl">
              Tentang Villa
            </h1>
            <p className="text-sm md:text-md font-light mb-4 text-shadow-md">
              Villa Tiara Sarangan adalah penginapan strategis dekat destinasi
              wisata populer Telaga Sarangan di Magetan, Jawa Timur. Dengan
              fasilitas lengkap dan harga terjangkau, villa ini cocok untuk
              agenda liburan Anda bersama keluarga.
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <a
                href="https://instagram.com/villatiara.sarangan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-lg text-white hover:text-yellow-400 cursor-pointer" />
              </a>
              <a
                href="https://twitter.com/villatiara_sarangan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-lg text-white hover:text-yellow-400 cursor-pointer" />
              </a>
              <a
                href="https://tiktok.com/@villatiarasarangan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-lg text-white hover:text-yellow-400 cursor-pointer" />
              </a>
              <a
                href="https://youtube.com/@villatiarasarangan9576"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-lg text-white hover:text-yellow-400 cursor-pointer" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose mb-12">
          <div className="text-center mx-auto mb-10">
            <h2 className="text-3xl font-extrabold mb-4">
              Kenapa Harus Menginap di <br />
              <span className="text-red-700">Villa Tiara Sarangan?</span>
            </h2>
            <p className="text-md md:text-justify justify-center font-light text-gray-700 max-w-3xl mx-auto">
              Villa Tiara Sarangan adalah pilihan ideal bagi Anda yang mencari
              penginapan Sarangan murah dengan suasana mewah dan nyaman.
              Terletak di kawasan wisata Sarangan yang terkenal dengan keindahan
              Telaga Sarangan, Villa Tiara Sarangan menawarkan pengalaman
              menginap modern yang tetap menyatu dengan nuansa alami. Dengan
              lokasi strategis dekat Telaga Sarangan, Villa Tiara Sarangan ini
              menjadi tempat sempurna untuk bersantai, menikmati pemandangan
              indah, dan melarikan diri dari hiruk-pikuk kota. Villa Tiara
              Sarangan memberikan kenyamanan maksimal bagi liburan Anda bersama
              keluarga, pasangan maupun teman.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaConciergeBell />,
                title: "Resepsionis 24 Jam",
                description: "Kami siap melayani kebutuhan Anda kapan saja.",
              },
              {
                icon: <FaParking />,
                title: "Parkir Luas",
                description: "Area parkir luas yang aman dan nyaman.",
              },
              {
                icon: <FaUtensils />,
                title: "Restoran",
                description: "Nikmati hidangan lezat di restoran kami.",
              },
              {
                icon: <FaCoffee />,
                title: "Café Tiara",
                description:
                  "Nikmati minuman dan makanan ringan di Café Tiara.",
              },
              {
                icon: <FaChalkboardTeacher />,
                title: "Meeting Room",
                description:
                  "Ruang pertemuan yang dilengkapi dengan fasilitas lengkap.",
              },
              {
                icon: <FaWifi />,
                title: "WiFi Gratis",
                description:
                  "Tetap terhubung dengan internet cepat di seluruh area villa.",
              },
              {
                icon: <FaBed />,
                title: "Kamar Nyaman",
                description:
                  "Kamar bersih dan nyaman untuk istirahat terbaik Anda.",
              },
              {
                icon: <FaTree />,
                title: "View Alam",
                description:
                  "Dikelilingi pemandangan hijau untuk pengalaman yang menyegarkan.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl text-red-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="facilities mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold">
              Jenis Kamar{" "}
              <span className="text-red-700">Villa Tiara Sarangan</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaBed />, title: "Kamar Standar", target: "/TipeKamar" },
              { icon: <FaBed />, title: "Kamar Deluxe", target: "/TipeKamar" },
              { icon: <FaBed />, title: "Kamar Family", target: "/TipeKamar" },
            ].map((item, index) => (
              <div
                key={index}
                className="facility-item bg-red-600 p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Link
                  className="flex items-center justify-between"
                  href={item.target}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mr-4 flex-shrink-0">
                      <div className="text-3xl text-red-600">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg text-white font-extrabold">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex">
                    <FaAngleRight className="ml-2 text-2xl text-white" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="nearby-attractions mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold">
              Tempat Wisata Sarangan Dekat
              <span className="text-red-700"> Villa Tiara Sarangan</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaWater />,
                title: "Telaga Sarangan",
                description: "850 m dari villa",
              },
              {
                icon: <FaTint />,
                title: "Air Terjun Ngadiloyo",
                description: "2.4 km dari villa",
              },
              {
                icon: <FaCampground />,
                title: "Mojosemi Forest Park",
                description: "3 km dari villa",
              },
              {
                icon: <FaSeedling />,
                title: "Agrowisata Strawberry",
                description: "1.9 km dari villa",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl text-green-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </UserTemplate2>
  );
};

export default TentangPage;
