import React from 'react';

const ReviewBoard = () => {
  const exampleReviews = [
    { id: 1, reviewer: '김철수', review: '서울 강남구 경기에서 팀워크가 정말 좋았습니다!' },
    { id: 2, reviewer: '이영희', review: '부산 해운대구 경기에서 골키퍼가 정말 대단했어요!' },
    { id: 3, reviewer: '박민수', review: '대구 수성구 경기에서 모두가 열심히 뛰었습니다.' },
  ];

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">후기 게시판</h1>
      <ul className="space-y-4">
        {exampleReviews.map((review) => (
          <li key={review.id} className="border-b pb-4">
            <h2 className="text-lg font-semibold">{review.reviewer}</h2>
            <p className="text-gray-600">{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewBoard;