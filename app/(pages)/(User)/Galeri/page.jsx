import React from "react";
import UserTemplate from "@/app/(templates)/(User)/UserTemplate";
import GaleriComponent from "@/app/components/(User)/Galeri";

const GalleryPage = () => {
  return (
    <UserTemplate>
      <GaleriComponent />
    </UserTemplate>
  );
};

export default GalleryPage;
