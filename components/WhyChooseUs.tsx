"use client";

import {  Award,  Layers3, ShieldCheck, Clock3,} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    icon: Award,
    title: "CERTIFIED STONE EXPERTS",
    description:
      "Our technicians are certified stone care professionals trained in mineralogy, stone chemistry, and advanced polishing techniques.",
  },
  {
    icon: Layers3,
    title: "ITALIAN GRINDING MACHINERY",
    description:
      "We use premium heavy-duty Italian planetary grinding machines and high-grade diamond abrasive pads for superior precision.",
  },
  {
    icon: ShieldCheck,
    title: "DUST-FREE WET GRINDING",
    description:
      "Our advanced wet-grinding systems encapsulate dust in a liquid slurry, keeping your air pure and your property completely clean.",
  },
  {
    icon: Clock3,
    title: "PUNCTUAL & LOCAL SUPPORT",
    description:
      "We respect your schedule. We arrive on time, deliver fast services, and provide local support across all areas of Bahrain.",
  },
];

export default function WhyChooseUs() {
     const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current;

    gsap.fromTo(
      cards,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
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
   <section  id="about" className="bg-[#111111] px-5 py-20 font-[var(--font-montserrat)] sm:px-8 lg:px-12 xl:px-20">
      {/* Section Heading */}
      <div className="mx-auto max-w-[1200px] text-center">

        {/* Small Heading */}
        <p className="mt-5 text-[14px] font-bold uppercase tracking-wide text-[#5fba28]">
          WHY WORK WITH US
        </p>

        {/* Main Heading */}
       <h2 className="mt-1 text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-[47px]">
          WHY CHOOSE AKS SOLUTIONS?
        </h2>

        {/* Gold Underline */}
        <div className="mx-auto mt-5 h-[5px] w-[98px] rounded-full bg-[#dcb735]" />

        {/* Description */}
      <p className="mx-auto mt-6 max-w-[760px] text-[14px] leading-6 text-[#91a4ba] sm:text-[17px]">
          We merge professional craftsmanship, state-of-the-art machinery,
          and eco-friendly products to deliver unmatched marble & stone
          restoration services.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto mt-15 grid max-w-[1320px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature,index) => {
          const Icon = feature.icon;

          return (
            <div
             key={feature.title}
  ref={(el) => {
    if (el) cardsRef.current[index] = el;
  }}
              className="group rounded-xl border border-[#292929] bg-[#191919] px-8 py-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#5fba28] hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
              {/* Icon */}
              <div className="flex h-[65px] w-[65px] items-center justify-center rounded-xl bg-[#242424] transition-all duration-500 group-hover:bg-[#dcb735]">
              <Icon
  size={44}
  strokeWidth={1.8}
  className="text-[#dcb735] transition-colors duration-500 group-hover:text-[#111111]"
/>
              </div>

              {/* Title */}
              <h3 className="mt-9 text-[18px] font-black uppercase leading-[1.55] text-white">
  {feature.title}
</h3>

              {/* Description */}
              <p
                className=" mt-4 text-[13px] leading-6 text-[#91a4ba] " >
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}