'use client';

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct effect here
import Link from 'next/link';

import 'swiper/css';


export default function HeroSlider() {

  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      line.style.height = "0px";
      setTimeout(() => {
        line.style.height = "calc(100% - 4.5rem)"; // 4rem = 2rem top + 2rem bottom circle height
      }, 100);
    }
  }, []);

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
        modules={[Autoplay]} // Correct module here
        className="h-full"
      >
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/slide1.jpg')" }}
          >

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/slide2.png')" }}
          >

          </div>
        </SwiperSlide>
      </Swiper>


      <div className="absolute inset-0  text-white z-10">

<div className="grid grid-cols-[40px_1fr] gap-2 p-6 md:p-[90px]">
  <div className="relative w-[40px] h-64 flex flex-col items-center justify-between">
    <div className="w-[40px] h-[40px] rounded-full bg-white z-10 flex items-center justify-center text-black">
      1
    </div>

    <div ref={lineRef} className="absolute top-8 w-1 bg-white transition-all duration-1000 ease-in-out" style={{ height: "0px" }} />

    <div className="w-[40px] h-[40px] rounded-full border border-white border-2 z-10 flex items-center justify-center text-white">
      2
    </div>
  </div>

  <div className="col-span-1 md:col-span-17">
    <div className="w-full">
      <span className="text-white">Empowering Your Property Journey</span>
      <br />
      <span className="text-white text-2xl md:text-6xl font-semibold">
        Unlocking Doors <br />
        To Your Dream Home 1
      </span>
    </div>
    <div className="w-full mt-32 md:mt-20 flex flex-col sm:flex-row gap-4">
      <Link href="/" className="btn">Apply Online in Two Minutes</Link>
      <Link href="/" className="btn">Speak to a Mortgage Expert</Link>
    </div>
  </div>
</div>



      </div>
    </div>
  );
}
