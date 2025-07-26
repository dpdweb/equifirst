"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // ✅ Adjust based on your icon source

const FaqList = ({ faqs, currentPage, totalPages, onPageChange }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggle = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-10/12 p-6 mx-auto">
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200">
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-semibold text-ef-blue">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 text-ef-blue ${
                  openItem === faq.id ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItem === faq.id ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="text-gray-600 pb-4">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-ef-blue text-white"
                : "bg-gray-200 text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FaqList;
