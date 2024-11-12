"use client";

import React, { useEffect } from "react";

const TambahKamar = () => {
  useEffect(() => {
    // Data JSON yang ingin disimpan
    const kamarList = {
      VillaTiara1: [
        {
          kodeKamar: "VT1-0301",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 400000,
        },
        {
          kodeKamar: "VT1-0302",
          tipeKamar: "DELUXE",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 500000,
        },
        {
          kodeKamar: "VT1-0203",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 400000,
        },
        {
          kodeKamar: "VT1-0204",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 400000,
        },
        {
          kodeKamar: "VT1-0205",
          tipeKamar: "FAMILY",
          jumlahBedKamar: "2 Bed, 3 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT1-0206",
          tipeKamar: "FAMILY",
          jumlahBedKamar: "1 Bed, 2/4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT1-0107",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 400000,
        },
        {
          kodeKamar: "VT1-0108",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 400000,
        },
        {
          kodeKamar: "VT1-0109",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 400000,
        },
        {
          kodeKamar: "VT1-0110",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 400000,
        },
        {
          kodeKamar: "VT1-0011",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 400000,
        },
        {
          kodeKamar: "VT1-0012",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 400000,
        },
      ],

      VillaTiara2: [
        {
          kodeKamar: "VT2-0215",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT2-0302",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT2-0303",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT2-0304",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT2-0205",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT2-0206",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT2-0207",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT2-0208",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT2-0110",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT2-0111",
          tipeKamar: "STANDART",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
        {
          kodeKamar: "VT1-0314",
          tipeKamar: "DELUXE",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 500000,
        },
        {
          kodeKamar: "VT1-0215",
          tipeKamar: "FAMILY",
          jumlahBedKamar: "2 Bed, 4 Orang",
          statusKamar: "kosong",
          hargaKamar: 450000,
        },
      ],
    };

    // Konversi objek JSON ke string
    const jsonData = JSON.stringify(kamarList);

    // Simpan ke local storage dengan kunci "villaData"
    localStorage.setItem("kamarList", jsonData);

    // Verifikasi bahwa data telah disimpan dengan benar
    console.log(
      "Data telah disimpan ke local storage:",
      localStorage.getItem("villaData")
    );
  }, []); // [] memastikan efek hanya dijalankan sekali saat komponen dimuat

  return (
    <div>
      <h1>Tambah Kamar</h1>
    </div>
  );
};

export default TambahKamar;
