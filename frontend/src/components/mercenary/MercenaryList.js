import React, { useState } from 'react';
import Slider from '../common/Slider'; // 슬라이더 컴포넌트
import MercenaryCard from './MercenaryCard'; // 용병 카드 컴포넌트
import MercenaryFilter from './MercenaryFilter'; // 필터 컴포넌트

const MercenaryList = ({ mercenaries }) => {
  const [selectedPosition, setSelectedPosition] = useState("전체");
  const [selectedRegion, setSelectedRegion] = useState("전체");

  const handleResetFilters = () => {
    setSelectedPosition("전체");
    setSelectedRegion("전체");
  };

  // 필터링된 용병 목록
  const filteredMercenaries = mercenaries.filter((mercenary) => {
    const positionMatch =
      selectedPosition === "전체" || mercenary.position === selectedPosition;
    const regionMatch =
      selectedRegion === "전체" || mercenary.location.includes(selectedRegion);

    return positionMatch && regionMatch;
  });

  return (
    <div>
      {/* 필터 섹션 */}
      <MercenaryFilter
        selectedPosition={selectedPosition}
        selectedRegion={selectedRegion}
        onPositionChange={setSelectedPosition}
        onRegionChange={setSelectedRegion}
        onReset={handleResetFilters}
      />
      {/* 슬라이더 섹션 */}
      <Slider
        items={filteredMercenaries}
        itemsPerPage={3}
        renderItem={(mercenary) => (
          <MercenaryCard key={mercenary.id} mercenary={mercenary} />
        )}
      />
    </div>
  );
};

export default MercenaryList;