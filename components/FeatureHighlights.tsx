"use client";

import { MapPin, Home, Sparkles, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Bahrain Wide",
    subtitle: "Coverage",
  },
  {
    icon: Home,
    title: "Residential &",
    subtitle: "Commercial",
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly",
    subtitle: "Products",
  },
  {
    icon: Clock,
    title: "Flexible",
    subtitle: "Scheduling",
  },
  {
    icon: Shield,
    title: "Satisfaction",
    subtitle: "Guaranteed",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="bg-white px-5 py-[60px] sm:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 lg:gap-[60px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 w-full sm:w-auto shrink-0 text-center sm:text-left"
            >
              <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center text-[#55B52A] lg:mx-auto lg:mr-0">
                <feature.icon size={22} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="text-left">
                <p className="text-[#14243A] font-bold text-[14px] leading-[1.3]">
                  {feature.title}
                </p>
                <p className="text-[#667085] font-normal text-[13px] leading-[1.3]">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}