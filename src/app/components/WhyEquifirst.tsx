'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const features = [
  {
    id: 1,
    title: 'Documentation',
    description: 'We handle all the necessary paperwork, secure your mortgage pre-approval, and negotiate with banks on your behalf.',
    image: '/assets/images/why-equifirst.png',
  },
  {
    id: 2,
    title: 'Tailored Mortgage Solutions',
    description: 'Access tailored mortgage solutions that meet your unique needs, and avail the most competitive mortgage rates & terms available.',
    image: '/assets/images/why-equifirst.png',
  },
  {
    id: 3,
    title: 'Team of Experts',
    description: 'Connect with our team of financial experts with years of experience in multinational banks, dedicated to providing you with the highest level of expertise and personalized service.',
    image: '/assets/images/why-equifirst.png',
  },
  {
    id: 4,
    title: 'Secure & Reliable',
    description: "As UAE's trusted mortgage partner, we're committed to confidentiality and secure transactions for all our customers.",
    image: '/assets/images/why-equifirst.png',
  },
  {
    id: 5,
    title: 'Efficiency',
    description: 'We are directly impaneled with every major bank in the UAE so you can secure the right financial service without delay.',
    image: '/assets/images/why-equifirst.png',
  },
];

export default function WhyEquifirst() {
  const [selected, setSelected] = useState(features[0]);

  return (
    <div className="ef-section-style">
      <div className="grid md:grid-cols-[490px_1fr] md:gap-6">
        <div className="md:mb-6 md:text-left">
          <div className="pre-mobile-heading md:pre-heading">Why Equifirst?</div>
          <h1 className="text-ef-mobile-heading1-size md:text-ef-heading1-size text-ef-dark-blue">
            We Help You Get the Yes - Even When Banks Say No
          </h1>
          <p className="mt-6">
            At Equifirst, we’re committed to making your homeownership dreams a reality.
          </p>


          <ul className="hidden md:block space-y-4 text-gray-600 mt-8">
            {features.map((item) => (
              <li
                key={item.id}
                className={`border-b border-gray-300 pb-2 flex items-center gap-2 cursor-pointer ${
                  selected.id === item.id ? 'text-ef-blue font-semibold' : ''
                }`}
                onClick={() => setSelected(item)}
              >
                <ChevronRightIcon className="w-5 h-5 text-ef-dark-blue" />
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Image
            src={selected.image}
            alt={selected.title}
            className="w-full h-auto my-4 mx-auto sm:mx-0"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="hidden md:block font-bold text-[20px] text-ef-blue">{selected.title}</div>
          <p className="mb-5">{selected.description}</p>

          <div className="flex flex-col md:flex-row gap-2">
            <Link href="#" className="btn text-center">Start My Application</Link>
            <Link href="#" className="btn btn-outlined text-center">Chat with EQUI</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
