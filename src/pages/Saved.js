import React, { useState, useEffect } from 'react';
import AuctionCard from '../components/AuctionCard';
import { BookmarkX } from 'lucide-react';

export default function Saved() {
  const [savedAuctions, setSavedAuctions] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('savedAuctions') || '[]');
    setSavedAuctions(savedItems);
  }, []);

  return (
    <div dir="rtl" className="flex flex-col bg-gray-50 text-[#0b0b0b]">
      <div className="container mx-auto px-4 py-8">
       {savedAuctions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <BookmarkX className="w-24 h-24 text-gray-300 mb-6" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">لا توجد عناصر </h2>
            <p className="text-gray-500 text-center max-w-md">
              يمكنك حفظ العناصر المفضلة لديك من خلال زيارة صفحات المزادات وإضافة ما يعجبك.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedAuctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
