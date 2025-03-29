import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const MyPage = () => {
  const { isLoggedIn } = useContext(DataContext);

  // 비로그인 상태라면 로그인 페이지로 리다이렉트
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">마이페이지</h1>
      <p>여기에서 프로필을 관리하고 경기 신청 내역을 확인하세요.</p>
    </div>
  );
};

export default MyPage;