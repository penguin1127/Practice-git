import React from 'react';
import matchPostDB from '../data/matchPostDB';
import MatchPostCard from '../components/match/MatchPostCard'; // 올바른 컴포넌트 이름으로 수정
import PostListPage from '../components/common/PostListPage';

const MatchRecruitmentPage = () => {
  return (
    <PostListPage
      title="경기 모집"
      postsDB={matchPostDB.matches}
      CardComponent={MatchPostCard} // 올바른 컴포넌트 이름으로 수정
    />
  );
};

export default MatchRecruitmentPage;