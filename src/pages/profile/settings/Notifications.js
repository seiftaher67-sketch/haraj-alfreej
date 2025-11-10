import React, { useState } from "react";
import { BellIcon } from "@heroicons/react/24/outline";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleToggle = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 text-right">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">الإشعارات</h1>

      <div className="bg-white rounded-2xl shadow border p-6">
        <ul className="divide-y">
          <li className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <BellIcon className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-medium">إشعارات البريد الإلكتروني</span>
            </div>
            <button
              onClick={() => handleToggle('email')}
              className={`w-12 h-6 rounded-full transition-colors ${notifications.email ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${notifications.email ? 'translate-x-6' : 'translate-x-1'}`}></div>
            </button>
          </li>
          <li className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <BellIcon className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-medium">إشعارات الرسائل النصية</span>
            </div>
            <button
              onClick={() => handleToggle('sms')}
              className={`w-12 h-6 rounded-full transition-colors ${notifications.sms ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${notifications.sms ? 'translate-x-6' : 'translate-x-1'}`}></div>
            </button>
          </li>
          <li className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <BellIcon className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-medium">إشعارات التطبيق</span>
            </div>
            <button
              onClick={() => handleToggle('push')}
              className={`w-12 h-6 rounded-full transition-colors ${notifications.push ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${notifications.push ? 'translate-x-6' : 'translate-x-1'}`}></div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
