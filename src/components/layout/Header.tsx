"use client";

import AvatarIcon from "./AvatarIcon";
import { ModeToggle } from "../ui/modeToggle";
import NotificationIcon from "./NotificationIcon";
import SearchInput from "./Search";

function Header() {
  return (
    <header className="py-4 ps-2 sm:ps-8 pe-12 flex justify-between items-center shadow-sm">
      <div className="text-xl font-semibold"><SearchInput /></div>

      <div className="flex items-center gap-3">
        <NotificationIcon />
        <AvatarIcon />
        <ModeToggle />
      </div>
      
    </header>
  );
}

export default Header;
