'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/effect-fade'; // if using fade effect
import 'swiper/css/navigation';  // if using navigation


import { slides } from '../data/slides';
import Image from 'next/image';

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] rounded-[30px] overflow-hidden">

      {/* Swiper for background images */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 text-white max-w-4xl">

        
        {/* Step 1 */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-7 h-7 bg-white text-black font-bold rounded-full flex items-center justify-center">1</div>
          <p className="uppercase text-sm tracking-wide">
            Your Trusted Partner In Home Financing
          </p>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Unlocking Doors<br />
          <span className="text-blue-200">To Your Dream Home 1</span>
        </h1>

        {/* Line Animation */}
        <div className="relative mb-6 h-8">
          <svg width="150" height="40" className="absolute top-0 left-0">
            <line
              x1="10"
              y1="10"
              x2="130"
              y2="10"
              stroke="#fff"
              strokeWidth="2"
              strokeDasharray="120"
              strokeDashoffset="0"
              style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
            />
          </svg>
          <div className="absolute left-[120px] top-[-5px] w-7 h-7 bg-white text-black font-bold rounded-full flex items-center justify-center">2</div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button className="bg-white text-black px-5 py-3 rounded-md shadow hover:bg-gray-100 transition">
            Apply Online in Two Minutes
          </button>
          <button className="bg-white text-black px-5 py-3 rounded-md shadow hover:bg-gray-100 transition">
            Speak to a Mortgage Expert
          </button>
        </div>


      </div>

    </section>
  );
}
