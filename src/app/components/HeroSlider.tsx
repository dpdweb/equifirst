'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { fetchHeroSlides } from '../lib/api';

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

  // ✅ Fetch slide data
async function getSlides() {
  try {
    const response = await fetchHeroSlides();
    console.log("Fetched slides response:", response); // 👈 Check what comes back

    if (Array.isArray(response.data)) {
      setSlides(response.data);
    } else if (Array.isArray(response.data)) {
      setSlides(response.data); // 👈 Adjust based on actual response
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
    const line = lineRef.current;
    if (line) {
      line.style.height = '0px';
      setTimeout(() => {
        line.style.height = 'calc(100% - 4.5rem)';
      }, 100);
    }

    getSlides();
  }, []);

  if (loading) return <div className="text-center p-10">Loading slides...</div>;
  if (error) return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <div className="relative mx-auto max-w-8xl h-[400px] md:h-[550px] rounded-tl-none rounded-tr-none sm:rounded-[30px] overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="slide"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-full"
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
      </Swiper>

      <div className="absolute inset-0 text-white z-10">
        <div className="grid grid-cols-[70px_1fr] gap-2 p-6 md:p-[90px]">
          {/* Timeline Bullets & Line */}
          <div className="relative w-[40px] h-64 flex flex-col items-center justify-between">
            <div className="w-[40px] h-[40px] rounded-full bg-white z-10 flex items-center justify-center text-black">
              1
            </div>
            <div
              ref={lineRef}
              className="absolute top-8 w-1 bg-white transition-all duration-1000 ease-in-out"
              style={{ height: '0px' }}
            />
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
    </div>
  );
}
