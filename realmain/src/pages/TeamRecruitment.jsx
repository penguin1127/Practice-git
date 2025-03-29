import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamRecruitment = () => {
  const [teamRecruitmentPosts, setTeamRecruitmentPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 로그인 상태 (임시)

  // 팀 모집 공고 가져오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/team-recruitment');
        setTeamRecruitmentPosts(response.data);
      } catch (error) {
        console.error('팀 모집 공고를 가져오는 중 오류 발생:', error);
      }
    };

    fetchPosts();
  }, []);

  // 새 공고 추가
  const handleAddPost = async () => {
    const newPost = {
      title: '새로운 팀 모집 공고',
      details: '세부 정보를 입력하세요.',
      location: '서울 강남구',
      time: '주말 오후 3시',
      max_members: 10,
      created_by: 'test@example.com',
    };

    try {
      const response = await axios.post('http://localhost:5000/api/team-recruitment', newPost);
      setTeamRecruitmentPosts((prevPosts) => [...prevPosts, response.data]);
    } catch (error) {
      console.error('새 공고를 추가하는 중 오류 발생:', error);
    }
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