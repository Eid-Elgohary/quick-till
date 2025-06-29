"use client";

import AvatarIcon from "./AvatarIcon";
import { ModeToggle } from "../ui/modeToggle";
import NotificationIcon from "./NotificationIcon";
import SearchInput from "./Search";

function Header() {
  return (
    <header className="py-4 bg-secondary ps-2 z-50 sm:ps-8 pe-12 flex justify-between items-center shadow-sm fixed top-0 left-[150px] right-0">
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
