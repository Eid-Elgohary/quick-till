"use client";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

function SearchInput() {
  return (
    <div className="relative hidden sm:block  w-full max-w-sm">
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
      <Input type="text" className="w-[250px]" placeholder="search" />
    </div>
  );
}

export default SearchInput;
