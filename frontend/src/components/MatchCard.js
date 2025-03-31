function MatchCard({ teamName, location, time, maxDistance, onApply }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold">{teamName}</h3>
      <p className="text-gray-600">위치: {location}</p>
      <p className="text-gray-600">시간: {time}</p>
      <p className="text-gray-600">최대 거리: {maxDistance}km</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onApply}
      >
        신청하기
      </button>
    </div>
  );
}

export default MatchCard;