// src/pages/CarDetails.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BIDCard from "../components/BIDCard";
import AuctionCard from "../components/AuctionCard";
import {
  FaPhone,
  FaWhatsapp,
  FaUsers,
  FaDollarSign,
  FaGavel,
  FaRuler,
  FaCog,
  FaCar,
  FaDownload,
} from "react-icons/fa";

const CarDetails = () => {
  const location = useLocation();
  const auction = location.state?.auction || {
    id: 1,
    image: "/assets/images/trucks/Frame 113.png",
    title: "M.A.N - 26.320 TGS",
    price: "6500",
    minPrice: "1500",
    model: "TGS",
    serialNumber: "12253",
    year: "5-07-2022",
    remainingTime: "01:25:50",
    status: "Opening",
    dimensions: { length: "635", width: "255", height: "375" },
    engine: {
      capacity: "338 كيلو واط (453 Hp)",
      fuel: "ديزل",
      gearType: "أوتوماتيكي",
      gearBrand: "Scania",
      speedCount: "14",
    },
    features: { driveAssist: true, abs: true, tractionControl: true },
    cabin: {
      cabType: "كابينة نوم",
      lightType: "مصابيح هالوجين",
      color: "أبيض",
      speedControl: true,
      tacho: true,
      ac: true,
      speedMeter: true,
      electricWindows: true,
      electricMirrors: true,
      laneAssist: true,
      parkingHeater: true,
      heatedMirrors: true,
      radio: true,
      bluetooth: true,
      gps: true,
    },
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
      name: "SCHMITZ - 26 S",
      price: "2500000",
      min: "205000",
      bidsCount: 5,
      reg: "10-08-2023",
      img: "/assets/images/images/Property 1=P2.png",
      model: "Benz",
      serialNumber: "12345",
      remainingTime: "08 : 15 : 02",
      status: "Opening",
    },
    {
      name: "RENAULT - 2TGS",
      price: "325000",
      min: "5000",
      reg: "5-07-2022",
      img: "/assets/images/images/Property 1=P2.png",
      model: "320 TGS",
      serialNumber: "12346",
      year: "2022",
      kilometers: "597,914",
      status: "Opening",
    },
    {
      name: "SCANIA",
      price: "10005000",
      min: "350000",
      bidsCount: 3,
      reg: "10-08-2023",
      img: "/assets/images/images/Property 1=P2.png",
      model: "320 TGS",
      serialNumber: "12345",
      remainingTime: "10 : 20 : 03",
      status: "Upcoming",
    },
  ];

  const similarAuctions = similarCars.map((c, idx) => ({
    id: idx + 1,
    image: c.img,
    title: c.name,
    price: c.price,
    minPrice: c.min,
    model: c.model || "Unknown",
    serialNumber: c.serialNumber || "Unknown",
    year: c.year || c.reg.split("-")[2] || "Unknown",
    remainingTime: c.remainingTime || "00 : 00 : 00",
    status: c.status || "Opening",
    bidsCount: c.bidsCount || 0,
  }));

  const [mainImage, setMainImage] = useState(
    "/assets/images/trucks/Frame 113.png"
  );
  const [timeLeft, setTimeLeft] = useState(
    auction.remainingTime
      ? auction.remainingTime
          .split(":")
          .reduce(
            (acc, val, idx) => acc + parseInt(val) * [3600, 60, 1][idx],
            0
          )
      : 3600
  );
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
    <div className="bg-white" dir="rtl">
      <div className="max-w-[1440px] mx-auto px-[72px] py-8">
        {/* Title */}
        <h1 className="text-[40px] font-bold mb-6 text-center">
          {auction.title}
        </h1>

        {/* Gallery Section */}
        <div className="flex gap-6 mb-8">
          {/* Main Image */}
          <div className="relative flex-1">
            <img
              src={mainImage}
              alt="main"
              className="rounded-2xl w-[856px] h-[560px] object-cover"
            />
            <span className="absolute top-6 right-6 bg-white rounded-3xl px-4 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38DF3C]"></span>
              <span className="text-[#38DF3C] font-semibold text-xl">
                Opening
              </span>
            </span>
            <button className="absolute top-6 left-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Thumbnails Grid */}
          <div className="w-[418px]">
            <div className="grid grid-cols-2 gap-[26px]">
              {thumbnails.slice(0, 2).map((src, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(src)}
                  className="focus:outline-none"
                >
                  <img
                    src={src}
                    alt={`thumb-${i}`}
                    className="w-[196px] h-[176px] object-cover rounded-2xl hover:opacity-90"
                  />
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-[26px] mt-4">
              {thumbnails.slice(2, 4).map((src, i) => (
                <button
                  key={i + 2}
                  onClick={() => setMainImage(src)}
                  className="focus:outline-none"
                >
                  <img
                    src={src}
                    alt={`thumb-${i + 2}`}
                    className="w-[196px] h-[176px] object-cover rounded-2xl hover:opacity-90"
                  />
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-[26px] mt-4">
              {thumbnails.slice(4, 6).map((src, i) => (
                <button
                  key={i + 4}
                  onClick={() => setMainImage(src)}
                  className="focus:outline-none"
                >
                  <img
                    src={src}
                    alt={`thumb-${i + 4}`}
                    className="w-[196px] h-[176px] object-cover rounded-2xl hover:opacity-90"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Basic Info Row */}
        <div className="flex items-center gap-6 mb-8 border-t border-b border-gray-200 py-4">
          <div className="flex flex-col items-center flex-1 border-l border-gray-300 px-4">
            <span className="text-[#C3C3C3] text-2xl font-semibold mb-1">
              سنة التسجيل
            </span>
            <span className="text-black font-medium text-xl">
              {auction.year}
            </span>
          </div>
          <div className="flex flex-col items-center flex-1 border-l border-gray-300 px-4">
            <span className="text-[#C3C3C3] text-2xl font-semibold mb-1">
              عدد الكيلومترات
            </span>
            <span className="text-black font-medium text-xl">597,914 كم</span>
          </div>
          <div className="flex flex-col items-center flex-1 border-l border-gray-300 px-4">
            <span className="text-[#C3C3C3] text-2xl font-semibold mb-1">
              رقم التسلسل
            </span>
            <span className="text-black font-medium text-xl">
              {auction.serialNumber}
            </span>
          </div>
          <div className="flex flex-col items-center flex-1 border-l border-gray-300 px-4">
            <span className="text-[#C3C3C3] text-2xl font-semibold mb-1">
              الموديل
            </span>
            <span className="text-black font-medium text-xl">
              {auction.model}
            </span>
          </div>
          <div className="flex flex-col items-center flex-1 px-4">
            <span className="text-[#C3C3C3] text-2xl font-semibold mb-1">
              حالة السيارة
            </span>
            <span className="text-black font-medium text-xl">جديدة</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {/* Right Column: Timer, Auction Details, Video, Contacts, Downloads */}
          <div className="col-span-1 space-y-6 order-2">
            {/* Timer */}
            <div className="bg-black text-white text-3xl font-medium py-4 rounded-lg flex items-center justify-center gap-6">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {formatTime(timeLeft)}
            </div>

            {/* Auction Details Card */}
            <div className="bg-[#F9F9F9] rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-black" />
                  <span className="text-black font-semibold text-2xl">
                    عدد المزايدات
                  </span>
                </div>
                <span className="font-semibold text-2xl">15</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FaDollarSign className="text-[#F8BC06]" />
                  <span className="text-black font-semibold text-2xl">
                    السعر
                  </span>
                </div>
                <span className="font-semibold text-2xl">6500 ر.س</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                  <span className="text-black font-semibold text-2xl">
                    الحد الأدنى
                  </span>
                </div>
                <span className="font-semibold text-2xl text-[#EB001B]">
                  1500 ر.س
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FaGavel className="text-black" />
                  <span className="text-black font-semibold text-2xl">
                    قيمة السعي
                  </span>
                </div>
                <span className="font-semibold text-2xl">162.5 ر.س</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-black font-medium text-2xl">
                    الضريبة المضافة
                  </span>
                </div>
                <span className="font-semibold text-2xl">24.375 ر.س</span>
              </div>

              <div className="bg-[#E9E9E9] my-3 py-4 rounded-lg">
                <div className="flex items-center justify-between px-4">
                  <span className="text-black font-semibold text-3xl">
                    الإجمالي
                  </span>
                  <span className="font-bold text-black text-3xl">
                    6686.875 ر.س
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowBid(true)}
                className="bg-[#F8BC06] hover:bg-[#d19b00] transition text-black w-full py-4 rounded-lg font-semibold text-2xl"
              >
                بدأ التزايد الان
              </button>
            </div>

            {/* Video */}
            <div className="relative">
              <img
                src="/assets/images/images/Property 1=P2.png"
                alt="video thumbnail"
                className="w-full h-[350px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white rounded-full p-4 transition">
                  <svg
                    className="w-20 h-20 text-[#F8BC06]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <button className="w-full border-2 border-black text-black py-4 rounded-2xl flex items-center justify-center gap-4 hover:bg-gray-50">
                <FaPhone className="w-8 h-8" />
                <span className="text-2xl font-medium">أتصل بنا مباشرة</span>
              </button>
              <button className="w-full border-2 border-black text-black py-4 rounded-2xl flex items-center justify-center gap-4 hover:bg-gray-50">
                <FaWhatsapp className="w-8 h-8 text-green-500" />
                <span className="text-2xl font-medium">
                  إرسال رسالة عبر واتساب
                </span>
              </button>
            </div>

            {/* Downloadable Files */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-2 border-gray-300 rounded-2xl p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/images/icons/Icons (4).png"
                    alt="icon"
                    className="w-14 h-14"
                  />
                  <span className="text-2xl font-medium">
                    تحميل حزم التسليم
                  </span>
                </div>
                <FaDownload className="text-3xl text-gray-600" />
              </div>
              <div className="flex items-center justify-between border-2 border-gray-300 rounded-2xl p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/images/icons/Icons (4).png"
                    alt="icon"
                    className="w-14 h-14"
                  />
                  <span className="text-2xl font-medium">
                    تحميل تقرير التفتيش
                  </span>
                </div>
                <FaDownload className="text-3xl text-gray-600" />
              </div>
            </div>
          </div>

          {/* Left Column: Specifications */}
          <div className="col-span-2 space-y-8 order-1">
            {/* الصفات Title */}
            <h2 className="text-3xl font-semibold">الصفات</h2>

            {/* خاصية السيارة */}
            <div className="bg-[#F9F9F9] rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-[#F8BC06] mb-6 flex items-center">
                <FaRuler className="ml-2" /> خاصية السيارة
              </h3>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="/assets/images/trucks/original 1.png"
                    alt="car dimension"
                    className="w-[425px] h-[292px] rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-xl text-gray-700">
                      الطول الإجمالي للمركبة
                    </span>
                    <span className="font-bold text-xl">
                      {auction.dimensions?.length || "635"} cm
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-xl text-gray-700">
                      إجمالي عرض السيارة
                    </span>
                    <span className="font-bold text-xl">
                      {auction.dimensions?.width || "255"} cm
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-xl text-gray-700">
                      إجمالي ارتفاع المركبة
                    </span>
                    <span className="font-bold text-xl">
                      {auction.dimensions?.height || "375"} cm
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* مجموعة نقل الحركة */}
            <div className="bg-[#F9F9F9] rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-[#F8BC06] mb-6 flex items-center">
                <FaCog className="ml-2" /> مجموعة نقل الحركة
              </h3>
              <div className="flex justify-between gap-16 mb-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-medium text-gray-700">
                    سعة المحرك
                  </span>
                  <span className="text-xl font-medium text-gray-700">
                    الوقود
                  </span>
                  <span className="text-xl font-medium text-gray-700">
                    نوع علبة السرعات
                  </span>
                  <span className="text-xl font-medium text-gray-700">
                    ماركة علبة السرعات
                  </span>
                  <span className="text-xl font-medium text-gray-700">
                    عدد السرعات
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xl text-gray-600">
                    {auction.engine?.capacity || "338 كيلو واط (453 Hp)"}
                  </span>
                  <span className="text-xl text-gray-600">
                    {auction.engine?.fuel || "ديزل"}
                  </span>
                  <span className="text-xl text-gray-600">
                    {auction.engine?.gearType || "أوتوماتيكي"}
                  </span>
                  <span className="text-xl text-gray-600">
                    {auction.engine?.gearBrand || "Scania"}
                  </span>
                  <span className="text-xl text-gray-600">
                    {auction.engine?.speedCount || "14"}
                  </span>
                </div>
              </div>

              {/* Driving Support Features */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border-[1.5px] border-black flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#F8BC06]"></div>
                  </div>
                  <span className="text-xl text-gray-700">
                    نظام الكوابح المانع للانزلاق
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border-[1.5px] border-black flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#F8BC06]"></div>
                  </div>
                  <span className="text-xl text-gray-700">بطارية التشغيل</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border-[1.5px] border-black flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#F8BC06]"></div>
                  </div>
                  <span className="text-xl text-gray-700">
                    نظام تدعيم القيادة
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border-[1.5px] border-black flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#F8BC06]"></div>
                  </div>
                  <span className="text-xl text-gray-700">
                    نظام مانع الإنزلاق
                  </span>
                </div>
              </div>
            </div>

            {/* الكابينة */}
            <div className="bg-[#F9F9F9] rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-[#F8BC06] mb-6 flex items-center">
                <FaCar className="ml-2" /> الكابينة
              </h3>
              {/* Basic Cabin Info */}
              <div className="flex justify-between gap-8 mb-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-medium text-gray-700">
                    نوع الكابينة
                  </span>
                  <span className="text-xl font-medium text-gray-700">
                    نوع الإضاءة
                  </span>
                  <span className="text-xl font-medium text-gray-700">
                    اللون
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xl text-gray-600">
                    {auction.cabin?.cabType || "كابينة نوم"}
                  </span>
                  <span className="text-xl text-gray-600">
                    {auction.cabin?.lightType || "مصابيح هالوجين"}
                  </span>
                  <span className="text-xl text-gray-600">
                    {auction.cabin?.color || "أبيض"}
                  </span>
                </div>
              </div>

              {/* Cabin Features Grid */}
              <div className="grid grid-cols-3 gap-y-4">
                {[
                  { label: "تكييف هواء", key: "ac" },
                  { label: "مرايا كهربائية", key: "electricMirrors" },
                  { label: "راديو / كاسيت", key: "radio" },
                  { label: "نظام تحديد الموقع العالمي", key: "gps" },
                  { label: "تاكوغراف الرقمية", key: "tacho" },
                  { label: "نوافذ كهربائية", key: "electricWindows" },
                  { label: "مرايا ساخنة", key: "heatedMirrors" },
                  { label: "Bluetooth", key: "bluetooth" },
                  { label: "تحكم في السرعات", key: "speedControl" },
                  { label: "جهاز قياس السرعة", key: "speedMeter" },
                  { label: "مساعدة المسار", key: "laneAssist" },
                  { label: "تدفئة أثناء الوقوف", key: "parkingHeater" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border-[1.5px] border-black flex items-center justify-center flex-shrink-0">
                      {auction.cabin?.[item.key] && (
                        <div className="w-4 h-4 rounded-full bg-[#F8BC06]"></div>
                      )}
                    </div>
                    <span className="text-xl text-gray-700 truncate">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Listings */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">إختيارات مشابهه</h2>
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
