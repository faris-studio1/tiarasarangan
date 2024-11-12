import React from "react";
import UserTemplate from "@/app/(templates)/(User)/UserTemplate";
import ArtikelComponent from "@/app/components/(User)/Artikel";

const ArtikelPage = () => {
  return (
    <UserTemplate>
      <ArtikelComponent />
    </UserTemplate>
  );
};

export default ArtikelPage;
