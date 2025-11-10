import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('كلمة المرور الجديدة غير متطابقة');
      return;
    }
    alert('تم تغيير كلمة المرور بنجاح!');
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 text-right">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">تغيير كلمة المرور</h1>

      <div className="bg-white rounded-2xl shadow border p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              كلمة المرور الحالية
            </label>
            <div className="relative">
              <LockClosedIcon className="w-5 h-5 absolute right-3 top-3 text-gray-400" />
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              كلمة المرور الجديدة
            </label>
            <div className="relative">
              <LockClosedIcon className="w-5 h-5 absolute right-3 top-3 text-gray-400" />
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              تأكيد كلمة المرور الجديدة
            </label>
            <div className="relative">
              <LockClosedIcon className="w-5 h-5 absolute right-3 top-3 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 px-4 rounded-xl hover:bg-yellow-700 transition"
          >
            حفظ التغييرات
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
