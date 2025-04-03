import React, { useState, useEffect } from 'react';
import matchPostDB from '../data/matchPostDB'; // 경기 모집 데이터

function MatchRecruitmentPage() {
  const [expandedMatchId, setExpandedMatchId] = useState(null);

  const handleExpand = (matchId) => {
    setExpandedMatchId((prevId) => (prevId === matchId ? null : matchId));
  };

  useEffect(() => {
    if (expandedMatchId !== null) {
      const element = document.getElementById(`match-${expandedMatchId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [expandedMatchId]);

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">경기 모집</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matchPostDB.matches.map((match) => (
          <div
            key={match.id}
            id={`match-${match.id}`}
            onClick={() => handleExpand(match.id)}
            className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 ${
              expandedMatchId === match.id ? 'col-span-3' : ''
            }`}
          >
            <h4 className="text-lg font-bold">{match.title}</h4>
            <p className="text-sm text-gray-600">위치: {match.location}</p>
            <p className="text-sm text-gray-600">시간: {match.time}</p>
            <p className="text-sm text-gray-600">남은 인원: {match.remaining}</p>
            {expandedMatchId === match.id && (
              <p className="text-sm text-gray-600 mt-4">{match.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchRecruitmentPage;