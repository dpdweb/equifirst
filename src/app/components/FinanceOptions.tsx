'use client';
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const FinanceOptionCards = [
  {
    title: 'Off-Plan Finance',
    description: 'Finance properties under construction and secure your investment early.',
    image: '/assets/images/off-plan-finance.jpg',
    link: '/',
  },
  {
    title: 'Secondary Market Finance',
    description: 'Finance completed and ready-to-move-in properties across Dubai.',
    image: '/assets/images/secondary-market.jpg',
    link: '/',
  },
  {
    title: 'Equity Release',
    description: 'Unlock your home’s equity without selling.',
    image: '/assets/images/equity-release.jpg',
    link: '/',
  },
  {
    title: 'Handover Finance',
    description: 'Bridge your final payment during property handover.',
    image: '/assets/images/handover-finance.jpg',
    link: '/',
  },
  {
    title: 'Buyout/Refinance',
    description: 'Transfer your mortgage to better terms.',
    image: '/assets/images/buyout-refinance.jpg',
    link: '/',
  },
  {
    title: 'Non-Resident Mortgage',
    description: 'Helping non-residents invest confidently in Dubai.',
    image: '/assets/images/non-resident.jpg',
    link: '/',
  },

];


export default function FinanceOptions() {
  return (
    <div className="ef-section-style">

      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 py-6">

        {FinanceOptionCards.map((card, index) => (
  <div key={index} className="blue-box md:h-[375px] flex flex-col justify-between relative">
    <div>
      <h3 className="text-ef-heading1-size text-ef-dark-blue">{card.title}</h3>
      <p className="mt-2">{card.description}</p>
    </div>

    <div className="flex items-end justify-between gap-6">
      <Image
        src={card.image}
        alt={card.title}
        width={255}
        height={140}
        className="mt-4 rounded-lg"
      />
      <Link href={card.link} className="ef-arrow-btn-1">
        <ArrowRightIcon className="ArrowRightIcon" />
      </Link>
    </div>

    <div className="box-bg-count absolute bottom-4 right-4">
      {String(index + 1).padStart(2, '0')}
    </div>
  </div>
))}




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
{FinanceOptionCards.map((slide, index) => (
  <SwiperSlide key={index}>
    <div className="p-6 rounded-lg max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-[40px] h-[40px] flex-none rounded-full bg-ef-dark-blue text-white flex items-center justify-center text-[18px] font-bold leading-none">
          {String(index + 1).padStart(1, '0')}
        </div>
        <h2 className="text-2xl font-bold text-ef-dark-blue leading-snug">{slide.title}</h2>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <Image
          src={slide.image}
          alt={slide.title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
      <p className="mt-2 p-2 text-black">{slide.description}</p>
    </div>
  </SwiperSlide>
))}





   
      </Swiper>

    
    </div>



    </div>
  );
}
