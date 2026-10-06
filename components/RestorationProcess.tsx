"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processes = [
  {
    number: "01",
    title: "INSPECTION",
    description:
      "Free on-site assessment of stone type, scratch depth, and initial gloss reading.",
  },
  {
    number: "02",
    title: "PROTECTION",
    description:
      "Masking all wall skirtings, door frames, and surrounding areas to ensure zero mess.",
  },
  {
    number: "03",
    title: "GRINDING",
    description:
      "Lippage removal and leveling of uneven joints using planetary grinding machines.",
  },
  {
    number: "04",
    title: "HONING",
    description:
      "Progressive diamond abrasive honing to remove scratches and prepare for polish.",
  },
  {
    number: "05",
    title: "CRYSTALLIZATION",
    description:
      "Chemical treatment to create a durable, liquid-resistant, and high-gloss protective shield.",
  },
  {
    number: "06",
    title: "HANDOVER",
    description:
      "Final gloss verification with the client and delivering post-service care guide.",
  },
];

export default function RestorationProcess() {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const cards = cardsRef.current;

  gsap.fromTo(
    cards,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.2,
      stagger: 0.15,
      ease: "power3.out",
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
  <section className="bg-[#f8f8f8] px-5 py-10 sm:py-20 font-[var(--font-montserrat)] sm:px-8 lg:px-12 xl:px-20">
      {/* Heading */}
     <div className="mx-auto max-w-[1400px] translate-y-6 text-center sm:translate-y-0">
        <p className="text-[14px] font-bold uppercase tracking-wide text-[#5fba28]">
          WORKFLOW
        </p>

  <h2 className="mx-auto mt-3 w-[320px] text-[30px] font-black uppercase leading-tight tracking-tight text-[#111111] sm:w-auto sm:text-3xl lg:text-[48px]">
  OUR RESTORATION PROCESS
</h2>

        {/* Gold underline */}
        <div className="mx-auto mt-5 h-[5px] w-[98px] rounded-full bg-[#dcb735]" />
      </div>

      {/* Process */}
      <div className="relative mx-auto mt-20 max-w-[1320px]">

        {/* Connecting Line */}
      <div className="absolute left-0 right-0 top-1/2 hidden h-[2px] bg-[#e2e5e8] lg:block" />

        {/* Cards */}
        <div
          className=" relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {processes.map((process,index ) => (
           <div key={process.number}   ref={(el) => {
    if (el) cardsRef.current[index] = el;
  }} className="group relative z-10 h-[220px] rounded-xl border border-[#1f2937] bg-white px-6 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-[280px]">
              {/* Number */}
              <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#5fba28] text-[22px] font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                {process.number}
              </div>

              {/* Title */}
              <h3
                className=" mt-8 text-[15px] font-black uppercase leading-tight text-[#111111]">
                {process.title}
              </h3>

              {/* Description */}
              <p
                className="mt-5 text-[14px] leading-6 text-[#64748b]">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}