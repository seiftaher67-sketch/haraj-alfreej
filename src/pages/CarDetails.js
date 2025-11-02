// src/pages/CarDetails.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BIDCard from "../components/BIDCard";
import AuctionCard from "../components/AuctionCard";
import { FaPhone, FaWhatsapp, FaUsers, FaDollarSign, FaArrowDown, FaGavel, FaCalculator, FaRuler, FaCog, FaCar, FaDownload, FaTrash } from "react-icons/fa";

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
    dimensions: { length: "635", width: "255", height: "375" },
    engine: { capacity: "Hp 453", fuel: "ديزل", gearType: "أوتوماتيكي", gearBrand: "Scania", speedCount: "14" },
    features: { driveAssist: true, abs: true, tractionControl: true },
    cabin: { cabType: "كابينة نوم", lightType: "مصابيح هالوجين", color: "أبيض", speedControl: true, tacho: true, ac: true, speedMeter: true, electricWindows: true, electricMirrors: true, laneAssist: true, parkingHeater: true, heatedMirrors: true, radio: true, bluetooth: true, gps: true }
  };

  const thumbnails = [
    "/assets/images/trucks/Frame 112.png",
    "/assets/images/trucks/Frame 113.png",
    "/assets/images/trucks/Frame 114.png",
    "/assets/images/trucks/Frame 117.png",
    "/assets/images/trucks/Frame 118.png",
    "/assets/images/trucks/Frame 119.png",
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

  const similarAuctions = similarCars.map((c, idx) => ({
    id: idx + 1,
    image: c.img,
    title: c.name,
    price: c.price,
    minPrice: c.min,
    model: 'Unknown',
    serialNumber: 'Unknown',
    year: c.reg.split('-')[2] || 'Unknown',
    remainingTime: '00 : 00 : 00',
    status: 'Opening'
  }));

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
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 mb-8">
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
            <h2 className="text-xl font-bold mb-6 text-gray-900">الصفات</h2>

            {/* خاصية السيارة */}
            <section className="mb-8 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#f2b400] mb-4 flex items-center">
                <FaRuler className="ml-2 text-[#f2b400]" /> خاصية السيارة
              </h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="grid grid-cols-1 gap-4 text-gray-700">
                    <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                      <span className="text-sm text-gray-600">الطول الإجمالي للمركبة</span>
                      <span className="font-bold text-gray-900">{auction.dimensions?.length || "635"} cm</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                      <span className="text-sm text-gray-600">إجمالي عرض السيارة</span>
                      <span className="font-bold text-gray-900">{auction.dimensions?.width || "255"} cm</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                      <span className="text-sm text-gray-600">إجمالي ارتفاع المركبة</span>
                      <span className="font-bold text-gray-900">{auction.dimensions?.height || "375"} cm</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/assets/images/trucks/original 1.png"
                    alt="car dimension"
                    className="w-0  rounded-lg "
                  />
                </div>
              </div>
            </section>

            {/* مجموعة نقل الحركة */}
            <section className="mb-8 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#f2b400] mb-4 flex items-center">
                <FaCog className="ml-2 text-[#f2b400]" /> مجموعة نقل الحركة
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                  <span className="text-sm text-gray-600">سعة المحرك</span>
                  <span className="font-bold text-gray-900">{auction.engine?.capacity || "Hp 453"}</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                  <span className="text-sm text-gray-600">الوقود</span>
                  <span className="font-bold text-gray-900">{auction.engine?.fuel || "ديزل"}</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                  <span className="text-sm text-gray-600">نوع علبة السرعات</span>
                  <span className="font-bold text-gray-900">{auction.engine?.gearType || "أوتوماتيكي"}</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                  <span className="text-sm text-gray-600">ماركة علبة السرعات</span>
                  <span className="font-bold text-gray-900">{auction.engine?.gearBrand || "Scania"}</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                  <span className="text-sm text-gray-600">عدد السرعات</span>
                  <span className="font-bold text-gray-900">{auction.engine?.speedCount || "14"}</span>
                </div>
                {/* خصائص متاحة أو لا */}
                {[
                  { label: "نظام تدعيم القيادة", key: "driveAssist" },
                  { label: "نظام الكوابح المانع للانزلاق", key: "abs" },
                  { label: "نظام مانع الإنزلاق", key: "tractionControl" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm"
                  >
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <span className="font-bold text-green-600">{auction.features?.[item.key] ? "✅ نعم" : "❌ لا"}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* الكابينة */}
            <section className="mb-8 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#f2b400] mb-3 flex items-center">
                <FaCar className="ml-2 text-[#f2b400]" /> الكابينة
              </h3>
              {/* First three items side by side */}
              <div className="mb-6 flex flex-col gap-4">
                <div className="flex flex-row items-center gap-4">
                  <span className="font-bold text-gray-800 text-sm">نوع الكابينة:</span>
                  <span className="text-gray-600">كابينة نوم</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <span className="font-bold text-gray-800 text-sm">نوع الإضاءة:</span>
                  <span className="text-gray-600">مصابيح هالوجين</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <span className="font-bold text-gray-800 text-sm">اللون:</span>
                  <span className="text-gray-600">أبيض</span>
                </div>
              </div>
              {/* Rest in grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                {[
                  { label: "تحكم في السرعات", key: "speedControl" },
                  { label: "تاكوغراف الرقمية", key: "tacho" },
                  { label: "تكييف هواء", key: "ac" },
                  { label: "جهاز قياس السرعة", key: "speedMeter" },
                  { label: "نوافذ كهربائية", key: "electricWindows" },
                  { label: "مرايا كهربائية", key: "electricMirrors" },
                  { label: "مساعدة المسار", key: "laneAssist" },
                  { label: "تدفئة أثناء الوقوف", key: "parkingHeater" },
                  { label: "مرايا ساخنة", key: "heatedMirrors" },
                  { label: "راديو / كاسيت", key: "radio" },
                  { label: "Bluetooth", key: "bluetooth" },
                  { label: "نظام تحديد الموقع العالمي", key: "gps" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={auction.cabin?.[item.key] ?? true}
                      readOnly
                      className="w-5 h-5 rounded border-gray-300 text-[#f2b400] focus:ring-[#f2b400]"
                    />
                    <span className="truncate">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
          {/* Side card: countdown, auction details, video, contact buttons */}
          <div className="bg-gray-50 rounded-xl p-5 shadow-sm flex flex-col">
             <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 font-medium flex items-center gap-2">
                <FaUsers className="text-blue-500" /> عدد المزايدات
              </span>
              <span className="font-semibold">15</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 font-medium flex items-center gap-2">
                <FaDollarSign className="text-green-500" /> السعر
              </span>
              <span className="font-semibold">6500 ر.س</span>
            </div>
            <div className="flex items-center justify-between mb-2 text-red-600">
              <span className="text-sm font-medium flex items-center gap-2">
                <FaArrowDown className="text-red-500" /> الحد الأدنى
              </span>
              <span className="font-semibold">1500 ر.س</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 font-medium flex items-center gap-2">
                <FaGavel className="text-purple-500" /> قيمة السعي
              </span>
              <span className="font-semibold">162.5 ر.س</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 font-medium flex items-center gap-2">
                <FaCalculator className="text-orange-500" /> الضريبة
              </span>
              <span className="font-semibold">24.375 ر.س</span>
            </div>

            <hr className="my-3 border-gray-300" />

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-medium flex items-center gap-2">
                <FaCalculator className="text-indigo-500" /> الإجمالي
              </span>
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
            {/* Video */}
            <div className="mt-5">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/bKZtjt27AFg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-md"
              ></iframe>

              <div className="flex flex-col gap-3 mt-3">
                <button className="bg-black text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
                  <FaPhone /> اتصل بنا مباشرة
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
                  <FaWhatsapp /> إرسال رسالة عبر واتساب
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Files / Downloads */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between hover:bg-gray-100">
            <div className="flex items-center gap-2">
              <img src="/assets/images/icons/Icons (4).png" alt="icon" className="w-8 h-8" />
              <span>تحميل تقرير الفحص</span>
            </div>
            <div className="flex gap-2">
              <button className="text-blue-500 hover:text-blue-700">
                <FaDownload />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between hover:bg-gray-100">
            <div className="flex items-center gap-2">
              <img src="/assets/images/icons/Icons (4).png" alt="icon" className="w-8 h-8" />
              <span>تحميل حزم التسليم</span>
            </div>
            <div className="flex gap-2">
              <button className="text-blue-500 hover:text-blue-700">
                <FaDownload />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
        </div>

        {/* Similar listings */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">إعلانات مشابهة</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {similarAuctions.map((auction, idx) => (
              <AuctionCard key={idx} auction={auction} />
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
