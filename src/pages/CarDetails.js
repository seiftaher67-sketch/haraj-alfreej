// src/pages/CarDetails.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BIDCard from "../components/BIDCard";

const CarDetails = () => {
  const location = useLocation();
  const auction = location.state?.auction || {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605100804763-247f57d3c6b8?q=80&w=600',
    title: 'M.A.N - 26.320 TGS',
    price: '4000',
    minPrice: '500',
    model: 'TGS',
    serialNumber: '12346',
    year: '2022',
    remainingTime: '07 : 15 : 01',
    status: 'Opening',
  };

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
  const [showBid, setShowBid] = useState(false);

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



  return (
    <div className="bg-white text-gray-800 font-sans" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">{auction.title}</h1>

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

       
        {/* Car quick info row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Each cell */}
          <div className="bg-white border rounded-lg p-3 flex flex-col items-start">
            <span className="text-xs text-gray-500">الحالة</span>
            <span className="font-semibold mt-1">مستعملة</span>
          </div>
          <div className="bg-white border rounded-lg p-3 flex flex-col items-start">
            <span className="text-xs text-gray-500">الموديل</span>
            <span className="font-semibold mt-1">{auction.model}</span>
          </div>
          <div className="bg-white border rounded-lg p-3 flex flex-col items-start">
            <span className="text-xs text-gray-500">رقم التسلسل</span>
            <span className="font-semibold mt-1">{auction.serialNumber}</span>
          </div>
          <div className="bg-white border rounded-lg p-3 flex flex-col items-start">
            <span className="text-xs text-gray-500">عدد الكيلومترات</span>
            <span className="font-semibold mt-1">350,000 كم</span>
          </div>
          <div className="bg-white border rounded-lg p-3 flex flex-col items-start">
            <span className="text-xs text-gray-500">سنة التسجيل</span>
            <span className="font-semibold mt-1">{auction.year}</span>
          </div>
        </div>

        {/* Specs + Side card (65% specs / 35% side) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Specs (take 2 cols on lg) */}
          <div className="lg:col-span-2 bg-white border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">الصفات</h2>
           <div> <h3 className="text-lg font-bold text-[#f2b400] mb-3">مجموعة نقل الحركة</h3> <div className="grid grid-cols-2 gap-2"> <span className="font-medium text-gray-600">سعة المحرك:</span> <span>(Hp 453) big gl5338</span> <span className="font-medium text-gray-600">الوقود:</span> <span>ديزل</span> <span className="font-medium text-gray-600">نوع علبة السرعات:</span> <span>أوتوماتيكي</span> <span className="font-medium text-gray-600">ماركة علبة السرعات:</span> <span>Scania</span> <span className="font-medium text-gray-600">السرعات:</span> <span>14</span> <span className="font-medium text-gray-600">نظام تدعيم القيادة:</span> <span>300 an</span> <span className="font-medium text-gray-600">نظام الكوابح المانع للانزلاق:</span> {['متوفر', 'نعم'].includes('متوفر') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>متوفر</span>} <span className="font-medium text-gray-600">نظام مانع الإنزلاق:</span> {['متوفر', 'نعم'].includes('نعم') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>نعم</span>} <span className="font-medium text-gray-600">بطارية التشغيل:</span> <span>375 cm</span> </div> </div> {/* Cabin */} <div> <h3 className="text-lg font-bold text-[#f2b400] mb-3">الكابينة</h3> <div className="grid grid-cols-2 gap-2"> <span className="font-medium text-gray-600">نوع الكابينة:</span> <span>كابينة نوم</span> <span className="font-medium text-gray-600">نوع الإضاءة:</span> <span>مصابيح هالوجين</span> <span className="font-medium text-gray-600">اللون:</span> <span>أبيض</span> <span className="font-medium text-gray-600">تحكم في السرعات:</span> {['متوفر', 'نعم'].includes('نعم') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>نعم</span>} <span className="font-medium text-gray-600">تاكوغراف الرقمية:</span> {['متوفر', 'نعم'].includes('متوفر') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>متوفر</span>} <span className="font-medium text-gray-600">تكييف هواء:</span> {['متوفر', 'نعم'].includes('نعم') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>نعم</span>} <span className="font-medium text-gray-600">جهاز قياس السرعة:</span> {['متوفر', 'نعم'].includes('نعم') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>نعم</span>} <span className="font-medium text-gray-600">نوافذ كهربائية:</span> {['متوفر', 'نعم'].includes('نعم') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>نعم</span>} <span className="font-medium text-gray-600">مرايا كهربائية:</span> {['متوفر', 'نعم'].includes('نعم') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>نعم</span>} <span className="font-medium text-gray-600">مساعدة المسار:</span> {['متوفر', 'نعم'].includes('نعم') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>نعم</span>} <span className="font-medium text-gray-600">تدفئة أثناء الوقوف:</span> {['متوفر', 'نعم'].includes('نعم') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>نعم</span>} <span className="font-medium text-gray-600">مرايا ساخنة:</span> {['متوفر', 'نعم'].includes('نعم') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>نعم</span>} <span className="font-medium text-gray-600">راديو / كاسيت:</span> {['متوفر', 'نعم'].includes('نعم') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>نعم</span>} <span className="font-medium text-gray-600">Bluetooth:</span> {['متوفر', 'نعم'].includes('متوفر') ? <input type="checkbox" checked disabled className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" /> : <span>متوفر</span>} <span className="font-medium text-gray-600">نظام تحديد الموقع العالمي:</span> <span>GPS</span> </div> </div> </div>
          {/* Side card: countdown, auction details, video, contact buttons */}
          <div className="bg-gray-50 rounded-xl p-5 shadow-sm flex flex-col">
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
              onClick={() => setShowBid(true)}
              className="bg-yellow-500 hover:bg-yellow-600 transition text-white w-full py-2 rounded-md font-bold"
            >
              ابدأ المزايدة الآن
            </button>
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
          <button className="border border-gray-300 rounded-md py-2 px-4 flex items-center gap-2 hover:bg-gray-100">
            📄 تحميل تقرير الفحص
          </button>
          <button className="border border-gray-300 rounded-md py-2 px-4 flex items-center gap-2 hover:bg-gray-100">
            📦 تحميل حزم التسليم
          </button>


        </div>

        {/* Similar listings */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">إعلانات مشابهة</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {similarCars.map((c, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4 flex gap-4">
                <div className="relative flex-shrink-0">
                  <img src={c.img} alt={c.name} className="w-32 h-32 object-cover rounded-lg" />
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Opening</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">{c.name}</h3>
                  <p className="text-gray-700 text-sm mb-1">السعر: {c.price}</p>
                  <p className="text-gray-700 text-sm mb-1">الحد الأدنى: {c.min}</p>
                  <p className="text-gray-700 text-sm mb-3">التسجيل: {c.reg}</p>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-2 rounded-md font-bold">
                    ابدأ المزايدة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* BID Modal */}
      {showBid && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <BIDCard
            image="/assets/images/trucks/Frame 113.png"
            price="6500"
            min="500"
            onClose={() => setShowBid(false)}
          />
        </div>
      )}
    </div>
  );
};

export default CarDetails;
