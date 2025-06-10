'use client'
import { useEffect, useState, useRef } from 'react';

const ScrollHighlight = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const pointRefs = useRef([]);
  
  const points = [
    {
      title: "First Point",
      description: "Description for the first feature point",
      image: "/images/image1.jpg"
    },
    {
      title: "Second Point",
      description: "Description for the second feature point",
      image: "/images/image2.jpg"
    },
    {
      title: "Third Point",
      description: "Description for the third feature point",
      image: "/images/image3.jpg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY - containerTop;
      
      // Calculate active index based on scroll position
      const newIndex = Math.min(
        points.length - 1,
        Math.max(0, Math.floor(scrollPosition / window.innerHeight))
      );
      
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="min-h-[300vh] relative flex"
    >
      {/* Text Content */}
      <div className="w-1/2 pt-24 px-8">
        {points.map((point, index) => (
          <div 
            key={index}
            ref={el => pointRefs.current[index] = el}
            className={`flex flex-col justify-center transition-all duration-500 ${
              activeIndex === index 
                ? 'opacity-100 scale-105' 
                : 'opacity-40 scale-100'
            }`}
          >
            <div className="max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-full bg-blue-500 mb-6 flex items-center justify-center text-white">
                {index + 1}
              </div>
              <h2 className="text-3xl font-bold mb-4">{point.title}</h2>
              <p className="text-gray-600">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Sticky Image Container */}
      <div className="w-1/2 sticky top-0 h-screen">
        <div className="relative h-full w-full">
          {points.map((point, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                activeIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Next.js Image component for optimized images */}
              <img
                src={point.image}
                alt={point.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollHighlight;