import React, { useState, useEffect } from 'react';
import mercenaryDB from '../data/mercenaryDB'; // 용병 데이터

function MercenaryPage() {
  const [expandedMercenaryId, setExpandedMercenaryId] = useState(null);

  const handleExpand = (mercenaryId) => {
    setExpandedMercenaryId((prevId) => (prevId === mercenaryId ? null : mercenaryId));
  };

  useEffect(() => {
    if (expandedMercenaryId !== null) {
      const element = document.getElementById(`mercenary-${expandedMercenaryId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [expandedMercenaryId]);

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">용병 목록</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mercenaryDB.mercenaries.map((mercenary) => (
          <div
            key={mercenary.id}
            id={`mercenary-${mercenary.id}`}
            onClick={() => handleExpand(mercenary.id)}
            className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 ${
              expandedMercenaryId === mercenary.id ? 'col-span-3' : ''
            }`}
          >
            <h4 className="text-lg font-bold">{mercenary.name}</h4>
            <p className="text-sm text-gray-600">포지션: {mercenary.position}</p>
            <p className="text-sm text-gray-600">위치: {mercenary.location}</p>
            <p className="text-sm text-gray-600">경험: {mercenary.experience}년</p>
            {expandedMercenaryId === mercenary.id && (
              <p className="text-sm text-gray-600 mt-4">{mercenary.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MercenaryPage;