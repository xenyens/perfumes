import React from "react";

import { Lexend } from "next/font/google";

const lexend = Lexend({ weight: "600", subsets: ["latin"] });

const Header = () => {
  return (
    <header className="flex flex-col items-center font-bold uppercase p-24">
      <h1 className={`${lexend.className} text-2xl text-white`}>Catálogo</h1>
    </header>
  );
};

export default Header;
