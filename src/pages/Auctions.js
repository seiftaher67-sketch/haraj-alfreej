import React from 'react';
import AuctionCard from '../components/AuctionCard';

export default function Auctions() {
  // بيانات وهمية للمزادات
  const dummyAuctions = [
    {
      id: 1,
      image: '/assets/images/trucks/Frame 112.png',
      title: 'M.A.N - 26.320 TGS',
      price: '4000',
      minPrice: '500',
      model: 'TGS',
      serialNumber: '12346',
      bidsCount: '25',
      year: '2022',
      remainingTime: '07 : 15 : 01',
      status: 'Opening',
    },
    {
      id: 2,
      image: '/assets/images/trucks/Frame 113.png',
      title: 'Mercedes-Benz Actros',
      price: '5500',
      minPrice: '800',
      model: 'Actros',
      serialNumber: '78901',
      bidsCount: '18',
      year: '2021',
      remainingTime: '05 : 30 : 45',
      status: 'Opening',
    },
    {
      id: 3,
      image: '/assets/images/trucks/Frame 114.png',
      title: 'Volvo FH16',
      price: '6200',
      minPrice: '1000',
      model: 'FH16',
      serialNumber: '45678',
      bidsCount: '32',
      year: '2023',
      remainingTime: '02 : 45 : 20',
      status: 'Opening',
    },
    {
      id: 4,
      image: '/assets/images/trucks/Frame 113.png',
      title: 'Scania R500',
      price: '4800',
      minPrice: '600',
      model: 'R500',
      serialNumber: '23456',
      bidsCount: '15',
      year: '2020',
      remainingTime: '00 : 00 : 00',
      status: 'Sold',
    },
    {
      id: 5,
      image: '/assets/images/trucks/Frame 118.png',
      title: 'DAF XF105',
      price: '5200',
      minPrice: '700',
      model: 'XF105',
      serialNumber: '34567',
      bidsCount: '0',
      year: '2024',
      remainingTime: '10 : 00 : 00',
      status: 'Upcoming',
    },
    {
      id: 6,
      image: '/assets/images/trucks/Frame 119.png',
      title: 'Iveco Stralis',
      price: '4500',
      minPrice: '550',
      model: 'Stralis',
      serialNumber: '56789',
      bidsCount: '22',
      year: '2022',
      remainingTime: '08 : 20 : 10',
      status: 'Opening',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyAuctions.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
}
