'use client';
import Image from 'next/image';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  image: string; // public path like "/images/your-image.png"
}

export default function SubPageHeroBanner({ title, subtitle, image }: HeroBannerProps) {
  return (
    <section className="relative md:rounded-4xl overflow-hidden max-w-8xl mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)]" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 px-6 pt-50 pb-50 md:pt-30 md:pb-40 md:px-16 text-white max-w-4xl">
        {title && (
          <p className="text-[16px] text-center md:text-left uppercase mb-2 tracking-wider">{title}</p>
        )}
        <h1 className="text-[36px] text-center md:text-left md:text-[64px] font-medium leading-tight whitespace-pre-line">
          {subtitle}
        </h1>
      </div>
    </section>
  );
}
