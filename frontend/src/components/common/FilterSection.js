import React from 'react';
import FilterButton from '../FilterButton';

const FilterSection = ({
  selectedRegion,
  selectedFilter,
  onRegionClick,
  onFilterSelect,
  onResetFilters,
}) => (
  <div className="flex items-center space-x-4 mb-4">
    <button
      onClick={onRegionClick}
      className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 flex items-center"
    >
      {selectedRegion}
      <svg
        className="w-4 h-4 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {["마감 임박", "신청 가능"].map((filter) => (
      <FilterButton
        key={filter}
        label={filter}
        isActive={selectedFilter === filter}
        onClick={() => onFilterSelect(filter)}
      />
    ))}
    <button
      onClick={onResetFilters}
      className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 ml-4"
    >
      초기화
    </button>
  </div>
);

export default FilterSection;