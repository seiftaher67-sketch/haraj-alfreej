import React from 'react';

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* right: about + logo */}
          <div className="flex-1 text-right">
            <div className="flex items-start justify-end gap-4">
              <img src="/assets/images/images/55PNG.PNG" alt="logo" className="h-16 w-16  object-cover shadow-md " />
              <div className="text-right">
                <h3 className="text-lg font-semibold">شركة علي عبدالله الفريج</h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                 شركة ومزاد علي عبدالله الفريج وأولاده للشاحنات والمعدات الثقيلة من أبرز الشركات المتخصصة في بيع وشراء الشاحنات والمعدات الثقيلة المستعملة في مدينة الرياض بالمملكة العربية السعودية، تحديدًا في حي السلي. تتمتع الشركة بخبرة واسعة في مجال المركبات الثقيلة وتنظيم مزادات دورية لعرض الشاحنات والمعدات أمام العملاء والتجار، مما جعلها وجهة موثوقة للراغبين في البيع أو الشراء داخل السوق المحلي.
                </p>
                <div className="mt-4 flex items-right justify-start gap-2 text-sm text-yellow-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <a href="https://maps.app.goo.gl/XL6Jp84W9SLgSeoQ7?g_st=awb" className="text-gray-300 hover:text-white">الموقع الخاص بالفريج</a>
                </div>
              </div>
            </div>
          </div>

          {/* center: useful links */}
          <div className="flex-1 text-right mr-8">
            <h4 className="text-lg font-semibold mb-4">الدعم الفني</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white underline">مركز الأمان</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white underline">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white underline">الحسابات والأرقام الموقوفة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white underline">حساب و سداد رسوم الموقع</a></li>
            </ul>
          </div>

          {/* left: contact */}
          <div className="flex-1 text-right">
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3 justify-start">
                <span className="text-yellow-400">📞</span>
                <a href="tel:0501030614" className="hover:underline">0501030614</a>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <span className="text-yellow-400">💬</span>
                <a href="https://wa.me/966501030614" target="_blank" rel="noreferrer" className="hover:underline">wa.me/966501030614</a>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <span className="text-yellow-400">👻</span>
                <a href="https://snapchat.com/add/alforij01" target="_blank" rel="noreferrer" className="hover:underline">snapchat.com/add/alforij01</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom area */}
        <div className="mt-10 border-t border-white/10 pt-6">
          

          <div className="mt-4 text-center text-gray-400 text-sm">
            © ELFouriaj Group NO.0.1 , 2025-10-13
            <div className="mt-2">الرقم الضريبي 300710482300003</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
