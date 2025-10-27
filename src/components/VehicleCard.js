import React from 'react';

function VehicleCard({ image, title, price, date }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-yellow-400 font-bold">ريال {price}</span>
          <h3 className="font-bold">{title}</h3>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{date}</span>
          <span>تاريخ التسجيل</span>
        </div>
        <button className="w-full mt-4 bg-yellow-400 text-white py-2 rounded-lg">
          تفاصيل الإعلان
        </button>
      </div>
    </div>
  );
}

export default VehicleCard;
