import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose, onRegisterClick }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[480px] text-right">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h2 className="text-xl font-bold">تسجيل الدخول</h2>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">مرحبا بك</h3>
          <p className="text-gray-600 text-center">يمكنك تسجيل الدخول إلى حسابك الخاص من هنا</p>

          {/* Phone Input */}
          <div className="relative">
            <div className="flex border rounded-lg">
              <input
                type="tel"
                className="flex-1 p-3 rounded-lg text-right"
                placeholder="أدخل رقم الواتس اب الخاص بك"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <div className="flex items-center px-3 border-r">
                <span className="text-gray-600">966+</span>
                <img
                  src="/saudi-flag.png"
                  alt="Saudi Flag"
                  className="w-6 h-4 mr-2"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition-colors">
            إرسال رمز التحقق
          </button>

          {/* Register Link */}
          <p className="text-center">
            ليس لديك حساب؟{' '}
            <button
              onClick={onRegisterClick}
              className="text-primary hover:underline bg-transparent border-none cursor-pointer"
            >
              سجل الآن
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
