import Header from "@/components/layout/Header";
import SideBar from "@/components/ui/sideBar";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      <div>
        <SideBar />
      </div>

      <div className="flex-1 flex-column ">
        <Header />

        <div className="py-2 px-4">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
