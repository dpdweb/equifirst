import Image from "next/image";

const testimonials = [
  {
    name: "Layla",
    company: "Equifirst",
    review: `Working with Equifirst was an absolute pleasure. Their team provided personalized guidance and support, ensuring that I understood every step of the mortgage process. Thanks to their expertise and reliable service, I was able to secure the right mortgage for my unique needs.`,
    image: "/assets/images/testimonials.png", // place an image in /public/layla.jpg or replace with another
    rating: 5,
  },
  {
    name: "Layla",
    company: "Equifirst",
    review: `Working with Equifirst was an absolute pleasure. Their team provided personalized guidance and support, ensuring that I understood every step of the mortgage process. Thanks to their expertise and reliable service, I was able to secure the right mortgage for my unique needs.`,
    image: "/assets/images/testimonials.png", // place an image in /public/layla.jpg or replace with another
    rating: 5,
  },
  {
    name: "Layla",
    company: "Equifirst",
    review: `Working with Equifirst was an absolute pleasure. Their team provided personalized guidance and support, ensuring that I understood every step of the mortgage process. Thanks to their expertise and reliable service, I was able to secure the right mortgage for my unique needs.`,
    image: "/assets/images/testimonials.png", // place an image in /public/layla.jpg or replace with another
    rating: 5,
  },
  // You can duplicate this object or fetch from an API
];

const Testimonials = () => {
  return (
    <section className="bg-ef-dark-blue py-16 text-center">
      <h3 className="md:text-[44px] font-medium text-ef-yellow mb-2">
        Rated 5/5 on Google! <span className="inline-block">
          <Image
                    src="/assets/images/google-icon.png"
                    alt="Off-plan Finance"
                    width={32}
                    height={32}
                    className="mt-6 mx-auto sm:mx-0"
                  />
        </span>
      </h3>
      <h2 className="md:text-[44px] font-medium text-white mb-12">Built on experience. Backed by trust.</h2>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 rounded-lg p-6 w-full md:w-1/3 shadow-md relative overflow-hidden"
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
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            </div>

            <p className="text-sm text-left leading-relaxed mb-4">{t.review}</p>

            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: t.rating }, (_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <span className="text-sm text-left text-gray-500">Review</span>

            <div className="absolute -bottom-2 right-0 opacity-100 text-6xl font-bold select-none pointer-events-none">
              <Image
                src="/assets/images/testi-logo.png"
                alt={t.name}
                width={250}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="mt-12 px-6 py-2 btn btn-outlined-white">
        View more
      </button>
    </section>
  );
};

export default Testimonials;
