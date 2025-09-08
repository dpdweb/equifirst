'use client';

// import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

type HeroSliderProps = {
  onScrollClick: () => void;
};

export default function HeroSlider({ onScrollClick }: HeroSliderProps) {
  // const lineRef = useRef<HTMLDivElement>(null);
  // const [animateLine, setAnimateLine] = useState(false);

  // useEffect(() => {
  //   requestAnimationFrame(() => setAnimateLine(true));
  // }, []);

  return (
    <div className="relative w-full max-w-[1440px] h-[600px] md:h-[550px] sm:rounded-[30px] overflow-hidden mx-0 md:mx-[10px] xl:mx-auto">

      
      {/* Background Video */}
      <div className="relative max-h-[calc(min(85vh,760px))] min-h-[720px] max-w-[1440px] overflow-hidden max-lg:h-[756px] md:max-h-[calc(min(95dvh,960px))]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/video-thumbnail.jpg"
          src="/assets/slider-video.mp4"
          className="h-full w-full object-cover rtl:scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Desktop Content */}
      <div className="absolute hidden md:block inset-0 text-white z-10">
        <div className="grid grid-cols-[70px_1fr] gap-2 p-6 md:p-[90px]">
          {/* Timeline Placeholder */}
          <div className="relative w-[40px] h-64 flex flex-col items-center justify-between">
            {/* <div
              ref={lineRef}
              className="absolute w-1 bg-white transition-all duration-1000 ease-in-out"
              style={{
                top: '20px',
                height: animateLine ? 'calc(100% - 60px)' : '0px',
              }}
            /> */}
          </div>

          {/* Main Text */}
          <div>
            <div>
              <span className="text-white">Empowering Your Property Journey</span>
              <h1 className="text-white text-2xl md:text-6xl font-semibold mt-2">
                Unlocking Doors <br />
                To Your Dream Home
              </h1>
            </div>
            <div className="mt-20 flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us" className="btn btn-slider md:w-[200px]">
                Apply Online in Two Minutes
              </Link>
              <button
                onClick={onScrollClick}
                className="btn btn-slider md:w-[200px] text-left"
              >
                How We Help You
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-white text-center px-4 md:hidden">
        <div className="mt-20">
          <p className="text-sm tracking-wide uppercase">
            Your Trusted Partner in Home Financing
          </p>
          <h1 className="text-3xl font-semibold leading-tight mt-2">
            Unlocking Doors <br />
            To Your Dream Home
          </h1>
        </div>
      </div>
    </div>
  );
}
