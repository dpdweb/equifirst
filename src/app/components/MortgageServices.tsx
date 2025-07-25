// components/FinanceOptions.tsx
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export default function FinaMortgageServices() {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 md:px-6">
      <div className="grid md:grid-cols-[490px_1fr] gap-6">
        
        <div className="mb-6 md:md-0 text-center md:text-left">
          <div className="pre-heading">How We Help You</div>
          <h1 className="text-ef-heading1-size text-ef-dark-blue">
            Our Mortgage Services
          </h1>
        </div>

        <div className="h-[130px] flex items-center text-center md:text-left">
          <p>
            At Equifirst, we offer a comprehensive range of mortgage services to support you throughout your home-buying journey. Our experienced mortgage brokers provide guidance from the initial consultation to the application process, legal documentation, and property transfer. Enjoy a smooth and seamless experience every step of the way.
          </p>
        </div>

      </div>
    </div>
  );
}
