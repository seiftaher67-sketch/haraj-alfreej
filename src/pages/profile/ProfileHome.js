import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  CreditCard,
  Wallet,
  History,
  Settings,
  HelpCircle,
  FileText,
  LogOut,
  ChevronDown,
  Lock,
  Bell,
  Phone,
  MessageSquare,
  User,
  MapPin,
} from "lucide-react";

const ProfileHome = () => {
  const location = useLocation();
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(false);
  const [isSupportExpanded, setIsSupportExpanded] = useState(false);

  const subMenuItems = [
    {
      path: "profile-edit",
      label: "تعديل البروفايل",
      icon: <User className="w-4 h-4" />,
    },
    {
      path: "location",
      label: "الموقع",
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      path: "change-password",
      label: "تغيير كلمة المرور",
      icon: <Lock className="w-4 h-4" />,
    },
    {
      path: "notifications",
      label: "الإشعارات",
      icon: <Bell className="w-4 h-4" />,
    },
    {
      path: "legal",
      label: "الخصوصية",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  const supportSubMenuItems = [
    {
      path: "support",
      label: "مركز المساعدة",
      icon: <HelpCircle className="w-4 h-4" />,
    },
    {
      path: "contact",
      label: "اتصل بنا",
      icon: <Phone className="w-4 h-4" />,
    },
    {
      path: "complaints",
      label: "الشكاوى والاقتراحات",
      icon: <MessageSquare className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    if (location.pathname.startsWith('/profile/settings') ||
        location.pathname.startsWith('/profile/change-password') ||
        location.pathname.startsWith('/profile/notifications') ||
        location.pathname.startsWith('/profile/legal') ||
        location.pathname.startsWith('/profile/profile-edit') ||
        location.pathname.startsWith('/profile/location')) {
      setIsSettingsExpanded(true);
    }
    if (location.pathname.startsWith('/profile/support') ||
        location.pathname.startsWith('/profile/contact') ||
        location.pathname.startsWith('/profile/complaints')) {
      setIsSupportExpanded(true);
    }
  }, [location.pathname]);

  const menuItems = [
    {
      path: "dashboard",
      label: "لوحة التحكم",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      path: "account-payments",
      label: "الحساب والدفع",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      path: "recharge",
      label: "شحن الحساب",
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      path: "bid-history",
      label: "تاريخ المزايدات",
      icon: <History className="w-5 h-5" />,
    },
    {
      path: "settings",
      label: "الإعدادات",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      path: "support",
      label: "الدعم والمساعدة",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      path: "legal",
      label: "الشروط والأحكام",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <div className="w-54 bg-[#f2b400] h-full border-l border-gray-200">
        <div className="p-6">
          <div className="flex justify-center mb-8">
            <img
              src="/assets/images/images/Frame 755.png"
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-gray-200"
            />
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              if (item.path === "settings") {
                const isSettingsActive = location.pathname.startsWith('/profile/settings') ||
                  location.pathname.startsWith('/profile/change-password') ||
                  location.pathname.startsWith('/profile/notifications') ||
                  location.pathname.startsWith('/profile/legal') ||
                  location.pathname.startsWith('/profile/profile-edit') ||
                  location.pathname.startsWith('/profile/location');
                return (
                  <div key={item.path}>
                    <button
                      onClick={() => setIsSettingsExpanded(!isSettingsExpanded)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                        isSettingsActive
                          ? "bg-[#0b0b0b] text-white border-r-4 border-[#0b0b0b]"
                          : "text-[#0b0b0b] hover:bg-[#0b0b0b]/10 hover:text-[#0b0b0b]"
                      }`}
                    >
                      <div className="flex items-center space-x-3 space-x-reverse">
                        {item.icon}
                        <span className="text-sm font-medium text-right">{item.label}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSettingsExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {isSettingsExpanded && (
                      <div className="ml-6 mt-2 space-y-1">
                        {subMenuItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg transition-colors duration-200 ${
                              location.pathname === `/profile/${subItem.path}`
                                ? "bg-[#0b0b0b] text-white"
                                : "text-[#0b0b0b] hover:bg-[#0b0b0b]/10 hover:text-[#0b0b0b]"
                            }`}
                          >
                            {subItem.icon}
                            <span className="text-xs font-medium text-right">{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.path === "support") {
                const isSupportActive = location.pathname.startsWith('/profile/support') ||
                  location.pathname.startsWith('/profile/contact') ||
                  location.pathname.startsWith('/profile/complaints');
                return (
                  <div key={item.path}>
                    <button
                      onClick={() => setIsSupportExpanded(!isSupportExpanded)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                        isSupportActive
                          ? "bg-[#0b0b0b] text-white border-r-4 border-[#0b0b0b]"
                          : "text-[#0b0b0b] hover:bg-[#0b0b0b]/10 hover:text-[#0b0b0b]"
                      }`}
                    >
                      <div className="flex items-center space-x-3 space-x-reverse">
                        {item.icon}
                        <span className="text-sm font-medium text-right">{item.label}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSupportExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {isSupportExpanded && (
                      <div className="ml-6 mt-2 space-y-1">
                        {supportSubMenuItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg transition-colors duration-200 ${
                              location.pathname === `/profile/${subItem.path}`
                                ? "bg-[#0b0b0b] text-white"
                                : "text-[#0b0b0b] hover:bg-[#0b0b0b]/10 hover:text-[#0b0b0b]"
                            }`}
                          >
                            {subItem.icon}
                            <span className="text-xs font-medium text-right">{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-start space-x-3 space-x-reverse px-4 py-3 rounded-lg transition-colors duration-200 ${
                    location.pathname === `/profile/${item.path}`
                      ? "bg-[#0b0b0b] text-white border-r-4 border-[#0b0b0b]"
                      : "text-[#0b0b0b] hover:bg-[#0b0b0b]/10 hover:text-[#0b0b0b]"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm font-medium text-right">{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link
              to="logout"
              className="flex items-center justify-end space-x-3 space-x-reverse px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">تسجيل الخروج</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileHome;
