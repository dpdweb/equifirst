"use client";
import React from 'react';
import MortgageSolutions from "../../components/MortgageSolutions";
import Image from "next/image";
// import { PlayCircle } from "lucide-react";
import SubPageHeroBanner from "../../components/SubPageHeroBanner";
import Link from 'next/link';

export default function OffPlanFinance() {

  return (
    <div>
      <SubPageHeroBanner
                title="Off-Plan Finance"
                subtitle="Finance Future Developments Easily"
                image="/assets/images/off-plan-finance-hero.jpg"
              />
        <MortgageSolutions />

        <div className="ef-section-style-4">
            
<div className="group relative">
  {/* Main Container */}
  <div className="bg-[#eaf4f7] md:rounded-2xl p-8 md:flex items-start gap-8">

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
        <li>Property must be at least 40% completed</li>
        <li>Delivery (SPA) scheduled within 18 months</li>

      </ul>

        {/* Expanding Content (triggered on hover of group wrapper) */}
          {/* <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-80 group-hover:opacity-100 transition-all duration-500 ease-in-out"> */}
  <div className="">
        <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">

        <li><b>Approved developers:</b>
          <ul className="list-disc list-inside ml-4">

            <li>Emaar</li>
            <li>Dubai Holding</li>
            <li>Majid AL Futtaim</li>
            <li>Al Wasl Group</li>
            <li>AL - DAR [Dubai projects]</li>
            <li>Shoba</li>
            <li>Damac</li>
            <li>Ellington</li>
            <li>Omniyat</li>
            <li>Binghatti</li>

          </ul>
        </li>
        <li>Not available for non-residents</li>
      </ul>
      {/* <p className="text-[#007190] font-semibold mb-4">
        Ideal for: UAE residents investing in top projects.
      </p> */}

        <b>Ideal for:</b> UAE residents investing in top projects.
      <div className="space-y-4 mt-8">
    <Link href="/contact-us" className="w-full block btn text-center">
      Apply Online in Two Minutes
    </Link>
    <Link href="/about-us" className="w-full block btn btn-outlined-blue text-center">
      Find Out More
    </Link>
  </div>
  </div>



      {/* <button className="bg-[#007190] text-white font-medium px-6 py-3 rounded-md hover:bg-[#005e78] transition mt-4">
        Apply for Off-Plan Finance
      </button> */}
    </div>

    {/* Right Section (Image with Play Button) */}
    <div className="flex-1 mt-8 md:mt-0 relative rounded-2xl overflow-hidden">
      <Image
        src="/assets/images/service-5.jpg"
        alt="UAE Skyline"
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
