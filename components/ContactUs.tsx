"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactInfoCard from "./ContactInfoCard";
import QuoteForm from "./QuoteForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const label = labelRef.current;
    const heading = headingRef.current;
    const underline = underlineRef.current;
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

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

    if (leftColumn) {
      gsap.fromTo(
        leftColumn,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftColumn,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (rightColumn) {
      gsap.fromTo(
        rightColumn,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightColumn,
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
    id="contact"
      ref={sectionRef}
      className="bg-white px-5 pt-[100px] pb-[100px] sm:px-8 lg:px-12 xl:px-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Two-column Grid Layout */}
        <div className="grid grid-cols-1 gap-[65px] lg:grid-cols-[1fr_0.95fr] lg:gap-[65px] items-start">
          {/* Left Column - Contact Info */}
          <div ref={leftColumnRef} className="w-full">
            {/* Section Label */}
            <p
              ref={labelRef}
              id="contact-heading"
              className="text-[#55B52A] font-bold uppercase text-[17px] leading-[1.2] tracking-[0.5px]"
            >
              CONTACT US
            </p>

            {/* Main Heading */}
            <h2
              ref={headingRef}
              className="mt-[8px] text-[42px] font-extrabold uppercase leading-[1.1] tracking-[-0.5px] text-[#14243A] lg:text-[44px]"
            >
              REQUEST A FREE SITE
              <br />
              INSPECTION
            </h2>

            {/* Gold Underline */}
            <div
              ref={underlineRef}
              className="mt-[28px] mb-[35px] h-[4px] w-[85px] rounded-[3px] bg-[#DDAF24]"
              aria-hidden="true"
            />

            {/* Description */}
            <p className="max-w-[610px] text-[#566273] font-normal text-[15px] leading-[1.55] lg:text-[15px]">
              Contact us today for professional marble floor polishing, granite honing, and stone sealing services in Bahrain. We provide free inspection, sample spots, and quick transparent quotation.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-[40px] flex flex-col gap-[24px]">
              <ContactInfoCard
                icon={<Phone size={22} strokeWidth={2} />}
                label="CALL US 24/7"
                value="+973 3366 1188"
              />
              <ContactInfoCard
                icon={<Mail size={22} strokeWidth={2} />}
                label="EMAIL ADDRESS"
                value="info@akssolutionsbh.com"
              />
              <ContactInfoCard
                icon={<MapPin size={22} strokeWidth={2} />}
                label="OUR LOCATION"
                value="Manama, Kingdom of Bahrain"
              />
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div ref={rightColumnRef} className="w-full lg:mt-0">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}