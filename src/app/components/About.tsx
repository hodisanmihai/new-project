"use client";

import React from "react";
import { Hammer, HardHat, Clock3, Shield } from "lucide-react";

const cardsData = [
  {
    id: 1,
    icon: Hammer,
    title: "Materiale de calitate",
    desc: "Doar branduri premium, certificate",
  },
  {
    id: 2,
    icon: HardHat,
    title: "Experiență reală",
    desc: "10+ ani în acoperișuri rezidențiale.",
  },
  {
    id: 3,
    icon: Clock3,
    title: "Termene respectate",
    desc: "Lucrări livrate la timp, fără întârzieri,",
  },
  {
    id: 4,
    icon: Shield,
    title: "Garanție oferită",
    desc: "Lucrare garantată până la 10 ani.",
  },
];

const About = () => {
  return (
    <div className="w-full bg-[#111111] flex justify-center items-end">
      <div
        id="about"
        className="w-[80%] h-[90%] flex flex-col items-center justify-between py-20 gap-20"
      >
        {/* Header */}
        <h1 className="text-4xl md:text-5xl text-[#F9F9F9] font-extrabold ">
          Despre <span className="text-[#FFBA00] ">Noi</span>
        </h1>

        {/* lists */}
        <ul className="text-[#F9F9F9]/70 list-disc list-inside space-y-3 max-w-xl text-xl md:text-1xl">
          <li>
            Suntem o echipă cu peste 10 ani de experiență în{" "}
            <span className="text-[#FFBA00]/70 font-semibold">
              montaj și reparații de acoperișuri
            </span>{" "}
            în Oradea și județul Bihor.
          </li>
          <li>
            Oferim servicii complete pentru acoperișuri:{" "}
            <span className="text-[#FFBA00]/70 font-semibold">
              montaj acoperiș nou
            </span>
            ,{" "}
            <span className="text-[#FFBA00]/70 font-semibold">
              reparații acoperiș existent
            </span>
            , <span className="text-[#FFBA00]/70 font-semibold">izolații</span>{" "}
            și întreținere.
          </li>
          <li>
            Punem accent pe{" "}
            <span className="text-[#FFBA00]/70 font-semibold">calitate</span>,{" "}
            <span className="text-[#FFBA00]/70 font-semibold">
              promptitudine
            </span>{" "}
            și folosirea materialelor durabile.
          </li>
          <li>
            Dacă ești în căutarea unei firme de{" "}
            <span className="text-[#FFBA00]/70 font-semibold">
              acoperișuri profesionale în Oradea
            </span>
            , contactează-ne cu încredere.
          </li>
        </ul>

        {/* Cards container */}
        <div className="flex gap-20 flex-wrap justify-center mt-8">
          {cardsData.map(({ id, icon: Icon, title, desc }) => (
            <div
              key={id}
              className="bg-[#111] w-[200px] h-[225px] flex flex-col justify-between items-center p-6 shadow-[0_0px_10px_2px_rgba(255,186,0,0.75)] rounded-xl hover:scale-105 hover:shadow-[0_0px_20px_10px_rgba(255,186,0,0.75)] transition duration-300"
            >
              <Icon className="text-[#ffba00] " size={40} />
              <h4 className="text-white text-lg font-semibold text-center mt-2">
                {title}
              </h4>
              <h5 className="text-white text-sm opacity-80 text-center mt-1">
                {desc}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
