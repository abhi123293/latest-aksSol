"use client";

export default function Footer() {
  return (
    <footer className="bg-white px-5 py-[58px] sm:px-8 lg:px-12 xl:px-20 border-t border-[#E8EAED]">
      <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#667085] font-normal text-[12px] leading-[1.5] text-center sm:text-left">
          © 2026 AKS Solutions Bahrain. All Rights Reserved.
        </p>
        <p className="text-[#667085] font-normal text-[12px] leading-[1.5] text-center sm:text-right flex items-center justify-center sm:justify-end gap-1">
          Designed with
          <span className="text-[#E53E3E" aria-hidden="true">♥</span>
          for Excellence
        </p>
      </div>
    </footer>
  );
}