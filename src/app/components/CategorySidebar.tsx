'use client';
import React from 'react';

// Define the structure of a category
type Category = {
  id: number | string;
  name: string;
};

// Define the props type for the CategorySidebar
interface CategorySidebarProps {
  categories: Category[];
  activeId: number | string;
  onSelect: (id: number | string) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  activeId,
  onSelect,
}) => {
  return (
    <div className="w-full">
      {/* Sidebar for medium and larger screens */}
      <div className="hidden md:hidden border-r border-ef-blue border-r-2 p-4 overflow-y-auto h-full">
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`cursor-pointer p-3 pl-5 mb-1 rounded-lg transition duration-300 ease-in-out 
                hover:bg-ef-hover-blue hover:text-white hover:rounded-lg
                ${activeId === cat.id ? 'bg-ef-blue text-white rounded-lg' : 'text-gray-700'}`}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown for small screens */}
      <div className="block w-full px-4 py-2">
        <h2 className="mb-3">Pick a category, get your answers.</h2>
        <select
  value={activeId}
  onChange={(e) => onSelect(e.target.value)}
  className="w-full p-2 border-[3px] border-ef-blue rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-ef-blue"
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
