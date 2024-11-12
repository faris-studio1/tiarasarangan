import React from "react";
import UserTemplate from "@/app/(templates)/(User)/UserTemplate";
import JumbotronComponent from "@/app/components/(User)/Jumbotron";
import HighlightComponent from "@/app/components/(User)/Highlights";
import TentangComponent from "@/app/components/(User)/Tentang";
import TipeKamarComponent from "@/app/components/(User)/TipeKamar";
import FasilitasComponent from "@/app/components/(User)/Fasilitas";
import GaleriComponent from "@/app/components/(User)/Galeri";
import TestimoniComponent from "@/app/components/(User)/Testimoni";
import ArtikelComponent from "@/app/components/(User)/Artikel";
import FaqComponent from "@/app/components/(User)/Faq";

const BerandaPage = () => {
  return (
    <UserTemplate>
      <div id="beranda">
        <JumbotronComponent />
      </div>
      <div id="highlight">
        <HighlightComponent />
      </div>
      <div id="tentang">
        <TentangComponent />
      </div>
      <div id="tipe-kamar">
        <TipeKamarComponent />
      </div>
      <div id="fasilitas">
        <FasilitasComponent />
      </div>
      <div id="galeri">
        <GaleriComponent />
      </div>
      <div id="testimoni">
        <TestimoniComponent />
      </div>
      <div id="artikel">
        <ArtikelComponent />
      </div>
      <div id="faq">
        <FaqComponent />
      </div>
    </UserTemplate>
  );
};

export default BerandaPage;
