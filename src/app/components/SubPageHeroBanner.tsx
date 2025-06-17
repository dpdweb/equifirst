'use client';
import Image from 'next/image';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  image: string; // public path like "/images/your-image.png"
}

export default function SubPageHeroBanner({ title, subtitle, image }: HeroBannerProps) {
  return (
    <section className="relative rounded-2xl overflow-hidden max-w-7xl mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover h-[400px]"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)]" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 px-6 pt-30 pb-40 md:px-16 text-white max-w-4xl">
        {title && (
          <p className="text-[16px] uppercase mb-2 tracking-wider">{title}</p>
        )}
        <h1 className="md:text-[64px] font-medium leading-tight whitespace-pre-line">
          {subtitle}
        </h1>
      </div>
    </section>
  );
}
