import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarIcon() {
  return (
    <div className="size-10 rounded-full flex items-center justify-center">
      <Avatar className="w-10 h-10 rounded-full">
        <AvatarImage
          className="rounded-full w-full object-cover"
          src="https://github.com/shadcn.png"
          alt="User avatar"
        />
        <AvatarFallback className="bg-primary text-white">CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default AvatarIcon;
