import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 hidden md:block">
      <h3 className="text-lg font-semibold mb-3">빠른 메뉴</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-600 hover:underline">팀 모집 공고</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">개인 지원 게시판</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">후기 게시판</a>
        </li>
      </ul>
      <h3 className="text-lg font-semibold mt-6 mb-3">최근 활동</h3>
      <ul className="space-y-2">
        <li className="text-gray-700">"서울 경기 정말 좋았어요!"</li>
        <li className="text-gray-700">"다음 경기도 기대됩니다."</li>
        <li className="text-gray-700">"팀워크가 정말 좋았어요."</li>
      </ul>
    </aside>
  );
};

export default Sidebar;