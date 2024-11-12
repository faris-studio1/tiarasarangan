import AdminTemplate from "@/app/(templates)/(Admin)/AdminTemplate.jsx";
import DaftarCheckIn from "@/app/components/(Admin)/DaftarCheckIn";

const CheckInPage = () => {
  return (
    <>
      <AdminTemplate>
        <DaftarCheckIn />
      </AdminTemplate>
    </>
  );
};

export default CheckInPage;
