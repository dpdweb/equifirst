// components/FinanceOptions.tsx
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FinanceOptions() {
  return (
    <div className="ef-section-style">
      <div className="grid grid-cols-1 md:grid grid-cols-[500px_1fr] gap-6">

        <div className="blue-box md:h-[400px]">

            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              Off-plan Finance
            </h3>
            <p className="mt-2">
              Invest in properties under construction with confidence, backed by
              our competitive Off-Plan.
            </p>
            <Image
              src="/assets/images/off-plan-finance.png"
              alt="Off-plan Finance"
              width={365}
              height={145}
              className="my-4 mx-auto sm:mx-0"
            />
            <Link href="/" className="ef-arrow-btn-1 ef-arrow-btn-abs-1">
                <ArrowRightIcon className="ArrowRightIcon" />
            </Link>
            <div className="box-bg-count">01</div>

        </div>

        <div className="blue-box-2 md:h-[400px]">

            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              Hand-over Finance
            </h3>
            <p className="mt-2">
              Smooth transition from construction to occupancy with our
              specialized Handover.
            </p>
            <Image
              src="/assets/images/image-6.png"
              alt="Equifirst"
              width={216}
              height={44}
              className="my-4"
            />
            <Link href="/" className="ef-arrow-btn-1 ef-arrow-btn-abs-1">
              <ArrowRightIcon className="ArrowRightIcon" />
            </Link>
            <div className="box-bg-count-2">02</div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">

        <div className="blue-box  md:h-[375px]">
            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              Financing for Non-residents
            </h3>
            <p className="mt-2">
              Simply international property investments with our bespoke
              financing for non-residents.
            </p>

          <div className="flex items-end gap-6">
              <Image
                src="/assets/images/financing-for-non-residents.png"
                alt="Equifirst"
                width={255}
                height={140}
                className="mt-4"
              />
          </div>
          <Link
                href="/"
                className="ef-arrow-btn-1 ef-arrow-btn-abs-1"
              >
                <ArrowRightIcon className="ArrowRightIcon" />
              </Link>
              <div className="box-bg-count">03</div>

          
        </div>

        <div className="blue-box md:h-[375px]">
            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              Home Renovation
            </h3>
            <p className="mt-2">
              Simply international property investments with our bespoke
              financing for non-residents.
            </p>

          <div className="flex items-end gap-6">  
              <Image
                src="/assets/images/financing-for-non-residents.png"
                alt="Equifirst"
                width={255}
                height={140}
                className="mt-4"
              />
          </div>

          <Link href="/" className="ef-arrow-btn-1 ef-arrow-btn-abs-1">
            <ArrowRightIcon className="ArrowRightIcon" />
          </Link>
          <div className="box-bg-count">04</div>

        </div>

        <div className="blue-box md:h-[375px]">

            <h3 className="text-ef-heading1-size text-ef-dark-blue">
              Equity Release
            </h3>
            <p className="mt-2">
              Simply international property investments with our bespoke
              financing for non-residents.
            </p>

          <div className="flex items-end gap-6">
              <Image
                src="/assets/images/financing-for-non-residents.png"
                alt="Equifirst"
                width={255}
                height={140}
                className="mt-4"
              />
          </div>

                    <Link href="/" className="ef-arrow-btn-1 ef-arrow-btn-abs-1">
            <ArrowRightIcon className="ArrowRightIcon" />
          </Link>
          <div className="box-bg-count">04</div>
         
        </div>

      </div>
    </div>
  );
}
