// src/pages/CarDetails.js
import React, { useState, useEffect } from "react";

const CarDetails = () => {
  const thumbnails = [
    "/assets/images/trucks/Frame 112.png",
    "/assets/images/trucks/Frame 113.png",
    "/assets/images/trucks/Frame 114.png",
    "/assets/images/trucks/Frame 117.png",
    "/assets/images/trucks/Frame 117.png",
    "/assets/images/trucks/Frame 117.png",
  ];

  const similarCars = [
    {
      name: "VOLVO - FH16",
      price: "450000 ر.س",
      min: "8000 ر.س",
      reg: "10-08-2023",
      img: "/assets/images/images/Property 1=P2.png",
    },
    {
      name: "SCANIA - R500",
      price: "380000 ر.س",
      min: "6000 ر.س",
      reg: "15-05-2022",
      img: "/assets/images/images/Property 1=P2.png",
    },
    {
      name: "MERCEDES - ACTROS",
      price: "420000 ر.س",
      min: "7000 ر.س",
      reg: "20-11-2021",
      img: "/assets/images/images/Property 1=P2.png",
    },
  ];

  const [mainImage, setMainImage] = useState("/assets/images/trucks/Frame 113.png");
  const [timeLeft, setTimeLeft] = useState(3600); // seconds
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((p) => (p > 0 ? p - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  const openModal = (text) => {
    setModalText(text);
    setShowModal(true);
  };

  return (
    <div className="bg-white text-gray-800 font-sans" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">M.A.N. - 26.320 TGS</h1>

        {/* Gallery: thumbnails + main preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* main image (left side on RTL, visually left) */}
          <div className="relative order-1 md:order-1">
            <img
              src={mainImage}
              alt="main"
              className="rounded-xl shadow-lg w-full h-80 md:h-[420px] object-cover"
            />
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              Opening
            </span>
          </div>

          {/* thumbnails (right side on RTL, visually right) */}
          <div className="order-2 md:order-2">
            <div className="grid grid-cols-2 gap-3">
              {thumbnails.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(src)}
                  className="focus:outline-none"
                >
                  <img
                    src={src}
                    alt={`thumb-${i}`}
                    className="w-full h-20 object-cover rounded-lg border border-gray-200 hover:opacity-90"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Auction card below gallery */}
        <aside className="bg-gray-50 rounded-xl shadow p-5 flex flex-col justify-between mb-8 max-w-md mx-auto md:mx-0">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 font-medium">عدد المزايدات</span>
              <span className="font-semibold">15</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 font-medium">السعر</span>
              <span className="font-semibold">6500 ر.س</span>
            </div>
            <div className="flex items-center justify-between mb-2 text-red-600">
              <span className="text-sm font-medium">الحد الأدنى</span>
              <span className="font-semibold">1500 ر.س</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 font-medium">قيمة السعي</span>
              <span className="font-semibold">162.5 ر.س</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 font-medium">الضريبة</span>
              <span className="font-semibold">24.375 ر.س</span>
            </div>

            <hr className="my-3 border-gray-300" />

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-medium">الإجمالي</span>
              <span className="font-bold text-gray-900">6686.875 ر.س</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-black text-white text-lg font-mono py-2 rounded-md text-center mb-4">
              {formatTime(timeLeft)}
            </div>
            <button
              onClick={() => openModal("ابدأ المزايدة الآن")}
              className="bg-yellow-500 hover:bg-yellow-600 transition text-white w-full py-2 rounded-md font-bold"
            >
              ابدأ المزايدة الآن
            </button>
          </div>
        </aside>

        {/* Car quick info row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Each cell */}
          <div className="bg-white border rounded-lg p-3 flex flex-col items-start">
            <span className="text-xs text-gray-500">الحالة</span>
            <span className="font-semibold mt-1">مستعملة</span>
          </div>
          <div className="bg-white border rounded-lg p-3 flex flex-col items-start">
            <span className="text-xs text-gray-500">الموديل</span>
            <span className="font-semibold mt-1">26.320 TGS</span>
          </div>
          <div className="bg-white border rounded-lg p-3 flex flex-col items-start">
            <span className="text-xs text-gray-500">رقم التسلسل</span>
            <span className="font-semibold mt-1">#123456</span>
          </div>
          <div className="bg-white border rounded-lg p-3 flex flex-col items-start">
            <span className="text-xs text-gray-500">عدد الكيلومترات</span>
            <span className="font-semibold mt-1">350,000 كم</span>
          </div>
          <div className="bg-white border rounded-lg p-3 flex flex-col items-start">
            <span className="text-xs text-gray-500">سنة التسجيل</span>
            <span className="font-semibold mt-1">2022</span>
          </div>
        </div>

        {/* Specs + Side card (65% specs / 35% side) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Specs (take 2 cols on lg) */}
          <div className="lg:col-span-2 bg-white border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">الصفات</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="mb-2"><span className="font-medium">الطول الكلي:</span> 635 cm</p>
                <p className="mb-2"><span className="font-medium">العرض الكلي:</span> 255 cm</p>
                <p className="mb-2"><span className="font-medium">الارتفاع الكلي:</span> 375 cm</p>
                <p className="mb-2"><span className="font-medium">نوع المحرك:</span> ديزل</p>
              </div>
              <div>
                <p className="mb-2"><span className="font-medium">عدد السرعات:</span> 14</p>
                <p className="mb-2"><span className="font-medium">ناقل الحركة:</span> أوتوماتيكي</p>
                <p className="mb-2"><span className="font-medium">نظام الفرامل:</span> دعم الفرامل</p>
                <p className="mb-2"><span className="font-medium">نظام مانع الانزلاق:</span> متوفر</p>
              </div>
            </div>

            {/* Additional details laid out like in PDF (if more fields exist, add here) */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="bg-gray-50 p-3 rounded-md">لون: أبيض</div>
              <div className="bg-gray-50 p-3 rounded-md">نوع المصابيح: LED</div>
              <div className="bg-gray-50 p-3 rounded-md">سعة الوقود: 400L</div>
              <div className="bg-gray-50 p-3 rounded-md">وزن الحمولة: 12,000 kg</div>
            </div>
          </div>

          {/* Side card: countdown, auction details, video, contact buttons */}
          <div className="bg-gray-50 rounded-xl p-5 shadow-sm flex flex-col">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">عدد المزايدات</span>
                <span className="font-semibold">15</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">السعر</span>
                <span className="font-semibold">6500 ر.س</span>
              </div>
              <div className="flex items-center justify-between mb-2 text-red-600">
                <span className="text-sm font-medium">الحد الأدنى</span>
                <span className="font-semibold">1500 ر.س</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="bg-black text-white font-mono text-lg py-2 rounded-md text-center">
                {formatTime(timeLeft)}
              </div>
              <div className="mt-3">
                <button
                  onClick={() => openModal("ابدأ المزايدة الآن")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-2 rounded-md font-bold"
                >
                  ابدأ المزايدة الآن
                </button>
              </div>
            </div>

            {/* Video placeholder */}
            <div className="mt-5">
              <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500">فيديو المركبة (سيتم إضافة الفيديو لاحقًا)</p>
              </div>

              <div className="flex gap-3 mt-3">
                <button className="bg-black text-white py-2 px-4 rounded-md flex-1">اتصل بنا مباشرة</button>
                <button className="bg-green-500 text-white py-2 px-4 rounded-md flex-1">إرسال رسالة عبر واتساب</button>
              </div>
            </div>
          </div>
        </div>

        {/* Files / Downloads */}
        <div className="mt-10 flex flex-wrap gap-4">
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

        {/* Similar listings */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">إعلانات مشابهة</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {similarCars.map((c, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative">
                  <img src={c.img} alt={c.name} className="w-full h-48 object-cover" />
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Opening</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{c.name}</h3>
                  <p className="text-gray-700 text-sm mb-1">السعر: {c.price}</p>
                  <p className="text-gray-700 text-sm mb-1">الحد الأدنى: {c.min}</p>
                  <p className="text-gray-700 text-sm mb-3">التسجيل: {c.reg}</p>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center">
            <p className="text-lg font-bold mb-4">{modalText}</p>
            <p className="text-gray-600 mb-6">هذه الميزة ستكون متاحة قريبًا.</p>
            <button onClick={() => setShowModal(false)} className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600">
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
