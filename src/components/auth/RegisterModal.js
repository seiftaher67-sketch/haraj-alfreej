import React, { useState, useEffect } from 'react';

const RegisterModal = ({ isOpen, onClose, onLoginClick }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(45);

  useEffect(() => {
    let timer;
    if (showVerification && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [showVerification, countdown]);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`register-code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleConfirm = () => {
    // Handle verification logic here
    console.log('Verification code:', verificationCode.join(''));
  };

  const handleResend = () => {
    setCountdown(45);
    // Handle resend logic here
  };

  if (!isOpen) return null;

  return (
    <>
      {!showVerification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[480px] text-right">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">إنشاء حساب</h2>
              <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center">انضم إلينا</h3>
              <p className="text-gray-600 text-center">أنشئ حسابك الجديد من هنا</p>

              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg text-right"
                  placeholder="أدخل اسمك الكامل"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

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
                     src="\assets\images\icons\twemoji_flag-saudi-arabia.png"
                     alt="Saudi Flag"
                     className="w-6 h-4 mr-2"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={() => setShowVerification(true)}
                className="w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                إرسال رمز التحقق
              </button>

              {/* Login Link */}
              <p className="text-center">
                لديك حساب بالفعل؟{' '}
                <button
                  onClick={() => {
                    onClose();
                    onLoginClick();
                  }}
                  className="text-primary hover:underline bg-transparent border-none cursor-pointer"
                >
                  سجل الدخول
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {showVerification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[480px] text-right relative">
            <button
              onClick={() => setShowVerification(false)}
              className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <p className="text-lg mb-4 text-center">تم ارسال كود التفعيل بنجاح</p>
            <p className="text-gray-600 mb-6 text-center">رمز التحقق المرسل الى الجوال</p>
            <div className="flex justify-center gap-2 mb-6">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  id={`register-code-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  maxLength="1"
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              ))}
            </div>
            <button
              onClick={handleConfirm}
              className="w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition-colors mb-4"
            >
              تأكيد
            </button>
            <div className="flex justify-center items-center gap-2 text-sm">
              <span>إعادة ارسال الرمز؟</span>
              {countdown > 0 ? (
                <span>انتظار {countdown} ثانية</span>
              ) : (
                <button
                  onClick={handleResend}
                  className="text-blue-500 hover:underline bg-transparent border-none cursor-pointer"
                >
                  إعادة الإرسال
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
