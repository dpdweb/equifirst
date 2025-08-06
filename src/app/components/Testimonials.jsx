'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { fetchTestimonials } from '../lib/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials().then(setTestimonials).catch(console.error);
  }, []);

  return (
    <section className="bg-ef-dark-blue py-8 md:py-16 text-center">
      <h3 className="md:text-[44px] font-medium text-ef-yellow mb-2">
        Rated 5/5 on Google! <span className="inline-block">
          <Image
            src="/assets/images/google-icon.png"
            alt="Google Icon"
            width={32}
            height={32}
            className="mt-6 mx-auto sm:mx-0"
          />
        </span>
      </h3>
      <h2 className="md:text-[44px] font-medium text-white mb-12">Built on experience. Backed by trust.</h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 rounded-lg p-6 w-full shadow-md relative overflow-hidden"
          >
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
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: t.rating }, (_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            {/* <span className="text-sm text-left text-gray-500">Review</span> */}
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
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="block sm:hidden">
        <Swiper
          spaceBetween={8}
          slidesPerView={1.1}
          centeredSlides={false}
          grabCursor={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-6 mx-2 shadow-md flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black">{t.name}</h3>
                    <p className="text-gray-500">{t.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">{t.review}</p>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#D5B46A] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <button className="mt-12 px-6 py-2 btn btn-outlined-white">
        View more
      </button> */}
    </section>
  );
};

export default Testimonials;
