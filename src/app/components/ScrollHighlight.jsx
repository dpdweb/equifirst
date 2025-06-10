// pages/why-us.tsx

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const steps = [
  {
    title: 'Over AED 2 Billion in Loans Disbursed',
    description: 'Lorem ipsum dolor sit amet... etc.',
    image: '/assets/images/step1.png',
  },
  {
    title: '93% Success Rate',
    description: 'Lorem ipsum dolor sit amet... etc.',
    image: '/assets/images/step2.png',
  },
  {
    title: 'Over 100 Banking and Real Estate Partners',
    description: 'Lorem ipsum dolor sit amet... etc.',
    image: '/assets/images/step3.png',
  },
  // Add the rest of your steps here
];

export default function WhyUs() {
 const stepRefs = useRef<Array<Element | null>>([]);
  // const stepRefs = useRef<(HTMLDivElement | null)>([]);
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const scrollTop = window.scrollY;
      const middleOfScreen = scrollTop + window.innerHeight / 2;

      const newIndex = stepRefs.current.findIndex((ref) => {
        if (!ref) return false;
        const { top, bottom } = ref.getBoundingClientRect();
        const offsetTop = top + scrollTop;
        const offsetBottom = bottom + scrollTop;
        return middleOfScreen >= offsetTop && middleOfScreen <= offsetBottom;
      });

      if (newIndex !== -1 && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 py-20 px-5 md:px-0">
      {/* Left: Steps */}
      <div className="relative border-l-2 border-gray-300 pl-6">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
            className={clsx('relative mb-10', {
              'text-ef-blue font-semibold': activeIndex === index,
              'text-gray-600': activeIndex !== index,
            })}
          >
            <div
              className={clsx(
                'absolute -left-6 w-6 h-6 rounded-full border border-ef-blue flex items-center justify-center bg-white',
                {
                  'bg-ef-blue text-white': activeIndex === index,
                }
              )}
            >
              {index + 1}
            </div>
            <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
            <p className="text-sm md:text-base mt-1">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Right: Image */}
      <div className="sticky top-32">
        <Image
          src={steps[activeIndex].image}
          alt={steps[activeIndex].title}
          width={400}
          height={300}
          className="rounded-xl shadow-lg transition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );
}
