'use client';
import { useState, useEffect } from 'react';

export default function MortgageCalculator() {
  // State for all calculator values
  const [residencyStatus, setResidencyStatus] = useState('UAE Resident');
  const [propertyValue, setPropertyValue] = useState(1200000);
  const [downPayment, setDownPayment] = useState(240000);
  const [financeFees, setFinanceFees] = useState(false);
  const [loanDuration, setLoanDuration] = useState(18);
  const [interestRate, setInterestRate] = useState(2.5);
  
  // Calculated values
  const [upfrontCosts, setUpfrontCosts] = useState(87215);
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyCost, setMonthlyCost] = useState(0);

  // Calculate values whenever inputs change
  useEffect(() => {
    // Calculate loan amount (property value minus down payment)
    const newLoanAmount = propertyValue - downPayment;
    setLoanAmount(newLoanAmount);
    
    // Calculate monthly payment using mortgage formula
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanDuration * 12;
    
    if (monthlyInterestRate > 0) {
      const numerator = newLoanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
      const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
      const payment = numerator / denominator;
      setMonthlyCost(Math.round(payment));
    } else {
      // Handle zero interest rate
      setMonthlyCost(Math.round(newLoanAmount / numberOfPayments));
    }
    
    // Calculate upfront costs (simplified calculation)
    const calculatedUpfrontCosts = Math.round(
      0.04 * propertyValue + // 4% of property value for fees
      5000 + // Fixed fees
      (financeFees ? 0.01 * propertyValue : 0) // Additional fees if financing fees
    );
    setUpfrontCosts(calculatedUpfrontCosts);
    
  }, [propertyValue, downPayment, loanDuration, interestRate, financeFees]);

  // Format currency for display
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Mortgage Calculator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your mortgage payments and understand the costs associated with your property purchase.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Residency Status */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Residency status *</h2>
              <div className="flex flex-wrap gap-4">
                {['UAE Resident', 'UAE National', 'Non-Resident'].map((status) => (
                  <button
                    key={status}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      residencyStatus === status
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setResidencyStatus(status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Property Value */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Property value *</h2>
                <div className="text-xl font-bold text-blue-600">
                  {formatCurrency(propertyValue)}
                </div>
              </div>
              
              <div className="relative mb-2">
                <input
                  type="range"
                  min="500000"
                  max="5000000"
                  step="50000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="absolute text-xs text-gray-500 left-0 top-3">500,000 AED</div>
                <div className="absolute text-xs text-gray-500 right-0 top-3">5,000,000 AED</div>
              </div>
            </div>
            
            {/* Down Payment */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Down payment *</h2>
                <div className="text-xl font-bold text-blue-600">
                  {formatCurrency(downPayment)}
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({(downPayment / propertyValue * 100).toFixed(0)}%)
                  </span>
                </div>
              </div>
              
              <div className="relative mb-2">
                <input
                  type="range"
                  min={0.1 * propertyValue}
                  max={0.9 * propertyValue}
                  step="10000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="absolute text-xs text-gray-500 left-0 top-3">
                  {formatCurrency(0.1 * propertyValue)}
                </div>
                <div className="absolute text-xs text-gray-500 right-0 top-3">
                  {formatCurrency(0.9 * propertyValue)}
                </div>
              </div>
            </div>
            
            {/* Upfront Costs */}
            <div className="bg-gray-50 rounded-xl p-5 mb-8 border border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-700">Upfront costs</h3>
                <div className="text-xl font-bold text-gray-800">
                  {formatCurrency(upfrontCosts)}
                </div>
              </div>
            </div>
            
            {/* Finance Fees */}
            <div className="mb-8">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="financeFees"
                  checked={financeFees}
                  onChange={(e) => setFinanceFees(e.target.checked)}
                  className="w-5 h-5 accent-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="financeFees" className="ml-3 text-gray-700 font-medium">
                  Would you like to finance your fees?
                </label>
              </div>
            </div>
            
            {/* Loan Duration */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Loan duration *</h2>
                <div className="text-xl font-bold text-blue-600">
                  {loanDuration} Years
                </div>
              </div>
              
              <div className="relative mb-2">
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={loanDuration}
                  onChange={(e) => setLoanDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="absolute text-xs text-gray-500 left-0 top-3">5 Years</div>
                <div className="absolute text-xs text-gray-500 right-0 top-3">30 Years</div>
              </div>
            </div>
            
            {/* Interest Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Interest rate 1werwerwer</h2>
                <div className="text-xl font-bold text-blue-600">
                  {interestRate} %
                </div>
              </div>
              
              <div className="relative mb-2">
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="absolute text-xs text-gray-500 left-0 top-3">1%</div>
                <div className="absolute text-xs text-gray-500 right-0 top-3">10%</div>
              </div>
            </div>
            
            {/* Loan Amount & Monthly Cost */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-gray-600 mb-2">Loan amount</div>
                <div className="text-2xl font-bold text-blue-700">
                  {formatCurrency(loanAmount)}
                </div>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="text-gray-600 mb-2">Monthly cost</div>
                <div className="text-2xl font-bold text-green-700">
                  {formatCurrency(monthlyCost)}
                </div>
              </div>
            </div>
            
            {/* Explanation */}
            <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-4 mb-8">
              Estimated monthly payment based on a {formatCurrency(loanAmount)} loan amount 
              with a {interestRate}% fixed interest rate for the entire duration of the loan
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg">
                Start My Application
              </button>
              <button className="flex-1 bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-6 rounded-lg border-2 border-blue-600 transition-all">
                Speak to a Mortgage Expert
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>* Required fields</p>
          <p className="mt-2">Note: This calculator provides estimates only. Actual terms may vary.</p>
        </div>
      </div>
    </div>
  );
}