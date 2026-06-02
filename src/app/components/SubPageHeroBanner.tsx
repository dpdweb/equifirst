import Image from 'next/image';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  image: string; // public path like "/images/your-image.png"
}

export default function SubPageHeroBanner({ title, subtitle, image }: HeroBannerProps) {
  return (
<section className="relative w-full max-w-[1440px] h-[500px] md:h-[300px] flex items-center overflow-hidden md:rounded-4xl mx-0 md:mx-[1px] xl:mx-auto">
  <Image
    src={image}
    alt={title || "Hero Section"}
    fill
    priority
    quality={75}
    sizes="100vw"
    className="object-cover"
  />

  <div className="absolute inset-0" />

  <div className="relative z-10 px-6 py-12 md:py-16 md:px-16 text-white max-w-4xl">
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
