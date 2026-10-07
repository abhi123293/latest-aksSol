"use client";

import { ArrowLeftRight, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "MARBLE POLISHING",
    image: "/images/marble.jpg",
  },
  {
    title: "GRANITE RESTORATION",
    image: "/images/granite.jpg",
  },
  {
    title: "FLOOR GRINDING",
    image: "/images/floor.jpg",
  },
  {
    title: "CRYSTALLIZATION",
    image: "/images/crystallization.jpg",
  },
];

function BeforeAfterCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  const [position, setPosition] = useState(50);

 const handlePointerMove = (
  e: React.PointerEvent<HTMLDivElement>
) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;

  const percentage = Math.max(
    0,
    Math.min(100, (x / rect.width) * 100)
  );

  setPosition(percentage);
};

  return (
    <div className="group">
      {/* IMAGE CARD */}
     <div
  className="relative aspect-[16/10] w-full touch-pan-y overflow-hidden rounded-xl border border-[#292929] bg-[#191919]"
  onPointerDown={(e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    handlePointerMove(e);
  }}
  onPointerMove={handlePointerMove}
>
        {/* SINGLE IMAGE */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div
          className=" pointer-events-none absolute inset-y-0 left-0 bg-black/55"
          style={{
            width: `${position}%`,
          }}
        />

        {/* VERTICAL DIVIDER */}
      <div className="pointer-events-none absolute inset-y-0 z-20 w-[2px] bg-[#dcb735]" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
          {/* HANDLE */}
          <div className="absolute left-1/2 top-1/2 flex h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-[#5fba28] shadow-lg">
            <ArrowLeftRight
              size={20}
              strokeWidth={2}
              className="text-white"
            />
          </div>
        </div>

        {/* BEFORE LABEL */}
       <div className="absolute bottom-4 left-4 z-30 rounded-sm bg-black px-3 py-1.5 text-[11px] font-bold uppercase text-white">
          BEFORE
        </div>

        {/* AFTER LABEL */}
      <div className="absolute bottom-4 right-4 z-30 rounded-sm bg-[#5fba28] px-3 py-1.5 text-[11px] font-bold uppercase text-white">
          AFTER
        </div>
      </div>

      {/* PROJECT TITLE */}
      <h3
        className=" mt-4 text-center text-[17px] font-bold uppercase tracking-wide text-[#d9e0e8]">
        {title}
      </h3>
    </div>
  );
}

export default function BeforeAfterShowcase() {
  return (
  <section id="gallery" className="bg-[#1b1b1b] px-5 py-20 font-[var(--font-montserrat)] sm:px-8 lg:px-12 xl:px-20">
      {/* HEADING */}
      <div className="mx-auto max-w-[1300px] text-center">

       <p className="text-[14px] font-bold uppercase tracking-wide text-[#dcb735]">
          SEE THE TRANSFORMATION
        </p>

<h2 className="mx-auto mt-3 w-full px-2 text-3xl -translate-x-2 font-black uppercase leading-tight tracking-tight text-white sm:px-0 sm:text-3xl lg:text-[46px]">
  <span className="whitespace-nowrap">
    INTERACTIVE BEFORE &<br className="sm:hidden" />
  </span>{" "}
  AFTER SHOWCASE
</h2>
        {/* GREEN UNDERLINE */}
        <div
          className="mx-auto mt-5 h-[5px] w-[98px] rounded-full bg-[#5fba28]"/>

       <p className="mx-auto mt-6 max-w-[500px] text-[16px] leading-6 text-[#91a4ba] sm:text-[14px]">
          Drag or hover over the slider handle on each project card below
          to witness the difference made by our restoration work.
        </p>
      </div>

      {/* PROJECT CARDS */}
    <div className="mx-auto mt-20 grid max-w-[1320px] grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2">
        {projects.map((project) => (
          <BeforeAfterCard
            key={project.title}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>

      {/* GALLERY BUTTON */}
      <div className="mt-20 flex justify-center">
      <button onClick={() => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
  });
}} className="flex h-[45px] items-center justify-center gap-4 rounded-md bg-[#5fba28] px-5 text-sm font-bold uppercase text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#4da51c]">
          VIEW MORE TRANSFORMATION GALLERY

          <ArrowRight
            size={20}
            strokeWidth={2}
          />
        </button>
      </div>
    </section>
  );
}