import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    emailDomain: '',
    password: '',
    confirmPassword: '',
    age: '',
    location: '',
    position: '',
    skillLevel: '',
    frequency: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 비밀번호 확인
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 이메일 주소 완성
    const fullEmail = formData.emailDomain
      ? `${formData.email}@${formData.emailDomain}`
      : formData.email;

    console.log('회원가입 데이터:', { ...formData, email: fullEmail });
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">회원가입</h1>
      <form onSubmit={handleSubmit}>
        {/* 기본 정보 */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="이름을 입력하세요"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">이메일</label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="이메일 아이디"
            />
            <span>@</span>
            <select
              name="emailDomain"
              value={formData.emailDomain}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">직접 입력</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="daum.net">daum.net</option>
              <option value="yahoo.com">yahoo.com</option>
              <option value="hotmail.com">hotmail.com</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">비밀번호 확인</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="비밀번호를 다시 입력하세요"
          />
        </div>

        {/* 프로필 정보 */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">나이</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="나이를 입력하세요"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">거주 지역</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="거주 지역을 입력하세요"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">선호 포지션</label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">선택하세요</option>
            <option value="FW">FW (공격수)</option>
            <option value="MF">MF (미드필더)</option>
            <option value="DF">DF (수비수)</option>
            <option value="GK">GK (골키퍼)</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">실력 수준</label>
          <select
            name="skillLevel"
            value={formData.skillLevel}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">선택하세요</option>
            <option value="beginner">초급</option>
            <option value="intermediate">중급</option>
            <option value="advanced">고급</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">운동 빈도</label>
          <select
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">선택하세요</option>
            <option value="weekly">주 1회</option>
            <option value="2-3 times a week">주 2~3회</option>
            <option value="daily">매일</option>
          </select>
        </div>

        {/* 프로필 사진 */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">프로필 사진 (선택)</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;