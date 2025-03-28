import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

const TeamRecruitment = () => {
  const { teamRecruitmentPosts, setTeamRecruitmentPosts } = useContext(DataContext);
  const [newPost, setNewPost] = useState({ title: '', details: '' });

  const handleAddPost = () => {
    const newId = teamRecruitmentPosts.length + 1;
    setTeamRecruitmentPosts([...teamRecruitmentPosts, { id: newId, ...newPost }]);
    setNewPost({ title: '', details: '' });
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">팀 모집 공고</h1>
      <ul className="space-y-4">
        {teamRecruitmentPosts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.details}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <input
          type="text"
          placeholder="제목"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="세부 정보"
          value={newPost.details}
          onChange={(e) => setNewPost({ ...newPost, details: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={handleAddPost}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default TeamRecruitment;