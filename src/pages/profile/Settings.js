import React from "react";

const Settings = () => {
  const handleLogout = () => {
    // Handle logout logic here
    alert("تم تسجيل الخروج");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-right">
        الإعدادات والدعم
      </h1>

      <div className="space-y-4">
        <div className="bg-white shadow rounded-2xl p-6 text-right">
          <h2 className="text-xl font-semibold mb-4">الإعدادات</h2>
          <ul className="space-y-2">
            <li className="border-b pb-2 cursor-pointer hover:text-blue-600">
              تغيير كلمة المرور
            </li>
            <li className="border-b pb-2 cursor-pointer hover:text-blue-600">
              إشعارات
            </li>
            <li className="border-b pb-2 cursor-pointer hover:text-blue-600">
              الخصوصية
            </li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 text-right">
          <h2 className="text-xl font-semibold mb-4">الدعم</h2>
          <ul className="space-y-2">
            <li className="border-b pb-2 cursor-pointer hover:text-blue-600">
              مركز المساعدة
            </li>
            <li className="border-b pb-2 cursor-pointer hover:text-blue-600">
              اتصل بنا
            </li>
            <li className="border-b pb-2 cursor-pointer hover:text-blue-600">
              الشكاوى والاقتراحات
            </li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 text-right">
          <h2 className="text-xl font-semibold mb-4">المعلومات القانونية</h2>
          <ul className="space-y-2">
            <li className="border-b pb-2 cursor-pointer hover:text-blue-600">
              الشروط والأحكام
            </li>
            <li className="border-b pb-2 cursor-pointer hover:text-blue-600">
              سياسة الخصوصية
            </li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 text-right">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            تسجيل الخروج
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
