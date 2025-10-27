import React, { useState, useEffect } from "react";

const CarDetails = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // مؤقت العد التنازلي (ساعة)
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const openModal = (text) => {
    setModalText(text);
    setShowModal(true);
  };

  return (
    <div className="bg-white text-gray-800 font-sans" dir="rtl">
      {/* ===== عنوان المركبة ===== */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          M.A.N. - 26.320 TGS
        </h1>

        {/* ===== القسم الرئيسي: صور + تفاصيل المزاد ===== */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* صور جانبية صغيرة */}
          <div className="flex flex-col gap-3">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src="/assets/images/images/Property 1=P2.png"
                alt={`car-thumb-${i}`}
                className="rounded-lg border border-gray-200 cursor-pointer hover:opacity-80"
              />
            ))}
          </div>

          {/* الصورة الرئيسية */}
          <div className="relative">
            <img
              src="/assets/images/trucks/Frame 113.png"
              alt="main-car"
              className="rounded-xl shadow-lg w-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
              Opening
            </span>
          </div>

          {/* بطاقة تفاصيل المزاد */}
          <div className="bg-gray-50 rounded-xl shadow p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-700">عدد المزايدات</span>
                <span>15</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-700">السعر</span>
                <span>6500 ر.س</span>
              </div>
              <div className="flex items-center justify-between mb-2 text-red-600">
                <span className="font-bold">الحد الأدنى</span>
                <span>1500 ر.س</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">قيمة السعي</span>
                <span>162.5 ر.س</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">الضريبة المضافة</span>
                <span>24.375 ر.س</span>
              </div>
              <hr className="my-3 border-gray-300" />
              <div className="flex items-center justify-between font-bold text-gray-900">
                <span>الإجمالي</span>
                <span>6686.875 ر.س</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="bg-black text-white text-lg font-mono py-2 rounded-md mb-4">
                {formatTime(timeLeft)}
              </div>
              <button
                onClick={() => openModal("ابدأ المزايدة الآن")}
                className="bg-yellow-500 hover:bg-yellow-600 transition text-white w-full py-2 rounded-md font-bold"
              >
                ابدأ المزايدة الآن
              </button>
            </div>
          </div>
        </div>

        {/* ===== قسم المواصفات ===== */}
        <div className="grid md:grid-cols-2 gap-12 mt-14">
          <div>
            <img
              src="/assets/images/images/Property 1=P2.png"
              alt="car-diagram"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">الصفات</h2>
            <ul className="grid grid-cols-2 gap-y-2 text-gray-700">
              <li>الطول الإجمالي للمركبة: 635 cm</li>
              <li>العرض الإجمالي: 255 cm</li>
              <li>الارتفاع الإجمالي: 375 cm</li>
              <li>نوع المحرك: ديزل</li>
              <li>عدد السرعات: 14</li>
              <li>ناقل حركة: أوتوماتيكي</li>
              <li>نظام دعم الفرامل ✅</li>
              <li>نظام مانع الانزلاق ✅</li>
            </ul>
          </div>
        </div>

        {/* ===== قسم الفيديو ===== */}
        <div className="mt-14">
          <video
            controls
            className="w-full rounded-xl shadow-md"
            poster="/assets/images/images/Frame113.png"
          >
            <source src="/assets/videos/sample.mp4" type="video/mp4" />
          </video>

          <div className="flex flex-wrap gap-3 mt-5">
            <button className="bg-black text-white py-2 px-6 rounded-md">
              اتصل بنا مباشرة
            </button>
            <button className="bg-green-500 text-white py-2 px-6 rounded-md">
              إرسال رسالة عبر واتساب
            </button>
          </div>
        </div>

        {/* ===== قسم الملفات ===== */}
        <div className="mt-12 flex flex-wrap gap-4">
          <button
            onClick={() => openModal("تحميل تقرير الفحص")}
            className="border border-gray-300 rounded-md py-2 px-4 flex items-center gap-2 hover:bg-gray-100"
          >
            📄 تحميل تقرير الفحص
          </button>
          <button
            onClick={() => openModal("تحميل حزم التسليم")}
            className="border border-gray-300 rounded-md py-2 px-4 flex items-center gap-2 hover:bg-gray-100"
          >
            📦 تحميل حزم التسليم
          </button>
        </div>

        {/* ===== قسم السيارات المشابهة ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">إعلانات مشابهة</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative">
                  <img
                    src="/assets/images/images/Property 1=P2.png"
                    alt="car"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Opening
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">RENAULT - 2TGS</h3>
                  <p className="text-gray-700 text-sm mb-1">السعر: 325000 ر.س</p>
                  <p className="text-gray-700 text-sm mb-1">
                    الحد الأدنى: 5000 ر.س
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    التسجيل: 5-07-2022
                  </p>
                  <button
                    onClick={() => openModal("ابدأ المزايدة الآن")}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-2 rounded-md font-bold"
                  >
                    ابدأ المزايدة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== نافذة منبثقة (Modal) ===== */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <p className="text-lg font-bold mb-4">{modalText}</p>
            <p className="text-gray-600 mb-6">هذه الميزة ستكون متاحة قريبًا.</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
