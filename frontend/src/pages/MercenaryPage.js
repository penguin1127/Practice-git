import React from 'react';
import mercenaryDB from '../data/mercenaryDB';
import MercenaryCard from '../components/mercenary/MercenaryCard';
import PostListPage from '../components/common/PostListPage';

const MercenaryPage = () => {
  return (
    <PostListPage
      title="용병 모집"
      postsDB={mercenaryDB.mercenaries}
      CardComponent={MercenaryCard}
    />
  );
};

export default MercenaryPage;