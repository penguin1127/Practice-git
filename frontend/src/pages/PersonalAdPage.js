import React, { useState, useEffect } from 'react';
import playerDB from '../data/playerDB'; // 개인 지원 데이터

function PersonalAdPage() {
  const [expandedPlayerId, setExpandedPlayerId] = useState(null);

  const handleExpand = (playerId) => {
    setExpandedPlayerId((prevId) => (prevId === playerId ? null : playerId));
  };

  useEffect(() => {
    if (expandedPlayerId !== null) {
      const element = document.getElementById(`player-${expandedPlayerId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [expandedPlayerId]);

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">개인 지원</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {playerDB.players.map((player) => (
          <div
            key={player.id}
            id={`player-${player.id}`}
            onClick={() => handleExpand(player.id)}
            className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 ${
              expandedPlayerId === player.id ? 'col-span-3' : ''
            }`}
          >
            <h4 className="text-lg font-bold">{player.name}</h4>
            <p className="text-sm text-gray-600">포지션: {player.position}</p>
            <p className="text-sm text-gray-600">위치: {player.location}</p>
            <p className="text-sm text-gray-600">경험: {player.experience}년</p>
            {expandedPlayerId === player.id && (
              <p className="text-sm text-gray-600 mt-4">{player.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalAdPage;