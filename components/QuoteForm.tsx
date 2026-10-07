"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function QuoteForm() {
  const [service, setService] = useState("Marble Polishing");
    const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const services = [
    "Marble Polishing",
    "Granite Honing",
    "Stone Sealing",
    "Crystallization",
    "Floor Grinding",
    "Restoration",
  ];


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const newErrors = {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    };

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?973[\s-]?[0-9]{8}$/.test(phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!service) {
      newErrors.service = "Please select a service.";
    }

    if (!message) {
      newErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    alert("Quote request submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#f8f9fa] border border-[#46515F] rounded-[17px] p-[42px] w-full max-w-[665px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]" noValidate>
      {/* Form Header */}
      <div className="mb-[30px]">
        <h3 className="text-[#14243A] font-bold uppercase text-[22px] leading-[1.2]">
          SEND QUOTE REQUEST
        </h3>
        <p className="mt-[10px] text-[#5B718A] font-normal text-[14px] leading-[1.5]">
          Submit the details below to receive a call back within 15 minutes.
        </p>
      </div>

      {/* First Row - Name & Phone */}
      <div className="flex gap-[22px] mb-[22px]">
        <div className="flex-1">
          <label className="block text-[#5B718A] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px] mb-[8px]">
            YOUR NAME
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="text-[#14243A] w-full h-[50px] bg-white border border-[#E1E5EA] rounded-[9px] px-[18px] text-[15px] leading-[1.2] placeholder-[#B0B8C1] focus:outline-none focus:border-[#55B52A] focus:ring-1 focus:ring-[#55B52A] transition-colors"
          />
          {errors.name && (
  <p className="mt-1 text-xs text-red-500">
    {errors.name}
  </p>
)}
        </div>
        <div className="flex-1">
          <label className="block text-[#5B718A] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px] mb-[8px]">
            PHONE NUMBER
          </label>
          <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  required
  className="w-full h-[50px] bg-white border border-[#E1E5EA] rounded-[9px] px-[18px] text-[15px] text-[#14243A] leading-[1.2] placeholder-[#B0B8C1] focus:outline-none focus:border-[#55B52A] focus:ring-1 focus:ring-[#55B52A] transition-colors"
/>
{errors.phone && (
  <p className="mt-1 text-xs text-red-500">
    {errors.phone}
  </p>
)}
        </div>
      </div>

      {/* Email */}
      <div className="mb-[22px]">
        <label className="block text-[#5B718A] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px] mb-[8px]">
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full h-[50px] bg-white border border-[#E1E5EA] rounded-[9px] px-[18px] text-[15px] text-[#14243A] leading-[1.2] placeholder-[#B0B8C1] focus:outline-none focus:border-[#55B52A] focus:ring-1 focus:ring-[#55B52A] transition-colors"
        />
        {errors.email && (
  <p className="mt-1 text-xs text-red-500">
    {errors.email}
  </p>
)}
      </div>

      {/* Service Required */}
      <div className="mb-[22px]">
        <label className="block text-[#5B718A] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px] mb-[8px]">
          SERVICE REQUIRED
        </label>
        <div className="relative">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="w-full h-[50px] bg-white border border-[#E1E5EA] rounded-[9px] px-[18px] pr-[48px] text-[15px] text-[#14243A] leading-[1.2] appearance-none cursor-pointer focus:outline-none focus:border-[#55B52A] focus:ring-1 focus:ring-[#55B52A] transition-colors"
          >
            {errors.service && (
  <p className="mt-1 text-xs text-red-500">
    {errors.service}
  </p>
)}
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="absolute right-[18px] top-1/2 -translate-y-1/2 text-[#5B718A] pointer-events-none">
            <ChevronDown size={18} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Message Details */}
      <div className="mb-[30px]">
        <label className="block text-[#5B718A] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px] mb-[8px]">
          MESSAGE DETAILS
        </label>
        <textarea
          name="message"
          placeholder="Tell us about your stone type, approximate floor size, and specific problems..."
          required
          className="w-full h-[112px] bg-white border border-[#E1E5EA] rounded-[9px] p-[17px] text-[15px] text-[#14243A] leading-[1.5] placeholder-[#B0B8C1] focus:outline-none focus:border-[#55B52A] focus:ring-1 focus:ring-[#55B52A] transition-colors resize-y min-h-[112px]"
        />
        {errors.message && (
  <p className="mt-1 text-xs text-red-500">
    {errors.message}
  </p>
)}
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full h-[50px] bg-[#55B52A] text-white font-bold uppercase text-[13px] leading-[1.2] rounded-[8px] shadow-[0_4px_15px_rgba(85,181,42,0.3)] transition-all duration-300 hover:bg-[#4A9E24] hover:shadow-[0_6px_20px_rgba(85,181,42,0.4)] hover:-translate-y-[1px]">
        SUBMIT REQUEST
      </button>
    </form>
  );
}