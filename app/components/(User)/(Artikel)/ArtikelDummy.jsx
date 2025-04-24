import img1 from "@/public/imgArtikel/img1.jpg";
import img3 from "@/public/imgArtikel/img3.jpg";
import img4 from "@/public/imgArtikel/img4.jpg";
import img5 from "@/public/imgArtikel/img4.jpg";

import Artikel1 from "./IsiKonten/artikel1";
import Artikel2 from "./IsiKonten/artikel2";
import Artikel3 from "./IsiKonten/artikel3";
import Artikel4 from "./IsiKonten/artikel4";
import Artikel5 from "./IsiKonten/artikel5";

const artikelLists = [
  {
    id: 1,
    src: img1,
    title:
      "Keindahan Telaga Sarangan: Destinasi Wisata Sejuk di Lereng Gunung Lawu",
    date: "November 21, 2024",
    content: <Artikel1 />,
    tags: [
      "TelagaSarangan",
      "WisataSarangan",
      "DanauTelagaSarangan",
      "WisataTelagaSarangan",
      "VillaTiaraSarangan",
    ],
    readmore: 2,
    readmoreTitle:
      "Villa Tiara Sarangan: Pilihan Penginapan Nyaman dan Murah di Dekat Telaga Sarangan",
  },
  {
    id: 2,
    src: "https://th.bing.com/th/id/OIP.eJXmC9pNGT3CqtVbtv3kaAHaEm?rs=1&pid=ImgDetMain",
    title:
      "Villa Tiara Sarangan: Pilihan Penginapan Nyaman dan Murah di Dekat Telaga Sarangan",
    date: "November 30, 2024",
    content: <Artikel2 />,
    tags: [
      "VillaSarangan",
      "PenginapanSaranganMurah",
      "VillaDiTelagaSarangan",
      "VillaTiaraSarangan",
    ],
    readmore: 3,
    readmoreTitle:
      "Tips Memilih Villa di Sarangan untuk Liburan yang Nyaman dan Hemat",
  },
  {
    id: 3,
    src: img3,
    title: "Tips Memilih Villa di Sarangan untuk Liburan yang Nyaman dan Hemat",
    date: "November 04, 2024",
    content: <Artikel3 />,
    tags: [
      "VillaSarangan",
      "VillaTiaraSarangan",
      "PenginapanDiSaranganMurah",
      "SaranganHoliday",
    ],
    readmore: 4,
    readmoreTitle:
      "Villa Tiara Sarangan: Pilihan Tepat untuk Outing Kantor dan Perusahaan",
  },
  {
    id: 4,
    src: img4,
    title:
      "Villa Tiara Sarangan: Pilihan Tepat untuk Outing Kantor dan Perusahaan",
    date: "Desember 15, 2024",
    content: <Artikel4 />,
    tags: [
      "outingkantor",
      "outingsarangan",
      "outingperusahaan",
      "outingvilla",
      "villatiarasarangan",
      "outingkaryawan",
    ],
    readmore: 1,
    readmoreTitle:
      "Keindahan Telaga Sarangan: Destinasi Wisata Sejuk di Lereng Gunung Lawu",
  },
  {
    id: 5,
    src: img4,
    title:
      "Informasi Harga Tiket Wisata Telaga Sarangan Terbaru! Serta Lokasi dan Jam Bukanya",
    date: "April 05, 2025",
    content: <Artikel5 />,
    tags: [
      "TiketSarangan",
      "LokasiTelagaSarangan",
      "TelagaSarangan",
      "InformasiTelagaSarangan",
      "villatiarasarangan",
    ],
    readmore: 1,
    readmoreTitle:
      "Keindahan Telaga Sarangan: Destinasi Wisata Sejuk di Lereng Gunung Lawu",
  },
];

export default artikelLists;
