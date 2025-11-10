import React from "react";
import { Link } from "react-router-dom";
import { ChatBubbleLeftEllipsisIcon, PhoneIcon, EnvelopeIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const Support = () => {
  const helpOptions = [
    { icon: <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-blue-600" />, label: "مركز المساعدة", action: () => alert("مركز المساعدة") },
    { icon: <PhoneIcon className="w-6 h-6 text-blue-600" />, label: "اتصل بنا", action: () => alert("اتصل بنا: 123-456-7890") },
    { icon: <EnvelopeIcon className="w-6 h-6 text-blue-600" />, label: "الشكاوى والاقتراحات", action: () => alert("الشكاوى والاقتراحات") },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6 text-right">
      <Link to="/profile/settings" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ChevronLeftIcon className="w-5 h-5 ml-2" />
        العودة للإعدادات
      </Link>

      <h1 className="text-2xl font-bold mb-6 text-gray-800">الدعم والمساعدة</h1>

      <div className="bg-white rounded-2xl shadow border p-6">
        <ul className="divide-y">
          {helpOptions.map((item, i) => (
            <li key={i} onClick={item.action} className="flex items-center justify-between py-4 hover:text-blue-600 transition cursor-pointer">
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-lg font-medium">{item.label}</span>
              </div>
              <ChevronLeftIcon className="w-5 h-5 text-gray-400" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Support;
