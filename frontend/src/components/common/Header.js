import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, userEmail, handleLogout }) {
  console.log('Header 렌더링');
  console.log('isLoggedIn:', isLoggedIn);
  console.log('userEmail:', userEmail);

  return (
    <header className="bg-gray-900 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Sports-Hub</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/mercenary" className="hover:underline">
                용병 목록
              </Link>
            </li>
            <li>
              <Link to="/team-recruit" className="hover:underline">
                팀 모집
              </Link>
            </li>
            <li>
              <Link to="/personal-ad" className="hover:underline">
                개인 지원
              </Link>
            </li>
            <li>
              <Link to="/match-recruitment" className="hover:underline">
                경기 모집
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <button className="relative" title="알림센터">
                <span className="material-icons text-white text-2xl">notifications</span>
              </button>
              <Link to="/mypage" className="hover:underline text-sm">
                {userEmail}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">
                로그인
              </Link>
              <Link to="/register" className="hover:underline">
                회원가입
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;