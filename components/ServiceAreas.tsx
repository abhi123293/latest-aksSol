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
     className="bg-[#111111] px-5 py-20 font-[var(--font-montserrat)] sm:px-8 lg:px-12 xl:px-20"
    >
      {/* ================= HEADING ================= */}
      <div className="mx-auto max-w-[1200px] text-center">

        {/* Small Heading */}
       <p className="text-[14px] font-bold uppercase tracking-wide text-[#5fba28] mt-4 translate-y-2">
          COVERAGE
        </p>
        {/* Main Heading */}
        <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-[48px]">
          SERVICE AREAS IN BAHRAIN
        </h2>

        {/* Gold Underline */}
        <div
          className="mx-auto mt-4 h-[5px] w-[90px] rounded-full bg-[#dcb735]"/>

        {/* Description */}
        <p
          className="mx-auto mt-5 sm:max-w-[540px] text-[14px] sm:w-auto leading-6 text-[#91a4ba] sm:text-[16px] w-[350px]">
          We provide prompt marble and stone care services across all
          governorates of the Kingdom of Bahrain.
        </p>
      </div>

      {/* ================= GOVERNORATE CARDS ================= */}
    <div className="mx-auto mt-20 grid max-w-[1320px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {serviceAreas.map((area) => (
          <div key={area.title} className="group rounded-xl border border-[#292929] bg-[#191919] px-10 py-9 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#5fba28] hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
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
           <div className="-translate-y-2 space-y-2 sm:translate-y-0">
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
     <div className="mx-auto mt-20 flex max-w-[900px] flex-col gap-7 rounded-xl border border-[#292929] bg-[#191919] px-7 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-5">
        {/* Left Side */}
        <div className="flex items-center gap-5">

          {/* Shield Icon */}
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#202d1b]">
            <ShieldCheck
              size={30}
              strokeWidth={1.8}
              className="text-[#5fba28]"
            />
          </div>

          {/* Text */}
          <div>
           <h3 className="text-[16px] font-black uppercase text-white sm:text-[15px]">
              FULLY EQUIPPED UTILITY VEHICLES
            </h3>

           <p className="mt-2 max-w-[700px] sm:text-[12px] text-[13px] sm:leading-5 text-[#91a4ba] leading-5 ">
              Our technicians travel with all standard machinery,
              sealers, and testing kits. We ensure zero delay on-site.
            </p>
          </div>
        </div>

        {/* Button */}
     <button className="flex h-[40px] min-w-[180px] items-center justify-center rounded-md bg-[#5fba28] px-8 text-[12px] font-black uppercase leading-tight text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#4da51c] sm:h-[55px]  sm:min-w-[180px] sm:px-8 sm:text-[12px] whitespace-nowrap">
           <span className="sm:hidden">CHECK AVAILABILITY</span>
  <span className="hidden sm:block">
    CHECK
    <br />
    AVAILABILITY
  </span>
        </button>
      </div>
    </section>
  );
}