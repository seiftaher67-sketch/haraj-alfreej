import React, { useState } from "react";

const Recharge = () => {
  const [points, setPoints] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle recharge logic here
    alert(`تم طلب شحن ${points} نقطة`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      

      <div className="max-w-md mx-auto bg-white shadow rounded-2xl p-6 text-right">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="points" className="block text-sm font-medium text-gray-700 mb-2">
              عدد النقاط للتعبئة
            </label>
            <input
              type="number"
              id="points"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
              placeholder="أدخل عدد النقاط"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-30 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            >
              شحن الحساب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recharge;
