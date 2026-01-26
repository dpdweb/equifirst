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
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

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

  // SVG circle parameters
  const size = 300;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  // Calculate segment offsets (starting from top, going clockwise)
  const segments = [
    {
      name: 'Principle & Interest',
      value: data.principalInterest,
      percentage: percentages.principalInterest,
      color: '#167a9a',
      offset: 0
    },
    {
      name: 'Life Insurance',
      value: data.lifeInsurance,
      percentage: percentages.lifeInsurance,
      color: '#69b6d0',
      offset: percentages.principalInterest
    },
    {
      name: 'Property Insurance',
      value: data.propertyInsurance,
      percentage: percentages.propertyInsurance,
      color: '#e7efef',
      offset: percentages.principalInterest + percentages.lifeInsurance
    }
  ];

  const getStrokeDasharray = (percentage: number) => {
    const segmentLength = (percentage / 100) * circumference;
    return `${segmentLength} ${circumference - segmentLength}`;
  };

  const getStrokeDashoffset = (offset: number) => {
    const offsetLength = (offset / 100) * circumference;
    return -offsetLength;
  };

  const handleMouseMove = (e: React.MouseEvent<SVGCircleElement>, index: number) => {
    setHoveredSegment(index);
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    
      <div className="bg-white max-w-md w-full ">
        {/* Chart Container */}
        <div className="relative flex items-center justify-center mb-8">
          <svg 
            width={size} 
            height={size} 
            className="transform -rotate-90"
            onMouseLeave={() => setHoveredSegment(null)}
          >
            {/* Background circle */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth={strokeWidth}
            />
            
            {/* Animated segments */}
            {segments.map((segment, index) => (
              <circle
                key={segment.name}
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth={strokeWidth}
                strokeDasharray={getStrokeDasharray(segment.percentage)}
                strokeDashoffset={getStrokeDashoffset(segment.offset)}
                strokeLinecap="butt"
                className="transition-all duration-1000 ease-out cursor-pointer"
                style={{
                  opacity: animated ? 1 : 0,
                  strokeDasharray: animated 
                    ? getStrokeDasharray(segment.percentage)
                    : `0 ${circumference}`,
                  filter: hoveredSegment === index ? 'brightness(1.1)' : 'none'
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
              />
            ))}
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-5xl font-bold text-gray-700">
              {currency} {total.toLocaleString()}
            </div>
            <h2 className="text-gray-600 text-lg mt-2">Monthly Payment</h2>
          </div>

          {/* Hover Tooltip */}
          {hoveredSegment !== null && (
            <div
              className="absolute pointer-events-none bg-gray-100 text-black px-4 py-3 rounded-lg shadow-lg z-10 transition-all"
              style={{
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y}px`,
                transform: 'translate(-50%, -100%)'
              }}
            >
              <div className="text-xs font-medium opacity-90 mb-1">
                {segments[hoveredSegment].name}
              </div>
              <div className="text-lg font-bold">
                {currency} {segments[hoveredSegment].value.toLocaleString()}
              </div>
              {/* <div className="text-xs opacity-75 mt-1">
                {segments[hoveredSegment].percentage.toFixed(1)}% of total
              </div> */}
            </div>
          )}
        </div>

        {/* Legend - conditional rendering */}
        {showLegend && (
          <div className="space-y-3">
            {segments.map((segment, index) => (
              <div
                key={segment.name}
                className="flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer hover:bg-gray-50"
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="text-gray-700 font-medium">{segment.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">
                    {currency} {segment.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {segment.percentage.toFixed(1)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

  );
};

export default RadialPaymentChart;