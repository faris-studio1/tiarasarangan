import React from "react";
import UserTemplate from "@/app/(templates)/(User)/UserTemplate";
import FasilitasComponent from "@/app/components/(User)/Fasilitas";

const FasilitasPage = () => {
  return (
    <UserTemplate>
      <FasilitasComponent />
    </UserTemplate>
  );
};

export default FasilitasPage;
