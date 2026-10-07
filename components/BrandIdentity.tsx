"use client";

import {
  Clock3,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const elements = [
  {
    icon: Sparkles,
    title: "Premium",
    subtitle: "Quality",
  },
  {
    icon: Users,
    title: "Expert Team",
    subtitle: "",
  },
  {
    icon: ShieldCheck,
    title: "Trusted",
    subtitle: "Service",
  },
  {
    icon: Clock3,
    title: "Fast Delivery",
    subtitle: "",
  },
  {
    icon: Star,
    title: "Satisfaction",
    subtitle: "",
  },
];

export default function BrandIdentity() {
  return (
    <aside className="border-b border-[#242b32] bg-[#070707] lg:border-b-0 lg:border-r">
      <div className="p-6 sm:p-8 lg:p-10">

        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex h-[220px] w-[310px] items-center justify-center rounded-xl bg-[#f8f8f8] p-5 sm:h-[225px] sm:w-[320px]">
            <img
              src="/images/logo.jpg"
              alt="AKS Solutions"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        {/* Brand Identity */}
        <h2 className="mt-7 text-center text-[14px] font-bold uppercase tracking-[4px] text-[#d4af37]">
          BRAND IDENTITY BOARD
        </h2>

        <div className="my-8 h-px bg-[#242b32]" />

        {/* Brand Purpose */}
        <section>
          <h3 className="text-[14px] font-bold uppercase tracking-[3px] text-[#5fba28]">
            BRAND PURPOSE
          </h3>

          <p className="mt-4 text-[14px] font-medium leading-6 text-[#c7cdd4]">
            "We restore the natural beauty of marble and stone surfaces with
            precision, care, and professionalism."
          </p>
        </section>

        <div className="my-8 h-px bg-[#242b32]" />

        {/* Typography */}
        <section>
          <h3 className="text-[14px] font-bold uppercase tracking-[3px] text-[#5fba28]">
            TYPOGRAPHY
          </h3>

          <div className="mt-5 space-y-5">

            <div className="flex items-center gap-4">
              <span className="text-[40px] font-bold leading-none text-[#d4af37]">
                Ag
              </span>

              <div>
                <p className="text-[11px] uppercase text-[#8b96a3]">
                  HEADINGS
                </p>

                <p className="text-[14px] font-bold text-white">
                  Poppins Bold / Semibold
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[36px] font-medium leading-none text-[#d4af37]">
                Aa
              </span>

              <div>
                <p className="text-[11px] uppercase text-[#8b96a3]">
                  BODY TEXT
                </p>

                <p className="text-[14px] font-medium text-white">
                  Inter Regular / Medium
                </p>
              </div>
            </div>

            {/* Font Preview */}
            <div className="flex items-center justify-between rounded-md border border-[#252d35] bg-[#111314] px-3 py-2">
              <span className="text-[12px] text-[#aeb8c2]">
                Restore. Rejuvenate. Revive.
              </span>

              <span className="text-[11px] font-bold text-[#d4af37]">
                LIVE
              </span>
            </div>

          </div>
        </section>

        <div className="my-8 h-px bg-[#242b32]" />

        {/* Brand Elements */}
        <section>
          <h3 className="text-[14px] font-bold uppercase tracking-[3px] text-[#5fba28]">
            BRAND ELEMENTS
          </h3>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5">
            {elements.map((element) => {
              const Icon = element.icon;

              return (
                <div
  key={element.title}
  className="flex min-h-[58px] flex-col items-center justify-center rounded-md border border-[#242d36] bg-[#0d0f10] px-1 text-center"
>
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="text-[#d4af37]"
                  />

                  <span className="mt-1 text-[9px] font-semibold text-[#c7cdd4]">
                    {element.title}
                  </span>

                  {element.subtitle && (
                    <span className="text-[9px] font-semibold text-[#c7cdd4]">
                      {element.subtitle}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </aside>
  );
}