"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    stars: 5,
    text: "Excellent service! My marble floor looks brand new. Highly professional team and very punctual. Highly recommended for marble polishing in Bahrain.",
    avatar: {
      initial: "A",
      bgColor: "#55B52B",
    },
    name: "Ahmed Al Khalifa",
    occupation: "Homeowner",
    location: "Riffa",
  },
  {
    stars: 5,
    text: "AKS Solutions did an amazing job on our commercial office floors. Very satisfied with their work, attitude, and dust-free wet grinding system.",
    avatar: {
      initial: "F",
      bgColor: "#DDB329",
    },
    name: "Fatima Rahman",
    occupation: "Office Manager",
    location: "Seef District",
  },
  {
    stars: 5,
    text: "Best marble polishing service in Bahrain. Great results at a reasonable price. They restored our heavily scratched lobby to a perfect mirror sheen.",
    avatar: {
      initial: "M",
      bgColor: "#359B20",
    },
    name: "Mohammed Yousif",
    occupation: "Business Owner",
    location: "Juffair",
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const label = labelRef.current;
    const heading = headingRef.current;
    const underline = underlineRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA] px-5 pt-[100px] pb-[110px] sm:px-8 lg:px-12 xl:px-20"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-[1140px]">
        {/* Section Label & Heading */}
        <div className="text-center">
          {/* Black line above REVIEWS label */}
          <div className="mx-auto w-[60px] h-[2px] bg-[#111111] mb-6" aria-hidden="true" />
          <p
            ref={labelRef}
            id="reviews-heading"
            className="text-[16px] font-bold uppercase tracking-[0.5px] text-[#55B52B] leading-[22px]"
          >
            REVIEWS
          </p>

          <h2
            ref={headingRef}
            className="mt-3 text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold uppercase leading-[1.1] tracking-[0] text-[#111111]"
          >
            WHAT OUR CLIENTS SAY
          </h2>

          {/* Gold Underline */}
          <div
            ref={underlineRef}
            className="mx-auto mt-[22px] mb-[70px] h-[5px] w-[85px] rounded-[5px] bg-[#DDAF24]"
            aria-hidden="true"
          />
        </div>

        {/* Review Cards Grid */}
        <div
          className="mx-auto grid max-w-[1140px] grid-cols-1 gap-[28px] md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Client reviews"
        >
          {reviews.map((review, index) => (
            <div
              key={review.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="flex"
              role="listitem"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}