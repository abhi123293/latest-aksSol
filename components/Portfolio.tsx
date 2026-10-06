"use client";

import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "LUXURY VILLA MARBLE GRINDING",
    category: "MARBLE POLISHING",
    location: "Juffair, Bahrain",
    image: "/images/marble.jpg",
  },
  {
    title: "CORPORATE LOBBY TERRAZZO POLISH",
    category: "TERRAZZO RESTORATION",
    location: "Seef District, Bahrain",
    image: "/images/floor.jpg",
  },
  {
    title: "HOTEL RECEPTION FLOOR MIRROR SHINE",
    category: "CRYSTALLIZATION",
    location: "Reef Island, Bahrain",
    image: "/images/crystallization.jpg",
  },
  {
    title: "LIMESTONE PATIO DEEP CLEAN",
    category: "STONE CLEANING",
    location: "Saar, Bahrain",
    image: "/images/stone.jpg",
  },
  {
    title: "EXECUTIVE OFFICE GRANITE HONING",
    category: "GRANITE RESTORATION",
    location: "Manama Center, Bahrain",
    image: "/images/granite.jpg",
  },
  {
    title: "BEACH PENTHOUSE TRAVERTINE RESTORE",
    category: "SURFACE RESTORATION",
    location: "Amwaj Islands, Bahrain",
    image: "/images/travertine.jpg",
  },
];

export default function Portfolio() {
    const cardsRef = useRef<HTMLDivElement[]>([]);


  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const cards = cardsRef.current;

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      scale: 1,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cards[0],
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);


  return (
    <section className="bg-[#111111] px-5 py-20 font-[var(--font-montserrat)] sm:px-8 lg:px-12 xl:px-20">
      {/* Heading */}
      <div className="mx-auto max-w-[1200px] text-center">

        {/* Small Heading */}
        <p className="text-[14px] font-bold uppercase tracking-wide text-[#5fba28]">
          PORTFOLIO
        </p>

        {/* Main Heading */}
       <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-[48px]">
          RECENT PROJECTS IN BAHRAIN
        </h2>

        {/* Gold Underline */}
        <div className="mx-auto mt-5 h-[5px] w-[85px] rounded-full bg-[#dcb735]" />

        {/* Description */}
        <p className="mx-auto mt-6 max-w-[550px] text-[14px] leading-6 text-[#91a4ba] sm:text-[16px]">
          Take a look at some of our premium marble grinding and stone polishing
          projects delivered to residential and commercial properties in Bahrain.
        </p>
      </div>

      {/* Project Grid */}
      <div className="mx-auto mt-20 grid max-w-[1320px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project,index) => (
          <div  key={project.title}
  ref={(el) => {
    if (el) cardsRef.current[index] = el;
  }} className="group relative h-[310px] overflow-hidden rounded-xl border border-[#292929] bg-[#191919]">
            {/* IMAGE */}
         <img 
          src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />

            {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5" />
            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              {/* Category */}
             <span className="inline-block rounded-sm bg-[#5fba28] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                {project.category}
              </span>

              {/* Title */}
            <h3 className="mt-3 text-[18px] font-black uppercase leading-tight text-white transition-colors duration-300 group-hover:text-[#dcb735]">
                {project.title}
              </h3>

              {/* Location */}
              <div className="mt-3 flex items-center gap-2 text-[13px] text-[#d9e0e8]">
                <MapPin
                  size={17}
                  strokeWidth={2}
                  className="shrink-0 text-[#dcb735]"
                />

                <span>{project.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}