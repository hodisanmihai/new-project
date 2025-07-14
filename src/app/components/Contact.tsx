"use client";

import React from "react";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <div
      className="w-full bg-[#F9F9F9] flex items-center flex-col"
      id="contact"
    >
      <svg
        className="w-full h-auto "
        viewBox="0 0 1280 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scaleX(-1)" }}
        preserveAspectRatio="none"
      >
        <path
          d="M1280 0H-1L514 28C514 28 774.5 43 918 55C1061.5 67 1280 97 1280 97V0Z"
          fill="#FFBA00"
        />
      </svg>

      <div className="w-[80%] h-[90%] flex flex-col items-center justify-between pt-5 pb-15 gap-20">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl text-[#111111] font-extrabold text-center ">
          Contact
        </h1>
        {/* Desc */}
        <ul className="text-[#111111] list-disc list-inside space-y-8 max-w-xl text-xl md:text-1xl">
          <li>
            Oferim servicii de montaj, reparații și izolație pentru acoperișuri
            în Oradea și zonele din apropiere.
          </li>
          <li>Sună-ne acum pentru o ofertă rapidă și fără obligații.</li>
        </ul>
        {/* Number */}
        <a
          href="tel:0752640352"
          className="text-[#111111] hover:text-[#ffba00] text-2xl font-extrabold text-center mt-2 flex justifiy-center items-center gap-5"
        >
          <Phone size={30} />
          0752 640 352
        </a>
        {/* CTA */}
        <a
          href="tel:0752640352"
          className="font-normal text-xl md:text-3xl px-8 py-1 text-[#111111] bg-[#ffba00] rounded-xl hover:scale-101 hover:bg-[#111] hover:text-[#ffba00] hover:shadow-[0_0px_10px_0_rgba(255,186,0,0.75)] transition duration-300 "
        >
          Sună acum
        </a>
      </div>

      <svg
        className="w-full h-auto"
        viewBox="0 0 1280 97"
        fill="none"
        style={{ transform: "scaleY(-1)" }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1280 0H-1L514 28C514 28 774.5 43 918 55C1061.5 67 1280 97 1280 97V0Z"
          fill="#1e1e1e"
        />
      </svg>
    </div>
  );
};

export default Contact;
