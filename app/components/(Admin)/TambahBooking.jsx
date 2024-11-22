"use client";

import React, { useState, useContext, useEffect, useCallback } from "react";
import {
  FaHotel,
  FaSave,
  FaTrash,
  FaBed,
  FaDollarSign,
  FaTags,
  FaArrowLeft,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeContext } from "@/app/(contexts)/DarkModeContext";

const TambahBooking = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const router = useRouter();
  const { isDarkMode } = useContext(DarkModeContext);
  const [selectedRoomId, setSelectedRoomId] = useState("000");
  const [selectedRoomType, setSelectedRoomType] = useState("none");
  const [selectedBed, setSelectedBed] = useState("-");
  const [selectedStatus, setSelectedStatus] = useState("-");
  const [selectedRoomHarga, setSelectedRoomHarga] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);
  const [bookingList, setBookingList] = useState([]);
  const [checkInList, setCheckInList] = useState([]);
  const [riwayatList, setRiwayatList] = useState([]);
  const [villaTiara1, setVillaTiara1] = useState([]);
  const [villaTiara2, setVillaTiara2] = useState([]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [today, setToday] = useState("");

  // Ambil data kamar dari localStorage
  useEffect(() => {
    const storedKamarList = JSON.parse(localStorage.getItem("kamarList"));
    setVillaTiara1(storedKamarList.VillaTiara1 || []);
    setVillaTiara2(storedKamarList.VillaTiara2 || []);

    const storedBookingList =
      JSON.parse(localStorage.getItem("bookingList")) || [];
    setBookingList(storedBookingList);

    const storedCheckInList =
      JSON.parse(localStorage.getItem("checkInList")) || [];
    setCheckInList(storedCheckInList);

    const storedRiwayatList =
      JSON.parse(localStorage.getItem("riwayatList")) || [];
    setRiwayatList(storedRiwayatList);

    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0];
    setToday(formattedDate);
  }, []);

  useEffect(() => {
    const today = getCurrentDate();
    setSelectedDate(today);
  }, []);

  // Memperbarui daftar kamar setiap kali tanggal yang dipilih berubah
  useEffect(() => {
    checkRoomAvailabilityByDate();
  }, [selectedDate, bookingList, checkInList, riwayatList]);

  // Fungsi untuk menangani klik pada tombol kamar
  const handleRoomClick = (roomId) => {
    const allRooms = [...villaTiara1, ...villaTiara2];
    const room = allRooms.find((kamar) => kamar.kodeKamar === roomId);
    if (room) {
      setSelectedRoomId(room.kodeKamar);
      setSelectedRoomType(room.tipeKamar);
      setSelectedRoomHarga(room.hargaKamar);
      setSelectedBed(room.jumlahBedKamar);
      setSelectedStatus(room.status);
      calculateTotalHarga(room.hargaKamar, checkInDate, checkOutDate);
    }
  };

  const calculateTotalHarga = (hargaPerMalam, checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const checkInTime = new Date(checkIn);
      const checkOutTime = new Date(checkOut);
      const timeDifference = checkOutTime - checkInTime;
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

      const total = daysDifference * hargaPerMalam;
      setTotalHarga(total);
    }
  };

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
    calculateTotalHarga(selectedRoomHarga, e.target.value, checkOutDate);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
    calculateTotalHarga(selectedRoomHarga, checkInDate, e.target.value);
  };

  //Fungsi untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      idKamar: selectedRoomId,
      tipeKamar: selectedRoomType,
      statusKamar: "booked",
      namaTamu: e.target.namaTamu.value,
      noTelepon: e.target.noTelepon.value,
      tanggalCheckIn: e.target.tanggalCheckIn.value,
      tanggalCheckOut: e.target.tanggalCheckOut.value,
      harga: totalHarga,
      statusBooking: "booking",
    };

    const updatedBookingList = [...bookingList, newBooking];
    setBookingList(updatedBookingList);
    localStorage.setItem("bookingList", JSON.stringify(updatedBookingList));

    // Menampilkan notifikasi sukses
    toast.success("Booking Berhasil!", {
      position: "top-center",
      theme: isDarkMode ? "dark" : "light",
    }); // Mengarahkan ke halaman lain setelah sedikit penundaan
    setTimeout(() => {
      router.push("/DaftarBooking");
    }, 1000);
  };

  const handleClear = (e) => {
    setSelectedRoomId("000");
    setSelectedRoomType("none");
    setSelectedRoomHarga("-");
    setSelectedBed("-");
    setSelectedStatus("-");
    setTotalHarga(0);
    setCheckInDate("");
    setCheckOutDate("");
    document.getElementById("bookingForm").reset();
  };

  // Fungsi untuk mengecek ketersediaan kamar berdasarkan tanggal yang dipilih
  const checkRoomAvailabilityByDate = useCallback(() => {
    if (selectedDate) {
      const updateRoomStatus = (roomList) => {
        return roomList.map((kamar) => {
          // Tentukan status kamar berdasarkan kondisi di bookingList
          const inBookingPeriod = bookingList.some(
            (booking) =>
              booking.idKamar === kamar.kodeKamar &&
              new Date(booking.tanggalCheckIn) <= new Date(selectedDate) &&
              new Date(booking.tanggalCheckOut) >= new Date(selectedDate)
          );

          // Tentukan status kamar berdasarkan kondisi di checkInList
          const inCheckInPeriod = checkInList.some(
            (checkin) =>
              checkin.idKamar === kamar.kodeKamar &&
              new Date(checkin.tanggalCheckIn) <= new Date(selectedDate) &&
              new Date(checkin.tanggalCheckOut) >= new Date(selectedDate)
          );

          // Tentukan status kamar berdasarkan kondisi di riwayatList
          const inRiwayatPeriod = riwayatList.some(
            (riwayat) =>
              riwayat.idKamar === kamar.kodeKamar &&
              new Date(riwayat.tanggalCheckIn) <= new Date(selectedDate) &&
              new Date(riwayat.tanggalCheckOut) >= new Date(selectedDate)
          );

          // Set status kamar sesuai dengan kondisi yang ditemukan
          let status = "kosong";
          if (inRiwayatPeriod) {
            status = "kosong";
          } else if (inCheckInPeriod) {
            status = "checked";
          } else if (inBookingPeriod) {
            status = "booked";
          }

          return { ...kamar, status }; // Update status kamar
        });
      };

      const updatedVillaTiara1 = updateRoomStatus(villaTiara1);
      const updatedVillaTiara2 = updateRoomStatus(villaTiara2);

      setVillaTiara1(updatedVillaTiara1);
      setVillaTiara2(updatedVillaTiara2);
    }
  }, [
    selectedDate,
    bookingList,
    checkInList,
    riwayatList,
    villaTiara1,
    villaTiara2,
  ]);

  return (
    <div className="fixed left-0 top-14 bottom-10 right-0 md:left-64 py-14 md:pt-10 px-8 overflow-y-auto">
      <ToastContainer className="absolute mt-16" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 py-8 px-12 rounded-xl shadow-lg md:col-span-2">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-8">
            <Link
              href="/Dashboard"
              className="hidden md:flex items-center text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition mb-2 md:mb-0"
            >
              <FaArrowLeft className="text-yellow-500 mr-2" />
              Kembali
            </Link>
            <h2 className="text-2xl font-bold mb-6 md:mb-0 text-center text-gray-800 dark:text-gray-200">
              <div className="flex items-center justify-center">
                <FaHotel className="text-yellow-500 mr-2" />
                Tambah Booking
              </div>
            </h2>
            <input
              type="date"
              id="selectedDate"
              className="text-xs px-2 py-1 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition duration-300 ease-in-out w-full md:w-auto"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={today}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="logo bg-gradient-to-br from-orange-500 to-red-500 text-white text-md rounded-lg p-2 mb-4 text-center font-bold">
                Villa Tiara 2
              </h2>
              <div className="grid grid-cols-4 gap-2 text-sm">
                {villaTiara2.map((kamar) => (
                  <div
                    key={kamar.kodeKamar}
                    className={`text-center p-2 border-2 rounded-lg cursor-pointer ${
                      kamar.status === "checked"
                        ? "bg-green-600 text-white"
                        : kamar.status === "booked"
                        ? "bg-yellow-500 text-black"
                        : "bg-yellow-50 dark:bg-gray-700 border-yellow-500 dark:border-gray-600 hover:border-orange-700 dark:hover:border-orange-500"
                    }`}
                    onClick={() => handleRoomClick(kamar.kodeKamar)}
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      {kamar.kodeKamar}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="logo bg-gradient-to-br from-orange-500 to-red-500 text-white text-md rounded-lg p-2 mb-4 text-center font-bold">
                Villa Tiara 1
              </h2>
              <div className="grid grid-cols-4 gap-2 text-sm">
                {villaTiara1.map((kamar) => (
                  <div
                    key={kamar.kodeKamar}
                    className={`text-center p-2 border-2 rounded-lg cursor-pointer ${
                      kamar.status === "checked"
                        ? "bg-green-600 text-white"
                        : kamar.status === "booked"
                        ? "bg-yellow-500 text-black"
                        : "bg-yellow-50 dark:bg-gray-700 border-yellow-500 dark:border-gray-600 hover:border-orange-700 dark:hover:border-orange-500"
                    }`}
                    onClick={() => handleRoomClick(kamar.kodeKamar)}
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      {kamar.kodeKamar}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-xl mt-6 md:mt-4 shadow-lg border-2 border-gray-400 dark:border-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="flex p-2 md:col-span-4 items-center shadow-md justify-start rounded-lg bg-white dark:bg-gray-800">
                <FaBed className="text-yellow-600 text-xl mx-4" />
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Jumlah Bed:
                  </h4>
                  <p className="text-gray-800 dark:text-gray-200 text-md font-bold">
                    {selectedBed}
                  </p>
                </div>
              </div>
              <div className="flex p-2 md:col-span-3 items-center shadow-md justify-start rounded-lg bg-white dark:bg-gray-800">
                <FaTags className="text-yellow-600 text-xl mx-4" />
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Status:
                  </h4>
                  <p
                    className={`text-gray-800 dark:text-gray-200 text-md font-bold ${
                      selectedStatus === "kosong"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedStatus}
                  </p>
                </div>
              </div>
              <div className="flex p-2 md:col-span-4 items-center shadow-md justify-start rounded-lg bg-white dark:bg-gray-800">
                <FaDollarSign className="text-yellow-600 text-xl mx-4" />
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Harga per Malam :
                  </h4>
                  <p className="text-gray-800 dark:text-gray-200 text-md font-bold">
                    Rp. {selectedRoomHarga.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* form booking */}
        <div className="bg-white dark:bg-gray-800 py-8 px-12 rounded-xl shadow-lg w-full max-w-3xl md:col-span-1">
          <form
            id="bookingForm"
            className="space-y-4 text-sm"
            onSubmit={handleSubmit}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-200">
                ID Kamar : &quot;
                <span className="font-bold text-orange-600 dark:text-yellow-500">
                  {selectedRoomId}
                </span>
                &quot;
              </h2>
              <h2 className="text-md font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
                <span className="font-bold">
                  &quot;{selectedRoomType}&quot;
                </span>
              </h2>
            </div>

            {/* Nama Tamu */}
            <div className="mb-4">
              <label
                htmlFor="namaTamu"
                className="block text-gray-700 dark:text-gray-300 font-medium"
              >
                Nama Tamu:
              </label>
              <input
                type="text"
                id="namaTamu"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-gray-200"
                required
                placeholder="Masukkan Nama Lengkap"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="noTelepon"
                className="block text-gray-700 dark:text-gray-300 font-medium"
              >
                No Telepon:
              </label>
              <input
                type="number"
                id="noTelepon"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-gray-200"
                required
                placeholder="Masukkan No Telepon"
              />
            </div>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tanggal/waktu check in */}
              <div>
                <label
                  htmlFor="tanggalCheckIn"
                  className="block text-gray-700 dark:text-gray-300 font-medium"
                >
                  Check-in:
                </label>
                <input
                  type="date"
                  id="tanggalCheckIn"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-gray-200"
                  onChange={handleCheckInChange}
                  min={today}
                  required
                />
              </div>

              {/* Tanggal/waktu check out */}
              <div>
                <label
                  htmlFor="tanggalCheckOut"
                  className="block text-gray-700 dark:text-gray-300 font-medium"
                >
                  Check-out:
                </label>
                <input
                  type="date"
                  id="tanggalCheckOut"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-gray-200"
                  onChange={handleCheckOutChange}
                  min={checkInDate}
                  required
                />
              </div>
            </div>

            {/* Harga */}
            <div className="mb-4">
              <label
                htmlFor="Harga"
                className="block text-gray-700 dark:text-gray-300 font-medium"
              >
                Total Harga (Rp):
              </label>
              <input
                type="number"
                id="Harga"
                min="0"
                value={totalHarga}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-gray-200"
                placeholder="Masukkan Jumlah Harga"
                required
              />
            </div>

            {/* Tombol Submit */}
            <div className="flex justify-center pt-2 md:pt-0 items-center space-x-2">
              <button
                type="button"
                onClick={handleClear}
                className="bg-gray-600 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md transition flex items-center"
              >
                <FaTrash className="mr-2" />
                Clear
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition flex items-center"
              >
                <FaSave className="mr-2" />
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TambahBooking;
