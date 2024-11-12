import AdminTemplate from "@/app/(templates)/(Admin)/AdminTemplate";
import DashboardAdmin from "@/app/components/(Admin)/Dashboard";

const DashboardPage = () => {
  return (
    <>
      <AdminTemplate>
        <DashboardAdmin />
      </AdminTemplate>
    </>
  );
};

export default DashboardPage;
