"use client";

import { Phone, Mail, MapPin } from "lucide-react";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function ContactInfoCard({ icon, label, value }: ContactInfoCardProps) {
  return (
    <div className="flex items-center gap-4 bg-[#F5F7FA] rounded-[12px] h-[88px] px-6">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] text-[#55B52A]">
        {icon}
      </div>
      <div>
        <p className="text-[#8FA5BB] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px]">
          {label}
        </p>
        <p className="mt-1 text-[#14243A] font-bold text-[18px] leading-[1.2]">
          {value}
        </p>
      </div>
    </div>
  );
}