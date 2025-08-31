'use client';
import { useState, useEffect } from 'react';
import { Info } from "lucide-react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"; // ✅ Added ChevronDownIcon

export default function MortgageCalculator() {
  const initialPrice = 1200000;
  const thresholdPrice = 5000000;

  const [DownPaymentPercentage, setDownPaymentPercentage] = useState(20);
  const [downPaymentMinMax, setDownPaymentMixMax] = useState({ min: 20, max: 80 });

  const [state, setState] = useState({
    Price: initialPrice,
    DownPayment: Math.round(initialPrice * downPaymentMinMax.min / 100),
    LoanDuration: 25,
    InterestRate: 4.0,
    LifeInsurance: 0.2298,
    PropertyInsurance: 0.041,
    ActiveProduct: 'Resident',
    ToggleFinancing: false,
  });

  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [upfrontCosts, setUpfrontCosts] = useState(0);
  const [displayValueInterest, setDisplayValueInterest] = useState<string>("4.0");



  useEffect(() => {
    const Months = state.LoanDuration * 12;
    const Rate = (state.InterestRate / 100) / 12;
    let Principal = state.Price - state.DownPayment;

    if (state.ToggleFinancing) {
      Principal += (Principal * 0.06);
    }

    const Factor = Math.pow(1 + Rate, Months);
    const Monthly = Rate * Principal * Factor / (Factor - 1);

    const LifeIns = (Principal * (state.LifeInsurance / 100)) / 12;
    const PropIns = (state.Price * (state.PropertyInsurance / 100)) / 12;

    let Upfront =
      0.04 * state.Price +
      0.0025 * Principal +
      (0.02 * state.Price + 0.05 * 0.02 * state.Price) +
      11615;

    if (state.ToggleFinancing) {
      Upfront -=
        (0.04 * state.Price) * 0.8 +
        (0.02 * state.Price) * 0.8;
    }

    setLoanAmount(Math.round(Principal));
    setMonthlyCost(Math.round(Monthly + LifeIns + PropIns));
    setUpfrontCosts(Math.round(Upfront));
  }, [
    state.Price,
    state.DownPayment,
    state.InterestRate,
    state.LoanDuration,
    state.ToggleFinancing,
    state.LifeInsurance,
    state.PropertyInsurance,
  ]);


  const formatNumber = (val: number) =>
    val.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const handleResidencyClick = (product: string) => {
    let updatedRate = state.InterestRate;
    let newDownPayment = 0;
    if (product === 'National') {
      updatedRate = 4.0
      const minDownpayment = state.Price >= thresholdPrice ? 25 : 15;
      const maxDownPayment = state.Price >= thresholdPrice ? 80 : 85;
      setDownPaymentPercentage(minDownpayment);
      setDownPaymentMixMax({ min: minDownpayment, max: maxDownPayment })
      newDownPayment = Math.round((state.Price * minDownpayment) / 100);

    } else if (product === 'Resident') {
      updatedRate = 4.0
      const minDownpayment = state.Price >= thresholdPrice ? 30 : 20;
      const maxDownPayment = state.Price >= thresholdPrice ? 80 : 80;
      setDownPaymentPercentage(minDownpayment);
      setDownPaymentMixMax({ min: minDownpayment, max: maxDownPayment })
      newDownPayment = Math.round((state.Price * minDownpayment) / 100);
    } else if (product === 'NonResident') {
      updatedRate = 5.0
      const minDownpayment = state.Price >= thresholdPrice ? 40 : 25;
      const maxDownPayment = state.Price >= thresholdPrice ? 80 : 80;
      setDownPaymentPercentage(minDownpayment);
      setDownPaymentMixMax({ min: minDownpayment, max: maxDownPayment })
      newDownPayment = Math.round((state.Price * minDownpayment) / 100);
    };
    setState(prev => ({
      ...prev,
      ActiveProduct: product,
      InterestRate: updatedRate,
      DownPayment: newDownPayment,
    }));
    setDisplayValueInterest(updatedRate.toFixed(2));
  };


  const MIN = 0.6;
  const MAX = 10.0;
  const STEP = 0.1;

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDisplayValueInterest(value); // update UI immediately

    if (value === "") {
      // user cleared input → keep old rate, just empty UI
      return;
    }

    const parsed = parseFloat(value);
    if (!isNaN(parsed)) {

      let clamped = parsed;
      if (clamped < MIN) clamped = MIN;
      if (clamped > MAX) clamped = MAX;

      setState(prev => ({
        ...prev,
        InterestRate: clamped,
      }));
    }
  };

  // ✅ On blur, snap value if empty or invalid
  const handleInterestBlur = () => {
    if (displayValueInterest === "") {
      // restore last known valid rate
      setDisplayValueInterest(state.InterestRate.toFixed(2));
    } else {
      // normalize formatting
      setDisplayValueInterest(state.InterestRate.toFixed(2));
    }
  };


  const increment = () => {
    const current = isNaN(state.InterestRate) ? MIN : state.InterestRate;
    let newValue = current + STEP;
    if (newValue > MAX) newValue = MAX;
    newValue = parseFloat(newValue.toFixed(2));
    setDisplayValueInterest(newValue.toFixed(2));
    setState(prev => ({
      ...prev,
      InterestRate: newValue,
    }));
  };


  const decrement = () => {

    const current = isNaN(state.InterestRate) ? MIN : state.InterestRate;
    let newValue = current - STEP;
    if (newValue < MIN) newValue = MIN;
    newValue = parseFloat(newValue.toFixed(2));
    setDisplayValueInterest(newValue.toFixed(2));

    setState(prev => ({
      ...prev,
      InterestRate: newValue,
    }));

  };

  return (
    <div className="ef-section-style-3 grid grid-cols-1 md:grid-cols-2 mx-auto p-2 md:p-6 bg-ef-dark-blue-2 rounded-lg gap-8">
      {/* Residency Status */}
      <div className="md:pr-12">
        <div className="mb-8">
          <div className="mb-2 font-semibold">
            Residency status <span className="text-red-500">*</span>
          </div>
          <div className="md:flex gap-2 items-center justify-between">
            {['Resident', 'UAE National', 'NonResident'].map(status => (
              <button
                key={status}
                onClick={() => handleResidencyClick(status)}
                className={`w-full md:flex-1 px-4 py-2 rounded mb-2 md:mb-0 text-center ${state.ActiveProduct === status ? 'btn' : 'btn btn-outlined-blue'
                  }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-2 font-semibold">Property value <span className="text-red-500">*</span></div>
          <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50 w-full mb-5">
            <input
              type="text"
              value={Number(state.Price).toLocaleString()}
              onChange={(e) => {
                const raw = e.target.value.replace(/,/g, '');
                const parsed = Number(raw);
                if (!isNaN(parsed)) {
                  let downValue = Math.round((parsed * DownPaymentPercentage) / 100);

                  if (parsed >= thresholdPrice) {
                    if (state.ActiveProduct === 'National') {
                      if (DownPaymentPercentage < 25) {
                        setDownPaymentPercentage(25);
                        downValue = Math.round((parsed * 25) / 100);
                      }
                      setDownPaymentMixMax({ min: 25, max: 80 });
                    } else if (state.ActiveProduct === 'Resident') {
                      if (DownPaymentPercentage < 30) {
                        setDownPaymentPercentage(30);
                        downValue = Math.round((parsed * 30) / 100);
                      }
                      setDownPaymentMixMax({ min: 30, max: 80 });
                    } else if (state.ActiveProduct === 'NonResident') {
                      if (DownPaymentPercentage < 40) {
                        setDownPaymentPercentage(40);
                        downValue = Math.round((parsed * 40) / 100);
                      }
                      setDownPaymentMixMax({ min: 40, max: 80 });
                    }
                  } else {
                    if (state.ActiveProduct === 'National') {
                      setDownPaymentMixMax({ min: 15, max: 85 });
                    } else if (state.ActiveProduct === 'Resident') {
                      setDownPaymentMixMax({ min: 20, max: 80 });
                    } else if (state.ActiveProduct === 'NonResident') {
                      setDownPaymentMixMax({ min: 25, max: 80 });
                    }
                  }

                  setState(prev => ({
                    ...prev,
                    Price: parsed,
                    DownPayment: downValue,
                  }));
                }
              }}
              className="flex-1 px-4 py-3 bg-gray-50 text-black text-lg outline-none"
            />
            <div className="px-4 py-3 text-ef-blue font-medium text-lg border-l border-gray-300">
              AED
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div className="text-lg flex font-semibold text-gray-700 relative group">
            Upfront costs
            <Info className="w-4 h-4 mt-2 ml-1 text-gray-500 cursor-pointer" />
            <div className="absolute left-0 mt-6 w-80 bg-white rounded-xl shadow-xl p-4 text-sm hidden group-hover:block z-10 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2">Upfront Costs</h3>
              <ul className="space-y-2">
                <li><span className="font-semibold text-green-600">Land Department Fee:</span> 4% of property value + 580 AED admin fee</li>
                <li><span className="font-semibold text-green-700">Registration Fee:</span> 4,000 AED for properties over 500,000 AED + 5% VAT</li>
                <li><span className="font-semibold text-gray-600">Mortgage Registration Fee:</span> 0.25% of loan + 10 AED admin fee</li>
                <li><span className="font-semibold text-blue-600">Real Estate Agency Fee:</span> 2% of property value + 5% VAT</li>
                <li><span className="font-semibold text-purple-600">Valuation Fee:</span> 2,500 – 3,500 AED + 5% VAT</li>
                <li><span className="font-semibold text-cyan-600">Sales Progression Fee:</span> 4,200 AED</li>
              </ul>
            </div>
          </div>
          <span className="text-black font-bold">AED {formatNumber(upfrontCosts)}</span>
        </div>

        <div className="mb-8">
          <div className="block font-semibold mb-3 flex items-center justify-between">
            <div>
              Down payment<span className="ml-1 text-red-500">*</span> {DownPaymentPercentage.toFixed(0)}%
            </div>
            AED {formatNumber(state.DownPayment)}
          </div>


          <div className="mb-8">
            <Slider
              min={0}
              max={100}
              step={1}
              value={DownPaymentPercentage}
              onChange={(value) => {
                if (typeof value === "number") {
                  const clamped = Math.min(Math.max(value, downPaymentMinMax.min), downPaymentMinMax.max);
                  const newDownPayment = Math.round((state.Price * clamped) / 100);
                  setDownPaymentPercentage(clamped);
                  setState((prev) => ({
                    ...prev,
                    DownPayment: newDownPayment,
                  }));
                }
              }}
              trackStyle={{ backgroundColor: "#0e7490", height: 10 }}
              railStyle={{ backgroundColor: "#d1d5db", height: 10 }}
              handleStyle={{
                borderColor: "#0e7490",
                height: 30,
                width: 30,
                backgroundColor: "#fff",
                marginTop: -10,
                opacity: 1,
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-2 relative group">
            <label className="font-semibold">
              Would you like to finance your fees?
            </label>
            <Info className="w-4 h-4 text-gray-500 cursor-pointer" />
            <div className="absolute left-0 top-6 w-72 bg-white rounded-xl shadow-xl p-4 text-sm hidden group-hover:block z-10 transition-all duration-300">
              <p className="text-gray-600">
                Some banks will finance most of your property transaction fees through your monthly instalments
              </p>
            </div>
          </div>
          <button
            onClick={() =>
              setState((prev) => ({
                ...prev,
                ToggleFinancing: !prev.ToggleFinancing,
              }))
            }
            className={`w-12 h-6 flex items-center rounded-full p-1 ${state.ToggleFinancing ? "bg-blue-600" : "bg-gray-300"}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${state.ToggleFinancing ? "translate-x-6" : "translate-x-0"}`} />
          </button>
        </div>

        <div className="mb-8">
          <label className="block font-semibold mb-3 flex items-center justify-between">
            <div>Loan duration<span className="ml-1 text-red-500">*</span></div>
            <div>{state.LoanDuration} Years</div>
          </label>
          <Slider
            min={0}
            max={25}
            step={1}
            value={state.LoanDuration}
            onChange={(value) => {
              if (typeof value === "number") {
                const clampedValue = value < 5 ? 5 : value; // enforce min=5
                setState((prev) => ({
                  ...prev,
                  LoanDuration: clampedValue,
                }));
              }
            }}
            trackStyle={{ backgroundColor: '#0e7490', height: 10 }}
            railStyle={{ backgroundColor: '#d1d5db', height: 10 }}
            handleStyle={{
              borderColor: '#0e7490',
              height: 30,
              width: 30,
              backgroundColor: '#fff',
              marginTop: -10,
              opacity: 1,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          />
        </div>

        <div className="mb-8">
          <label className="mb-2 font-semibold">Interest rate</label>
          <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50 w-full mb-5">
            <MinusCircleIcon className="w-6 h-6 mx-2 text-ef-blue" onClick={decrement} />

            <input
              type="number"
              step={0.1}
              min={0.6}
              max={10.0}
              value={displayValueInterest}
              onChange={handleInterestChange}
              onBlur={handleInterestBlur}
              className="flex-1 px-4 py-3 bg-gray-50 text-black text-lg outline-none border-none"
            />

            <PlusCircleIcon className="w-6 h-6 mx-2 text-ef-blue" onClick={increment} />
            <div className="px-4 py-3 text-ef-blue font-medium text-lg border-l border-gray-300">
              %
            </div>

          </div>
        </div>
      </div>

      <div className="md:pl-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <button className="w-full btn">
              Start My Application
            </button>
            <button className="w-full btn btn-outlined-blue">
              Speak to a Mortgage Expert
            </button>
          </div>
          <div className="text-right">
            <h2 className="text-lg text-gray-600">Loan amount</h2>
            <p className="text-3xl font-bold text-ef-blue">{formatNumber(loanAmount)} AED</p>
          </div>
          <div className="text-right">
            <h2 className="text-lg text-gray-600">Monthly cost</h2>
            <p className="text-3xl font-bold text-ef-blue">{formatNumber(monthlyCost)} AED</p>
          </div>
          <hr className="border-gray-300" />
          <p className="text-sm text-gray-600">
            Estimated monthly payment based on a {formatNumber(loanAmount)} AED loan amount with a{" "}
            {state.InterestRate}% fixed interest rate for the entire duration of the loan
          </p>

        </div>
      </div>
    </div>
  );
}