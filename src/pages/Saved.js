import React, { useState, useEffect } from 'react';
import AuctionCard from '../components/AuctionCard';

export default function Saved() {
  const [savedAuctions, setSavedAuctions] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('savedAuctions') || '[]');
    setSavedAuctions(savedItems);
  }, []);

  return (
    <div dir="rtl" className="flex flex-col bg-gray-50 text-[#0b0b0b]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">المحفوظات</h1>
        {savedAuctions.length === 0 ? (
          <p className="text-center text-gray-600">لا توجد عناصر محفوظة حاليًا.</p>
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
