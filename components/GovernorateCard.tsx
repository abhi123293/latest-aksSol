"use client";

import { MapPin } from "lucide-react";

interface GovernorateCardProps {
  title: string;
  locations: string[];
}

export default function GovernorateCard({ title, locations }: GovernorateCardProps) {
  return (
    <article className="group relative bg-[#191919] border border-[#292929] rounded-[10px] w-[280px] h-[290px] shrink-0 flex flex-col p-[30px_30px_24px_30px] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-[5px] hover:border-[#55B52A]/45 hover:shadow-[0_8px_25px_rgba(0,0,0,0.30)]">
      {/* Fixed Header Area - Icon & Title */}
      <div className="flex items-start gap-[10px] h-[52px] min-h-[52px]">
        <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[3px] bg-[#1E311A] mt-1 transition-all duration-300 ease-out group-hover:bg-[#55B52A]">
          <MapPin size={19} className="text-[#55B52A] transition-colors duration-300 group-hover:text-white" strokeWidth={2} aria-hidden="true" />
        </div>
        <h3 className="text-white font-extrabold uppercase text-[15px] leading-[1.35] tracking-[0.2px] mt-1 whitespace-pre-line break-words flex-1 min-w-0">
          {title}
        </h3>
      </div>

      {/* Divider - Fixed Position */}
      <hr className="mt-[16px] mb-[12px] w-full h-[1px] bg-[#292929] border-none" aria-hidden="true" />

      {/* Locations List - Fixed Start Position */}
      <ul className="flex-1 flex flex-col gap-[6px] text-[#8FA5BB] font-normal text-[12px] leading-[1.35] min-w-0 overflow-hidden">
        {locations.map((location, index) => (
          <li key={index} className="flex items-center gap-[8px] min-w-0">
            <span className="flex h-[4px] w-[4px] shrink-0 rounded-full bg-[#DDB329]" aria-hidden="true" />
            <span className="truncate">{location}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}