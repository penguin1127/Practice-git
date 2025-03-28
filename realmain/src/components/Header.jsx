import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-6 py-4">
      <div className="text-2xl font-bold">
        <a href="/" className="hover:text-yellow-400">Sports-Hub</a>
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-yellow-400">경기 모집</a>
        <a href="#" className="hover:text-yellow-400">개인 매칭</a>
        <a href="#" className="hover:text-yellow-400">후기 게시판</a>
        <a href="#" className="hover:text-yellow-400">마이페이지</a>
      </nav>
      <div className="flex space-x-4">
        <a href="#" className="text-sm hover:text-yellow-400">로그인</a>
        <a href="#" className="bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500">회원가입</a>
      </div>
    </header>
  );
};

export default Header;