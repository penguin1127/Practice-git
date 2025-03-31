import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    // 헤더 높이를 CSS 변수에 동적으로 설정
    const updateHeaderHeight = () => {
      const headerHeight = headerRef.current.offsetHeight;
      console.log('헤더 높이:', headerHeight); // 디버깅용
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-gray-900 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* 사이트 이름 */}
        <h1 className="text-2xl font-bold">
          <Link to="/">Sports-Hub</Link>
        </h1>

        {/* 네비게이션 메뉴 */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/team-recruit" className="hover:underline">
                팀 모집
              </Link>
            </li>
            <li>
              <Link to="/player-support" className="hover:underline">
                개인 지원
              </Link>
            </li>
            <li>
              <Link to="/match-recruit" className="hover:underline">
                경기 모집
              </Link>
            </li>
          </ul>
        </nav>

        {/* 로그인 및 회원가입 */}
        <div className="flex space-x-4">
          <Link to="/login" className="hover:underline">
            로그인
          </Link>
          <Link to="/signup" className="hover:underline">
            회원가입
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;