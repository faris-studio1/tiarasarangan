import AdminTemplate from "@/app/(templates)/(Admin)/AdminTemplate";
import TambahBooking from "@/app/components/(Admin)/TambahBooking";

const BookingPage = () => {
  return (
    <>
      <AdminTemplate>
        <TambahBooking />
      </AdminTemplate>
    </>
  );
};

export default BookingPage;
