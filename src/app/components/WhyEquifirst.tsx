import Image from "next/image";
import Link from "next/link";


export default function WhyEquifirst() {
  return (
    <div className="ef-section-style">
      <div className="grid md:grid-cols-[490px_1fr] md:gap-6">
        
        <div className="md:mb-6 md:md-0 md:text-left">
          <div className="pre-mobile-heading md:pre-heading">Why Equifirst?</div>
          <h1 className="text-ef-mobile-heading1-size md:text-ef-heading1-size text-ef-dark-blue">
            We Help You Get the Yes - Even When Banks Say No
          </h1>
          <p className="mt-6">
            At Equifirst, we’re committed to making your homeownership dreams a reality.
          </p>
          <div className="font-bold text-[20px] text-ef-blue mt-6 md:my-6 border-b border-gray-300 md:border-none">
            Documentation
          </div>
          <ul className="hidden md:block space-y-4 text-gray-600">
            <li className="border-b border-gray-300 pb-2">Tailored Mortgage Solutions</li>
            <li className="border-b border-gray-300 pb-2">Team of Experts</li>
            <li className="border-b border-gray-300 pb-2">Secure & Reliable</li>
            <li className="border-b border-gray-300 pb-2">Efficiency</li>
          </ul>
        </div>

        <div className="">
          <Image
  src="/assets/images/why-equifirst.png"
  alt="Off-plan Finance"
  className="w-full h-auto my-4 mx-auto sm:mx-0"
  width={0}
  height={0}
  sizes="100vw"
/>
          <div className="hidden md:block font-bold text-[20px] text-ef-blue">
            Documentation
          </div>
          <p className="mb-5">
            We handle all the necessary paperwork, secure your mortgage pre-approval, and negotiate with banks on your behalf.
          </p>
          <Link href="" className="btn block md:inline text-center mb-5 md:mr-2">Start My Application</Link><Link href="" className="btn btn-outlined block md:inline text-center">Chat with EQUI</Link>
        
          <ul className="block md:hidden mt-6 space-y-4 text-gray-600">
            <li className="border-b border-gray-300 pb-2">Tailored Mortgage Solutions</li>
            <li className="border-b border-gray-300 pb-2">Team of Experts</li>
            <li className="border-b border-gray-300 pb-2">Secure & Reliable</li>
            <li className="border-b border-gray-300 pb-2">Efficiency</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
