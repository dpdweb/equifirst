'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination  } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { fetchTestimonials } from '../lib/api.tsx';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [enableAutoplay, setEnableAutoplay] = useState(false);

  useEffect(() => {
    fetchTestimonials().then(setTestimonials).catch(console.error);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setEnableAutoplay(true);
      } else {
        setEnableAutoplay(false);
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-ef-dark-blue py-5 md:pt-8 px-4 sm:px-0 lg:px-0 text-center">
      <h3 className="text-[26px] md:text-[44px] font-medium text-ef-yellow mb-2">
        Rated 5/5 on Google! <span className="inline-block">
          <Image
            src="/assets/images/google-icon.webp"
            alt="Google Icon"
            width={32}
            height={32}
            className="mt-6 mx-auto sm:mx-0"
          />
        </span>
      </h3>
      <h2 className="text-[26px] md:text-[44px] font-medium text-white mb-12">
        Built on experience. Backed by trust.
      </h2>

      {/* Swiper */}
<div className="ef-section-style-testimonials relative px-4">
  <Swiper
    className="mb-5"
    spaceBetween={16}
    grabCursor={true}
    modules={[Navigation, Autoplay, Pagination]} // ✅ added Pagination
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }}
    autoplay={
      enableAutoplay
        ? {
            delay: 3000,
            disableOnInteraction: false,
          }
        : false
    }
    pagination={{
      clickable: true,
      el: ".swiper-pagination", // ✅ custom element
    }}
    breakpoints={{
      0: {
        slidesPerView: 1.1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 3,
        centeredSlides: false,
      },
    }}
  >
    {testimonials.map((t, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white text-gray-800 rounded-lg p-6 w-full shadow-md relative overflow-hidden md:h-[280px]">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={t.image}
              alt={t.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div className="text-left">
              <h4 className="font-semibold text-lg">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.designation}</p>
            </div>
          </div>

          <p className="text-sm text-left leading-relaxed mb-4">{t.description}</p>

          {/* Stars fixed at bottom */}
          <div className="absolute bottom-4 left-6 flex items-center gap-1">
            {Array.from({ length: t.rating }, (_, i) => (
              <span key={i} className="text-yellow-500 text-xl">★</span>
            ))}
          </div>

          <div className="absolute -bottom-2 right-0 opacity-100 text-6xl font-bold select-none pointer-events-none">
            <Image
              src="/assets/images/testi-logo.png"
              alt="Watermark"
              width={250}
              height={48}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Pagination container */}
  <div className="swiper-pagination mt-6 flex justify-center"></div>

  {/* Arrows (if needed) */}
  {/* <div className="equi-swiper-testimonial">
    <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-black"></div>
    <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-black"></div>
  </div> */}
</div>

    </section>
  );
};

export default Testimonials;
