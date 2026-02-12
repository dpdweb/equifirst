import React, { useState, useEffect } from 'react';

const RadialPaymentChart = ({ 
  principalInterest = 3850,
  lifeInsurance = 432,
  propertyInsurance = 250,
  showLegend = true,
  currency = 'AED'
}) => {
  const [animated, setAnimated] = useState(false);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const data = {
    principalInterest,
    lifeInsurance,
    propertyInsurance
  };

  const total = data.principalInterest + data.lifeInsurance + data.propertyInsurance;

  // Calculate percentages
  const percentages = {
    principalInterest: (data.principalInterest / total) * 100,
    lifeInsurance: (data.lifeInsurance / total) * 100,
    propertyInsurance: (data.propertyInsurance / total) * 100
  };

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Segment configuration with colors
  const segments = [
    {
      name: 'Principle & Interest',
      value: data.principalInterest,
      percentage: percentages.principalInterest,
      color: '#167a9a',
    },
    {
      name: 'Life Insurance',
      value: data.lifeInsurance,
      percentage: percentages.lifeInsurance,
      color: '#69b6d0',
    },
    {
      name: 'Property Insurance',
      value: data.propertyInsurance,
      percentage: percentages.propertyInsurance,
      color: '#e7efef',
    }
  ];

  return (
    <div className="bg-white w-full">
      {/* Total Payment Display */}
      <div className="m-8 text-center">
        <div className="text-4xl font-bold text-gray-800">
          {currency} {total.toLocaleString()}
        </div>
        <p className="text-gray-600 mt-2">Monthly Payment Breakdown</p>
      </div>

      {/* Horizontal Bar Chart */}
      <div className="mb-8">
        <div className="relative h-8 bg-gradient-to-r rounded-lg overflow-hidden shadow-sm border border-gray-100 flex"
             style={{
               background: `linear-gradient(to right, 
                 ${segments[0].color} 0%, 
                 ${segments[0].color} ${segments[0].percentage}%,
                 ${segments[1].color} ${segments[0].percentage}%,
                 ${segments[1].color} ${segments[0].percentage + segments[1].percentage}%,
                 ${segments[2].color} ${segments[0].percentage + segments[1].percentage}%,
                 ${segments[2].color} 100%)`
             }}>
          {segments.map((segment, index) => (
            <div
              key={segment.name}
              style={{ width: `${segment.percentage}%` }}
              className="h-full flex items-center justify-center text-white font-bold text-xs cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredSegment(index)}
              onMouseLeave={() => setHoveredSegment(null)}
              title={segment.name}
            >
              {segment.percentage > 8 && `${segment.percentage.toFixed(0)}%`}
            </div>
          ))}
        </div>
      </div>

      {/* Legend Section with Horizontal Bars */}
      {showLegend && (
        <div className="space-y-5">
          {segments.map((segment, index) => (
            <div
              key={segment.name}
              className="transition-all duration-300 ease-out"
              onMouseEnter={() => setHoveredSegment(index)}
              onMouseLeave={() => setHoveredSegment(null)}
            >
              {/* Label and Value */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full transition-all duration-300"
                    style={{ 
                      backgroundColor: segment.color,
                      opacity: hoveredSegment === null || hoveredSegment === index ? 1 : 0.4
                    }}
                  />
                  <span className={`font-medium transition-all duration-300 ${hoveredSegment === index ? 'text-gray-900 font-semibold' : 'text-gray-700'} ${hoveredSegment !== null && hoveredSegment !== index ? 'opacity-50' : ''}`}>
                    {segment.name}
                  </span>
                </div>
                <div className={`text-right transition-all duration-300 ${hoveredSegment === index ? 'font-bold text-gray-900' : 'text-gray-600'} ${hoveredSegment !== null && hoveredSegment !== index ? 'opacity-50' : ''}`}>
                  <span>{currency} {segment.value.toLocaleString()}</span>
                  <span className="ml-2 text-gray-500">({segment.percentage.toFixed(1)}%)</span>
                </div>
              </div>

              {/* Horizontal Bar */}
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    hoveredSegment === index ? 'shadow-lg' : ''
                  }`}
                  style={{
                    backgroundColor: segment.color,
                    width: `${animated ? segment.percentage : 0}%`,
                    opacity: hoveredSegment === null || hoveredSegment === index ? 1 : 0.3,
                    boxShadow: hoveredSegment === index ? `0 0 12px ${segment.color}` : 'none'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RadialPaymentChart;