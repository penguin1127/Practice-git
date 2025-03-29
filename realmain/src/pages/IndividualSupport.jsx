import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const IndividualSupport = () => {
  const { individualSupportPosts, addIndividualSupportPost, tempAccount, setIndividualSupportPosts, isLoggedIn } =
    useContext(DataContext); // 사용자 정보 가져오기

  const handleAddPost = () => {
    if (!isLoggedIn) return; // 비로그인 상태에서는 아무 작업도 하지 않음

    // 로그인된 사용자 정보를 게시글로 추가
    const newPost = {
      id: individualSupportPosts.length + 1, // 고유 ID 생성
      name: tempAccount.name,
      details: `포지션: ${tempAccount.position}, 지역: ${tempAccount.location}, 실력: ${tempAccount.skillLevel}`,
      email: tempAccount.email, // 작성자 식별을 위해 이메일 추가
    };
    addIndividualSupportPost(newPost);
  };

  const handleDeletePost = (postId) => {
    // 게시글 삭제 (로그인된 사용자의 글만 삭제 가능)
    setIndividualSupportPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== postId || post.email !== tempAccount.email)
    );
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">개인 지원 게시판</h1>
      <ul className="space-y-4">
        {individualSupportPosts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{post.name}</h2>
                <p className="text-gray-600">{post.details}</p>
              </div>
              {post.email === tempAccount.email && ( // 로그인된 사용자가 작성한 글에 "내 글" 표시
                <span className="text-blue-500 font-bold">내 글</span>
              )}
            </div>
            {post.email === tempAccount.email && ( // 로그인된 사용자가 작성한 글만 삭제 버튼 표시
              <button
                onClick={() => handleDeletePost(post.id)}
                className="mt-2 text-red-500 hover:underline"
              >
                삭제
              </button>
            )}
          </li>
        ))}
      </ul>
      {isLoggedIn && ( // 로그인 상태에서만 "지원하기" 버튼 표시
        <button
          onClick={handleAddPost}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          지원하기
        </button>
      )}
      {!isLoggedIn && ( // 비로그인 상태에서 안내 메시지 표시
        <p className="mt-6 text-center text-gray-500">로그인 후 지원할 수 있습니다.</p>
      )}
    </div>
  );
};

export default IndividualSupport;