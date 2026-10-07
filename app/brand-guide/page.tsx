"use client";

import BrandTopBar from "@/components/BrandTopBar";
import BrandIdentity from  "@/components/BrandIdentity";
import BrandGuidelinesBoard from "@/components/BrandGuidelinesBoard";

export default function BrandGuidePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <BrandTopBar />

      <div className="px-3 py-8 sm:px-5 lg:px-8">
        {/* Page Header */}
        <div className="mb-5 px-2 sm:px-3">
          <h1 className="text-[22px] font-extrabold tracking-wide text-[#e8e8e8] sm:text-[28px]">
            AKS SOLUTIONS
            <span className="mx-2 text-[#777777]">•</span>
            <span className="text-[#d4af37]">BRAND GUIDELINES</span>
          </h1>

          <p className="mt-1 text-[13px] text-[#7f9ab5] sm:text-[15px]">
            Interactive landscape brand specification board (1920×1080 ratio)
          </p>
        </div>

        {/* Main Board */}
        <div className="overflow-hidden rounded-[20px] border border-[#252e38] bg-[#080909] shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
          <div className="grid lg:grid-cols-[30%_70%]">
            <BrandIdentity />
            <BrandGuidelinesBoard />
          </div>
        </div>
      </div>

      {/* Back Button */}
     <a
  href="/"
  className="fixed bottom-5 left-4 z-[100] flex items-center rounded-full border-2 border-white bg-[#d4af37] px-6 py-3 text-[13px] font-extrabold text-black shadow-[0_5px_25px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:bg-[#e3c24c] sm:left-5"
>
        ← BACK TO WEBSITE
      </a>
    </main>
  );
}