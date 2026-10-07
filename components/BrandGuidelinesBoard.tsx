"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

const colors = [
  {
    name: "PRIMARY GREEN",
    hex: "#65B32E",
    rgb: "RGB 101 179 46",
    cmyk: "CMYK 64 0 100 0",
  },
  {
    name: "DARK GREEN",
    hex: "#3D8A1A",
    rgb: "RGB 61 138 26",
    cmyk: "CMYK 76 18 100 4",
  },
  {
    name: "GOLD ACCENT",
    hex: "#D4AF37",
    rgb: "RGB 212 175 55",
    cmyk: "CMYK 18 28 100 0",
  },
  {
    name: "MARBLE WHITE",
    hex: "#F8F8F8",
    rgb: "RGB 248 248 248",
    cmyk: "CMYK 2 2 2 0",
  },
  {
    name: "LUXURY BLACK",
    hex: "#111111",
    rgb: "RGB 17 17 17",
    cmyk: "CMYK 75 68 67 90",
  },
  {
    name: "DARK CHARCOAL",
    hex: "#1E1E1E",
    rgb: "RGB 30 30 30",
    cmyk: "CMYK 69 63 62 77",
  },
  {
    name: "STONE GREY",
    hex: "#7A7A7A",
    rgb: "RGB 122 122 122",
    cmyk: "CMYK 53 44 41 4",
  },
];

const tints = [
  { label: "100%", color: "#65B32E" },
  { label: "80%", color: "#559A27" },
  { label: "60%", color: "#477F22" },
  { label: "40%", color: "#365E1D" },
  { label: "20%", color: "#203B18" },
];

