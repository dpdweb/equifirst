// components/AnimatedTabs.tsx
"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

export default function GotQuestionSection() {
  return (
    <div>
      <div className="grid grid-cols-[450px_1fr] gap-4">

        <div className="blue-box md:h-[400px]">
            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              What is a mortgage?
            </h3>
            <p className="mt-2">
              A mortgage is a loan from a bank that helps you purchase a home. You then pay the mortgage plus interest back in monthly Instalments over a set number of years.
            </p>
            <div className="mt-4">
              <button className="w-10 h-10 rounded-full border border-[#006b8f] flex items-center justify-center text-[#006b8f] hover:bg-[#006b8f] hover:text-white transition">
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
            <Image
              src="/assets/images/off-plan-finance.png"
              alt="Off-plan Finance"
              width={365}
              height={145}
              className="my-4 mx-auto sm:mx-0"
            />
        </div>

          <div className="blue-box-2 md:h-[400px]">
            <div>
              <h3 className="text-ef-heading1-size text-ef-dark-blue">
                Hand-over Finance
              </h3>
              <p className="mt-2">
                Smooth transition from construction to occupancy with our specialized Handover.
              </p>
              <Image
                src="/assets/images/image-6.png"
                alt="Equifirst"
                width={216}
                height={44}
                className="my-4"
              />
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-6 right-6 z-10">
              <button className="w-10 h-10 rounded-full bg-[#006b8f] text-white flex items-center justify-center hover:bg-[#004f6b] transition">
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Background Number */}
            {/* <div className="absolute -bottom-10 right-15 text-[5rem] text-[#88b6ca] font-bold z-0">
    02
  </div> */}
          </div>

      </div>

      <div className="grid grid-cols-[380px_1fr] gap-4">

        <div className="blue-box mt-6 md:h-[400px]">
            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              What is a mortgage?
            </h3>
            <p className="mt-2">
              A mortgage is a loan from a bank that helps you purchase a home. You then pay the mortgage plus interest back in monthly Instalments over a set number of years.
            </p>
            <div className="mt-4">
              <button className="w-10 h-10 rounded-full border border-[#006b8f] flex items-center justify-center text-[#006b8f] hover:bg-[#006b8f] hover:text-white transition">
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
            <Image
              src="/assets/images/off-plan-finance.png"
              alt="Off-plan Finance"
              width={365}
              height={145}
              className="my-4 mx-auto sm:mx-0"
            />
        </div>


        <div className="blue-box mt-6 md:h-[400px]">
          <div>
            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              Hand-over Finance
            </h3>
            <p className="mt-2">
              Smooth transition from construction to occupancy with our specialized Handover.
            </p>
            <Image
              src="/assets/images/image-6.png"
              alt="Equifirst"
              width={216}
              height={44}
              className="my-4"
            />
          </div>

          {/* Arrow Button */}
          <div className="absolute bottom-6 right-6 z-10">
            <button className="w-10 h-10 rounded-full bg-[#006b8f] text-white flex items-center justify-center hover:bg-[#004f6b] transition">
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Background Number */}
          {/* <div className="absolute -bottom-10 right-15 text-[5rem] text-[#88b6ca] font-bold z-0">
  02
</div> */}
        </div>


      </div>
    </div>
  );
}
