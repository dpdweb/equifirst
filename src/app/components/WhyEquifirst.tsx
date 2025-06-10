import Image from "next/image";
import Link from "next/link";


export default function WhyEquifirst() {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 md:px-6">
      <div className="grid md:grid-cols-[490px_1fr] gap-6">
        
        <div className="mb-6 md:md-0 text-center md:text-left">
          <div className="pre-heading">Why Equifirst?</div>
          <h1 className="text-ef-heading1-size text-ef-dark-blue">
            We Help You Get the Yes - Even When Banks Say No
          </h1>
          <p className="mt-6">
            At Equifirst, we’re committed to making your homeownership dreams a reality.
          </p>
          <div className="font-bold text-ef-blue my-6">
            Documentation
          </div>
          <ul className="space-y-4 text-gray-600">
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
                    width={650}
                    height={300}
                    className="my-4 mx-auto sm:mx-0"
                  />
          <div className="font-bold text-ef-blue">
            Documentation
          </div>
          <p className="mb-5">
            We handle all the necessary paperwork, secure your mortgage pre-approval, and negotiate with banks on your behalf.
          </p>
          <Link href="" className="btn inline mr-2">Start My Application</Link><Link href="" className="btn btn-outlined inline">Start My Application</Link>
        </div>

      </div>
    </div>
  );
}
