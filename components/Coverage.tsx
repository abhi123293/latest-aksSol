"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GovernorateCard from "./GovernorateCard";
import UtilityVehicleBanner from "./UtilityVehicleBanner";

const governorates = [
  {
    title: "CAPITAL\nGOVERNORATE",
    locations: [
      "Manama",
      "Seef District",
      "Juffair",
      "Reef Island",
      "Adliya",
      "Diplomatic Area",
    ],
  },
  {
    title: "MUHARRAQ\nGOVERNORATE",
    locations: [
      "Amwaj Islands",
      "Diyar Al Muharraq",
      "Hidd",
      "BusaiTeen",
      "Galali",
      "Arad",
    ],
  },
  {
    title: "NORTHERN\nGOVERNORATE",
    locations: [
      "Saar",
      "Janabiya",
      "Budaiya",
      "Hamad Town",
      "Jasra",
      "A'ali",
    ],
  },
  {
    title: "SOUTHERN\nGOVERNORATE",
    locations: [
      "Riffa",
      "West Riffa",
      "East Riffa",
      "Zallaq",
      "Isa Town",
      "Sakhir",
    ],
  },
];

export default function Coverage() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const label = labelRef.current;
    const heading = headingRef.current;
    const underline = underlineRef.current;
    const description = descriptionRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const banner = bannerRef.current;

    if (label) {
      gsap.fromTo(
        label,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: label,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (heading) {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (underline) {
      gsap.fromTo(
        underline,
        { opacity: 0, scaleX: 0 },
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: underline,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (description) {
      gsap.fromTo(
        description,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: description,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (banner) {
      gsap.fromTo(
        banner,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: banner,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#111111] px-5 pt-[95px] pb-[100px] sm:px-8 lg:px-12 xl:px-20"
      aria-labelledby="coverage-heading"
    >
      <div className="mx-auto max-w-[1140px]">
        {/* Section Label & Heading */}
        <div className="text-center">
          <p
            ref={labelRef}
            id="coverage-heading"
            className="text-[16px] font-bold uppercase tracking-[0.3px] text-[#55B52A] leading-[20px]"
          >
            COVERAGE
          </p>

          <h2
            ref={headingRef}
            className="mt-3 text-[48px] font-extrabold uppercase leading-[1.15] tracking-[-0.5px] text-white sm:text-[42px] lg:text-[48px]"
          >
            SERVICE AREAS IN BAHRAIN
          </h2>

          {/* Gold Underline */}
          <div
            ref={underlineRef}
            className="mx-auto mt-[16px] mb-[20px] h-[4px] w-[85px] rounded-[3px] bg-[#DDB329]"
            aria-hidden="true"
          />

          {/* Description */}
          <p
            ref={descriptionRef}
            className="mx-auto max-w-[630px] text-[#8FA5BB] font-normal text-[15px] leading-[1.7] sm:text-[16px]"
          >
            We provide prompt marble and stone care services across all governorates
            of the Kingdom of Bahrain.
          </p>
        </div>

        {/* Governorate Cards Grid */}
        <div
          className="mx-auto mt-[72px] grid max-w-[1140px] grid-cols-1 gap-[28px] sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          aria-label="Service area governorates"
        >
          {governorates.map((gov, index) => (
            <div
              key={gov.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="flex"
              role="listitem"
            >
              <GovernorateCard title={gov.title} locations={gov.locations} />
            </div>
          ))}
        </div>

        {/* Utility Vehicle Banner */}
        <div ref={bannerRef} className="mx-auto mt-[68px] max-w-[960px]">
          <UtilityVehicleBanner />
        </div>
      </div>
    </section>
  );
}