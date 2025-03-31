import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import PlayerFilter from './PlayerFilter';
import Slider from '../common/Slider';

const PlayerList = ({ players }) => {
  const [selectedGender, setSelectedGender] = useState("전체");
  const [selectedRegion, setSelectedRegion] = useState("전체");

  const handleResetFilters = () => {
    setSelectedGender("전체");
    setSelectedRegion("전체");
  };

  // 필터링된 선수 목록
  const filteredPlayers = players.filter((player) => {
    const genderMatch = selectedGender === "전체" || player.gender === selectedGender;
    const regionMatch = selectedRegion === "전체" || player.location.includes(selectedRegion);
    return genderMatch && regionMatch;
  });

  return (
    <div>
      {/* 필터 섹션 */}
      <PlayerFilter
        selectedGender={selectedGender}
        selectedRegion={selectedRegion}
        onGenderChange={setSelectedGender}
        onRegionChange={setSelectedRegion}
        onReset={handleResetFilters}
      />
      {/* 슬라이더 섹션 */}
      <Slider
        items={filteredPlayers}
        itemsPerPage={3}
        renderItem={(player) => <PlayerCard key={player.id} player={player} />}
      />
    </div>
  );
};

export default PlayerList;