import React from 'react';
import playerDB from '../data/playerDB';
import PlayerCard from '../components/player/PlayerCard';
import PostListPage from '../components/common/PostListPage';

const PersonalAdPage = () => {
  return (
    <PostListPage
      title="개인 지원"
      postsDB={playerDB.players}
      CardComponent={PlayerCard}
    />
  );
};

export default PersonalAdPage;