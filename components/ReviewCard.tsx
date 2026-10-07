"use client";

import { CircleCheck } from "lucide-react";

interface ReviewCardProps {
  review: {
    stars: number;
    text: string;
    avatar: {
      initial: string;
      bgColor: string;
    };
    name: string;
    occupation: string;
    location: string;
  };
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article
      className="relative flex flex-col h-full min-h-[290px] bg-white rounded-[12px] border border-[#566273] p-[28px_30px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
    >
      {/* Quote Mark */}
      <span
        className="absolute top-[20px] right-[24px] text-[52px] font-extrabold text-[#F0F2F4] leading-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Star Rating */}
      <div
        className="relative flex items-center gap-[1.5px] text-[#DDAF24] text-[20px] font-medium leading-[20px] tracking-[1.5px] mb-[20px]"
        aria-label={`${review.stars} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Review Text */}
      <p className="relative flex-1 text-[15px] font-normal leading-[1.6] text-[#566273] italic">
        {review.text}
      </p>

      {/* Divider */}
      <hr className="my-[24px_0_32px] h-[1px] bg-[#E5E7EB] border-none" aria-hidden="true" />

      {/* Customer Info */}
      <div className="flex items-center gap-[14px]">
        {/* Avatar */}
        <div
          className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full font-bold text-[16px] leading-[20px] text-white"
          style={{ backgroundColor: review.avatar.bgColor }}
          aria-hidden="true"
        >
          {review.avatar.initial}
        </div>

        {/* Name & Meta */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-[15px] font-bold leading-[20px] text-[#18283B] truncate">
              {review.name}
            </h4>
            <CircleCheck
              size={12}
              className="text-[#55B52B] shrink-0"
              aria-label="Verified"
            />
          </div>
          <p className="text-[13px] font-normal leading-[18px] text-[#8B9AB0]">
            {review.occupation} &bull; {review.location}
          </p>
        </div>
      </div>
    </article>
  );
}