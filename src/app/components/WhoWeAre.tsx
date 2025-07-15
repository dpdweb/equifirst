"use client";
import Link from "next/link";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: 'Preferential  Access Through Elite Partnerships',
    content: `<ul class="list-disc pl-5 space-y-2 text-black text-lg">
      <li>We work with top-tier banks and leading real estate agencies across the UAE and MENA region.</li>
      <li>Our relationships help unlock competitive interest rates and exclusive financing options.</li>
      <li>You benefit from faster turnaround times, smoother approvals, and priority service.</li>
    </ul>`,
  },
  {
    id: 2,
    title: 'Seamless, End-to-End Support',
    content: `<ul class="list-disc pl-5 space-y-2 text-black text-lg">
      <li>From your first consultation to final loan disbursal, we handle every step of the process.</li>
      <li>We liaise directly with banks, valuers, agents, and developers to reduce your workload.</li>
      <li>Our proactive updates and document support mean fewer surprises—and more peace of mind.</li>
    </ul>`,
  },
  {
    id: 3,
    title: 'Local Banking Expertise, From the Inside Out',
    content: `<ul class="list-disc pl-5 space-y-2 text-black text-lg">
      <li>Our team brings insider knowledge of UAE lending practices, policies, and requirements.</li>
      <li>We anticipate bank-specific criteria to strengthen your application from the outset.</li>
      <li>You receive tailored advice that aligns with local market conditions and lender expectations.</li>
    </ul>`,
  },
  {
    id: 4,
    title: 'Transparent, Data-Driven Advice',
    content: `<ul class="list-disc pl-5 space-y-2 text-black text-lg">
      <li>We present clear comparisons and projections—no guesswork, just informed decisions.</li>
      <li>Our tools and analysis highlight long-term savings, risks, and flexibility.</li>
      <li>You're empowered to choose the right mortgage—not just the lowest rate.</li>
    </ul>`,
  },
];



export default function WhoWeAre() {

  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="ef-section-style">
      <div className="grid md:grid-cols-[490px_1fr] gap-6">
        
        <div className="mb-6 md:md-0 text-center md:text-left">
          <div className="pre-mobile-heading md:pre-heading">What We Do</div>
          <h1 className="text-ef-heading1-size text-ef-dark-blue">
            Your FIRST Choice For Smart Mortgage Solutions
          </h1>
          <p className="my-6">
            At Equifirst, we&apos;re committed to making your homeownership dreams a reality.
          </p>
          <Link href="" className="btn block w-full text-center mb-2">Start My Application</Link><Link href="" className="btn btn-outlined  text-center block w-full">Chat with EQUI</Link>
        </div>
      
        <div className="">

          <p className="mb-5">
            Equifirst Capital Financing is an independent mortgage brokerage in the UAE, helping you navigate the home-buying journey with ease. Whether you&apos;re purchasing your first home, a second property, or refinancing, our expert mortgage brokers provide personalised advice and financing solutions tailored to your needs. We partner with all major banks and leading real estate agencies across the MENA region, ensuring access to competitive rates, flexible terms, and valuable property insights. From consultation to closing, we simplify the mortgage process so you can focus on what matters—finding your dream home.<br></br><br></br>
            Let us do the hard work—so you can enjoy the journey.
          </p>

              <div className="max-w-3xl mx-auto p-4">
      {accordionData.map((item) => (
  <div key={item.id} className="border-b border-gray-200">
    <button
      onClick={() => toggle(item.id)}
      className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
    >
      <span className="text-lg font-medium text-ef-blue">{item.title}</span>
      <ChevronDown
        className={`w-5 h-5 transform transition-transform text-ef-blue duration-300 ${
          openItem === item.id ? 'rotate-180' : ''
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        openItem === item.id ? 'max-h-96' : 'max-h-0'
      }`}
    >
      <div
        className="text-gray-600 pb-4"
        dangerouslySetInnerHTML={{ __html: item.content }}
      ></div>
    </div>
  </div>
))}

    </div>
          
        </div>

      </div>
    </div>
  );
}
