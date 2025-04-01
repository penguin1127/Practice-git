import React from 'react';
import postsDB from '../data/postsDB';
import TeamRecruitCard from '../components/team/TeamRecruitCard';
import PostListPage from '../components/common/PostListPage';

const TeamRecruitPage = () => {
  return (
    <PostListPage
      title="팀 모집"
      postsDB={postsDB}
      CardComponent={TeamRecruitCard}
    />
  );
};

export default TeamRecruitPage;