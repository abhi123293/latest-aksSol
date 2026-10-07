"use client";

import {
  MapPin,
  ShieldCheck,
} from "lucide-react";

const serviceAreas = [
  {
    title: "CAPITAL GOVERNORATE",
    locations: [
      "Manama",
      "Seef District",
      "Juffair",
      "Reef Island",
      "Adliya",
      "Diplomatic Area",
    ],
  },
  {
    title: "MUHARRAQ GOVERNORATE",
    locations: [
      "Amwaj Islands",
      "Diyar Al Muharraq",
      "Hidd",
      "Busaiteen",
      "Galali",
      "Arad",
    ],
  },
  {
    title: "NORTHERN GOVERNORATE",
    locations: [
      "Saar",
      "Janabiya",
      "Budaiya",
      "Hamad Town",
      "Jasra",
      "A'ali",
    ],
  },
  {
    title: "SOUTHERN GOVERNORATE",
    locations: [
      "Riffa",
      "West Riffa",
      "East Riffa",
      "Zallaq",
      "Isa Town",
      "Sakhir",
    ],
  },
];

export default function ServiceAreas() {
  return (
    <section
     className="bg-[#111111] px-5 py-24 font-[var(--font-montserrat)] sm:px-8 lg:px-12 xl:px-20"
    >
      {/* ================= HEADING ================= */}
      <div className="mx-auto max-w-[1200px] text-center">

        {/* Small Heading */}
       <p className="text-[14px] font-bold uppercase tracking-wide text-[#5fba28] mt-4 translate-y-2">
          COVERAGE
        </p>
        {/* Main Heading */}
  <h2 className="mx-auto mt-3 w-full max-w-[350px] text-[28px] font-black uppercase leading-tight tracking-tight text-white sm:text-3xl lg:w-[800px] lg:max-w-none lg:text-[48px]">
  SERVICE AREAS IN BAHRAIN
</h2>

        {/* Gold Underline */}
        <div
          className="mx-auto mt-4 h-[5px] w-[90px] rounded-full bg-[#dcb735]"/>

        {/* Description */}
        <p className="mx-auto mt-5 w-full max-w-[350px] text-[14px] leading-6 text-[#91a4ba] sm:max-w-[540px] sm:text-[16px]">
  We provide prompt marble and stone care services across all
  governorates of the Kingdom of Bahrain.
</p>
      </div>

      {/* ================= GOVERNORATE CARDS ================= */}
    <div className="mx-auto mt-20 grid max-w-[1320px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {serviceAreas.map((area) => (
          <div key={area.title} className="group rounded-xl border border-[#292929] bg-[#191919] px-6 py-7 transition-[transform,border-color,box-shadow] duration-500 ease-out lg:hover:-translate-y-2 hover:border-[#5fba28] hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)] sm:px-10 sm:py-9">
            {/* Card Header */}
            <div className="flex items-start gap-4">

              {/* Location Icon */}
              <div
              className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-md bg-[#202d1b] transition-all duration-300 group-hover:bg-[#5fba28]"
              >
                <MapPin
                  size={25}
                  strokeWidth={2}
                 className="text-[#5fba28] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              {/* Governorate Name */}
              <h3 className="pt-[-1px] text-[15px] font-black uppercase leading-7 text-white">
                {area.title}
              </h3>
            </div>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-[#292929]" />

            {/* Locations */}
          <div className="space-y-2">
              {area.locations.map((location) => (
                <div
                  key={location}
                  className="flex items-center gap-3"
                >
                  {/* Gold Bullet */}
                  <span
                    className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#dcb735]"/>

                <span className="sm:text-[13px] text-[13px] leading-5 text-[#91a4ba]">
                    {location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ================= UTILITY CARD ================= */}
     <div className="mx-auto mt-20 flex max-w-[900px] flex-col gap-6 rounded-xl border border-[#292929] bg-[#191919] px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-7 lg:px-10 lg:py-5">
        {/* Left Side */}
        <div className="flex items-start gap-4 lg:items-center lg:gap-5">

          {/* Shield Icon */}
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#202d1b]">
            <ShieldCheck
              size={30}
              strokeWidth={1.8}
              className="text-[#5fba28]"
            />
          </div>

          {/* Text */}
         <div className="min-w-0 flex-1">
  <h3 className="text-[14px] font-black uppercase leading-tight text-white lg:text-[15px]">
    FULLY EQUIPPED UTILITY VEHICLES
  </h3>

  <p className="mt-2 max-w-[700px] text-[12px] leading-5 text-[#91a4ba]">
    Our technicians travel with all standard machinery,
    sealers, and testing kits. We ensure zero delay on-site.
  </p>
</div>
        </div>

        {/* Button */}
     <button className="flex h-[48px] w-full items-center justify-center rounded-md bg-[#5fba28] px-5 text-[11px] font-black uppercase leading-tight whitespace-nowrap text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#4da51c] lg:h-[55px] lg:w-auto lg:min-w-[180px] lg:px-8 lg:text-[12px]">
           <span className="lg:hidden">CHECK AVAILABILITY</span>
  <span className="hidden lg:block">
    CHECK
    <br />
    AVAILABILITY
  </span>
        </button>
      </div>
    </section>
  );
}