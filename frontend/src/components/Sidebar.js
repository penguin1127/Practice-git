import React, { useState } from 'react';

const Sidebar = ({ onMenuSelect }) => {
  const [activeMenu, setActiveMenu] = useState('내 정보');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    onMenuSelect(menu); // 부모 컴포넌트에 선택된 메뉴 전달
  };

  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <h2 className="text-xl font-bold mb-6">📌 메뉴</h2>
      <ul>
        <li
          className={`p-2 cursor-pointer ${activeMenu === '내 정보' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleMenuClick('내 정보')}
        >
          내 정보
        </li>
        <li
          className={`p-2 cursor-pointer ${activeMenu === '캘린더' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleMenuClick('캘린더')}
        >
          캘린더
        </li>
        <li
          className={`p-2 cursor-pointer ${activeMenu === '나의 팀 & 경기' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleMenuClick('나의 팀 & 경기')}
        >
          나의 팀 & 경기
        </li>
        <ul className={`ml-4 ${activeMenu === '나의 팀 & 경기' ? '' : 'hidden'}`}>
          <li
            className="p-2 cursor-pointer"
            onClick={() => handleMenuClick('나의 팀 관리')}
          >
            ⚽ 나의 팀 관리
          </li>
          <li
            className="p-2 cursor-pointer"
            onClick={() => handleMenuClick('경기 모집 관리')}
          >
            📋 경기 모집 관리
          </li>
          <li
            className="p-2 cursor-pointer"
            onClick={() => handleMenuClick('팀 캘린더')}
          >
            🗓️ 팀 캘린더
          </li>
        </ul>
        <li
          className={`p-2 cursor-pointer ${activeMenu === '내 용병 신청' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleMenuClick('내 용병 신청')}
        >
          내 용병 신청
        </li>
        <li
          className={`p-2 cursor-pointer ${activeMenu === '설정' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleMenuClick('설정')}
        >
          설정
        </li>
        <li
          className={`p-2 cursor-pointer ${activeMenu === '공지사항' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleMenuClick('공지사항')}
        >
          공지사항
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;