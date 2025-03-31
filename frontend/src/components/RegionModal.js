import React from 'react';

const RegionModal = ({ regions, onSelect, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white w-96 p-6 rounded shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">지역 선택</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => onSelect(region.name)}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-left"
          >
            {region.name}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default RegionModal;