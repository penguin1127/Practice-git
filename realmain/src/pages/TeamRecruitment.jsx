import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const TeamRecruitment = () => {
  const { teamRecruitmentPosts, addTeamRecruitmentPost, isLoggedIn } = useContext(DataContext);

  const handleAddPost = () => {
    const newPost = {
      id: teamRecruitmentPosts.length + 1,
      title: '새로운 팀 모집 공고',
      details: '세부 정보를 입력하세요.',
    };
    addTeamRecruitmentPost(newPost);
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">팀 모집 공고</h1>
      <ul className="space-y-4">
        {teamRecruitmentPosts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.details}</p>
          </li>
        ))}
      </ul>
      {isLoggedIn && ( // 로그인 상태에서만 "작성하기" 버튼 표시
        <button
          onClick={handleAddPost}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          작성하기
        </button>
      )}
    </div>
  );
};

export default TeamRecruitment;