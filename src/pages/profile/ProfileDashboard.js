import React from "react";

const ProfileDashboard = () => {
  const stats = [
    { title: "مزايدات معلقة", value: 0 },
    { title: "مزايدات مقبولة", value: 0 },
    { title: "مزايدات لايف", value: 0 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-right">
        لوحة التحكم
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-2xl p-6 text-center border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-600">
              {item.title}
            </h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDashboard;
