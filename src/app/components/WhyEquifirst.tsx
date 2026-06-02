'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline"; // ✅ Added ChevronDownIcon

const features = [
  {
    id: 1,
    title: 'Documentation',
    description: 'We handle all the necessary paperwork, secure your mortgage pre-approval, and negotiate with banks on your behalf.',
    image: '/assets/images/documentation.jpg',
  },
  {
    id: 2,
    title: 'Tailored Mortgage Solutions',
    description: 'Access tailored mortgage solutions that meet your unique needs, and avail the most competitive mortgage rates & terms available.',
    image: '/assets/images/tailored-mortgage-solutions.jpg',
  },
  {
    id: 3,
    title: 'Team of Experts',
    description: 'Connect with our team of financial experts with years of experience in multinational banks, dedicated to providing you with the highest level of expertise and personalized service.',
    image: '/assets/images/team-experts.jpg',
  },
  {
    id: 4,
    title: 'Secure & Reliable',
    description: "As UAE's trusted mortgage partner, we're committed to confidentiality and secure transactions for all our customers.",
    image: '/assets/images/secure-reliable.jpg',
  },
  {
    id: 5,
    title: 'Efficiency',
    description: 'We have access to every major bank in the UAE so you can secure the right mortgage without delay.',
    image: '/assets/images/efficiency.jpg',
  },
];

type HeroSliderProps = {
  onScrollClick: () => void;
};

export default function WhyEquifirst({ onScrollClick }: HeroSliderProps) {
  const [selected, setSelected] = useState(features[0]);
  const [openItem, setOpenItem] = useState<number | null>(null); // ✅ accordion state

  const toggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="mx-auto w-full max-w-[1366px] py-5 md:pt-10 px-4 sm:px-6 lg:px-8">

      <div className="grid md:grid-cols-[490px_1fr] md:gap-6">
        {/* LEFT SIDE */}
        <div className="md:mb-6 md:text-left">
          <div className="pre-mobile-heading md:pre-heading">Why Equifirst?</div>
          <h1 className="text-ef-mobile-heading1-size md:text-ef-heading1-size text-ef-dark-blue">
            We Provide Fast, Hassle-Free Mortgage Approvals for Residents & Expats
          </h1>
          <p className="mt-6">
            At Equifirst, we’re committed to making your homeownership dreams a reality.
          </p>

          <ul className="hidden md:block space-y-4 text-gray-600 mt-8">
            {features.map((item) => (
              <li
                key={item.id}
                className={`border-b border-gray-300 pb-2 flex items-center gap-2 cursor-pointer ${
                  selected.id === item.id ? "text-ef-blue font-semibold" : ""
                }`}
                onClick={() => setSelected(item)}
              >
                <ChevronRightIcon className="w-5 h-5 text-ef-dark-blue" />
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:block">
          <Image
            src={selected.image}
            alt={selected.title}
            className="w-full h-[350px] object-cover rounded-2xl my-4 mx-auto sm:mx-0"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="hidden md:block font-bold text-[20px] text-ef-blue">{selected.title}</div>
          <p className="mb-5">{selected.description}</p>

          <div className="flex flex-col md:flex-row gap-2">
            <Link href="/contact-us" className="btn text-center">
              Start My Application
            </Link>
            <button onClick={onScrollClick} className="btn btn-outlined text-center">
              Find Out More
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE ACCORDION VIEW */}
      <div className="max-w-3xl mx-auto p-4 md:hidden">
        {features.map((item) => (
          <div key={item.id} className="border-b border-gray-200">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-ef-blue">{item.title}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform text-ef-blue duration-300 ${
                  openItem === item.id ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItem === item.id ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="text-gray-600 pb-4">{item.description}</div>
              <Image
            src={item.image}
            alt={item.title}
            width={800}     // any base width
  height={350}    // base height
  className="w-full h-[200px] object-cover rounded-2xl my-4 mx-auto sm:mx-0"
  sizes="100vw"
          />
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex flex-col md:flex-row gap-2">
            <Link href="/contact-us" className="btn text-center">
              Start My Application
            </Link>
            <button onClick={onScrollClick} className="btn btn-outlined text-center">
              Find Out More
            </button>
          </div>
    </div>
  );
}
