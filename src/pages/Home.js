import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import AuctionCard from '../components/AuctionCard';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/assets/images/images/Property 1=P1.png',
      title: '',
      subtitle: ''
    },
    {
      image: '/assets/images/images/Property 1=P2.png',
      title: '',
      subtitle: ''
    },
    {
      image: '/assets/images/images/Property 1=P3.png',
      title: '',
      subtitle: ''
    } ,
     {
      image: '/assets/images/images/Property 1=Variant4.png',
      title: '',
      subtitle: ''
    }
  ];
  const images = ['/assets/images/images/p1.jpeg', '/assets/images/images/p2.jpeg'];

  const vehicles = [
    {
      id: 1,
      title: 'MERCEDES',
      price: '2500000',
      minPrice: '205000',
      serialNumber: '12345',
      model: 'BENZ',
      auctionCount: 3,
      remainingTime: '08:15:02',
      image: '/assets/images/trucks/Frame 113.png',
      status: 'Opening'
    },
    // ...باقي البيانات
  ];

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(nextSlide, 5000);
    return () => clearInterval(t);
  }, []);

  // CSS for clock icon animation
  const clockAnimationStyle = `
    @keyframes colorCycle {
      0%, 100% { color: white; }
      50% { color: red; }
    }

    .clock-icon {
      animation: colorCycle 2s infinite;
    }

    .group:hover .clock-icon {
      animation-play-state: paused;
    }
  `;

  return (
    <div dir="rtl" className="flex flex-col bg-gray-50 text-[#0b0b0b]">
     

{/* HERO SLIDER */}
<section className="relative h-[540px] overflow-hidden">
  <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(${currentSlide * 100}%)` }}>
    {slides.map((slide, idx) => (
      <div
        key={idx}
        className="relative w-full h-full flex-shrink-0"
        style={{ minWidth: '100%' }}
      >
        <img
          src={encodeURI(slide.image)}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
      </div>
    ))}
  </div>

  
  {/* Slider Controls */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
    {slides.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentSlide(idx)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          idx === currentSlide
            ? 'bg-white w-8'
            : 'bg-white/40 hover:bg-white/60'
        }`}
        aria-label={`انتقل إلى الشريحة ${idx + 1}`}
      />
    ))}
  </div>
</section>


     


