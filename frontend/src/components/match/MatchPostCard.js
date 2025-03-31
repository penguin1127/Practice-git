import React from 'react';
import Card from '../common/Card';

const MatchPostCard = ({ match }) => (
  <Card
    title={
      <a
        href={`/match-post/${match.id}`} // 경기 모집 게시글 상세 페이지로 이동
        className="text-lg font-bold cursor-pointer hover:underline"
      >
        {match.teamName} 경기 모집
      </a>
    }
    details={[
      `날짜: ${match.date}`,
      `시간: ${match.time}`,
      `장소: ${match.location}`,
      `상태: ${match.status}`,
    ]}
    actions={
      <div className="flex space-x-2">
        <a
          href={`/match-apply/${match.id}`} // 신청 페이지로 이동
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          신청
        </a>
        <a
          href={`/match-post/${match.id}`} // 상세보기 링크
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          상세보기
        </a>
      </div>
    }
  />
);

export default MatchPostCard;