// components/FinanceOptions.tsx
// import Image from 'next/image';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';


export default function MortgageMadeSimple() {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 md:px-6">
      <div className="grid md:grid-cols-[490px_1fr] gap-6">
        
        <div className="mb-6 md:md-0 text-center md:text-left">
          <div className="pre-heading">Mortgage Calculator</div>
          <h1 className="text-ef-heading1-size text-ef-dark-blue">
            Your Mortgage Made Simple
          </h1>
        </div>

        <div className="h-[130px] flex items-center text-center md:text-left">
          <p>
            Make informed decisions about your mortgage options. Use our free mortgage calculator to find out the costs associated with buying your property.
          </p>
        </div>

      </div>
    </div>
  );
}
