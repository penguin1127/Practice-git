import React from 'react';
import { Link } from 'react-router-dom';

const MercenaryCard = ({ mercenary }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h4 className="text-lg font-bold">{mercenary.name}</h4>
      <p>{mercenary.position}</p>
      <p>{mercenary.age}세</p>
      <Link to={`/mercenary/${mercenary.id}`}>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          상세보기
        </button>
      </Link>
    </div>
  );
};

export default MercenaryCard;