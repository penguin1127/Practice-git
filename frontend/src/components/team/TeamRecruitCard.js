import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function TeamRecruitCard({ post, isExpanded, onExpand }) {
  const cardRef = useRef(null); // 카드 DOM 요소를 참조하기 위한 ref

  const handleExpand = (e) => {
    // 제목 클릭 시 이벤트 버블링 방지
    if (e.target.tagName === 'A') {
      e.stopPropagation(); // 제목 클릭 시 확장 동작을 막음
      return;
    }

    // 카드가 화면 맨 위로 스크롤되도록 처리
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    onExpand(); // 부모 컴포넌트에서 확장/축소 처리
  };

  return (
    <div
      ref={cardRef} // 카드 DOM 요소에 ref 연결
      className={`p-4 border rounded-lg shadow-md transition-all duration-300 ${
        isExpanded ? 'col-span-3' : ''
      }`}
      onClick={handleExpand} // 카드 클릭 시 확장/축소 처리
    >
      {/* 제목에 링크 추가 */}
      <h2 className="text-xl font-bold mb-2">
        <Link
          to={`/team-recruit/${post.postId}`}
          className="text-blue-500 hover:underline"
        >
          {post.title}
        </Link>
      </h2>
      <p>위치: {post.location}</p>
      <p>시간: {post.time}</p>
      <p>남은 인원: {post.remaining}</p>

      {isExpanded && (
        <div className="mt-4">
          <p>상세 설명: {post.description}</p>
        </div>
      )}

      {/* 버튼 섹션 */}
      <div className="mt-4 flex items-center gap-2">
        {post.remaining === 0 ? (
          <span className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
            마감
          </span>
        ) : post.remaining <= 3 ? (
          <>
            <span className="px-4 py-2 bg-yellow-300 text-yellow-800 rounded">
              마감 임박
            </span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              신청
            </button>
          </>
        ) : (
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            신청
          </button>
        )}
      </div>
    </div>
  );
}

export default TeamRecruitCard;