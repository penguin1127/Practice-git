import React, { useState } from 'react';
import ProfileSection from './ProfileSection';
import CalendarSection from './CalendarSection';

const MainContent = () => {
  const [selectedMenu, setSelectedMenu] = useState('내 정보');

  const renderContent = () => {
    switch (selectedMenu) {
      case '내 정보':
        return <ProfileSection />;
      case '캘린더':
        return <CalendarSection />;
      case '나의 팀 관리':
        return <div>⚽ 나의 팀 관리 콘텐츠</div>;
      case '경기 모집 관리':
        return <div>📋 경기 모집 관리 콘텐츠</div>;
      case '팀 캘린더':
        return <div>🗓️ 팀 캘린더 콘텐츠</div>;
      case '내 용병 신청':
        return <div>내 용병 신청 콘텐츠</div>;
      case '설정':
        return <div>설정 콘텐츠</div>;
      case '공지사항':
        return <div>공지사항 콘텐츠</div>;
      default:
        return <div>메뉴를 선택해주세요.</div>;
    }
  };

  return (
    <div className="flex">
      <Sidebar onMenuSelect={setSelectedMenu} />
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default MainContent;