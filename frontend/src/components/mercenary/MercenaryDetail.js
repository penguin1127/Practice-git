import React from 'react';
import { useParams } from 'react-router-dom';
import mercenaryDB from '../../data/mercenaryDB';

const MercenaryDetail = () => {
  const { id } = useParams();
  const mercenary = mercenaryDB.mercenaries.find((merc) => merc.id === parseInt(id));

  if (!mercenary) {
    return <p>용병 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold mb-4">{mercenary.name}</h2>
      <p><strong>포지션:</strong> {mercenary.position}</p>
      <p><strong>나이:</strong> {mercenary.age}세</p>
      <p><strong>소개:</strong> {mercenary.description}</p>
    </div>
  );
};

export default MercenaryDetail;