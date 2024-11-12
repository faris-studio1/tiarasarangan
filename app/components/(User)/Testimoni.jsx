"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import {
  FaBed,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";

const testimonials = [
  {
    avatar: "NH",
    name: "Nurul Halimah",
    type: "Backpacking",
    rating: "9.0 / 10",
    date: "02 Feb 2023",
    review:
      "Kamar yang nyaman dan fasilitas yang lengkap. Pelayanan sangat ramah dan membantu. Sangat puas menginap di sini!",
    likes: 25,
  },
  {
    avatar: "AJ",
    name: "Baihaqi Rusdi",
    type: "Family",
    rating: "8.8 / 10",
    date: "15 Mar 2024",
    review:
      "Lokasi strategis dan pemandangan indah. Kamar bersih dan luas, cocok untuk keluarga. Anak-anak sangat menikmati!",
    likes: 30,
  },
  {
    avatar: "UL",
    name: "Ulil Ardian",
    type: "Business",
    rating: "9.2 / 10",
    date: "05 Apr 2024",
    review:
      "Tempat yang sempurna untuk perjalanan bisnis. WiFi cepat dan fasilitas meeting room sangat baik. Akan kembali lagi!",
    likes: 45,
  },
  {
    avatar: "FZ",
    name: "Fauzan Hapsah",
    type: "Solo",
    rating: "9.5 / 10",
    date: "10 Mei 2024",
    review:
      "Tempat yang nyaman untuk beristirahat. Kamar bersih dan tenang, serta staf sangat ramah. Sangat direkomendasikan!",
    likes: 35,
  },
  {
    avatar: "RL",
    name: "Rizka Listyowati",
    type: "Couple",
    rating: "9.3 / 10",
    date: "21 Jun 2023",
    review:
      "Pengalaman menginap yang sangat menyenangkan. Villa yang indah dengan suasana yang romantis. Layanan sangat memuaskan!",
    likes: 40,
  },
];

const TestimoniComponent = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      gap: 30,
      autoplay: 5000,
    });

    glide.mount();

    // Cleanup function untuk meng-unmount glide ketika komponen di-unmount
    return () => glide.destroy();
  }, []);

  return (
    <div className="bg-red-600">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-5 px-6 py-6 md:px-16">
        <section className="md:w-2/6 text-center md:text-left items-center justify-center text-white">
          <h1 className="text-6xl my-5 font-bold">Testimoni</h1>
          <p className="text-xl leading-relaxed mb-6">
            Dengarkan apa yang pelanggan kami katakan tentang pengalaman mereka
            menginap di Villa Tiara.
          </p>
        </section>
        <section className="w-full md:w-4/6">
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {testimonials.map((testimonial, index) => (
                  <li className="glide__slide" key={index}>
                    <div className="border rounded-lg shadow-lg p-8 max-w-2xl mx-20 my-8 bg-white">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <h2 className="text-lg font-semibold">
                            {testimonial.name}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {testimonial.type}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                            {testimonial.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {testimonial.review}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <FaBed className="text-xl text-gray-500" />
                          <span>
                            {testimonial.likes} orang menyukai review ini
                          </span>
                        </div>
                        <span className="text-gray-400">
                          {testimonial.date}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <FaChevronCircleLeft className="text-white text-2xl" />
              </button>
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <FaChevronCircleRight className="text-white text-2xl" />
              </button>
            </div>
            <div
              className="glide__bullets mt-4 flex justify-center"
              data-glide-el="controls[nav]"
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className="glide__bullet mx-1 w-3 h-3 bg-white rounded-full"
                  data-glide-dir={`=${index}`}
                ></button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimoniComponent;
