import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useLocation, Link } from 'react-router-dom';

const PostList = () => {
  const { personalSupportPosts, reviewPosts } = useContext(DataContext);
  const location = useLocation();

  // 현재 경로에 따라 게시판 데이터를 선택
  const posts =
    location.pathname === '/personal-support'
      ? personalSupportPosts
      : reviewPosts;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {location.pathname === '/personal-support' ? '개인 지원 게시판' : '후기 게시판'}
        </h1>
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <li key={index} className="border-b pb-4">
              <h2 className="text-lg font-bold">{post.name || post.title}</h2>
              <p className="text-gray-700">{post.details || post.content}</p>
            </li>
          ))}
        </ul>
        {/* 글 작성 버튼 */}
        <Link
          to="/post-form"
          state={{ boardType: location.pathname === '/personal-support' ? 'personal-support' : 'reviews' }}
          className="block mt-6 text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          글 작성하기
        </Link>
      </div>
    </div>
  );
};

export default PostList;