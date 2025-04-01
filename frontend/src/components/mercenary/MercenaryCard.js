import React from 'react';

const MercenaryCard = ({ mercenary }) => {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h4 className="text-xl font-bold mb-2">{mercenary.name}</h4>
      <p className="text-sm text-gray-600 mb-2">포지션: {mercenary.position}</p>
      <p className="text-sm text-gray-600 mb-2">위치: {mercenary.location}</p>
      <p className="text-sm text-gray-600">경험: {mercenary.experience}</p>
    </div>
  );
};

export default MercenaryCard;