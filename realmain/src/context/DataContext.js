import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [teamRecruitmentPosts, setTeamRecruitmentPosts] = useState([
    { id: 1, title: '서울 강남구 축구팀 모집', details: '포지션: FW, 날짜: 2025-04-01' },
    { id: 2, title: '부산 해운대구 팀원 모집', details: '포지션: GK, 날짜: 2025-04-05' },
  ]);

  const [individualSupportPosts, setIndividualSupportPosts] = useState([
    { id: 1, name: '김철수', details: '포지션: FW, 지역: 서울 강남구' },
    { id: 2, name: '이영희', details: '포지션: GK, 지역: 부산 해운대구' },
  ]);

  const [reviewPosts, setReviewPosts] = useState([
    { id: 1, reviewer: '김철수', review: '서울 강남구 경기에서 팀워크가 정말 좋았습니다!' },
    { id: 2, reviewer: '이영희', review: '부산 해운대구 경기에서 골키퍼가 정말 대단했어요!' },
  ]);

  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 기본값: 비로그인 상태

  return (
    <DataContext.Provider
      value={{
        teamRecruitmentPosts,
        setTeamRecruitmentPosts,
        individualSupportPosts,
        setIndividualSupportPosts,
        reviewPosts,
        setReviewPosts,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};