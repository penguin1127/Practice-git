import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import '../styles/MyPage.css'; // CSS 파일 경로 확인

const MyPage = () => {
  const { isLoggedIn, tempAccount } = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태
  const [formData, setFormData] = useState({ ...tempAccount }); // 수정 가능한 데이터

  if (!isLoggedIn) {
    return <p className="text-center mt-10">로그인이 필요합니다.</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // 저장 로직 (예: 서버로 전송)
    console.log('저장된 데이터:', formData);
    setIsEditing(false); // 수정 모드 종료
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">마이페이지</h1>
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">이름</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">이메일</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">나이</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">거주 지역</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">선호 포지션</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="FW">FW (공격수)</option>
                <option value="MF">MF (미드필더)</option>
                <option value="DF">DF (수비수)</option>
                <option value="GK">GK (골키퍼)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">실력 수준</label>
              <select
                name="skillLevel"
                value={formData.skillLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="beginner">초급</option>
                <option value="intermediate">중급</option>
                <option value="advanced">고급</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">운동 빈도</label>
              <select
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="weekly">주 1회</option>
                <option value="2-3 times a week">주 2~3회</option>
                <option value="daily">매일</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                취소
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                저장
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p><strong>이름:</strong> {formData.name}</p>
            <p><strong>이메일:</strong> {formData.email}</p>
            <p><strong>나이:</strong> {formData.age}</p>
            <p><strong>거주 지역:</strong> {formData.location}</p>
            <p><strong>선호 포지션:</strong> {formData.position}</p>
            <p><strong>실력 수준:</strong> {formData.skillLevel}</p>
            <p><strong>운동 빈도:</strong> {formData.frequency}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
            >
              수정
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPage;