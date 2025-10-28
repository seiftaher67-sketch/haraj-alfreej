import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onLoginClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
            <div className="hidden lg:flex items-center gap-8 text-[#0b0b0b] font-semibold">
              <Link to="/" className="flex items-center gap-2 hover:bg-[#0b0b0b]/10 px-3 py-2 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                الفئات
              </Link>
              <Link to="/auctions" className="flex items-center gap-2 hover:bg-[#0b0b0b]/10 px-3 py-2 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                المزادات
              </Link>
              <Link to="/advertisement" className="flex items-center gap-2 hover:bg-[#0b0b0b]/10 px-3 py-2 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                إعلانات
              </Link>
              <Link to="/about" className="flex items-center gap-2 hover:bg-[#0b0b0b]/10 px-3 py-2 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                من نحن
              </Link>
              <Link to="/saved" className="flex items-center gap-2 hover:bg-[#0b0b0b]/10 px-3 py-2 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                المحفوظات
              </Link>
            </div>
             
            {/* hamburger menu button for mobile */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 text-[#0b0b0b] hover:opacity-80"
              aria-label="فتح القائمة"
            >
              <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

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

      {/* mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMenu}
          ></div>

          {/* menu panel */}
          <div className="absolute top-0 right-0 h-full w-80 bg-[#f2b400] shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col pt-20 px-6">
              {/* close button */}
              <button
                onClick={closeMenu}
                className="self-end mb-8 text-[#0b0b0b] hover:opacity-80"
                aria-label="إغلاق القائمة"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* menu links */}
              <nav className="flex flex-col space-y-6 text-[#0b0b0b] font-semibold">
                <Link to="/" onClick={closeMenu} className="flex items-center gap-3 hover:bg-[#0b0b0b]/10 px-4 py-3 rounded-lg transition-colors duration-200 text-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  الفئات
                </Link>
                <Link to="/auctions" onClick={closeMenu} className="flex items-center gap-3 hover:bg-[#0b0b0b]/10 px-4 py-3 rounded-lg transition-colors duration-200 text-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  المزادات
                </Link>
                <Link to="/advertisement" onClick={closeMenu} className="flex items-center gap-3 hover:bg-[#0b0b0b]/10 px-4 py-3 rounded-lg transition-colors duration-200 text-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                  إعلانات
                </Link>
                <Link to="/about" onClick={closeMenu} className="flex items-center gap-3 hover:bg-[#0b0b0b]/10 px-4 py-3 rounded-lg transition-colors duration-200 text-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  من نحن
                </Link>
                <Link to="/saved" onClick={closeMenu} className="flex items-center gap-3 hover:bg-[#0b0b0b]/10 px-4 py-3 rounded-lg transition-colors duration-200 text-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  المحفوظات
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
