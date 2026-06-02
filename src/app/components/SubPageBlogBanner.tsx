'use client';
import Image from 'next/image';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  image: string; // public path like "/images/your-image.png"
}

export default function SubPageBlogBanner({ title, subtitle, image }: HeroBannerProps) {
  return (
    <section className="relative md:rounded-4xl overflow-hidden max-w-8xl mx-auto h-[600px] md:h-[450px]">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      unoptimized
      src={image}
      alt={title}
      fill
      className="w-full h-full object-cover object-top"
      priority
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* Text Overlay */}
  <div className="relative z-10 px-6 pt-50 pb-50 md:pt-35 md:pb-40 md:px-16 text-white max-w-7xl">
    {title && (
      <p className="text-[16px] text-center md:text-left uppercase mb-2 tracking-wider">{title}</p>
    )}
    <h1 className="text-[26px] text-center md:text-left md:text-[50px] font-medium md:leading-15 whitespace-pre-line">
      {subtitle}
    </h1>
  </div>
</section>

  );
}
