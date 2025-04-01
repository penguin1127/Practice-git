import React, { useState } from 'react';
import FilterButton from '../FilterButton';

const FilterSection = ({
  selectedRegion,
  selectedFilter,
  onRegionSelect,
  onFilterSelect,
  onResetFilters,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  const regions = [
    '모든 지역',
    '서울',
    '경기',
    '인천',
    '강원',
    '대전/세종',
    '충남',
    '충북',
    '대구',
    '경북',
    '부산',
    '울산',
    '경남',
  ];

  const handleRegionClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleRegionSelect = (region) => {
    onRegionSelect(region); // 선택한 지역 전달
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      {/* 지역 선택 버튼 */}
      <button
        onClick={handleRegionClick}
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

      {/* 필터 버튼 */}
      {['마감 임박', '신청 가능'].map((filter) => (
        <FilterButton
          key={filter}
          label={filter}
          isActive={selectedFilter === filter}
          onClick={() => onFilterSelect(filter)}
        />
      ))}

      {/* 초기화 버튼 */}
      <button
        onClick={onResetFilters}
        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 ml-4"
      >
        초기화
      </button>

      {/* 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-xl font-bold mb-4">지역 선택</h2>
            <ul className="space-y-2">
              {regions.map((region) => (
                <li key={region}>
                  <button
                    onClick={() => handleRegionSelect(region)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    {region}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(false)} // 모달 닫기
              className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;