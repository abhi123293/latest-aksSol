"use client";

export default function BrandTopBar() {
  return (
    <div className="border-b border-[#292929] bg-[#111111]">
      <div className="flex min-h-[40px] items-center justify-center gap-2 px-4 text-center text-[11px] sm:text-[13px]">
        <span className="font-semibold text-white">
          Currently viewing:
        </span>

        <span className="font-bold text-[#dcb735]">
          BRAND GUIDELINE BOARD
        </span>

        <a href="/" className="ml-2 rounded-md bg-[#5fba28] px-4 py-1 text-[10px] font-bold text-white transition hover:bg-[#70cc35] sm:text-[11px]">
          SWITCH TO WEBSITE
        </a>
      </div>
    </div>
  );
}