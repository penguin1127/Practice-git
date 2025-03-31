import React, { useState } from 'react';

const Slider = ({ items, itemsPerPage, renderItem }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* 슬라이더 컨텐츠 */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentPage * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 px-4 box-border" // 카드 크기 조정
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      {/* 이전 버튼 */}
      {currentPage > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full shadow-md"
        >
          ◀
        </button>
      )}

      {/* 다음 버튼 */}
      {currentPage < totalPages - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full shadow-md"
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default Slider;