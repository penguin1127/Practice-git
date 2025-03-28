import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [teamRecruitmentPosts, setTeamRecruitmentPosts] = useState([
    { id: 1, title: '서울 강남구 축구팀 모집', details: '포지션: FW, 날짜: 2025-04-01, 장소: 강남구 운동장' },
    { id: 2, title: '부산 해운대구 팀원 모집', details: '포지션: GK, 날짜: 2025-04-05, 장소: 해운대구 체육공원' },
    { id: 3, title: '대구 수성구 경기 모집', details: '포지션: MF, 날짜: 2025-04-10, 장소: 수성구 축구장' },
  ]);

  return (
    <DataContext.Provider value={{ teamRecruitmentPosts, setTeamRecruitmentPosts }}>
      {children}
    </DataContext.Provider>
  );
};