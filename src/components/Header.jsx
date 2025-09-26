import React from "react";

export default function Header() {
  return (
    <>
      <header className="h-22 sm:h-35 lg:h-45 w-full flex items-end justify-center">
        <div className="w-60 sm:w-70 md:w-75 flex items-center justify-center">
          <img className="flex" src="/images/snap-shot-logo.png" alt="" />
        </div>
      </header>
    </>
  );
}
