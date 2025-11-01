import React, { useState, useEffect } from 'react';
import { BookmarkIcon as BookmarkOutlineIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';



export default function AuctionCard({ auction }) {
  const [isSaved, setIsSaved] = useState(false);
  const [remainingTime, setRemainingTime] = useState(auction.remainingTime || '00 : 00 : 00');
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('savedAuctions') || '[]');
    setIsSaved(savedItems.some(item => item.id === auction.id));
  }, [auction.id]);

  useEffect(() => {
    if (auction.status === 'Opening' && auction.remainingTime) {
      // Parse 'HH : MM : SS' to total seconds
      const [hours, minutes, seconds] = auction.remainingTime.split(' : ').map(Number);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      setRemainingSeconds(totalSeconds);
    }
  }, [auction.remainingTime, auction.status]);

  useEffect(() => {
    if (auction.status === 'Opening' && remainingSeconds > 0) {
      const interval = setInterval(() => {
        setRemainingSeconds(prev => {
          if (prev <= 1) {
            setRemainingTime('00 : 00 : 00');
            return 0;
          }
          const newSeconds = prev - 1;
          // Format back to 'HH : MM : SS'
          const hours = Math.floor(newSeconds / 3600);
          const minutes = Math.floor((newSeconds % 3600) / 60);
          const secs = newSeconds % 60;
          const formatted = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
          setRemainingTime(formatted);
          return newSeconds;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [remainingSeconds, auction.status]);

  const toggleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const savedItems = JSON.parse(localStorage.getItem('savedAuctions') || '[]');
    let updatedItems;

    if (isSaved) {
      updatedItems = savedItems.filter(item => item.id !== auction.id);
    } else {
      updatedItems = [...savedItems, auction];
    }

    localStorage.setItem('savedAuctions', JSON.stringify(updatedItems));
    setIsSaved(!isSaved);
  };

// خريطة الحالة لتحديد اللون والنصوص
const statusMap = {
Opening: {
label: 'Opening',
bg: 'bg-green-100 text-green-700',
dot: 'bg-green-500',
},
Sold: {
label: 'Sold',
bg: 'bg-gray-100 text-gray-700',
dot: 'bg-gray-400',
},
Upcoming: {
label: 'Upcoming',
bg: 'bg-pink-50 text-pink-600',
dot: 'bg-pink-500',
},
};




const s = statusMap[auction.status] || statusMap.Opening;




return (

<article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
  <div className="relative h-44">
    {/* صورة المنتج */}
    <img src={auction.image} alt={auction.title} className="w-full h-full object-cover" />



    {/* حالة المزاد */}
    <div
      className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 ${s.bg}`}
    >
      <span className={`inline-block w-2 h-2 rounded-full ${s.dot}`}></span>
      {s.label}
    </div>

    {/* زر الحفظ */}
    <button
      onClick={toggleSave}
      className="absolute top-3 right-3 bg-white rounded-lg p-2 shadow-sm hover:bg-gray-50 transition"
    >
      {isSaved ? (
        <BookmarkSolidIcon className="w-5 h-5 text-yellow-500" />
      ) : (
        <BookmarkOutlineIcon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  </div>

  {/* التفاصيل */}
  <div className="p-4 flex flex-col gap-3">
    {/* العنوان */}
    <h3 className="font-bold text-[25px] text-gray-900 leading-tight text-center">
      {auction.title}
    </h3>

    {/* السعر */}
    <div className="font-bold text-black-400 text-base">
      السعر <span className="ml-16"></span><CurrencyDollarIcon className="w-4 h-4 inline mr-1" /> <span className="text-[#f2b400] font-bold">{auction.price}</span> ر.س
    </div>

    {/* الحد الأدنى */}
    <div className="font-bold text-gray-400 text-base">
      الحد الأدنى <span className="ml-10"></span><CurrencyDollarIcon className="w-4 h-4 inline mr-1" /> <span className=" font-bold">{auction.minPrice}</span> ر.س
    </div>

    {/* التفاصيل المصغرة */}
    <div className="grid grid-cols-3 text-sm text-gray-600 border-t border-b border-gray-100 py-2">
      <div className="text-right">
        <div className="text-xs text-gray-400">الموديل</div>
        <div className="font-medium">{auction.model}</div>
      </div>
      <div className="text-center border-x border-gray-100">
        <div className="text-xs text-gray-400">رقم التسلسل</div>
        <div className="font-medium">{auction.serialNumber}</div>
      </div>
      <div className="text-left">
        <div className="text-xs text-gray-400">عدد المزايدات</div>
        <div className="font-medium">{auction.bidsCount}</div>
      </div>
    </div>

    {/* الوقت */}
    <div className="flex items-center justify-center text-sm text-gray-600">
      {auction.status === 'Opening' ? (
        <div className="px-3 py-1.5 rounded-lg border border-red-200 text-red-600 font-medium text-xs flex items-center gap-2">
          <div>الوقت المتبقي</div>
          <div className="text-lg font-bold">
            {remainingTime}
          </div>
        </div>
      ) : auction.status === 'Sold' ? (
        <div className="px-3 py-1.5 rounded-lg bg-gray-50 text-gray-500 font-medium text-xs text-center">
          تم البيع
        </div>
      ) : (
        <div className="px-3 py-1.5 rounded-lg bg-pink-50 text-pink-600 border border-pink-100 font-medium text-xs text-center">
          قم بالانتظار
        </div>
      )}
    </div>

    {/* الزر */}
    <div className="flex justify-center">
      {auction.status === 'Opening' ? (
        <Link to="/car-details" state={{ auction }}>
          <button className="bg-[#f2b400] hover:bg-[#d19b00] text-[#0b0b0b] py-2.5 px-6 rounded-lg font-semibold text-sm transition-colors">
            بدأ المزايدة
          </button>
        </Link>
      ) : auction.status === 'Sold' ? (
        <button
          disabled
          className="bg-gray-100 text-gray-500 py-2.5 px-6 rounded-lg font-semibold text-sm cursor-not-allowed"
        >
          تم البيع
        </button>
      ) : (
        <button className="bg-pink-50 border border-pink-200 text-pink-600 py-2.5 px-6 rounded-lg font-semibold text-sm">
          قم بالانتظار
        </button>
      )}
    </div>
  </div>
</article>




);
}




// بيانات افتراضية (للتجربة فقط)
AuctionCard.defaultProps = {
auction: {
id: 1,
image: 'https://images.unsplash.com/photo-1605100804763-247f57d3c6b8?q=80&w=600',
title: 'M.A.N - 26.320 TGS',
price: '4000',
minPrice: '500',
model: 'TGS',
serialNumber: '12346',
bidsCount: '25',
year: '2022',
remainingTime: '07 : 15 : 01',
status: 'Opening', // Opening | Sold | Upcoming
},
};
