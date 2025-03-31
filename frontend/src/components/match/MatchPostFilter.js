import React from 'react';

const MatchPostFilter = ({ selectedStatus, selectedLocation, onStatusChange, onLocationChange, onReset }) => (
  <div className="flex items-center space-x-4 mb-4">
    {/* 모집 상태 필터 */}
    <select
      value={selectedStatus}
      onChange={(e) => onStatusChange(e.target.value)}
      className="px-4 py-2 border rounded"
    >
      <option value="전체">전체</option>
      <option value="모집 중">모집 중</option>
      <option value="모집 완료">모집 완료</option>
    </select>

    {/* 장소 필터 */}
    <select
      value={selectedLocation}
      onChange={(e) => onLocationChange(e.target.value)}
      className="px-4 py-2 border rounded"
    >
      <option value="전체">전체</option>
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="대구">대구</option>
      <option value="광주">광주</option>
      <option value="인천">인천</option>
    </select>

    {/* 필터 초기화 */}
    <button
      onClick={onReset}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      초기화
    </button>
  </div>
);

export default MatchPostFilter;