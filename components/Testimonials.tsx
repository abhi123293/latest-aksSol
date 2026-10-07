"use client";

import { Star, CheckCircle } from "lucide-react";

const testimonials = [
  {
    initial: "A",
    name: "Ahmed Al Khalifa",
    role: "Homeowner",
    location: "Riffa",
    text: "Excellent service! My marble floor looks brand new. Highly professional team and very punctual. Highly recommended for marble polishing in Bahrain.",
    color: "#5fba28",
  },
  {
    initial: "F",
    name: "Fatima Rahman",
    role: "Office Manager",
    location: "Seef District",
    text: "AKS Solutions did an amazing job on our commercial office floors. Very satisfied with their work, attitude, and dust-free wet grinding system.",
    color: "#dcb735",
  },
  {
    initial: "M",
    name: "Mohammed Yousif",
    role: "Business Owner",
    location: "Juffair",
    text: "Best marble polishing service in Bahrain. Great results at a reasonable price. They restored our heavily scratched lobby to a perfect mirror sheen.",
    color: "#3d941c",
  },
];

export default function Testimonials() {
  return (
   <section id="testimonials" className="bg-[#f8f8f8] px-5 py-20 font-[var(--font-montserrat)] sm:px-8 lg:px-12 xl:px-20">
      {/* ================= HEADING ================= */}
      <div className="mx-auto max-w-[1200px] text-center">

        {/* Small Heading */}
       <p className="text-[14px] font-bold uppercase tracking-wide text-[#5fba28] sm:text-[14px]">
          REVIEWS
        </p>

        {/* Main Heading */}
       <h2 className="mt-2 text-3xl font-black uppercase leading-tight tracking-tight text-[#111111] sm:text-3xl lg:text-[45px]">
          WHAT OUR CLIENTS SAY
        </h2>

        {/* Gold Underline */}
      <div className="mx-auto mt-4 h-[5px] w-[100px] rounded-full bg-[#dcb735]" />
      </div>

      {/* ================= TESTIMONIAL CARDS ================= */}
     <div className="mx-auto mt-20 grid max-w-[1320px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="group rounded-xl border border-[#1f2937] bg-white px-7 py-5 h-[285px] lg:h-[300px] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
            {/* ================= STARS ================= */}
            <div className="flex gap-2 translate-y-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  strokeWidth={1.5}
                  fill="#dcb735"
                  className="text-[#dcb735]"
                />
              ))}
            </div>

            {/* ================= REVIEW ================= */}
          <p className="mt-7 text-[15px] italic leading-6 text-[#40516a] lg:leading-7">
              "{testimonial.text}"
            </p>

            {/* ================= DIVIDER ================= */}
            <div className="my-7 h-px w-full bg-[#e5e7eb]" />

            {/* ================= CUSTOMER ================= */}
            <div className="flex items-center gap-5 -translate-y-2 lg:translate-y-0">

              {/* Avatar */}
            <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full text-[20px] font-bold text-white shadow-sm"
                style={{
                  backgroundColor: testimonial.color,
                }}>
                {testimonial.initial}
              </div>

              {/* Customer Details */}
              <div>

                {/* Name + Verified */}
                <div className="flex items-center gap-2">
                  <h3 className="text-[16px] font-black text-[#111111]">
                  
                    {testimonial.name}
                  </h3>

                  <CheckCircle
                    size={15}
                    fill="#5fba28"
                    className="text-white"/>
                </div>

                {/* Role + Location */}
               <p className="mt-1 text-[14px] text-[#91a4ba]">
                  {testimonial.role} • {testimonial.location}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}