import AdminTemplate from "@/app/(templates)/(Admin)/AdminTemplate";
import TambahKamar from "@/app/components/(Admin)/TambahKamar";

const DaftarKamarPage = () => {
  return (
    <>
      <AdminTemplate>
        <TambahKamar />
      </AdminTemplate>
    </>
  );
};

export default DaftarKamarPage;
