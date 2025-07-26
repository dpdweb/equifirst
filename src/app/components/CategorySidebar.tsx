"use client";
import React from "react";

const CategorySidebar = ({ categories, activeId, onSelect }) => {
  return (
    <div className="w-2/12">
    <div className="border-r border-ef-blue border-r-2 p-4 overflow-y-auto h-full">
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li
  key={cat.id}
  onClick={() => onSelect(cat.id)}
  className={`cursor-pointer p-2 rounded-lg transition duration-300 ease-in-out 
    hover:bg-ef-hover-blue hover:text-white hover:rounded-lg
    ${activeId === cat.id ? "bg-ef-blue text-white rounded-lg" : "text-gray-700"}`}
>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
    <div className="block md:hidden w-full px-4 py-2">
  <select
    value={activeId}
    onChange={(e) => onSelect(e.target.value)}
    className="w-full p-2 border border-ef-blue rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-ef-blue"
  >
    {categories.map((cat) => (
      <option key={cat.id} value={cat.id}>
        {cat.name}
      </option>
    ))}
  </select>
</div>
    </div>
  );
};

export default CategorySidebar;