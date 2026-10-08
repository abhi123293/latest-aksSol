"use client";
import {
  ShieldCheck,
  BriefcaseBusiness,
  Star,
  Clock3,
  Users,
  CircleCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    icon: ShieldCheck,
    title: "PREMIUM QUALITY",
    subtitle: "Finest Finish",
  },
  {
    icon: BriefcaseBusiness,
    title: "EXPERT TEAM",
    subtitle: "Skilled Professionals",
  },
  {
    icon: Star,
    title: "AFFORDABLE PRICING",
    subtitle: "Best Value",
  },
  {
    icon: Clock3,
    title: "ON-TIME SERVICE",
    subtitle: "Reliable & Fast",
  },
];

export default function FeatureStrip() {
     const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".stat-box", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      {/* Feature Strip */}
      <section className="relative z-10 -mb-[15px] w-full lg:-mt-[90px]">
        <div className="grid w-full grid-cols-2 border-t border-white/10 bg-[#111111] px-3 lg:grid-cols-4 lg:bg-black/45 lg:backdrop-blur-md lg:px-24">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="ml-4 flex items-center justify-start gap-2 py-7 lg:ml-8 lg:gap-2 lg:py-8"
              >
                <Icon
                  size={34}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#dcb735]"
                />

                <div>
                  <h3 className="text-[15px] font-bold leading-tight text-[#dcb735]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[14px] leading-tight text-[#cfcfcf]">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Statistics Section */}
   {/* Statistics Section */}
<section className="relative z-0 -mt-0 bg-[#1c1c1c] px-5 py-18 lg:px-20">
  <div
    ref={statsRef}
    className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 lg:flex lg:justify-center lg:gap-10"
  >

    {/* Years Experience */}
    <div className="stat-box flex min-h-[202px] w-full flex-col items-center rounded-xl bg-[#111111] px-3 py-5 text-center lg:min-h-0 lg:w-[280px] lg:py-6">

      <div className="mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#202020] lg:h-[55px] lg:w-[55px]">
        <ShieldCheck
          size={30}
          strokeWidth={1.5}
          className="text-[#dcb735]"
        />
      </div>

      <h2 className="text-[28px] font-black leading-none text-[#dcb735] lg:text-4xl">
        5+
      </h2>

      <h3 className="mt-3 max-w-[90px] text-[12px] font-bold leading-[1.15] text-white lg:mt-4 lg:max-w-none lg:text-[13px] lg:leading-tight">
        YEARS EXPERIENCE
      </h3>

      <p className="mt-1 max-w-[100px] text-[10px] leading-[1.3] text-[#999999] lg:mt-2 lg:max-w-none lg:text-[11px]">
        Serving all across Bahrain
      </p>
    </div>


    {/* Happy Clients */}
    <div className="stat-box flex min-h-[202px] w-full flex-col items-center rounded-xl bg-[#111111] px-3 py-5 text-center lg:min-h-0 lg:w-[280px] lg:py-6">

      <div className="mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#202020] lg:h-[55px] lg:w-[55px]">
        <Users
          size={30}
          strokeWidth={1.5}
          className="text-[#dcb735]"
        />
      </div>

      <h2 className="text-[28px] font-black leading-none text-[#dcb735] lg:text-4xl">
        500+
      </h2>

      <h3 className="mt-3 max-w-[90px] text-[12px] font-bold leading-[1.15] text-white lg:mt-4 lg:max-w-none lg:text-[13px] lg:leading-tight">
        HAPPY CLIENTS
      </h3>

      <p className="mt-1 max-w-[100px] text-[10px] leading-[1.3] text-[#999999] lg:mt-2 lg:max-w-none lg:text-[11px]">
        Residential & Commercial
      </p>
    </div>


    {/* Projects */}
    <div className="stat-box flex min-h-[202px] w-full flex-col items-center rounded-xl bg-[#111111] px-3 py-5 text-center lg:min-h-0 lg:w-[280px] lg:py-6">

      <div className="mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#202020] lg:h-[55px] lg:w-[55px]">
        <CircleCheck
          size={30}
          strokeWidth={1.5}
          className="text-[#dcb735]"
        />
      </div>

      <h2 className="text-[28px] font-black leading-none text-[#dcb735] lg:text-4xl">
        1,000+
      </h2>

      <h3 className="mt-3 max-w-[100px] text-[12px] font-bold leading-[1.15] text-white lg:mt-4 lg:max-w-none lg:text-[13px] lg:leading-tight">
        PROJECTS COMPLETED
      </h3>

      <p className="mt-1 max-w-[100px] text-[10px] leading-[1.3] text-[#999999] lg:mt-2 lg:max-w-none lg:text-[11px]">
        Restored to perfection
      </p>
    </div>


    {/* Satisfaction */}
    <div className="stat-box flex min-h-[202px] w-full flex-col items-center rounded-xl bg-[#111111] px-3 py-5 text-center lg:min-h-0 lg:w-[280px] lg:py-6">

      <div className="mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#202020] lg:h-[55px] lg:w-[55px]">
        <Sparkles
          size={30}
          strokeWidth={1.5}
          className="text-[#dcb735]"
        />
      </div>

      <h2 className="text-[28px] font-black leading-none text-[#dcb735] lg:text-4xl">
        100%
      </h2>

      <h3 className="mt-3 max-w-[100px] text-[12px] font-bold leading-[1.15] text-white lg:mt-4 lg:max-w-none lg:text-[13px] lg:leading-tight">
        SATISFACTION RATE
      </h3>

      <p className="mt-1 max-w-[100px] text-[10px] leading-[1.3] text-[#999999] lg:mt-2 lg:max-w-none lg:text-[11px]">
        Guaranteed quality finish
      </p>
    </div>

  </div>
</section>
    </>
  );
}