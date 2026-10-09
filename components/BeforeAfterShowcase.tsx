"use client";

import {
  ArrowLeftRight,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "MARBLE POLISHING",
    category: "MARBLE RESTORATION",
    beforeImage: "/images/before/marble-before.jpg",
    afterImage: "/images/after/marble-after.jpg",
  },
  {
    title: "GRANITE RESTORATION",
    category: "GRANITE CARE",
    beforeImage: "/images/before/granite-before.jpg",
    afterImage: "/images/after/granite-after.jpg",
  },
  {
    title: "FLOOR RESTORATION",
    category: "SURFACE RESTORATION",
    beforeImage: "/images/before/floor-before.jpg",
    afterImage: "/images/after/floor-after.jpg",
  },
  {
    title: "STONE POLISHING",
    category: "PROFESSIONAL POLISHING",
    beforeImage: "/images/before/stone-before.jpg",
    afterImage: "/images/after/stone-after.jpg",
  },
];

type BeforeAfterCardProps = {
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  index: number;
};

function BeforeAfterCard({
  title,
  category,
  beforeImage,
  afterImage,
  index,
}: BeforeAfterCardProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const imageRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    const container = imageRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();

    if (rect.width === 0) return;

    const percentage =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  // Mouse hover moves automatically.
  // Touch moves when the user swipes.
  const handlePointerMove = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    if (e.pointerType === "mouse") {
      updatePosition(e.clientX);
    } else if (
      e.pointerType === "touch" &&
      isDragging
    ) {
      updatePosition(e.clientX);
    }
  };

  return (
    <article className="group min-w-0">
      {/* Before / After Image Comparison */}
      <div
        ref={imageRef}
        className={`relative aspect-[4/3] w-full select-none overflow-hidden rounded-lg bg-[#202020] ${
          isDragging
            ? "cursor-grabbing"
            : "cursor-ew-resize"
        }`}
        style={{ touchAction: "pan-y" }}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") {
            updatePosition(e.clientX);
          }
        }}
        onPointerMove={handlePointerMove}
        onPointerDown={(e) => {
          setIsDragging(true);

          e.currentTarget.setPointerCapture(e.pointerId);

          updatePosition(e.clientX);
        }}
        onPointerUp={() => setIsDragging(false)}
        onPointerCancel={() => setIsDragging(false)}
        onLostPointerCapture={() => setIsDragging(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            setPosition((previous) =>
              Math.max(0, previous - 3)
            );
          }

          if (e.key === "ArrowRight") {
            setPosition((previous) =>
              Math.min(100, previous + 3)
            );
          }

          if (e.key === "Home") setPosition(0);
          if (e.key === "End") setPosition(100);
        }}
        role="slider"
        aria-label={`${title} before and after comparison`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
      >
        {/* BEFORE IMAGE */}
        <img
          src={beforeImage}
          alt={`${title} before restoration`}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        {/* AFTER IMAGE - REVEALED BY THE SLIDER */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <img
            src={afterImage}
            alt={`${title} after restoration`}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* IMAGE LABELS */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-3 sm:p-5">
          <span className="border border-white/20 bg-black/75 px-3 py-2 text-[10px] font-bold tracking-[2px] text-white backdrop-blur-sm sm:text-[11px]">
            BEFORE
          </span>

          <span className="border border-white/20 bg-[#5fba28] px-3 py-2 text-[10px] font-bold tracking-[2px] text-white sm:text-[11px]">
            AFTER
          </span>
        </div>

        {/* GOLD DIVIDER */}
        <div
          className="pointer-events-none absolute bottom-0 top-0 z-20 w-[2px] bg-[#dcb735]"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        >
          {/* SLIDER HANDLE */}
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#5fba28] text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12">
            <ArrowLeftRight
              size={21}
              strokeWidth={2}
            />
          </div>
        </div>

        {/* DRAG HINT */}
        <div
          className={`pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-black/65 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[1.5px] text-white transition-opacity duration-300 ${
            isDragging ? "opacity-0" : "opacity-100"
          }`}
        >
          <ArrowLeftRight
            className="mr-1 inline"
            size={12}
          />
          Hover or drag to compare
        </div>
      </div>

      {/* PROJECT DETAILS */}
    <div className="mt-3 flex justify-center pb-1">
  <h3 className="text-center text-[14px] font-black uppercase tracking-wide text-white sm:text-[14px]">
    {title}
  </h3>
</div>

     
    </article>
  );
}

export default function BeforeAfterShowcase() {
  return (
    <section
      id="gallery"
      className="overflow-hidden bg-[#1b1b1b] px-5 py-10 font-[var(--font-montserrat)] sm:px-8 sm:py-16 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-[1210px]">
        {/* SECTION HEADING */}
       <div className="text-center">
  <p className="text-[14px] font-bold uppercase tracking-[1px] text-[#dcb735]">
    SEE THE TRANSFORMATION
  </p>

  <h2 className="mx-auto mt-3 max-w-none whitespace-nowrap text-[30px] font-black uppercase leading-tight tracking-tight text-white sm:text-[40px] lg:text-[44px]">
    INTERACTIVE BEFORE & AFTER SHOWCASE
  </h2>

  <div className="mx-auto mt-4 h-[5px] w-[80px] rounded-full bg-[#5fba28]" />

  <p className="mx-auto mt-5 max-w-[550px] text-[13px] lg:leading-6 text-[#9ba4b1] sm:text-[15px] leading-5">
    Drag or hover over the slider handle on each project card below to witness
    the difference made by our restoration work.
  </p>
</div>

      

        {/* COMPARISON GRID */}
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:mt-16 lg:gap-x-10 lg:gap-y-10">
          {projects.map((project, index) => (
            <BeforeAfterCard
              key={project.title}
              title={project.title}
              category={project.category}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              index={index}
            />
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <div className="mt-14 flex flex-col items-center text-center sm:mt-20">
          <p className="text-[12px] leading-6 text-[#9ba4b1]">
            Want to restore your marble, granite, or stone
            surfaces?
          </p>

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            className="mt-5 inline-flex min-h-[48px] items-center justify-center gap-3 rounded-md bg-[#5fba28] px-6 py-3 text-[11px] font-bold uppercase tracking-[1px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4da51c] hover:shadow-[0_8px_25px_rgba(95,186,40,0.2)] sm:text-[12px]"
          >
            view more transformation gallery
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}