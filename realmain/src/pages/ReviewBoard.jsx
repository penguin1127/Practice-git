import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

const ReviewBoard = () => {
  const { reviewPosts, addReviewPost, tempAccount, isLoggedIn } = useContext(DataContext); // DataContext에서 상태와 함수 가져오기
  const [newReview, setNewReview] = useState(''); // 후기 입력 상태 관리

  const handleAddReview = () => {
    if (!isLoggedIn) return; // 비로그인 상태에서는 아무 작업도 하지 않음

    // 새로운 후기 추가
    const newPost = {
      reviewer: tempAccount.name,
      review: newReview,
    };
    addReviewPost(newPost);

    // 입력 필드 초기화
    setNewReview('');
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">후기 게시판</h1>
      <ul className="space-y-4">
        {reviewPosts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h2 className="text-lg font-semibold">{post.reviewer}</h2>
            <p className="text-gray-600">{post.review}</p>
          </li>
        ))}
      </ul>
      {isLoggedIn && ( // 로그인 상태에서만 작성 폼 표시
        <div className="mt-6">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="후기를 작성하세요"
            rows="3"
          ></textarea>
          <button
            onClick={handleAddReview}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            작성하기
          </button>
        </div>
      )}
      {!isLoggedIn && ( // 비로그인 상태에서 안내 메시지 표시
        <p className="mt-6 text-center text-gray-500">로그인 후 후기를 작성할 수 있습니다.</p>
      )}
    </div>
  );
};

export default ReviewBoard;