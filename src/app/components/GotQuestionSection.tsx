// components/AnimatedTabs.tsx
"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
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
    title: 'What is a mortgage?',
    content: 'A mortgage is a long-term loan used to buy property, where the property itself serves as security for the loan.',
  },
  {
    id: 2,
    title: 'How does a mortgage work in the UAE?',
    content: 'You borrow money from a bank and repay it monthly with interest over an agreed term, up to 25 years.',
  },
  {
    id: 3,
    title: 'Is it better to rent or buy in the UAE?',
    content: 'It depends on your financial goals. Buying helps you build equity, while renting offers flexibility.',
  },
    {
    id: 4,
    title: 'Am I eligible for a mortgage in the UAE?',
    content: 'If you&apos;re over 21, have a stable income, and meet bank criteria, you&rsquo;re likely eligible.',
  },
  {
    id: 5,
    title: 'What is the minimum income required to apply?',
    content: 'Salaried: Typically AED 15,000 per month, but some banks are willing to provide mortgages to clients with a salary of AED 10,000 per month. Self-employed: AED 40,000 per month, varies by bank.',
  },
];


export default function GotQuestionSection() {

  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div>
      <div className="hidden md:grid grid-cols-[450px_1fr] gap-4">

        <div className="blue-box md:h-[400px] relative">
            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              What is a mortgage?
            </h3>
            <p className="mt-2">
              A mortgage is a long-term loan used to buy property, where the property itself serves as security for the loan.
            </p>
            
            <div className="absolute bottom-[25px] right-[25px]"> 
              <Link href="/faqs" className="ef-arrow-btn-1">
                <ArrowRightIcon className="ArrowRightIcon" />
              </Link>
            </div>
            
        </div>

          <div className="blue-box-2 md:h-[400px] relative">
            <div>
              <h3 className="text-ef-heading1-size text-ef-dark-blue">
                How does a mortgage work in the UAE?
              </h3>
              <p className="mt-2">
                You borrow money from a bank and repay it monthly with interest over an agreed term, up to 25 years.
              </p>
              <Image
              src="/assets/images/mortgage-img.png"
              alt="Off-plan Finance"
              width={510}
              height={155}
              className="my-4 mx-auto sm:mx-0"
            />
            </div>

            <div className="absolute bottom-[25px] right-[25px]"> 
              <Link href="/faqs" className="ef-arrow-btn-1">
                <ArrowRightIcon className="ArrowRightIcon" />
              </Link>
            </div>

   
          </div>

      </div>

      <div className="hidden md:grid grid-cols-[450px_1fr] gap-4">

        <div className="blue-box mt-6 md:h-[250px]">
            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              Is it better to rent or buy in the UAE?
            </h3>
            <p className="mt-2">
              It depends on your financial goals. Buying helps you build equity, while renting offers flexibility. 
            </p>

            <div className="absolute bottom-[25px] right-[25px]"> 
              <Link href="/faqs" className="ef-arrow-btn-1">
                <ArrowRightIcon className="ArrowRightIcon" />
              </Link>
            </div>
           
        </div>


        <div className="blue-box mt-6 md:h-[250px]">
          <div>
            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              Am I eligible for a mortgage in the UAE?
            </h3>
            <p className="mt-2">
              If you&apos;re over 21, have a stable income, and meet bank criteria, you&rsquo;re likely eligible.
            </p>
            
          </div>

          <div className="absolute bottom-[25px] right-[25px]"> 
            <Link href="/faqs" className="ef-arrow-btn-1">
              <ArrowRightIcon className="ArrowRightIcon" />
            </Link>
          </div>

        </div>


      </div>

      <div className="md:hidden mt-3">
        {accordionData.map((item) => (
                <div key={item.id} className="border-b border-gray-200">
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex justify-between items-center py-4 text-left  focus:outline-none"
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
                    <p className="text-gray-600 pb-4">{item.content}</p>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
}
