"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "WHAT IS THE DIFFERENCE BETWEEN MARBLE POLISHING AND CRYSTALLIZATION?",
    answer: "Marble polishing is a physical restoration method using diamond abrasives to remove scratches and reveal the stone's natural shine. Crystallization is a chemical reaction process that uses a fluorosilicate compound to create a hard, glass-like calcium fluoride shield on the surface, offering superior wear resistance.",
  },
  {
    question: "IS THERE ANY DUST OR MESS CREATED DURING THE FLOOR GRINDING PROCESS?",
    answer: "No. We utilize advanced wet-grinding machinery. This technique encapsulates all dust in a liquid slurry, which is immediately extracted using industrial wet-vacuum systems. Your walls, furniture, and HVAC systems remain completely clean and dust-free.",
  },
  {
    question: "HOW LONG DOES THE STONE RESTORATION PROCESS TAKE FOR A STANDARD HOME?",
    answer: "For a typical residential living hall (approximately 50 to 80 square meters), the grinding, polishing, and sealing process generally takes 2 to 3 days depending on joint heights (lippage), scratch depth, and the type of stone.",
  },
  {
    question: "HOW OFTEN SHOULD NATURAL STONE FLOORS BE PROFESSIONALLY POLISHED?",
    answer: "For residential spaces, we recommend professional maintenance and crystallization every 2 to 3 years. For high-traffic commercial spaces (such as hotel lobbies or retail malls), maintenance should be scheduled every 6 to 12 months.",
  },
  {
    question: "CAN YOU RESTORE STONE COUNTERTOPS AND WALLS, OR ONLY FLOORS?",
    answer: "We restore all natural stone applications. In addition to floors, we polish marble kitchen countertops, granite vanity tops, travertine wall claddings, and terrazzo steps using specialized detail tooling.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const label = labelRef.current;
    const heading = headingRef.current;
    const underline = underlineRef.current;
    const box = boxRef.current;

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

    if (box) {
      gsap.fromTo(
        box,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
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
      className="bg-white px-5 pt-[35px] pb-[100px] sm:px-8 lg:px-12 xl:px-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[895px]">
        {/* Section Label & Heading */}
        <div className="text-center">
          <p
            ref={labelRef}
            id="faq-heading"
            className="text-[14px] font-bold uppercase tracking-[0.3px] text-[#55B52A] leading-[18px]"
          >
            QUESTIONS
          </p>

          <h2
            ref={headingRef}
            className="mt-[8px] text-[42px] font-extrabold uppercase leading-[1.15] tracking-[-0.5px] text-[#111111] sm:text-[36px] lg:text-[42px]"
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>

          {/* Gold Underline */}
          <div
            ref={underlineRef}
            className="mx-auto mt-[15px] mb-[70px] h-[4px] w-[85px] rounded-[3px] bg-[#DDB329]"
            aria-hidden="true"
          />
        </div>

        {/* FAQ Box */}
        <div
          ref={boxRef}
          className="bg-white border border-[#46515F] rounded-[16px] p-[35px_34px] w-full"
          role="region"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}