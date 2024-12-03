import React from "react";
import UserTemplate from "@/app/(templates)/(User)/UserTemplate";
import dynamic from "next/dynamic";

// Menggunakan dynamic import untuk lazy loading setiap komponen
const JumbotronComponent = dynamic(() =>
  import("@/app/components/(User)/Jumbotron")
);
const HighlightComponent = dynamic(() =>
  import("@/app/components/(User)/Highlights")
);
const TentangComponent = dynamic(() =>
  import("@/app/components/(User)/Tentang")
);
const TipeKamarComponent = dynamic(() =>
  import("@/app/components/(User)/TipeKamar")
);
const FasilitasComponent = dynamic(() =>
  import("@/app/components/(User)/Fasilitas")
);
const GaleriComponent = dynamic(() => import("@/app/components/(User)/Galeri"));
const TestimoniComponent = dynamic(() =>
  import("@/app/components/(User)/Testimoni")
);
const ArtikelComponent = dynamic(() =>
  import("@/app/components/(User)/Artikel")
);
const FaqComponent = dynamic(() => import("@/app/components/(User)/Faq"));

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
      <div id="testimoni">
        <TestimoniComponent />
      </div>
      <div id="galeri">
        <GaleriComponent />
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