{/* BRANDS STRIP (mobile-visible) */}
<section className="py-6 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="relative w-full overflow-hidden">
      <style>{`
        /* repeat a block of images then duplicate the block for a seamless loop */
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* move exactly one block width (half the track) */
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content; /* shrinkwrap so duplicate block sits right after */
          gap: 0rem;
          animation: marquee 90s linear infinite;
        }

        .marquee-track:hover { animation-play-state: paused; }

        .marquee-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-inline: 0rem;
          width: 200px; /* fixed width to fill the div */
          height: 100px; /* fixed height */
        }

        /* Button background animation */
        @keyframes buttonCycle {
          0%, 100% {
            background-color: red;
            color: white;
            border-color: red;
          }
          50% {
            background-color: white;
            color: red;
            border-color: red;
          }
        }

        .button-animate {
          animation: buttonCycle 2s infinite;
        }

        .group:hover .button-animate {
          animation-play-state: paused;
        }
      `}</style>

      {(() => {
        // build a repeated block then duplicate it so translateX(-50%) loops seamlessly
        const repeat = 2 ; // number of times to repeat the images inside the block (increase to fill wide screens)
        const block = Array.from({ length: repeat }).flatMap(() => images);
        const full = [...block, ...block]; // two identical halves
        return (
          <div className="marquee-track" aria-hidden="false">
            {full.map((img, idx) => (
              <div key={idx} className="marquee-item">
                <img
                  src={encodeURI(img)}
                  alt={`brand-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  </div>
</section>



      {/* AUCTIONS GRID */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">المزايدات</h2>
            <Link to="/vehicles" className="inline-flex items-center">
              <span className="group button-animate inline-flex items-center gap-3 border-2 border-red-500 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-red-500 hover:text-white">
                {/* أيقونة داخل دائرة */}
                <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-red-500 group-hover:border-white group-hover:bg-white/20 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </span>
                <span className="font-medium">يجري الآن مزايدات</span>
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <AuctionCard key={vehicle.id} auction={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* USER TYPES - Figma style with decorations */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* decorative images (placed in public/assets/images/images/) */}
       <img src="/assets/images/images/Group 2 (1).png" alt="decor-left" className="hidden lg:block absolute -left-24 top-1/2 -translate-y-1/2 w-80 pointer-events-none" style={{ transform: 'scaleX(-1)' }} />

       <img src="/assets/images/images/Group 2 (1) copy.png" alt="decor-right" className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 w-80 pointer-events-none" />
       
       
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-right mb-8">بنود المزايدات</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Guest Card */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 text-right min-h-[450px]">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-1">Guest</h3>
                  <p className="text-gray-600 mb-6">الدخول كمستخدم زائر</p>
                </div>

                <ul className="space-y-4 text-right mb-5">
                  {[
                    'يمكنك حفظ السيارات التي أعجبتك',
                    'يمكنك تصفح جميع أنواع السيارات',
                    'يمكنك كتابة تعليقات',
                    'يمكنك البحث عن أي نوع سيارة'

                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-start gap-3">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white shadow text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-2 inline-block w-48 mx-auto bg-[#f2b400] hover:bg-[#d19b00] text-[#0b0b0b] font-medium py-3 rounded-lg shadow">
                  الدخول مجانا
                </button>
              </div>
            </div>

            {/* Bidder Card */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 text-right min-h-[450px]">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-1">Bidder</h3>
                  <p className="text-gray-600 mb-6">الدخول كمزايد</p>
                </div>

                <ul className="space-y-4 text-right mb-6">
                  {[
                    'يجب إدخال السعر الأدنى - المحدث للزيادة',
                    'بمجرد الإيداع تبدأ على الفور بالمزايدات',
                    'يمكنك إسترداد المبلغ إذا لم يتم قبول العرض',
                    'الدفع من خلال بطاقات آمنة'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-start gap-3">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white shadow text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-center gap-4 mb-6">
                  <img src="/assets/images/icons/logos_paypal.png" alt="paypal" className="h-6" />
                  <img src="/assets/images/icons/logos_visa.png" alt="visa" className="h-6" />
                  <img src="/assets/images/icons/icons.png" alt="mastercard" className="h-6" />
                  <img src="/assets/images/icons/fa-brands_apple-pay.png" alt="applepay" className="h-6" />
                </div>

                <button className="mt-2 inline-block w-48 mx-auto bg-[#f2b400] hover:bg-[#d19b00] text-[#0b0b0b] font-medium py-3 rounded-lg shadow">
                  بدأ التزايد الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION - insert after USER TYPES */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">الفئات</h2>

            <div className="flex items-center gap-3">
              <button className="bg-black text-white px-6 py-2 rounded-lg">بحث</button>
            </div>
          </div>

          {/* category chips */}
          <div className="flex items-center gap-3 flex-wrap mb-6">
            {['شاحنات','سيارات','مقطورات','قطع غيار'].map((c) => (
              <button key={c} className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0b0b0b]">
                {c}
              </button>
            ))}
          </div>

          {/* filters row (visual only) */}
          <div className="flex items-center gap-3 flex-wrap mb-8">
            {['المدينة','الماركة','الموديل','سنة الصنع','حالة السيارة'].map((f) => (
              <div key={f} className="px-4 py-2 rounded-lg bg-gray-100">{f} ▾</div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">الأكثر شهرة</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((v) => (
              <AuctionCard key={v.id} auction={v} />
            ))}
          </div>
        </div>
      </section>

      {/* LIVE VIDEO / YOUTUBE */}
      <section id="live-broadcast" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* header with logo + texts */}
          <div className="flex items-center justify-between mb-6 gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/images/logo.jpeg"
                alt="الفريج"
                className="h-16 w-16 rounded-full object-cover shadow-md border-2 border-white"
              />
              <div className="text-right">
                <h3 className="text-xl font-semibold">شركة علي عبدالله الفريج</h3>
                <p className="text-sm text-gray-600">يوجد لدينا حراج كل يوم الخميس والجمعة والسبت</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.2-1.7-.8-2.4C21.4 4 20.4 4 20 4H4C3.6 4 2.6 4 1.8 4.6 1.2 5.3 1 7 1 7S1 8.8 1.8 9.5C2.6 10 3.6 10 4 10h16c.4 0 1.4 0 2.2-.5.6-.7.8-2.3.8-2.3z"/><path d="M10 8l6 4-6 4z" fill="#fff"/></svg>
                www.youtube.com/@fahd50501
              </a>
            </div>
          </div>

          {/* video card */}
          <div className="bg-white/95 rounded-2xl shadow-lg p-4">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/REPLACE_VIDEO_ID"
                title="YouTube Live"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              {/* live badge (top-left) */}
              <div className="absolute left-4 top-4 bg-white/90 text-red-600 rounded-full px-3 py-1 flex items-center gap-2 shadow">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium">بث مباشر</span>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#f2b400] hover:bg-[#d19b00] text-[#0b0b0b] py-3 px-8 rounded-lg font-medium shadow">
                تسجيل في المزاد
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
