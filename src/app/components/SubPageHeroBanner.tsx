'use client';
import Image from 'next/image';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  image: string; // public path like "/images/your-image.png"
}

export default function SubPageHeroBanner({ title, subtitle, image }: HeroBannerProps) {
  return (
<section className="relative md:rounded-4xl overflow-hidden max-w-8xl mx-auto h-[500px] md:h-[300px]">
  {/* Background Image */}
  <Image
    src={image}
    alt={title}
    fill
    className="w-full h-full object-cover"
    priority
  />

  {/* Overlay */}
  <div className="absolute inset-0" />

  {/* Content */}
  <div className="relative z-10 px-6 pt-50 pb-50 md:pt-20 md:pb-40 md:px-16 text-white max-w-4xl">
    {title && (
      <p className="text-[16px] text-center md:text-left uppercase mb-0 tracking-wider">
        {title}
      </p>
    )}
    <h1 className="text-[36px] text-center md:text-left md:text-[45px] font-medium leading-10 md:leading-15 whitespace-pre-line">
      {subtitle}
    </h1>
  </div>
</section>

  );
}