function ColorCard({
  name,
  hex,
  rgb,
  cmyk,
}: {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyColor = async () => {
    await navigator.clipboard.writeText(hex);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <button
      onClick={copyColor}
      className="group text-left"
      title="Click to copy HEX"
    >
      <div
        className="h-[66px] rounded-lg border border-[#2b333b] shadow-inner transition group-hover:scale-[1.02]"
        style={{ backgroundColor: hex }}
      />

      <div className="mt-4 flex items-center justify-between">
        <p className="text-[11px] font-bold text-white">
          {name}
        </p>

        {copied ? (
          <Check size={13} className="text-[#5fba28]" />
        ) : (
          <Copy
            size={12}
            className="text-[#55616d] opacity-0 transition group-hover:opacity-100"
          />
        )}
      </div>

      <p className="mt-1 font-mono text-[10px] text-[#d4af37]">
        {hex}
      </p>

      <p className="mt-1 font-mono text-[8px] text-[#728090]">
        {rgb}
      </p>

      <p className="font-mono text-[8px] text-[#728090]">
        {cmyk}
      </p>
    </button>
  );
}

export default function BrandGuidelinesBoard() {
  return (
    <div
      className="relative overflow-hidden bg-[#090a0a] p-6 sm:p-8 lg:p-10">
      {/* Decorative Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-[300px] h-[1px] w-[850px] rotate-[18deg] bg-[#6f5511]" />
        <div className="absolute -right-40 top-[450px] h-[1px] w-[1000px] rotate-[15deg] bg-[#6f5511]" />
        <div className="absolute right-0 top-[100px] h-[1px] w-[900px] rotate-[45deg] bg-[#6f5511]" />
      </div>

      <div className="relative z-10">

        {/* BRAND COLORS */}
        <section>
          <h2 className="text-[13px] font-bold uppercase tracking-[3px] text-[#d4af37] sm:text-[15px]">
            BRAND COLORS
            <span className="ml-2 text-[9px] text-[#728090]">
              (CLICK TO COPY HEX)
            </span>
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-7">
            {colors.map((color) => (
              <ColorCard key={color.hex} {...color} />
            ))}
          </div>
        </section>

        {/* GRADIENTS + TINTS */}
        <div className="mt-14 grid gap-7 xl:grid-cols-2">

          {/* Gradients */}
          <section className="rounded-xl border border-[#242d35] bg-[#0d0f10] p-5">
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-[#5fba28]">
              BRAND GRADIENTS
            </h3>

            <div className="mt-4 grid grid-cols-3 gap-3">

              <div className="text-center">
                <div className="h-[58px] rounded-lg bg-gradient-to-r from-[#65B32E] to-[#3D8A1A]" />

                <p className="mt-2 text-[10px] font-bold text-white">
                  Green Gradient
                </p>

                <p className="font-mono text-[8px] text-[#728090]">
                  #65B32E → #3D8A1A
                </p>
              </div>

              <div className="text-center">
                <div className="h-[58px] rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B8860B]" />

                <p className="mt-2 text-[10px] font-bold text-white">
                  Gold Gradient
                </p>

                <p className="font-mono text-[8px] text-[#728090]">
                  #D4AF37 → #B8860B
                </p>
              </div>

              <div className="text-center">
                <div className="h-[58px] rounded-lg bg-gradient-to-r from-[#1E1E1E] to-[#111111]" />

                <p className="mt-2 text-[10px] font-bold text-white">
                  Luxury Black
                </p>

                <p className="font-mono text-[8px] text-[#728090]">
                  #1E1E1E → #111111
                </p>
              </div>

            </div>
          </section>

          {/* Tints */}
          <section className="rounded-xl border border-[#242d35] bg-[#0d0f10] p-5">
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-[#5fba28]">
              COLOUR TINTS (PRIMARY GREEN)
            </h3>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {tints.map((tint) => (
                <div key={tint.label} className="text-center">
                  <div
                    className="h-[58px] rounded-lg border border-[#26302b]"
                    style={{ backgroundColor: tint.color }}
                  />

                  <p className="mt-2 text-[10px] font-bold text-white">
                    {tint.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* LOWER CONTENT */}
        <div className="mt-14 grid gap-7 lg:grid-cols-3">

          {/* Texture Samples */}
          <section className="rounded-xl border border-[#242d35] bg-[#0d0f10] p-5">
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-[#d4af37]">
              TEXTURE SAMPLES
            </h3>

            <div className="mt-4 grid grid-cols-4 gap-2">

              <div className="text-center">
                <div className="h-[74px] rounded-md bg-[#f5f5f5]" />
                <p className="mt-2 text-[8px] text-[#aab3bd]">
                  White Marble
                </p>
              </div>

              <div className="text-center">
                <div
                  className="h-[74px] rounded-md border border-[#30343a]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, transparent 0 18px, #3b321e 19px, transparent 20px)",
                  }}
                />
                <p className="mt-2 text-[8px] text-[#aab3bd]">
                  Black Marble
                </p>
              </div>

              <div className="text-center">
                <div className="h-[74px] rounded-md bg-gradient-to-br from-[#fff0a5] via-[#d4af37] to-[#8f6c15]" />
                <p className="mt-2 text-[8px] text-[#aab3bd]">
                  Gold Metal
                </p>
              </div>

              <div className="text-center">
                <div
                  className="h-[74px] rounded-md border border-[#30343a]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#b38c27 1px, transparent 1px)",
                    backgroundSize: "9px 9px",
                  }}
                />
                <p className="mt-2 text-[8px] text-[#aab3bd]">
                  Luxury Pattern
                </p>
              </div>

            </div>
          </section>

          {/* Logo Usage */}
          <section className="rounded-xl border border-[#242d35] bg-[#0d0f10] p-5">
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-[#d4af37]">
              LOGO USAGE EXAMPLES
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3">

              <div className="rounded-md border border-[#2b333b] bg-[#171819] p-2">
                <div className="flex h-[82px] items-center justify-center">
                  <img
                    src="/images/logo.jpg"
                    alt="Logo dark background"
                    className="max-h-[65px] max-w-full object-contain mix-blend-screen"
                  />
                </div>

                <p className="mt-2 text-center text-[8px] text-[#aab3bd]">
                  ON DARK BACKDROP
                </p>
              </div>

              <div className="rounded-md border border-[#2b333b] bg-white p-2">
                <div className="flex h-[82px] items-center justify-center">
                  <img
                    src="/images/logo.jpg"
                    alt="Logo light background"
                    className="max-h-[65px] max-w-full object-contain"
                  />
                </div>

                <p className="mt-2 text-center text-[8px] text-[#666]">
                  ON LIGHT BACKDROP
                </p>
              </div>

            </div>
          </section>

          {/* Application Rules */}
          <section className="rounded-xl border border-[#242d35] bg-[#0d0f10] p-5">
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-[#d4af37]">
              APPLICATION RULES
            </h3>

            <div className="mt-5 space-y-3 text-[10px]">

              <div className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#5fba28]" />

                <p className="text-[#b9c2cb]">
                  <span className="font-bold text-[#5fba28]">
                    Primary Green
                  </span>{" "}
                  : Buttons & Primary CTAs
                </p>
              </div>

              <div className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#3D8A1A]" />

                <p className="text-[#b9c2cb]">
                  <span className="font-bold text-[#3D8A1A]">
                    Dark Green
                  </span>{" "}
                  : Hover & Focus States
                </p>
              </div>

              <div className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#d4af37]" />

                <p className="text-[#b9c2cb]">
                  <span className="font-bold text-[#d4af37]">
                    Gold Accent
                  </span>{" "}
                  : Highlights & Premium borders
                </p>
              </div>

              <div className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#f8f8f8]" />

                <p className="text-[#b9c2cb]">
                  <span className="font-bold text-white">
                    Marble White
                  </span>{" "}
                  : Canvas Backgrounds
                </p>
              </div>

              <div className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#111111]" />

                <p className="text-[#b9c2cb]">
                  <span className="font-bold text-white">
                    Luxury Black
                  </span>{" "}
                  : Primary Headers/Footers
                </p>
              </div>

            </div>
          </section>
        </div>

        {/* Bottom Brand Footer */}
        <div className="mt-14 border-t border-[#242d35] pt-5">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

            <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#d4af37]">
              AKS SOLUTIONS BAHRAIN
            </span>

            <span className="text-[14px] font-bold uppercase tracking-[4px] text-[#5fba28]">
              RESTORE • REJUVENATE • REVIVE
            </span>

            <span className="text-[9px] uppercase tracking-wide text-[#77818d]">
              EST. 2021
            </span>

          </div>
        </div>

      </div>
    </div>
  );
}