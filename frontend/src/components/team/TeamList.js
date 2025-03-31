import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamCard from './TeamCard';
import TeamFilter from './TeamFilter';
import Slider from '../common/Slider';

const TeamList = ({ teams }) => {
  const [selectedRegion, setSelectedRegion] = useState("전체");
  const [selectedFilter, setSelectedFilter] = useState("");
  const navigate = useNavigate();

  const handleResetFilters = () => {
    setSelectedRegion("전체");
    setSelectedFilter("");
  };

  // 필터링된 팀 목록
  const filteredTeams = teams.filter((team) => {
    const regionMatch = selectedRegion === "전체" || team.location.includes(selectedRegion);
    const filterMatch =
      selectedFilter === "" ||
      (selectedFilter === "마감 임박" && team.remaining > 0 && team.remaining <= 3) ||
      (selectedFilter === "신청 가능" && team.status === "신청 가능");

    return regionMatch && filterMatch;
  });

  const handleViewDetails = (postId) => {
    navigate(`/team-recruit/${postId}`); // 팀 모집 페이지로 이동
  };

  return (
    <div>
      {/* 필터 섹션 */}
      <TeamFilter
        selectedRegion={selectedRegion}
        selectedFilter={selectedFilter}
        onRegionChange={setSelectedRegion}
        onFilterChange={setSelectedFilter}
        onReset={handleResetFilters}
      />
      {/* 슬라이더 섹션 */}
      <Slider
        items={filteredTeams}
        itemsPerPage={3}
        renderItem={(team) => (
          <TeamCard
            key={team.id}
            team={team}
            onViewDetails={() => handleViewDetails(team.id)}
          />
        )}
      />
    </div>
  );
};

export default TeamList;