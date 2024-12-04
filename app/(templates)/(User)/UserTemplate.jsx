import React from "react";
import NavbarComponent from "@/app/components/(User)/(Beranda)/Navbar";
import FooterComponent from "@/app/components/(User)/Footer";
import DirectWaComponent from "@/app/components/(User)/DirectWa";

const UserTemplate = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <FooterComponent />
      <DirectWaComponent />
    </>
  );
};

export default UserTemplate;
