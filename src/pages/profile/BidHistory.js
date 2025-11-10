import React, { useState } from "react";

const BidHistory = () => {
  const [filter, setFilter] = useState("all");

  const bids = [
    { id: 1, item: "شاحنة فولفو", amount: 5000, status: "ناجحة", date: "2023-10-01" },
    { id: 2, item: "شاحنة سكانيا", amount: 4500, status: "مرفوضة", date: "2023-10-02" },
    { id: 3, item: "شاحنة مرسيدس", amount: 6000, status: "ناجحة", date: "2023-10-03" },
    { id: 4, item: "شاحنة فولفو", amount: 5500, status: "مرفوضة", date: "2023-10-04" },
  ];

  const filteredBids = filter === "all" ? bids : bids.filter(bid => bid.status === filter);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      

      <div className="mb-6">
        <div className="flex justify-start space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded ${filter === "all" ? "bg-yellow-600 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            جميع المزايدات
          </button>
          <button
            onClick={() => setFilter("ناجحة")}
            className={`px-4 py-2 rounded ${filter === "ناجحة" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            الناجحة
          </button>
          <button
            onClick={() => setFilter("مرفوضة")}
            className={`px-4 py-2 rounded ${filter === "مرفوضة" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            المرفوضة
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-2xl p-6 text-right">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="text-right py-2">التاريخ</th>
                <th className="text-right py-2">العنصر</th>
                <th className="text-right py-2">المبلغ</th>
                <th className="text-right py-2">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {filteredBids.map((bid) => (
                <tr key={bid.id} className="border-b">
                  <td className="py-2">{bid.date}</td>
                  <td className="py-2">{bid.item}</td>
                  <td className="py-2">{bid.amount} ريال</td>
                  <td className={`py-2 ${bid.status === "ناجحة" ? "text-green-600" : "text-red-600"}`}>
                    {bid.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BidHistory;
