import React from 'react';
import Card from '../common/Card';

const PlayerCard = ({ player }) => (
  <Card
    title={
      <a
        href={`/player-profile/${player.id}`} // 선수 프로필 페이지로 이동
        className="text-lg font-bold cursor-pointer hover:underline"
      >
        {player.name}
      </a>
    }
    details={[
      `성별: ${player.gender}`,
      `위치: ${player.location}`,
      `포지션: ${player.position}`,
      `경력: ${player.experience}`,
    ]}
    actions={
      <a
        href={`/player-intro/${player.id}`} // 선수 소개글 페이지로 이동
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        상세보기
      </a>
    }
  />
);

export default PlayerCard;