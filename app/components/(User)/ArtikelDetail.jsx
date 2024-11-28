"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation"; // Gunakan useParams dan useRouter
import Image from "next/image";

const ArtikelDetailComponent = () => {
  const { id } = useParams(); // Dapatkan parameter id dari URL
  const router = useRouter(); // Untuk navigasi
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) {
      // Ambil data artikel dari localStorage
      const storedArticles = localStorage.getItem("artikelList");
      if (storedArticles) {
        const articles = JSON.parse(storedArticles);
        const foundArticle = articles.find(
          (article) => article.id === parseInt(id)
        );
        setArticle(foundArticle);
      }
    }
  }, [id]);

  if (!article) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="mt-24 container mx-auto px-5 md:px-20 py-16">
      {/* Tombol Back */}
      <button
        onClick={() => router.push("/Artikel")}
        className="mb-8 px-4 py-2 text-sm font-semibold text-white flex justify-center items-center bg-red-500 rounded hover:bg-yellow-600 transition duration-300"
      >
        <FaAngleLeft className="mr-2" /> Kembali
      </button>

      {/* Detail Artikel */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Judul */}
        <div className="p-6">
          <h1 className="text-2xl font-extrabold text-gray-800 my-4 text-center">
            {article.title}
          </h1>
        </div>

        {/* Gambar */}
        <div className="px-10 rounded-5xl">
          <Image
            src={article.src}
            alt={article.title}
            width={60}
            height={60}
            layout="responsive"
            className="rounded-2xl h-40 object-cover"
          />
        </div>

        {/* Tanggal */}
        <div className="p-6">
          <p className="text-gray-500 text-sm text-center">
            Diterbitkan pada{" "}
            <span className="font-semibold">{article.date}</span>
          </p>
        </div>

        {/* Konten */}
        <div className="p-6 px-10">
          <p className="text-gray-700 leading-relaxed text-justify">
            {article.content ||
              "Konten lengkap dari artikel ini belum tersedia. Hubungi admin untuk informasi lebih lanjut."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtikelDetailComponent;
