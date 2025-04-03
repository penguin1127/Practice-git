import React, { useState } from 'react';

const ProfileSection = () => {
  const [profile, setProfile] = useState({
    name: '김예시',
    username: '@example_user',
    bio: '안녕하세요! 축구를 사랑하는 사람입니다.',
    position: 'FW / MF',
    availability: '주말 오전',
    location: '서울시 강남구',
    stamina: '풀타임 가능',
    gameType: '11인제 / 8인제',
    height: '180cm',
    weight: '75kg',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    console.log('저장된 프로필:', profile);
    alert('프로필이 저장되었습니다!');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">내 정보</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* 기본 정보 */}
        <h3 className="text-lg font-bold mb-4">기본 정보</h3>
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/100" // 프로필 사진 (임시 이미지)
            alt="프로필 사진"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div className="w-full">
            <label className="block mb-2 font-bold">이름</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full mb-4 text-lg"
            />
            <label className="block mb-2 font-bold">사용자 이름</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full mb-4 text-lg"
            />
            <label className="block mb-2 font-bold">소개</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full text-lg h-24"
            />
          </div>
        </div>

        {/* 경기 스타일 */}
        <h3 className="text-lg font-bold mb-4">경기 스타일</h3>
        <div className="mb-4">
          <label className="block mb-2 font-bold">⚽ 포지션</label>
          <input
            type="text"
            name="position"
            value={profile.position}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full mb-4 text-lg"
          />
          <label className="block mb-2 font-bold">🏃‍♂️ 경기 가능 요일 & 시간</label>
          <input
            type="text"
            name="availability"
            value={profile.availability}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full mb-4 text-lg"
          />
          <label className="block mb-2 font-bold">📍 주로 뛰는 지역</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full mb-4 text-lg"
          />
          <label className="block mb-2 font-bold">⚡ 체력 수준</label>
          <input
            type="text"
            name="stamina"
            value={profile.stamina}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full text-lg"
          />
        </div>

        {/* 추가 정보 */}
        <h3 className="text-lg font-bold mb-4">추가 정보 (선택 사항)</h3>
        <div>
          <label className="block mb-2 font-bold">🏟️ 경기 유형</label>
          <input
            type="text"
            name="gameType"
            value={profile.gameType}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full mb-4 text-lg"
          />
          <label className="block mb-2 font-bold">📏 신체 정보</label>
          <div className="flex space-x-4">
            <input
              type="text"
              name="height"
              value={profile.height}
              onChange={handleChange}
              placeholder="키 (cm)"
              className="border rounded-lg p-3 w-1/2 text-lg"
            />
            <input
              type="text"
              name="weight"
              value={profile.weight}
              onChange={handleChange}
              placeholder="몸무게 (kg)"
              className="border rounded-lg p-3 w-1/2 text-lg"
            />
          </div>
        </div>

        {/* 저장 버튼 */}
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg mt-4 w-full text-lg"
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;