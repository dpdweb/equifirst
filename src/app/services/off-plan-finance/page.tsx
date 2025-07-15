"use client";
import React from 'react';
import MortgageSolutions from '@/app/components/MortgageSolutions';
import { useState } from 'react';
import Image from "next/image";
import { PlayCircle } from "lucide-react";


export default function OffPlanFinance() {

  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div>
        <MortgageSolutions />

        <div className="ef-section-style">
            
<div className="group relative">
  {/* Main Container */}
  <div className="bg-[#eaf4f7] rounded-2xl p-8 md:flex items-start gap-8">

    {/* Left Section */}
    <div className="flex-1">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#007190] mb-2">
        Off-Plan Finance
      </h2>
      <p className="text-gray-700 mb-4">
        Finance properties under construction and secure your investment early.
      </p>

      <h3 className="text-lg font-semibold text-[#007190]">Eligibility:</h3>
      <ul className="text-gray-700 list-disc list-inside space-y-1 mb-1">
        <li>Property must be at least 50% completed</li>
        <li>Delivery (SPA) scheduled within 18 months</li>

      </ul>

        {/* Expanding Content (triggered on hover of group wrapper) */}
  <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-70 group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">

        <li>50% payment already made to developer</li>
        <li><b>Approved developers:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Meraas</li>
            <li>Emaar</li>
            <li>Nakheel</li>
            <li>Sobha</li>
            <li>Damac</li>
            <li>Dubai Properties</li>
          </ul>
        </li>
        <li>Not available for non-residents</li>
      </ul>
      <p className="text-[#007190] font-semibold mb-4">
        Ideal for: UAE residents investing in top projects.
      </p>
  </div>



      <button className="bg-[#007190] text-white font-medium px-6 py-3 rounded-md hover:bg-[#005e78] transition mt-4">
        Apply for Off-Plan Finance
      </button>
    </div>

    {/* Right Section (Image with Play Button) */}
    <div className="flex-1 mt-8 md:mt-0 relative rounded-2xl overflow-hidden">
      <Image
        src="/assets/images/video-img.png"
        alt="Dubai Skyline"
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-full p-3 shadow-lg">
          <PlayCircle className="w-12 h-12 text-[#007190]" />
        </div>
      </div>
    </div>
  </div>


</div>


            
            </div>
    </div>
  );
}
