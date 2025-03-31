import React from 'react';
import { Link } from 'react-router-dom';

function TeamCard({ team }) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      {/* 제목에 링크 추가 */}
      <h2 className="text-xl font-bold mb-2">
        <Link
          to={`/team-recruit/${team.postId}`}
          className="text-blue-500 hover:underline"
          onClick={(e) => e.stopPropagation()} // 이벤트 버블링 방지
        >
          {team.title}
        </Link>
      </h2>
      <p>위치: {team.location}</p>
      <p>시간: {team.time}</p>
      <p>남은 인원: {team.remaining}</p>

      <div className="mt-4 flex items-center gap-2">
        {team.remaining === 0 ? (
          <span className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
            마감
          </span>
        ) : team.remaining <= 3 ? (
          <>
            <span className="px-4 py-2 bg-yellow-300 text-yellow-800 rounded">
              마감 임박
            </span>
            <Link
              to={`/team-recruit/${team.postId}`}
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={(e) => e.stopPropagation()} // 이벤트 버블링 방지
            >
              신청
            </Link>
          </>
        ) : (
          <Link
            to={`/team-recruit/${team.postId}`}
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={(e) => e.stopPropagation()} // 이벤트 버블링 방지
          >
            신청
          </Link>
        )}
      </div>
    </div>
  );
}

export default TeamCard;