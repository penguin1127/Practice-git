import React, { useState } from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = ({ players, selectedGender, selectedRegion }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const playersPerPage = 3; // 한 페이지에 표시할 선수 수

  // 필터링된 선수 목록
  const filteredPlayers = players.filter((player) => {
    const genderMatch = selectedGender === "전체" || player.gender === selectedGender;
    const regionMatch = selectedRegion === "전체" || player.location.includes(selectedRegion);
    return genderMatch && regionMatch;
  });

  const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);
  const currentPlayers = filteredPlayers.slice(
    currentPage * playersPerPage,
    currentPage * playersPerPage + playersPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="relative">
      {/* 슬라이더 컨텐츠 */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentPage * 100}%)`,
        }}
      >
        {currentPlayers.map((player) => (
          <div key={player.id} className="flex-shrink-0 w-1/3 px-2">
            <PlayerCard player={player} />
          </div>
        ))}
      </div>

      {/* 이전 버튼 */}
      {currentPage > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full shadow-md"
        >
          ◀
        </button>
      )}

      {/* 다음 버튼 */}
      {currentPage < totalPages - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full shadow-md"
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default PlayerList;