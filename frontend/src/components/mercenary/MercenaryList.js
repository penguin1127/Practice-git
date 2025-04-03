import React from "react";

function MercenaryList({ mercenaries }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mercenaries.map((mercenary) => (
        <div
          key={mercenary.id}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <h4 className="text-lg font-bold mb-2">{mercenary.name}</h4>
          <p className="text-sm text-gray-600 mb-1">포지션: {mercenary.position}</p>
          <p className="text-sm text-gray-600 mb-2">지역: {mercenary.location || "정보 없음"}</p>
          <p className="text-sm text-gray-600 mb-2">경험: {mercenary.experience}년</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            상세보기
          </button>
        </div>
      ))}
    </div>
  );
}

export default MercenaryList;