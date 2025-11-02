import React, { useState, useEffect } from 'react';
import AuctionCard from '../components/AuctionCard';
import { Car } from 'lucide-react';

export default function ChineseCars() {
  const [chineseCars, setChineseCars] = useState([]);

  useEffect(() => {
    // For now, using sample data. Later can add data from API or localStorage
    const cars = JSON.parse(localStorage.getItem('chineseCars') || '[]');
    if (cars.length === 0) {
      // Sample Chinese car auctions
      const sampleCars = [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600',
          title: 'BYD Han EV',
          price: '150000',
          minPrice: '140000',
          model: 'Han EV',
          serialNumber: 'BYD001',
          bidsCount: '12',
          year: '2023',
          remainingTime: '05 : 30 : 45',
          status: 'Opening',
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=600',
          title: 'Geely Coolray',
          price: '80000',
          minPrice: '75000',
          model: 'Coolray',
          serialNumber: 'GLY002',
          bidsCount: '8',
          year: '2022',
          remainingTime: '02 : 15 : 20',
          status: 'Opening',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=600',
          title: 'Chery Tiggo 8',
          price: '120000',
          minPrice: '110000',
          model: 'Tiggo 8',
          serialNumber: 'CHY003',
          bidsCount: '15',
          year: '2023',
          remainingTime: '00 : 00 : 00',
          status: 'Sold',
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=600',
          title: 'Haval H6',
          price: '95000',
          minPrice: '90000',
          model: 'H6',
          serialNumber: 'HAV004',
          bidsCount: '6',
          year: '2024',
          remainingTime: '10 : 45 : 30',
          status: 'Upcoming',
        },
      ];
      setChineseCars(sampleCars);
    } else {
      setChineseCars(cars);
    }
  }, []);

  return (
    <div dir="rtl" className="flex flex-col bg-gray-50 text-[#0b0b0b]">
      <div className="container mx-auto px-4 py-8">
        {chineseCars.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Car className="w-24 h-24 text-gray-300 mb-6" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">لا توجد سيارات صينية</h2>
            <p className="text-gray-500 text-center max-w-md">
              سيتم عرض السيارات الصينية المتاحة في المزادات هنا قريباً.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chineseCars.map((car) => (
              <AuctionCard key={car.id} auction={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
