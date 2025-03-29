import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const Header = () => {
  const { isLoggedIn, logout } = useContext(DataContext);

  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-6 py-4">
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-yellow-400">Sports-Hub</Link>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link to="/team-recruitment" className="hover:text-yellow-400">팀 모집 공고</Link>
        <Link to="/individual-support" className="hover:text-yellow-400">개인 지원 게시판</Link>
        <Link to="/review-board" className="hover:text-yellow-400">후기 게시판</Link>
        {isLoggedIn && (
          <Link to="/my-page" className="hover:text-yellow-400">마이페이지</Link>
        )}
      </nav>
      <div className="flex space-x-4">
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            로그아웃
          </button>
        ) : (
          <>
            <Link to="/login" className="bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500">
              로그인
            </Link>
            <Link to="/sign-up" className="bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500">
              회원가입
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;