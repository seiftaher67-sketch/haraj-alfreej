import React from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const Logout = () => {
  const handleLogout = () => {
    alert("تم تسجيل الخروج بنجاح!");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow border p-8 max-w-sm w-full text-center">
        <ArrowRightOnRectangleIcon className="w-12 h-12 mx-auto text-red-600 mb-4" />
        <h2 className="text-xl font-bold text-gray-800 mb-2">تسجيل الخروج</h2>
        <p className="text-gray-600 mb-6">هل أنت متأكد أنك تريد تسجيل الخروج من حسابك؟</p>
        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
        >
          تأكيد تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default Logout;
