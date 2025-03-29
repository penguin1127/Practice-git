import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const MainContent = () => {
  const { teamRecruitmentPosts, individualSupportPosts, reviewPosts } = useContext(DataContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 팀 모집 공고 */}
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

      {/* 개인 지원 게시판 */}
      <section className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">개인 지원 게시판</h2>
        <ul className="space-y-2 mb-4">
          {individualSupportPosts.slice(0, 2).map((post) => (
            <li key={post.id}>
              <h3 className="text-lg font-semibold">{post.name}</h3>
              <p className="text-gray-600">{post.details}</p>
            </li>
          ))}
        </ul>
        <Link to="/individual-support" className="text-blue-600 hover:underline">
          더 보기
        </Link>
      </section>

      {/* 후기 게시판 */}
      <section className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">후기 게시판</h2>
        <ul className="space-y-2 mb-4">
          {reviewPosts.slice(0, 2).map((post) => (
            <li key={post.id}>
              <h3 className="text-lg font-semibold">{post.reviewer}</h3>
              <p className="text-gray-600 truncate">{post.review}</p>
            </li>
          ))}
        </ul>
        <Link to="/review-board" className="text-blue-600 hover:underline">
          더 보기
        </Link>
      </section>
    </div>
  );
};

export default MainContent;