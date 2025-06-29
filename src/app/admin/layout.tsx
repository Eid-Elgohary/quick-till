import Header from "@/components/layout/Header";
import SideBar from "@/components/ui/sideBar";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex sm:ps-[150px] ">
        <SideBar />

      <div className="w-full min-h-screen bg-white dark:bg-secondary relative">
        <Header />
        <main className="py-2 px-3">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
