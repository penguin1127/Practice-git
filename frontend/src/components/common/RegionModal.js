import React from 'react';

const RegionModal = ({ isOpen, regions, onSelect, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">지역 선택</h2>
        <ul className="space-y-2">
          {regions.map((region) => (
            <li key={region}>
              <button
                onClick={() => onSelect(region)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default RegionModal;