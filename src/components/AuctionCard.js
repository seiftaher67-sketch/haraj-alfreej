import React from 'react';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function AuctionCard({ auction }) {
  // determine styles by status
  const statusMap = {
    Opening: { text: 'Opening', bg: 'bg-green-100 text-green-700', dot: 'bg-green-500' },
    Sold: { text: 'Sold', bg: 'bg-gray-100 text-gray-700', dot: 'bg-gray-400' },
    Waiting: { text: 'قم بالانتظار', bg: 'bg-pink-50 text-pink-600', dot: 'bg-pink-500' },
    Upcoming: { text: 'Upcoming', bg: 'bg-pink-50 text-pink-600', dot: 'bg-pink-500' }
  };

  const s = statusMap[auction.status] || statusMap.Opening;

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-44">
        <img src={auction.image} alt={auction.title} className="w-full h-full object-cover" />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${s.bg} flex items-center gap-2`}>
          <span className={`inline-block w-2 h-2 rounded-full ${s.dot}`} />
          <span>{s.text}</span>
        </div>

        <button className="absolute top-4 right-4 p-2 bg-white rounded-lg shadow-sm">
          <BookmarkIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-semibold text-lg">{auction.title}</h3>
          <div className="text-[#f2b400] font-bold text-lg">{auction.price} ر.س</div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
          <div className="text-right">
            <div className="text-[13px] text-gray-400">الحد الأدنى</div>
            <div className="font-medium">{auction.minPrice} ر.س</div>
          </div>
          <div className="text-center border-x border-gray-100">
            <div className="text-[13px] text-gray-400">الموديل</div>
            <div className="font-medium">{auction.model}</div>
          </div>
          <div className="text-left">
            <div className="text-[13px] text-gray-400">رقم التسلسل</div>
            <div className="font-medium">{auction.serialNumber}</div>
          </div>
        </div>

        {/* timer / status area */}
        <div className="mb-4">
          {auction.status === 'Opening' ? (
            <div className="flex items-center justify-between gap-4">
              <div className="px-3 py-2 rounded-lg border border-red-200 text-red-600 font-medium text-sm">
                الوقت المتبقي
                <div className="mt-1 text-base font-bold">{auction.remainingTime}</div>
              </div>
              <div className="flex-1" />
            </div>
          ) : auction.status === 'Sold' ? (
            <div className="px-3 py-2 rounded-lg bg-gray-50 text-gray-600 text-sm text-center">تم عملية البيع</div>
          ) : (
            <div className="px-3 py-2 rounded-lg border border-pink-100 bg-pink-50 text-pink-600 text-sm text-center">
              قم بالانتظار
            </div>
          )}
        </div>

        {/* action button */}
        <div>
          {auction.status === 'Opening' ? (
            <Link to="/car-details">
              <button className="w-full bg-[#f2b400] hover:bg-[#d19b00] text-[#0b0b0b] py-3 rounded-lg font-medium transition-colors">
                بدأ المزايدة
              </button>
            </Link>
          ) : auction.status === 'Sold' ? (
            <button disabled className="w-full bg-gray-100 text-gray-500 py-3 rounded-lg font-medium cursor-not-allowed">
              تم البيع
            </button>
          ) : (
            <button className="w-full bg-pink-50 border border-pink-200 text-pink-600 py-3 rounded-lg font-medium">
              قم بالانتظار
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
