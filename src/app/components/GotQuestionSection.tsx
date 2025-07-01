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
    content: 'A mortgage is a loan from a bank that helps you purchase a home. You then pay the mortgage plus interest back in monthly Instalment over a set number of years.',
  },
  {
    id: 2,
    title: 'Who can get a mortgage in Dubai?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat velit, ullamcorper non feugiat sed, lacinia eu urna. Curabitur sollicitudin accumsan pharetra. Donec vehicula ipsum massa, vel mattis nisl venenatis vel. Praesent aliquet laoreet ligula, et rutrum mauris bibendum imperdiet. Aliquam imperdiet venenatis est sed volutpat.',
  },
  {
    id: 3,
    title: 'How much can I borrow from banks in Dubai?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat velit, ullamcorper non feugiat sed, lacinia eu urna. Curabitur sollicitudin accumsan.',
  },
    {
    id: 4,
    title: 'Want to know more?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat velit, ullamcorper non feugiat sed, lacinia eu urna. Curabitur sollicitudin accumsan pharetra. Donec vehicula ipsum massa, vel mattis nisl venenatis vel. Praesent aliquet laoreet ligula, et rutrum mauris bibendum imperdiet. Aliquam imperdiet venenatis est sed volutpat.',
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
              A mortgage is a loan from a bank that helps you purchase a home. You then pay the mortgage plus interest back in monthly Instalment over a set number of years.
            </p>
            
            <div className="absolute bottom-[25px] right-[25px]"> 
              <Link href="" className="ef-arrow-btn-1">
                <ArrowRightIcon className="ArrowRightIcon" />
              </Link>
            </div>
            
        </div>

          <div className="blue-box-2 md:h-[400px] relative">
            <div>
              <h3 className="text-ef-heading1-size text-ef-dark-blue">
                Who can get a mortgage in Dubai?
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat velit, ullamcorper non feugiat sed, lacinia eu urna. Curabitur sollicitudin accumsan pharetra. Donec vehicula ipsum massa, vel mattis nisl venenatis vel. Praesent aliquet laoreet ligula, et rutrum mauris bibendum imperdiet. Aliquam imperdiet venenatis est sed volutpat.
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
              <Link href="" className="ef-arrow-btn-1">
                <ArrowRightIcon className="ArrowRightIcon" />
              </Link>
            </div>

   
          </div>

      </div>

      <div className="hidden md:grid grid-cols-[450px_1fr] gap-4">

        <div className="blue-box mt-6 md:h-[400px]">
            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              How much can I borrow from banks in Dubai?
            </h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat velit, ullamcorper non feugiat sed, lacinia eu urna. Curabitur sollicitudin accumsan. 
            </p>

            <div className="absolute bottom-[25px] right-[25px]"> 
              <Link href="" className="ef-arrow-btn-1">
                <ArrowRightIcon className="ArrowRightIcon" />
              </Link>
            </div>
           
        </div>


        <div className="blue-box mt-6 md:h-[400px]">
          <div>
            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              Want to know more?
            </h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat velit, ullamcorper non feugiat sed, lacinia eu urna. Curabitur sollicitudin accumsan pharetra. Donec vehicula ipsum massa, vel mattis nisl venenatis vel. Praesent aliquet laoreet ligula, et rutrum mauris bibendum imperdiet. Aliquam imperdiet venenatis est sed volutpat.
            </p>
            
          </div>

          <div className="absolute bottom-[25px] right-[25px]"> 
            <Link href="" className="ef-arrow-btn-1">
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
