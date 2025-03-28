import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const MainContent = () => {
  const { teamRecruitmentPosts } = useContext(DataContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <section className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">팀 모집 공고</h2>
        <ul className="space-y-2 mb-4">
          {teamRecruitmentPosts.slice(0, 2).map((post) => (
            <li key={post.id}>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.details}</p>
            </li>
          ))}
        </ul>
        <Link to="/team-recruitment" className="text-blue-600 hover:underline">
          더 보기
        </Link>
      </section>

      <section className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">개인 지원 게시판</h2>
        <p className="text-gray-600 mb-4">
          원하는 조건에 맞는 팀에 지원하거나 매칭을 요청하세요.
        </p>
        <Link to="/individual-support" className="text-blue-600 hover:underline">
          개인 지원 게시판 보기
        </Link>
      </section>

      <section className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">후기 게시판</h2>
        <p className="text-gray-600 mb-4">
          경기 후 팀원 평가와 리뷰를 작성하고 공유하세요.
        </p>
        <Link to="/review-board" className="text-blue-600 hover:underline">
          후기 게시판 보기
        </Link>
      </section>
    </div>
  );
};

export default MainContent;