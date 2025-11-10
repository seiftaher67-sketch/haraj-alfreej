import React from "react";
import { Link } from "react-router-dom";
import { Cog6ToothIcon, BellIcon, ShieldCheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const SettingsHome = () => {
  const settings = [
    { icon: <Cog6ToothIcon className="w-6 h-6 text-blue-600" />, label: "تغيير كلمة المرور", path: "/profile/change-password" },
    { icon: <BellIcon className="w-6 h-6 text-blue-600" />, label: "إشعارات", path: "/profile/notifications" },
    { icon: <ShieldCheckIcon className="w-6 h-6 text-blue-600" />, label: "الخصوصية", path: "/profile/privacy" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6 text-right">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">الإعدادات</h1>

      <div className="bg-white rounded-2xl shadow border p-6">
        <ul className="divide-y">
          {settings.map((item, i) => (
            <Link key={i} to={item.path} className="block">
              <li className="flex items-center justify-between py-4 hover:text-blue-600 transition cursor-pointer">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-lg font-medium">{item.label}</span>
                </div>
                <ChevronLeftIcon className="w-5 h-5 text-gray-400" />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SettingsHome;
