"use client";

import React from "react";
import Image from "next/image";
import img1 from "../assets/10.jpg.webp";
import img2 from "../assets/Insulation-install-Portland.webp";
import img3 from "../assets/plywood-roofing-underlayment.webp";

const services = [
  {
    id: 1,
    title: "Montaj acoperișuri",
    img: img1,
  },
  {
    id: 2,
    title: "Reparații acoperișuri",
    img: img2,
  },
  {
    id: 3,
    title: "Izolații acoperiș",
    img: img3,
  },
];

const Services = () => {
  return (
    <div
      className="w-full bg-[#FFBA00] flex items-center flex-col"
      id="servicii"
    >
      <svg
        className="w-full h-auto"
        viewBox="0 0 1280 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1280 0H-1L514 28C514 28 774.5 43 918 55C1061.5 67 1280 97 1280 97V0Z"
          fill="#111111"
        />
      </svg>

      <div className="w-[80%] h-[90%] flex flex-col items-center justify-between pt-5 pb-15 gap-20">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl text-[#F9F9F9] font-extrabold text-center ">
          Serviciile <span className="text-[#111111] ">Noastre</span>
        </h1>
        {/* Cards */}
        <div className="flex gap-10 flex-wrap justify-center">
          {services.map(({ id, title, img }) => (
            <div
              key={id}
              className="w-[245px] h-[305px] bg-[#f9f9f9] flex flex-col items-center gap-3 rounded-xl"
            >
              <div className="relative w-[212px] h-[212px] border-1 mt-3 rounded-lg">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover object-center rounded-lg"
                  priority
                />
              </div>
              <h4 className="text-[#111111] text-lg font-extrabold text-center mt-2">
                {title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
