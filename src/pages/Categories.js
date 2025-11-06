import React, { useState } from "react";
import AuctionCard from "../components/AuctionCard";
import { FaTruck, FaCar, FaTrailer, FaCog } from "react-icons/fa";

export const categories = [
  { name: "شاحنات", icon: FaTruck },
  { name: "سيارات", icon: FaCar },
  { name: "مقطورات", icon: FaTrailer },
  { name: "قطع غيار", icon: FaCog },
];

export const filters = [
  { name: "المدينة", options: ["الرياض", "جدة", "الدمام", "مكة"] },
  { name: "الماركة", options: ["مرسيدس", "فولفو", "مان", "سكانيا"] },
  { name: "الموديل", options: ["TGS", "FH", "TGX", "R"] },
  { name: "سنة الصنع", options: ["2020", "2021", "2022", "2023"] },
  { name: "حالة السيارة", options: ["جديد", "مستعمل", "مصدوم"] },
];

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const vehicles = [
    {
      // id: 1,
      // title: 'MERCEDES',
      // price: '2500000',
      // minPrice: '205000',
      // serialNumber: '12345',
      // model: 'BENZ',
      // auctionCount: 3,
      // remainingTime: '08:15:02',
      // image: '/assets/images/trucks/Frame 113.png',
      // status: 'Opening'
    },
    // Add more vehicle data as needed
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleCardSelection = (id) => {
    setSelectedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const toggleDropdown = (filterName) => {
    setOpenDropdown(openDropdown === filterName ? null : filterName);
  };

  return (
    <div dir="rtl" className="flex flex-col bg-gray-50 text-[#0b0b0b]">
      {/* CATEGORIES SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">الفئات</h2>

            <div className="flex items-center gap-3">
              <button className="bg-black text-white px-6 py-2 rounded-lg">
                بحث
              </button>
            </div>
          </div>

          {/* category chips */}
          <div className="flex items-center gap-3 flex-wrap mb-6">
            {categories.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => toggleCategory(name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategories.includes(name)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-[#0b0b0b]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {name}
              </button>
            ))}
          </div>

          {/* filters row */}
          <div className="flex items-center gap-3 flex-wrap mb-8">
            {filters.map(({ name, options }) => (
              <div key={name} className="relative">
                <button
                  onClick={() => toggleDropdown(name)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0b0b0b] flex items-center gap-2"
                >
                  {name} ▾
                </button>
                {openDropdown === name && (
                  <div className="absolute top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px]">
                    {options.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          // Handle selection (e.g., update filter state)
                          setOpenDropdown(null);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((v) => (
              <div
                key={v.id}
                onClick={() => toggleCardSelection(v.id)}
                className={`cursor-pointer transition-all ${
                  selectedCards.includes(v.id)
                    ? "ring-2 ring-blue-500 rounded-2xl"
                    : ""
                }`}
              >
                <AuctionCard auction={v} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
