import React from 'react';

const SignUp = () => {
  return (
    <div className="bg-white shadow-md rounded p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">회원가입</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">이메일</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">비밀번호</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">비밀번호 확인</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="비밀번호를 다시 입력하세요"
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