import React from 'react';

const PlayerCard = ({ player }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h4 className="text-lg font-bold">{player.name}</h4>
    <p className="text-gray-600">성별: {player.gender}</p>
    <p className="text-gray-600">위치: {player.location}</p>
    <p className="text-gray-600">포지션: {player.position}</p>
    <p className="text-gray-600">경력: {player.experience}</p>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      초대하기
    </button>
  </div>
);

export default PlayerCard;