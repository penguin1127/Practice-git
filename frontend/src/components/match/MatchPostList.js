import React, { useState, useEffect } from 'react';
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

  // 디버깅: matches 데이터 확인
  useEffect(() => {
    console.log('Matches:', matches); // matches 데이터 확인
  }, [matches]);

  // 필터링된 경기 모집 게시글 목록
  const filteredMatches = matches.filter((match) => {
    const statusMatch = selectedStatus === "전체" || match.status === selectedStatus;
    const locationMatch = selectedLocation === "전체" || match.location.includes(selectedLocation);
    return statusMatch && locationMatch;
  });

  // 디버깅: filteredMatches 데이터 확인
  useEffect(() => {
    console.log('Filtered Matches:', filteredMatches); // 필터링된 데이터 확인
  }, [filteredMatches]);

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
      {filteredMatches.length > 0 ? (
        <Slider
          items={filteredMatches}
          itemsPerPage={3}
          renderItem={(match) => <MatchPostCard key={match.id} match={match} />}
        />
      ) : (
        <p className="text-center text-gray-500 mt-4">경기 모집 게시글이 없습니다.</p>
      )}
    </div>
  );
};

export default MatchPostList;