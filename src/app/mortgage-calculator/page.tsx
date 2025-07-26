'use client';
import { useState, useEffect } from 'react';

export default function MortgageCalculator() {
  const [state, setState] = useState({
    Price: 1200000,
    DownPayment: 240000,
    LoanDuration: 25,
    InterestRate: 2.5,
    LifeInsurance: 0.2298,
    PropertyInsurance: 0.041,
    ActiveProduct: 'Resident',
    ToggleFinancing: false,
  });

  const [loanAmount, setLoanAmount] = useState(960000);
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [upfrontCosts, setUpfrontCosts] = useState(0);

  const formatNumber = (val: number) =>
    val.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const handleResidencyClick = (product: string) => {
    let updatedRate = state.InterestRate;

    if (product === 'National') updatedRate = 2.5;
    else if (product === 'Resident') updatedRate = 2.5;
    else if (product === 'NonResident') updatedRate = 4.9;

    setState(prev => ({
      ...prev,
      ActiveProduct: product,
      InterestRate: updatedRate,
    }));
  };

  useEffect(() => {
    const Months = state.LoanDuration * 12;
    const Rate = (state.InterestRate / 100) / 12;
    let Principal = state.Price - state.DownPayment;

    if (state.ToggleFinancing) {
      Principal += Principal * 0.06;
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
  ]);

  return (
    <div className="ef-section-style-3 grid grid-cols-2 mx-auto p-6 bg-ef-dark-blue-2 rounded-lg">
      {/* Residency Status */}
      <div className="pr-12">

<div className="mb-8">
  <div className="mb-2 font-semibold">
    Residency status <span className="text-red-500">*</span>
  </div>
  <div className="flex gap-2 items-center justify-between">
    {['Resident', 'National', 'NonResident'].map(status => (
      <button
        key={status}
        onClick={() => handleResidencyClick(status)}
        className={`flex-1 px-4 py-2 rounded text-center ${
          state.ActiveProduct === status ? 'btn' : 'btn btn-outlined-blue'
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
    if (!isNaN(raw)) {
      setState(prev => ({
        ...prev,
        Price: +raw,
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
        <div className="text-lg font-semibold text-gray-700">Upfront costs </div>
        <span className="text-black font-bold">AED {formatNumber(upfrontCosts)}</span>
      </div>

      <div className="mb-8">
        <div className="block font-semibold mb-3 flex items-center justify-between"><div>Down payment<span className="ml-1 text-red-500">*</span></div> AED {formatNumber(state.DownPayment)}</div>
        <input
          type="range"
          min={10}
          max={state.Price}
          step={10000}
          value={state.DownPayment}
          onChange={(e) =>
            setState(prev => ({
              ...prev,
              DownPayment: +e.target.value,
            }))
          }
          className="w-full appearance-none h-3 rounded-full slider-thumb"
          style={{
            background: `linear-gradient(to right, #0e7490 0%, #0e7490 ${(state.DownPayment / state.Price) * 100}%, #d1d5db ${(state.DownPayment / state.Price) * 100}%, #d1d5db 100%)`,
          }}
        />
      </div>

      <div className="mb-8 flex items-center justify-between">
        <label className="font-semibold">Would you like to finance your fees?</label>
        <button
          onClick={() =>
            setState(prev => ({
              ...prev,
              ToggleFinancing: !prev.ToggleFinancing,
            }))
          }
          className={`w-12 h-6 flex items-center rounded-full p-1 ${
            state.ToggleFinancing ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
              state.ToggleFinancing ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      <div className="mb-8">
        <label className="block font-semibold  mb-3 flex items-center justify-between"><div>Loan duration<span className="ml-1 text-red-500">*</span></div>  <div>{state.LoanDuration} Years</div></label>
        <input
          type="range"
          min={0}
          max={state.Price}
          step={10000}
          value={state.LoanDuration}
          onChange={(e) =>
            setState(prev => ({
              ...prev,
              LoanDuration: +e.target.value,
            }))
          }
          className="w-full appearance-none h-3 rounded-full slider-thumb"
          style={{
            background: `linear-gradient(to right, #0e7490 0%, #0e7490 ${(state.LoanDuration / state.Price) * 100}%, #d1d5db ${(state.LoanDuration / state.Price) * 100}%, #d1d5db 100%)`,
          }}
        />
      </div>
        
      <div className="mb-8">
        <label className="mb-2 font-semibold">Interest rate</label>
        <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50 w-full mb-5">
          <input
            type="number"
            value={state.InterestRate}
          onChange={(e) =>
            setState(prev => ({
              ...prev,
              InterestRate: +e.target.value,
            }))
          }
            className="flex-1 px-4 py-3 bg-gray-50 text-black text-lg outline-none"
          />
          <div className="px-4 py-3 text-ef-blue font-medium text-lg border-l border-gray-300">
            %
          </div>
        </div>
      </div>

      </div>

      <div className="pl-12">

        

      {/* Loan Summary */}
      {/* <div className="mb-6">
        <div className="text-lg font-semibold text-gray-700">Loan amount <span className="text-blue-600">{formatNumber(loanAmount)} AED</span></div>
        <div className="text-lg font-semibold text-gray-700">Monthly cost <span className="text-blue-600">{formatNumber(monthlyCost)} AED</span></div>
        <div className="text-sm text-gray-600 mt-1">* Estimated with insurance + fees</div>
      </div> */}


      {/* Action Buttons */}
      {/* <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Start My Application</button>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded">Speak to a Mortgage Expert</button>
      </div> */}

      <div className="space-y-8">
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
          Estimated monthly payment based on a {formatNumber(loanAmount)} AED loan amount with a
          2.5% fixed interest rate for the entire duration of the loan
        </p>
        <div className="space-y-4">
          <button className="w-full btn">
            Start My Application
          </button>
          <button
            variant="outline"
            className="w-full btn btn-outlined-blue"
          >
            Speak to a Mortgage Expert
          </button>
        </div>
      </div>

    </div>

          
        
      </div>



      

  );
}
