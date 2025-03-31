import React, { useState } from 'react';
import MatchPostCard from './MatchPostCard';
import MatchPostFilter from './MatchPostFilter';
import Slider from '../common/Slider';

const MatchPostList = ({ matches }) => {
  const [selectedStatus, setSelectedStatus] = useState("전체");
  const [selectedLocation, setSelectedLocation] = useState("전체");

  const handleResetFilters = () => {
    setSelectedStatus("전체");
    setSelectedLocation("전체");
  };

  // 필터링된 경기 모집 게시글 목록
  const filteredMatches = matches.filter((match) => {
    const statusMatch = selectedStatus === "전체" || match.status === selectedStatus;
    const locationMatch = selectedLocation === "전체" || match.location.includes(selectedLocation);
    return statusMatch && locationMatch;
  });

  return (
    <div>
      {/* 필터 섹션 */}
      <MatchPostFilter
        selectedStatus={selectedStatus}
        selectedLocation={selectedLocation}
        onStatusChange={setSelectedStatus}
        onLocationChange={setSelectedLocation}
        onReset={handleResetFilters}
      />

      {/* 슬라이더 섹션 */}
      <Slider
        items={filteredMatches}
        itemsPerPage={3}
        renderItem={(match) => <MatchPostCard key={match.id} match={match} />}
      />
    </div>
  );
};

export default MatchPostList;