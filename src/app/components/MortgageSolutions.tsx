"use client";
import Link from "next/link";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';


export default function MortgageSolutions() {

  return (
    <div className="ef-section-style">
      <div className="grid md:grid-cols-[490px_1fr] gap-6">
        
        <div className="mb-6 md:md-0 text-center md:text-left">
          <div className="pre-mobile-heading md:pre-heading">Mortgage Solutions</div>
          <h1 className="text-ef-heading1-size text-ef-dark-blue">
            Equifirst Capital Financing
          </h1>
        </div>
      
        <div className="">

          <p className="mb-5">
            Discover flexible mortgage solutions in Dubai with Equifirst Capital Financing. Off-Plan Finance, Secondary Market, Equity Release, Handover Finance, Buyout & Non-Resident options.
          </p>
          <h2 className="text-ef-blue">Find the Right Mortgage Solution for You</h2>
          <p className="mb-5">
            At Equifirst Capital Financing, we simplify the mortgage process and offer a full range of financing solutions tailored to your needs — whether you’re a first-time buyer, investor, non-resident, or looking to refinance.
          </p>

          
        </div>

      </div>
    </div>
  );
}
