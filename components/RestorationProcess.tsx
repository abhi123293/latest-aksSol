
"use client";

import {
  CalendarCheck,
  Settings,
  Users,
  Gem,
  ShieldCheck,
  Wallet,
  Clock,
  Building2,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reasons = [
  {
    icon: CalendarCheck,
    title: "3+ YEARS OF EXPERIENCE",
    description:
      "Delivering high-quality marble and stone restoration solutions.",
  },
  {
    icon: Settings,
    title: "ADVANCED TECHNOLOGY & EQUIPMENT",
    description:
      "Using advanced technology and professional equipment for stone care.",
  },
  {
    icon: Users,
    title: "SKILLED & EXPERIENCED TEAM",
    description:
      "Experienced professionals dedicated to quality workmanship.",
  },
  {
    icon: Gem,
    title: "PREMIUM QUALITY MATERIALS",
    description:
      "Quality materials selected for professional stone restoration.",
  },
  {
    icon: ShieldCheck,
    title: "LONG-LASTING SURFACE PROTECTION",
    description:
      "Protective treatments that help preserve stone surfaces.",
  },
  {
    icon: Wallet,
    title: "AFFORDABLE PRICING",
    description:
      "Quality stone care solutions at competitive prices.",
  },
  {
    icon: Clock,
    title: "RELIABLE & ON-TIME SERVICE",
    description:
      "Dependable service with a focus on timely completion.",
  },
  {
    icon: Building2,
    title: "RESIDENTIAL & COMMERCIAL SOLUTIONS",
    description:
      "Stone restoration solutions for homes and commercial properties.",
  },
];

export default function RestorationProcess() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(
        (card): card is HTMLDivElement => card !== null
      );

      if (!cards.length) return;

      gsap.fromTo(
        cards,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="why-choose-us"
      className="bg-[#f8f8f8] px-5 py-16 font-[var(--font-montserrat)] sm:px-8 sm:py-20 lg:px-12 xl:px-20"
    >
      {/* Section Heading */}
      <div className="mx-auto max-w-[1400px] text-center">
        <p className="text-[14px] font-bold uppercase tracking-wide text-[#5fba28]">
          WHY AKS SOLUTIONS
        </p>

        <h2 className="mx-auto mt-3 text-[30px] font-black uppercase leading-tight tracking-tight text-[#111111] sm:text-3xl lg:text-[48px]">
          WHY CHOOSE AKS SOLUTIONS?
        </h2>

        <div className="mx-auto mt-5 h-[5px] w-[98px] rounded-full bg-[#dcb735]" />
      </div>

      {/* Reasons Grid */}
      <div className="mx-auto mt-12 grid max-w-[1250px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-7">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <div
              key={reason.title}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el;
                }
              }}
              className="group flex min-h-[245px] flex-col items-center rounded-xl border border-[#e4e8df] bg-white px-5 py-7 text-center shadow-[0_1px_2px_rgba(17,17,17,0.04),0_14px_34px_-14px_rgba(17,17,17,0.10)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-18px_rgba(95,186,40,0.30)]"
            >
              {/* Icon */}
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-xl bg-[#eef7e9] transition-colors duration-300 group-hover:bg-[#5fba28]">
                <Icon
                  size={30}
                  strokeWidth={1.8}
                  className="text-[#5fba28] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              {/* Gold Accent */}
              <div className="mt-5 h-[3px] w-10 rounded-full bg-[#dcb735]" />

              {/* Title */}
              <h3 className="mt-4 text-[15px] font-black uppercase leading-snug text-[#111111]">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[13px] leading-6 text-[#64748b]">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
