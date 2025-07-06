'use client';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { fetchHeroSlides } from '../lib/api';
import { Navigation, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";

import 'swiper/css';

interface Slide {
  id: number;
  image: string;
  title?: string;
  created_at?: string;
}


export default function TestSlider() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [animateLine, setAnimateLine] = useState(false);



async function getSlides() {
  try {
    const response = await fetchHeroSlides();
    console.log("Fetched slides response:", response);

    if (Array.isArray(response.data)) {
      setSlides(response.data);
    } else if (Array.isArray(response.data)) {
      setSlides(response.data);
    } else {
      setError('Invalid slide data format');
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError('Unknown error occurred');
    }
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    const loadSlidesAndAnimate = async () => {
      await getSlides();
      // Ensure DOM is painted first, then animate
      requestAnimationFrame(() => {
        setAnimateLine(true);
      });
    };

    loadSlidesAndAnimate();
  }, []);


  if (loading) return <div className="text-center p-10">Loading slides...</div>;
  if (error) return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <div className="relative  mx-auto max-w-8xl h-[600px] md:h-[550px] rounded-tl-none rounded-tr-none sm:rounded-[30px] overflow-hidden">
      {/* <Swiper
        spaceBetween={0}
  slidesPerView={1}
  loop={true}
  effect="slide"
  modules={[Navigation]}
  navigation={true}
  autoplay={false}
  className="h-full HeroSwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`,
              }}
            ></div>
          </SwiperSlide>
        ))}
   
      </Swiper> */}

<div dir="ltr" className="relative max-h-[calc(min(85vh,760px))] min-h-[720px] max-w-[1440px] overflow-hidden max-lg:h-[756px] md:max-h-[calc(min(95dvh,960px))] scale-x-[1]">
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

      
      
      <div className="absolute hidden md:block inset-0 text-white z-10">
        <div className="grid grid-cols-[70px_1fr] gap-2 p-6 md:p-[90px]">
          {/* Timeline Bullets & Line */}
          <div className="relative w-[40px] h-64 flex flex-col items-center justify-between">
            <div className="w-[40px] h-[40px] rounded-full bg-white z-10 flex items-center justify-center text-black">
              1
            </div>
            <div ref={lineRef}
    className="absolute w-1 bg-white transition-all duration-1000 ease-in-out"
    style={{
      top: '20px', // center of top circle
      height: animateLine ? 'calc(100% - 60px)' : '0px', // full center-to-center height
    }}
  ></div>
            <div className="w-[40px] h-[40px] rounded-full border border-white z-10 flex items-center justify-center text-white">
              2
            </div>
          </div>

          {/* Slide Content */}
          <div>
            <div className="w-full">
              <span className="text-white">Empowering Your Property Journey</span>
              <br />
              <h1 className="text-white text-2xl md:text-6xl font-semibold">
                Unlocking Doors <br />
                To Your Dream Home
              </h1>
            </div>
            <div className="w-full mt-32 md:mt-20 flex flex-col sm:flex-row gap-4">
              <Link href="/" className="btn btn-slider md:w-[200px]">
                Apply Online in Two Minutes
              </Link>
              <Link href="/" className="btn btn-slider md:w-[200px]">
                Speak to a Mortgage Expert
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute inset-0 z-10 flex items-center justify-center text-white text-center px-4 md:hidden h-full">
        <div className="mt-20">
          <p className="text-sm tracking-wide uppercase">
            Your Trusted Partner in Home Financing
          </p>
          <h1 className="text-3xl font-semibold leading-tight mt-2">
            Unlocking Doors<br />
            To Your Dream Home
          </h1>
        </div>
      </div>


    </div>
    
  );
}
