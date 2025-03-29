import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate, useLocation } from 'react-router-dom';

const PostForm = () => {
  const { addIndividualSupportPost, addReviewPost } = useContext(DataContext);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 게시판 경로에 따라 데이터를 추가
    if (location.state?.boardType === 'personal-support') {
      addIndividualSupportPost(formData);
    } else if (location.state?.boardType === 'reviews') {
      addReviewPost(formData);
    }

    // 이전 페이지로 이동
    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">글 작성</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">제목</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">내용</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;