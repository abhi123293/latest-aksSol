"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

export default function FAQItem({ question, answer, isLast }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-[#E8EAED] last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-[24px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B52A] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-expanded={isOpen}
      >
        <span className="text-[#111111] font-extrabold uppercase text-[15px] leading-[1.35] tracking-[0.2px] pr-8 hover:text-[#55B52A] transition-colors duration-200">
          {question}
        </span>
        <div className="flex h-[15px] w-[15px] shrink-0 items-center justify-center text-[#55B52A] transition-transform duration-300 ease-out"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <ChevronUp size={15} strokeWidth={2.5} />
        </div>
      </button>

      <div className="overflow-hidden transition-all duration-300 ease-out" style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0, marginTop: isOpen ? '16px' : '0', marginBottom: isOpen ? '22px' : '0' }}>
        <p className="text-[#42546B] font-normal text-[15px] leading-[1.7]">
          {answer}
        </p>
      </div>
    </div>
  );
}