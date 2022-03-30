import React from "react";
import Search from "./search";

export default function Header() {
  return (
    <div class="w-auto bg-slate-300 h-16 text-center flex justify-center">
      <div class="my-auto mx-0">
        <Search />
      </div>
    </div>
  );
}
