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

        <main className="@container">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
