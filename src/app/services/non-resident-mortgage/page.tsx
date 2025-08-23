"use client";
import React from 'react';
import MortgageSolutions from '@/app/components/MortgageSolutions';
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import SubPageHeroBanner from '@/app/components/SubPageHeroBanner';

export default function WhoWeAre() {
  return (
    <div>
      <SubPageHeroBanner
        title="Non-Resident Mortgage"
        subtitle="Mortgages Beyond Borders"
        image="/assets/images/non-resident-mortgage-hero.jpg"
      />
        <MortgageSolutions />

        <div className="ef-section-style-4">
            
<div className="group relative">
  {/* Main Container */}
  <div className="bg-[#eaf4f7] md:rounded-2xl p-8 md:flex items-start gap-8">

    {/* Left Section */}
    <div className="flex-1">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#007190] mb-2">
        Non-Resident Mortgage
      </h2>
      <p className="text-gray-700 mb-4">
        Helping non-residents invest confidently in Dubai.
      </p>

      <h3 className="text-lg font-semibold text-[#007190]">Key Features:</h3>
      <ul className="text-gray-700 list-disc list-inside space-y-1 mb-1">
        <li>Up to 65% financing (property value under AED 5M)</li>
        <li>Up to 50% financing (property value above AED 5M)</li>

      </ul>

        {/* Expanding Content (triggered on hover of group wrapper) */}
  <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">

        <li>Available for non-resident investors</li>
        <li>Salaried & self-employed accepted</li>
        <li>Tenure up to 25 years</li>
      </ul>
            {/* <p className="text-[#007190] font-semibold mb-4">
        Ideal for: International investors purchasing property in Dubai.
      </p> */}
      <button className="bg-[#007190] text-white font-medium px-6 py-3 rounded-md hover:bg-[#005e78] transition mt-4">
        <b>Ideal for:</b> International investors purchasing property in Dubai.
      </button>
  </div>



      {/* <button className="bg-[#007190] text-white font-medium px-6 py-3 rounded-md hover:bg-[#005e78] transition mt-4">
        Get Pre-Approved Today
      </button> */}
    </div>

    {/* Right Section (Image with Play Button) */}
    <div className="flex-1 mt-8 md:mt-0 relative rounded-2xl overflow-hidden">
      <Image
        src="/assets/images/service-4.jpg"
        alt="Dubai Skyline"
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-full p-3 shadow-lg">
          <PlayCircle className="w-12 h-12 text-[#007190]" />
        </div>
      </div> */}
    </div>
  </div>


</div>


            
            </div>
    </div>
  );
}
