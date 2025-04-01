import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamCard from './TeamCard';
import TeamFilter from './TeamFilter';
import Slider from '../common/Slider';

const TeamList = ({ teams }) => {
  const [selectedRegion, setSelectedRegion] = useState('전체 지역');
  const [selectedFilter, setSelectedFilter] = useState('전체 상태');
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleResetFilters = () => {
    setSelectedRegion('전체 지역');
    setSelectedFilter('전체 상태');
    setSearchKeyword('');
  };

  // 필터링된 팀 목록
  const filteredTeams = teams.filter((team) => {
    const regionMatch =
      selectedRegion === '전체 지역' || team.location.includes(selectedRegion);
    const filterMatch =
      selectedFilter === '전체 상태' ||
      (selectedFilter === '마감 임박' && team.remaining > 0 && team.remaining <= 3) ||
      (selectedFilter === '모집 중' && team.status === '모집 중');
    const keywordMatch =
      searchKeyword.trim() === '' || // 공백 제거 후 비교
      (team.title && team.title.toLowerCase().includes(searchKeyword.trim().toLowerCase())); // `title`로 검색

    // 디버깅 로그 추가
    console.log('팀 제목:', team.title || '제목 없음'); // 제목이 없을 경우 '제목 없음' 출력
    console.log('지역 조건:', regionMatch);
    console.log('상태 조건:', filterMatch);
    console.log('검색 조건:', keywordMatch);

    return regionMatch && filterMatch && keywordMatch;
  });

  // 디버깅 로그
  console.log('검색 키워드:', searchKeyword);
  console.log('필터링 전 팀 목록:', teams);
  console.log('필터링된 팀 목록:', filteredTeams);

  const handleViewDetails = (postId) => {
    navigate(`/team-recruit/${postId}`); // 팀 모집 페이지로 이동
  };

  return (
    <div>
      {/* 필터 섹션 */}
      <TeamFilter
        selectedRegion={selectedRegion}
        selectedFilter={selectedFilter}
        searchKeyword={searchKeyword}
        onRegionChange={setSelectedRegion}
        onFilterChange={setSelectedFilter}
        onSearchChange={setSearchKeyword}
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