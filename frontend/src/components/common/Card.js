import React from 'react';

const Card = ({ title, details, actions }) => (
  <div className="bg-white shadow-md rounded-lg p-4 h-full flex flex-col justify-between max-w-sm mx-auto">
    <div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600">{detail}</p>
      ))}
    </div>
    <div className="mt-4">{actions}</div>
  </div>
);

export default Card;