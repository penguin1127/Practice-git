import React from "react";

function FilterBar({ showTeamSearch = false, showPosition = false }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      {/* 팀 이름 검색 필터 */}
      {showTeamSearch && (
        <input
          type="text"
          placeholder="팀 이름 검색"
          className="border rounded-lg p-2 w-1/3"
        />
      )}

      {/* 지역 필터 */}
      <select className="border rounded-lg p-2 w-1/4">
        <option>전체 지역</option>
        <option>서울</option>
        <option>부산</option>
      </select>

      {/* 포지션 필터 */}
      {showPosition && (
        <select className="border rounded-lg p-2 w-1/4">
          <option>전체 포지션</option>
          <option>공격수</option>
          <option>수비수</option>
        </select>
      )}

      {/* 상태 필터 */}
      <select className="border rounded-lg p-2 w-1/4">
        <option>전체 상태</option>
        <option>모집 중</option>
        <option>마감</option>
      </select>

      {/* 초기화 버튼 */}
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        초기화
      </button>
    </div>
  );
}

export default FilterBar;