import React from 'react';

const PlayerFilter = ({ selectedGender, selectedRegion, onGenderChange, onRegionChange, onReset }) => (
  <div className="flex items-center space-x-4 mb-4">
    {/* 성별 필터 */}
    <select
      value={selectedGender}
      onChange={(e) => onGenderChange(e.target.value)}
      className="px-4 py-2 border rounded"
    >
      <option value="전체">전체</option>
      <option value="남성">남성</option>
      <option value="여성">여성</option>
    </select>
    {/* 지역 필터 */}
    <select
      value={selectedRegion}
      onChange={(e) => onRegionChange(e.target.value)}
      className="px-4 py-2 border rounded"
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
    {/* 필터 초기화 */}
    <button
      onClick={onReset}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      초기화
    </button>
  </div>
);

export default PlayerFilter;