import React from 'react';

const FilterButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${
      isActive ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
    }`}
  >
    {label}
  </button>
);

export default FilterButton;