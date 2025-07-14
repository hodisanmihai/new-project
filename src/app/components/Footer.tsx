"use client";

import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#1e1e1e] text-center flex items-center flex-col text-sm gap-5 py-12 text-[#F9F9F9] px-6">
      <h4 className="hover:text-[#ffba00] transition font-extrabold px-6">
        Montaj Acoperișuri Oradea
      </h4>
      <h4 className="hover:text-[#ffba00] transition opacity-70 hover:opacity-100 px-6">
        Servicii de montaj, reparații și izolație acoperișuri în Oradea și
        împrejurimi
      </h4>
      <a
        href="tel:0752640352"
        className="hover:text-[#ffba00] transition opacity-70 hover:opacity-100"
      >
        Contact : 0752 640 352
      </a>
      <div className="w-[98%] h-[2px] bg-white/30 "> </div>
      <h4 className="hover:text-[#ffba00] transition opacity-70 hover:opacity-100">
        @2025 | Toate drepturile rezervate.
      </h4>
    </div>
  );
};

export default Footer;
