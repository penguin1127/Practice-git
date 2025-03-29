import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

const PersonalSupport = () => {
  const { individualSupportPosts, addIndividualSupportPost } = useContext(DataContext); // DataContext에서 상태와 함수 가져오기
  const [newPost, setNewPost] = useState({ name: '', details: '' }); // 입력 필드 상태 관리

  const handleAddPost = (e) => {
    e.preventDefault();

    // 새로운 글 추가
    addIndividualSupportPost(newPost);

    // 입력 필드 초기화
    setNewPost({ name: '', details: '' });
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">개인 지원 게시판</h1>
      <ul className="space-y-4">
        {individualSupportPosts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h2 className="text-lg font-semibold">{post.name}</h2>
            <p className="text-gray-600">{post.details}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddPost} className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">이름</label>
          <input
            type="text"
            name="name"
            value={newPost.name}
            onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="이름을 입력하세요"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">세부 정보</label>
          <textarea
            name="details"
            value={newPost.details}
            onChange={(e) => setNewPost({ ...newPost, details: e.target.value })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="세부 정보를 입력하세요"
            rows="3"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          추가하기
        </button>
      </form>
    </div>
  );
};

export default PersonalSupport;