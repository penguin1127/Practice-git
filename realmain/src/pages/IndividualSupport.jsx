import React from 'react';

const IndividualSupport = () => {
  const exampleApplications = [
    { id: 1, name: '김철수', details: '포지션: FW, 지역: 서울 강남구, 실력: 중급' },
    { id: 2, name: '이영희', details: '포지션: GK, 지역: 부산 해운대구, 실력: 초급' },
    { id: 3, name: '박민수', details: '포지션: MF, 지역: 대구 수성구, 실력: 고급' },
  ];

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">개인 지원 게시판</h1>
      <ul className="space-y-4">
        {exampleApplications.map((application) => (
          <li key={application.id} className="border-b pb-4">
            <h2 className="text-lg font-semibold">{application.name}</h2>
            <p className="text-gray-600">{application.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndividualSupport;