import React from 'react';

function TeamFilter({
  selectedRegion,
  onRegionChange,
  searchQuery,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  onReset,
}) {
  console.log('onSearchChange:', onSearchChange); // 디버깅용 로그
  console.log('onRegionChange:', onRegionChange); // 디버깅용 로그
  console.log('onStatusChange:', onStatusChange); // 디버깅용 로그
  console.log('onReset:', onReset); // 디버깅용 로그

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* 검색창 */}
      <input
        type="text"
        placeholder="팀 이름 검색"
        value={searchQuery}
        onChange={(e) => {
          console.log('Search input changed:', e.target.value); // 디버깅용 로그
          if (typeof onSearchChange === 'function') {
            onSearchChange(e.target.value); // onSearchChange 연결
          } else {
            console.error('onSearchChange is not a function');
          }
        }}
        className="p-2 border rounded-md flex-grow"
      />

      {/* 지역 필터 */}
      <select
        value={selectedRegion}
        onChange={(e) => {
          console.log('Region selected:', e.target.value); // 디버깅용 로그
          if (typeof onRegionChange === 'function') {
            onRegionChange(e.target.value);
          } else {
            console.error('onRegionChange is not a function');
          }
        }}
        className="p-2 border rounded-md"
      >
        <option value="전체">전체</option>
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="대구">대구</option>
        <option value="인천">인천</option>
        <option value="광주">광주</option>
        <option value="대전">대전</option>
        <option value="울산">울산</option>
      </select>

      {/* 상태 필터 */}
      <select
        value={selectedStatus}
        onChange={(e) => {
          console.log('Status selected:', e.target.value); // 디버깅용 로그
          if (typeof onStatusChange === 'function') {
            onStatusChange(e.target.value);
          } else {
            console.error('onStatusChange is not a function');
          }
        }}
        className="p-2 border rounded-md"
      >
        <option value="">전체 상태</option>
        <option value="신청 가능">신청 가능</option>
        <option value="마감 임박">마감 임박</option>
        <option value="마감">마감</option>
      </select>

      {/* 필터 초기화 버튼 */}
      <button
        onClick={() => {
          console.log('Reset button clicked'); // 디버깅용 로그
          if (typeof onReset === 'function') {
            onReset();
          } else {
            console.error('onReset is not a function');
          }
        }}
        className="p-2 bg-red-500 hover:bg-gray-300 text-white rounded-md"
      >
        초기화
      </button>
    </div>
  );
}

export default TeamFilter;