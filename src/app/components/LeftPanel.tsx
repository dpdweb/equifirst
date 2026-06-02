'use client';
import clsx from 'clsx';
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

const points = [
  { title: "Tell us about yourself." },
  { title: "We'll match you with the right mortgage options." },
  { title: "Our friendly experts will be in touch soon." },
];

export default function LeftPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // ✅ typed refs

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
    <div >
      <h1 className="text-ef-mobile-heading1-size md:text-ef-heading1-size text-ef-dark-blue mb-10">
        Let&apos;s connect - this won&apos;t take long!
      </h1>

      <div className="flex flex-col items-start space-y-6 mb-8">
        {points.map((point, index) => (
          <div
            key={index}
            ref={(el) => { sectionRefs.current[index] = el }}
            className={clsx(
              "transition-all duration-500 ease-in-out flex items-start gap-4 mb-8",
              index === activeIndex ? "text-ef-blue" : "border-gray-300 text-ef-dark-blue-1"
            )}
          >
            {/* Circle Number */}
            <div
              className={clsx(
                "w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold transition-all duration-500 border-1 shrink-0",
                index === activeIndex
                  ? "bg-ef-blue text-white scale-110"
                  : "border-ef-dark-blue-1 text-ef-dark-blue-1 scale-100"
              )}
            >
              {index + 1}
            </div>

            {/* Title */}
            <div className="transition-opacity duration-500 mb-10">
              <h3 className="text-[16px] text-black font-normal mb-1">
                {point.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <Image
        src="/assets/images/service-1.jpg"
        alt="UAE Property"
        width={500}
        height={300}
        className="w-full h-52 object-cover rounded-2xl"
      />
    </div>
  );
}
