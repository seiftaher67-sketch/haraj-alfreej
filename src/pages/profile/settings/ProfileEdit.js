import React, { useState } from 'react';
import { UserIcon, CameraIcon } from '@heroicons/react/24/outline';

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('تم حفظ التغييرات بنجاح!');
  };

  const handleImageUpload = () => {
    // Handle image upload logic here
    alert('فتح نافذة اختيار الصورة');
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 text-right">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">تعديل البروفايل</h1>

      <div className="bg-white rounded-2xl shadow border p-6">
        {/* Profile Picture Section */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-gray-300">
              <UserIcon className="w-16 h-16 text-gray-500" />
            </div>
            <button
              onClick={handleImageUpload}
              className="absolute bottom-0 right-0 bg-gradient-to-r from-gray-400 to-gray-600 p-3 rounded-full border-4 border-white hover:from-gray-500 hover:to-gray-700 transition-colors"
            >
              <CameraIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              الاسم بالكامل
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f2b400] focus:border-transparent"
              placeholder="أدخل اسمك الكامل"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f2b400] focus:border-transparent"
              placeholder="أدخل بريدك الإلكتروني"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f2b400] focus:border-transparent"
              placeholder="أدخل رقم هاتفك"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-50 bg-[#f2b400] text-white py-3 px-4 rounded-xl hover:bg-[#e6a100] transition-colors font-medium"
            >
              حفظ التغييرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
