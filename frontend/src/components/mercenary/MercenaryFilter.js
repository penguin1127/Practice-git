import React, { useState } from 'react';
import RegionModal from '../common/RegionModal';

const MercenaryFilter = ({
  selectedPosition,
  selectedRegion,
  onPositionChange,
  onRegionChange,
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

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex space-x-4">
        {/* 포지션 필터 */}
        <select
          value={selectedPosition}
          onChange={(e) => onPositionChange(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="전체">전체 포지션</option>
          <option value="공격수">공격수</option>
          <option value="수비수">수비수</option>
          <option value="미드필더">미드필더</option>
          <option value="골키퍼">골키퍼</option>
        </select>

        {/* 지역 필터 버튼 */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="border p-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          {selectedRegion}
        </button>
      </div>

      {/* 필터 초기화 버튼 */}
      <button
        onClick={onReset}
        className="bg-blue-500 text-white px-4 py-2 rounded"
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

export default MercenaryFilter;