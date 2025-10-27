import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onLoginClick }) {
  return (
    <header className="w-full">
      {/* top black bar */}
      <div className="bg-[#0b0b0b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-20 flex items-center justify-between">
          {/* logo (right side in RTL) */}
          <div className="flex items-center gap-3 z-20">
            <Link to="/" className="flex items-center gap-3">
              <img src="/assets/images/images/55PNG.PNG" alt="الفريج" className="h-12 w-auto object-contain" />
            </Link>
          </div>

          {/* centered search */}
          <div className="absolute inset-x-0 flex justify-center pointer-events-none">
            <div className="w-full max-w-2xl px-4 pointer-events-auto">
              <div className="relative">
                <input
                  id="site-search"
                  placeholder="البحث في 500 شاحنة"
                  className="w-full text-sm bg-white rounded-full py-3 px-4 pr-12 pl-12 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f2b400]/30"
                />
                {/* magnifier icon */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* utility (left side in RTL) */}
          <div className="flex items-center gap-6 z-20">
            <button onClick={onLoginClick} className="text-sm hover:text-white">تسجيل الدخول</button>
            <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
              <span>EN</span>
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* yellow nav strip */}
      <nav className="bg-[#f2b400]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            
            
            {/* main links */}
            <div className="hidden lg:flex items-center gap-10 text-[#0b0b0b] font-semibold">
              <Link to="/" className="hover:opacity-90">الفئات</Link>
              <Link to="/auctions" className="hover:opacity-90">المزادات</Link>
              <Link to="/advertisement" className="hover:opacity-90">إعلانات</Link>
              <Link to="/about" className="hover:opacity-90">من نحن</Link>
              <Link to="/saved" className="hover:opacity-90">المحفوظات</Link>
            </div>
             
            {/* left side (location or toggle) */}
            <div className="flex items-center gap-6 text-[#0b0b0b]">
              <button className="flex items-center gap-2 text-sm hover:underline">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 11.5a3 3 0 100-6 3 3 0 000 6z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.5 11.5c0 6-8.5 11.5-8.5 11.5S3.5 17.5 3.5 11.5a8.5 8.5 0 1117 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="font-bold">الموقع</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
