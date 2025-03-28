import React from 'react';

const MainContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 팀 모집 공고 */}
      <section className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">팀 모집 공고</h2>
        <p className="text-gray-600 mb-4">
          지역, 포지션, 날짜, 장소를 설정하여 팀원을 모집하세요.
        </p>
        <a href="#" className="text-blue-600 hover:underline">팀 모집 공고 등록</a>
      </section>

      {/* 개인 지원 게시판 */}
      <section className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">개인 지원 게시판</h2>
        <p className="text-gray-600 mb-4">
          원하는 조건에 맞는 팀에 지원하거나 매칭을 요청하세요.
        </p>
        <a href="#" className="text-blue-600 hover:underline">개인 지원 게시판 보기</a>
      </section>

      {/* 후기 게시판 */}
      <section className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">후기 게시판</h2>
        <p className="text-gray-600 mb-4">
          경기 후 팀원 평가와 리뷰를 작성하고 공유하세요.
        </p>
        <a href="#" className="text-blue-600 hover:underline">후기 게시판 보기</a>
      </section>
    </div>
  );
};

export default MainContent;