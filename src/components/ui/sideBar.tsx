"use client";
import UploadPage from "@/data/upload";
import { Store, BellRing, ReceiptText, LogOut, SquareMenu } from "lucide-react";
import { useRouter } from "next/navigation";

const links = [
  {
    name: "products",
    icon:<SquareMenu color="red" />,
    path:"products"
  },
  {
    name: "inventory",
    icon: <Store color="red" />,
    path: "inventory",
  },
  {
    name: "notifications",
    icon: <BellRing color="red" />,
    path: "notifications",
  },
  {
    name: "orders",
    icon: <ReceiptText color="red" />,
    path: "orders",
  },
];

function SideBar() {
  const router = useRouter();
  function route(path: string): void {
    router.push(`/admin/${path}`);
  }

  return (
    <aside className="hidden sm:block  fixed top-0 left-0 z-50 h-screen w-[150px]">
      <div className="h-screen p-4 pt-6 rounded-r-lg flex flex-col justify-between items-center bg-secondary">
        <div className="text-center">
          <div>
            <h1 className="mb-6 text-lg font-bold tracking-wider text-primary uppercase">
              quick till
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            {links.map((link, index) => (
              <div
                onClick={() => route(link.path)}
                key={index}
                className="py-2 flex cursor-pointer flex-col w-[110px] items-center px-4 rounded-lg bg-primary"
              >
                <div className="rounded-full w-[40px]  bg-white p-2 flex justify-center items-center">
                  {link.icon}
                </div>
                <p className="mt-2 font-lighter text-sm text-secondary">
                  {link.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-10">
          <div><UploadPage /></div>
          <span className="ps-4 d-inline-block text-center">
            <LogOut />
          </span>
          <p className="text-center">logout</p>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;

{
  /* <ReceiptText /> */
}
//  <LayoutDashboard />
{
  /* <UsersRound /> */
}
{
  /* <BellRing /> */
}
{
  /* <LogOut /> */
}
{
  /* <Store /> */
}
{
  /* <Blocks /> */
}
