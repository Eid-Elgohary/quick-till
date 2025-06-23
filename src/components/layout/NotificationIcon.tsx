import { BellRing } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
function NotificationIcon() {
  const router = useRouter();

  function route(): void {
    router.push("/admin/notifications");
  }
  return (
    <div
      onClick={() => route()}
      className="relative cursor-pointer rounded-full size-10 flex items-center justify-center"
    >
      <BellRing color="red" size={30} />
      <Badge className="h-5 w-5 rounded-full right-[-2] top-[-4] absolute px-1 ">
        <span className=" ">1</span>
      </Badge>
    </div>
  );
}

export default NotificationIcon;
