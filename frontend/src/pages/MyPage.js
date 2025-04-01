import React from 'react';

const MyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-6 px-4">
        {/* 상단 프로필 섹션 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">조성민</h2>
            <p className="text-gray-600">tjdals7071@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm text-gray-500">매너</p>
              <p className="text-lg font-bold text-blue-500">좋아요</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">레벨</p>
              <p className="text-lg font-bold text-blue-500">루키</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              프로필 보기
            </button>
          </div>
        </div>

        {/* 내 캐시 섹션 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">내 캐시</p>
              <p className="text-2xl font-bold">0원</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              충전하기
            </button>
          </div>
        </div>

        {/* 나의 플랩 섹션 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">나의 플랩</h3>
          <ul className="space-y-2">
            <li>
              <button className="text-blue-500 hover:underline">신청 내역</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">사용 내역</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">쿠폰</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">챌린지</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">친구</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">친구가 신청한 매치</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">빈자리 알림</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">친구 초대</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">프로필 수정</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">설정</button>
            </li>
          </ul>
        </div>

        {/* 고객센터 섹션 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">고객센터</h3>
          <ul className="space-y-2">
            <li>
              <button className="text-blue-500 hover:underline">자주 묻는 질문</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">공지사항</button>
            </li>
          </ul>
        </div>

        {/* 더보기 섹션 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">더보기</h3>
          <ul className="space-y-2">
            <li>
              <button className="text-blue-500 hover:underline">플랫폼 소개</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPage;