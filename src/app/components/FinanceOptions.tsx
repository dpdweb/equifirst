// components/FinanceOptions.tsx
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export default function FinanceOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto font-sans">
        
    <div className="relative bg-ef-extra-light-blue p-10 rounded-xl flex flex-col justify-between md:h-[400px]">
      <div>
        <h3 className="text-ef-heading1-size text-ef-dark-blue">Off-plan Finance</h3>
        <p className="mt-2">Invest in properties under construction with confidence, backed by our competitive Off-Plan.</p>
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
    </div>

<div className="relative bg-ef-dark-blue-1 p-10 rounded-xl flex flex-col justify-between h-64 md:col-span-2 overflow-hidden md:h-[400px]">
  <div>
    <h3 className="text-ef-heading1-size text-ef-dark-blue">Hand-over Finance</h3>
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



    <div className="relative bg-ef-extra-light-blue p-10 rounded-xl flex flex-col justify-between   md:h-[375px]">
    <div>
      <h3 className="text-ef-heading1-size text-ef-dark-blue">Financing for Non-residents</h3>
      <p className="mt-2">Simply international property investments with our bespoke financing for non-residents.</p>
    </div>

    <div className="flex items-end gap-6">
    <div>
      <Image
        src="/assets/images/financing-for-non-residents.png"
        alt="Equifirst"
        width={255}
        height={140}
        className="mt-4"
      />
    </div>

    {/* Right: Button aligned to bottom */}
    <div className="mt-4">
      <Link href="/" className="w-10 h-10 rounded-full border border-[#006b8f] flex items-center justify-center text-[#006b8f] hover:bg-[#006b8f] hover:text-white  transition-all duration-300 ease-in-out" >
        <ArrowRightIcon className="w-5 h-5 transition duration-300 ease-in-out hover:text-white hover:rotate-45" />
      </Link>
    </div>
  </div>

  </div>

 
  <div className="relative bg-ef-extra-light-blue p-10 rounded-xl flex flex-col justify-between   md:h-[375px]">
    <div>
      <h3 className="text-ef-heading1-size text-ef-dark-blue">Home Renovation</h3>
      <p className="mt-2">Simply international property investments with our bespoke financing for non-residents.</p>
    </div>
    
        <div className="flex items-end gap-6">
    <div>
      <Image
        src="/assets/images/financing-for-non-residents.png"
        alt="Equifirst"
        width={255}
        height={140}
        className="mt-4"
      />
    </div>

    {/* Right: Button aligned to bottom */}
    <div className="mt-4">
      <Link href="/" className="w-10 h-10 rounded-full border border-[#006b8f] flex items-center justify-center text-[#006b8f] hover:bg-[#006b8f] hover:text-white  transition-all duration-300 ease-in-out" >
        <ArrowRightIcon className="w-5 h-5 transition duration-300 ease-in-out hover:text-white hover:rotate-45" />
      </Link>
    </div>
  </div>
    {/* <div className="absolute bottom-4 right-4 text-[5rem] text-[#c9dbe3] font-bold -z-10">04</div> */}
  </div>


  <div className="relative bg-ef-extra-light-blue p-10 rounded-xl flex flex-col justify-between md:h-[375px]">
    <div>
      <h3 className="text-ef-heading1-size text-ef-dark-blue">Equity Release</h3>
      <p className="mt-2">Simply international property investments with our bespoke financing for non-residents.</p>
    </div>
    
        <div className="flex items-end gap-6">
    <div>
      <Image
        src="/assets/images/financing-for-non-residents.png"
        alt="Equifirst"
        width={255}
        height={140}
        className="mt-4"
      />
    </div>

    {/* Right: Button aligned to bottom */}
    <div className="mt-4">
      <Link href="/" className="w-10 h-10 rounded-full border border-[#006b8f] flex items-center justify-center text-[#006b8f] hover:bg-[#006b8f] hover:text-white  transition-all duration-300 ease-in-out" >
        <ArrowRightIcon className="w-5 h-5 transition duration-300 ease-in-out hover:text-white hover:rotate-45" />
      </Link>
    </div>
  </div>
    {/* <div className="absolute bottom-4 right-4 text-[5rem] text-[#c9dbe3] font-bold -z-10">05</div> */}
  </div>
 
    </div>
  );
}
