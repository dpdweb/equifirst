'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const points = [
  {
    title: 'Over AED 2 Billion in Loans Disbursed',
    image: '/assets/images/scroll-img1.png',
  },
  {
    title: '93% Success Rate',
    image: '/assets/images/scroll-img2.png',
  },
  {
    title: 'Over 100 Banking and Real Estate Partners',
    image: '/assets/images/scroll-img3.png',
  },
  {
    title: '30+ Years combined experience',
    image: '/assets/images/scroll-img1.png',
  },
  {
    title: '20% Client referrals',
    image: '/assets/images/scroll-img2.png',
  },
  {
    title: 'Two-minute online application',
    image: '/assets/images/scroll-img1.png',
  },
  {
    title: '5/5 Google Review Score',
    image: '/assets/images/scroll-img2.png',
  },

];

export default function ScrollHighlight() {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ef-section-style">

        <h2 className="text-ef-blue font-extrabold text-5xl mb-10">Why choose Equifirst?</h2>
      
        <div className="flex flex-col md:flex-row items-start gap-10">

    {/* Points list - Left Column */}
<div className="relative flex flex-col space-y-16 w-full md:w-[80%]">
<div className="absolute left-7.5 top-0 w-1 h-full bg-ef-blue z-0"></div>
  {points.map((point, index) => (
    <div
      key={index}
      ref={(el) => (sectionRefs.current[index] = el)}
      className={clsx(
        'transition-all duration-500 ease-in-out flex items-start gap-4',
        index === activeIndex
          ? ' text-ef-blue font-bold'
          : 'border-gray-300 text-black'
      )}
    >
      {/* Circle Number */}
      <div
        className={clsx(
          'w-15 h-15 flex items-center justify-center rounded-full text-xl font-bold transition-all duration-500 border-1',
          index === activeIndex
            ? 'bg-ef-blue text-white scale-110'
            : 'bg-white border-ef-blue text-ef-blue scale-100'
        )}
      >
        {index + 1}
      </div>

      {/* Title Text */}
      <div className="text-3xl pt-3 transition-opacity duration-500">
        {point.title}
      </div>
    </div>
  ))}
</div>


    {/* Image - Right Column */}
    <div className="sticky top-20  ml-auto">
      <Image
            src={points[activeIndex].image}
            alt={`Slide ${activeIndex + 1}`}
            width={600}
            height={300}
            className="rounded-xl shadow-xl"
          />
      
    </div>
  </div>

    </div>
  );
}

