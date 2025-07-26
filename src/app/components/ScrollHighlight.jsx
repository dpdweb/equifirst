'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
  const [lineHeight, setLineHeight] = useState(0);
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

  useEffect(() => {

    const ref = sectionRefs.current[activeIndex];
    if (ref) {
      const containerTop = sectionRefs.current[0]?.getBoundingClientRect()?.top ?? 0;
      const currentTop = ref.getBoundingClientRect().top;
      const heightSoFar = (currentTop - containerTop + ref.offsetHeight / 2) - 70;
      console.log('containerTop', containerTop);
      console.log('currentTop', currentTop);
      setLineHeight(heightSoFar);
    }
  }, [activeIndex]);

  return (
    <div className="ef-section-style">

      <div className="hidden md:block">
        {/* <h2 className="text-ef-blue font-extrabold text-5xl mb-10">Why choose Equifirst?</h2> */}

<div className="flex flex-col md:flex-row items-start gap-10">
  {/* Left content (timeline) */}
  <div className="relative flex flex-col space-y-16 w-full md:w-[60%]">
    <div
      className="absolute left-[30px] top-0 w-1 bg-ef-blue z-0 transition-all duration-500 ease-in-out"
      style={{ height: `${lineHeight}px` }}
    ></div>

    {points.map((point, index) => (
      <div
        key={index}
        ref={(el) => (sectionRefs.current[index] = el)}
        className={clsx(
          'transition-all duration-500 ease-in-out h-[150px] flex items-start gap-4 relative z-10',
          index === activeIndex
            ? 'text-ef-blue font-bold'
            : 'border-gray-300 text-black'
        )}
      >
        {/* Circle Number */}
        <div
          className={clsx(
            'w-[60px] h-[60px] flex-none flex items-center justify-center rounded-full text-xl font-bold transition-all duration-500 border',
            index === activeIndex
              ? 'bg-ef-blue text-white scale-110'
              : 'bg-white border-ef-blue text-ef-blue scale-100 opacity-2-'
          )}
        >
          {index + 1}
        </div>

        {/* Title Text */}
        <div
          className={clsx(
            'text-5xl pt-3 transition-opacity duration-500 font-bold',
            index === activeIndex
              ? 'text-ef-blue'
              : 'border-gray-300 text-black opacity-10'
          )}
        >
          {point.title}
        </div>
      </div>
    ))}
  </div>

  {/* Right sticky video with 35% width */}
  <div className="sticky top-20 ml-auto w-full md:w-[35%]">
    <div
      dir="ltr"
      className="relative max-h-[calc(min(85vh,760px))] min-h-[720px] max-w-[1440px] overflow-hidden max-lg:h-[756px] md:max-h-[calc(min(95dvh,960px))] scale-x-[1]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/assets/test-vid-2.mp4"
        className="h-full w-full object-cover rtl:scale-x-[-1]"
      />
    </div>
  </div>
</div>


      </div>


          <div className="block md:hidden relative w-full max-w-4xl mx-auto">
            <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        allowTouchMove={typeof window !== 'undefined' && window.innerWidth < 768}
        className="equi-swiper"
      >


{points.map((point, index) => (
  <SwiperSlide key={index}>
    <div className="p-6 rounded-lg max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-[40px] h-[40px] flex-none rounded-full bg-ef-dark-blue text-white flex items-center justify-center text-[18px] font-bold leading-none">
          {index + 1}
        </div>
        <h2 className="text-2xl font-bold text-ef-dark-blue leading-snug">{point.title}</h2>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <Image
          src={point.image}
          alt={point.title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </SwiperSlide>
))}

      

         
            </Swiper>
      
          
          </div>


    </div>
  );
}
