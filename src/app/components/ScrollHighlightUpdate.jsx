"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const points = [
  {
    title: "Over AED 2 Billion in Loans Disbursed",
    description: "At Equifirst, we believe securing a mortgage should be a strategic step towards building long-term financial security.",
  },
  {
    title: "93% Success Rate",
    description: "At Equifirst, we believe securing a mortgage should be a strategic step towards building long-term financial security.",
  },
  {
    title: "Over 100 Banking and Real Estate Partners",
    description: "At Equifirst, we believe securing a mortgage should be a strategic step towards building long-term financial security.",
  },
    {
    title: "30+ Years combined experience",
    description: "At Equifirst, we believe securing a mortgage should be a strategic step towards building long-term financial security.",
  },
    {
    title: "20% Client referrals",
    description: "At Equifirst, we believe securing a mortgage should be a strategic step towards building long-term financial security.",
  },
    {
    title: "Two-minute online application",
    description: "At Equifirst, we believe securing a mortgage should be a strategic step towards building long-term financial security.",
  },
      {
    title: "5/5 Google Review Score",
    description: "At Equifirst, we believe securing a mortgage should be a strategic step towards building long-term financial security.",
  },
  
];

export default function ScrollHighlightUpdate() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      sectionRefs.current.forEach((ref, index) => {
        const rect = ref?.getBoundingClientRect();
        if (rect && rect.top <= offset && rect.bottom >= offset) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="ef-section-style">

  <div className="hidden md:block bg-ef-dark-blue-2 rounded-4xl px-25 py-15">
    {points.map((point, index) => (
      <div
        key={index}
        ref={(el) => (sectionRefs.current[index] = el)}
        className={clsx(
          "transition-all duration-500 ease-in-out flex items-start gap-4 mb-8",
          index === activeIndex
            ? "text-ef-blue"
            : "border-gray-300 text-ef-dark-blue-1"
        )}
      >
        {/* Circle Number */}
        <div
          className={clsx(
            "w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold transition-all duration-500 border-1 shrink-0",
            index === activeIndex
              ? "bg-ef-blue text-white scale-110"
              : " border-ef-dark-blue-1 text-ef-dark-blue-1 scale-100"
          )}
        >
          {index + 1}
        </div>

        {/* Title & Description */}
        <div className="transition-opacity duration-500t-1 mb-10">
          <h3 className="text-[32px] mb-1">{point.title}</h3>
          <p className="leading-relaxed">{point.description}</p>
        </div>
      </div>
    ))}
  </div>

    <div className="block md:hidden px-4 py-6 space-y-8">
      {points.map((point, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold text-ef-blue mb-2">
            {point.title}
          </h3>
          {point.description.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm text-gray-700 mb-3 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      ))}
    </div>

</div>

  );
}
