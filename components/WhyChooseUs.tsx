"use client";

import {
  Award,
  Cpu,
  Users,
  Gem,
  ShieldCheck,
  Wallet,
  Clock3,
  Building2,
} from "lucide-react";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    icon: Award,
    title: "3+ YEARS OF EXPERIENCE",
    description:
      "Bringing professional experience and dedicated care to marble, granite, and other stone restoration projects.",
  },
  {
    icon: Cpu,
    title: "ADVANCED TECHNOLOGY",
    description:
      "Using advanced technology and professional equipment to deliver precise and effective surface restoration.",
  },
  {
    icon: Users,
    title: "SKILLED & EXPERIENCED TEAM",
    description:
      "Our skilled team focuses on quality workmanship and careful attention to every restoration project.",
  },
  {
    icon: Gem,
    title: "PREMIUM QUALITY MATERIALS",
    description:
      "We use quality materials and professional products to achieve an excellent finish for stone surfaces.",
  },
  {
    icon: ShieldCheck,
    title: "LONG-LASTING PROTECTION",
    description:
      "Protective treatments help maintain the appearance of stone surfaces and guard against everyday stains.",
  },
  {
    icon: Wallet,
    title: "AFFORDABLE PRICING",
    description:
      "Practical restoration solutions designed to deliver value while meeting your surface care requirements.",
  },
  {
    icon: Clock3,
    title: "RELIABLE & ON-TIME SERVICE",
    description:
      "We value your time and aim to provide dependable service with careful planning and timely completion.",
  },
  {
    icon: Building2,
    title: "RESIDENTIAL & COMMERCIAL",
    description:
      "Professional stone care and restoration solutions for homes, offices, commercial spaces, and other properties.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#111111] px-5 py-16 font-[var(--font-montserrat)] sm:px-8 sm:py-20 lg:px-12 xl:px-20"
    >
      {/* Section Heading */}
      <div className="mx-auto max-w-[1200px] text-center">
        <p className="text-[14px] font-bold uppercase tracking-wide text-[#5fba28]">
          WHY WORK WITH US
        </p>

        <h2 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-[47px]">
          WHY CHOOSE AKS SOLUTIONS?
        </h2>

        {/* Gold Underline */}
        <div className="mx-auto mt-5 h-[5px] w-[98px] rounded-full bg-[#dcb735]" />

        {/* Description */}
        <p className="mx-auto mt-6 max-w-[760px] text-[14px] leading-6 text-[#91a4ba] sm:text-[17px]">
          Experience professional stone care backed by skilled workmanship,
          advanced equipment, quality materials, and reliable service for
          residential and commercial properties.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto mt-12 grid max-w-[1320px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4 lg:gap-7">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-xl border border-[#292929] bg-[#191919] px-6 py-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#5fba28] hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)] sm:px-7 sm:py-8"
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#5fba28] transition-all duration-500 group-hover:w-full" />

              {/* Icon */}
              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-xl bg-[#242424] transition-all duration-500 group-hover:bg-[#dcb735]">
                <Icon
                  size={30}
                  strokeWidth={1.8}
                  className="text-[#dcb735] transition-colors duration-500 group-hover:text-[#111111]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-7 text-[16px] font-black uppercase leading-[1.5] text-white transition-colors duration-300 group-hover:text-[#dcb735]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[13px] leading-6 text-[#91a4ba]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}