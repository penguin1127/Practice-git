import React, { useState } from 'react';
import RegionModal from '../common/RegionModal';

const TeamFilter = ({
  selectedRegion,
  selectedFilter,
  searchKeyword,
  onRegionChange,
  onFilterChange,
  onSearchChange,
  onReset,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const regions = [
    '전체 지역',
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '세종',
    '경기',
    '강원',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
  ];

  const filters = ['전체 상태', '마감 임박', '모집 중'];

  return (
    <div className="mb-4 flex items-center space-x-4">
      {/* 검색창 */}
      <input
        type="text"
        value={searchKeyword}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="팀 이름 검색"
        className="border p-2 rounded w-1/3" // 검색창 크기를 줄임
      />

      {/* 지역 필터 버튼 */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="border p-2 rounded bg-gray-200 hover:bg-gray-300"
      >
        {selectedRegion}
      </button>

      {/* 상태 필터 */}
      <select
        value={selectedFilter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="border p-2 rounded"
      >
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>

      {/* 초기화 버튼 */}
      <button
        onClick={onReset}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        초기화
      </button>

      {/* 지역 선택 모달 */}
      <RegionModal
        isOpen={isModalOpen}
        regions={regions}
        onSelect={(region) => {
          onRegionChange(region);
          setIsModalOpen(false);
        }}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TeamFilter;