"use client";

import React from "react";
import Image from "next/image";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Background image */}
      <Image
        src={hero}
        alt="Hero background"
        fill
        className="object-cover object-center -z-20"
        priority
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(
            to right,
            rgba(17, 17, 17, 1) 14%,
            rgba(20, 20, 20, 0.8) 50%,
            rgba(65, 65, 65, 0.36) 100%
          )`,
        }}
      />

      {/* Hero content */}
      <div className="md:w-[45%] h-[80%] md:ml-16 p-10 md:p-0 flex items-center justify-around flex-col text-center text-[#F9F9F9] ">
        <h1 className="font-extrabold text-5xl md:text-6xl leading-tight md:leading-snug ">
          Montaj și Reparații Acoperișuri Profesionale
        </h1>
        <h2 className="font-normal text-2xl md:text-3xl opacity-70 ">
          Peste 10 ani de experiență în montaj, reparații și renovări de
          acoperișuri în Oradea. Lucrăm rapid, curat și garantat
        </h2>
        <a
          href="tel:0752640352"
          className="font-normal text-3xl md:text-3xl px-8 py-1 text-[#111111] bg-[#ffba00] rounded-xl hover:scale-101 hover:bg-[#111] hover:text-[#ffba00] hover:shadow-[0_0px_10px_0_rgba(255,186,0,0.75)] transition duration-300 "
        >
          Sună acum
        </a>
      </div>
    </div>
  );
};

export default Hero;
