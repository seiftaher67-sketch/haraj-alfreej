import React from 'react';

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* right: about + logo */}
          <div className="text-right">
            <div className="flex items-start justify-end gap-4">
              <div className="text-right">
                <h3 className="text-lg font-semibold">شركة علي عبدالله الفريج</h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                 شركة ومزاد علي عبدالله الفريج وأولاده للشاحنات والمعدات الثقيلة من أبرز الشركات المتخصصة في بيع وشراء الشاحنات والمعدات الثقيلة المستعملة في مدينة الرياض بالمملكة العربية السعودية، تحديدًا في حي السلي. تتمتع الشركة بخبرة واسعة في مجال المركبات الثقيلة وتنظيم مزادات دورية لعرض الشاحنات والمعدات أمام العملاء والتجار، مما جعلها وجهة موثوقة للراغبين في البيع أو الشراء داخل السوق المحلي.
                </p>
                <div className="mt-4 flex items-center justify-end gap-2 text-sm text-yellow-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-gray-300">الموقع الخاص بالفريج</span>
                </div>
              </div>

              <img src="/assets/images/images/logo.jpeg" alt="logo" className="h-16 w-16 rounded-full object-cover shadow-md border-2 border-white" />
            </div>
          </div>

          {/* center: useful links */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold mb-4">الدعم الفني</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white underline">مركز الأمان</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white underline">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white underline">الحسابات والأرقام الموقوفة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white underline">حساب و سداد رسوم الموقع</a></li>
            </ul>
          </div>

          {/* left: contact */}
          <div className="text-left lg:text-right">
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3 justify-start lg:justify-end">
                <span className="text-yellow-400">📞</span>
                <a href="tel:0501030614" className="hover:underline">0501030614</a>
              </li>
              <li className="flex items-center gap-3 justify-start lg:justify-end">
                <span className="text-yellow-400">💬</span>
                <a href="https://wa.me/966501030614" target="_blank" rel="noreferrer" className="hover:underline">wa.me/966501030614</a>
              </li>
              <li className="flex items-center gap-3 justify-start lg:justify-end">
                <span className="text-yellow-400">👻</span>
                <a href="https://snapchat.com/add/alforij01" target="_blank" rel="noreferrer" className="hover:underline">snapchat.com/add/alforij01</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom area */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 whitespace-nowrap text-sm text-blue-400">
              {['#تريلات','#كاترس','#الرياض','#مرسيدس','#سعودية','#قولو'].map((t,i) => (
                <a key={i} href="#" className="hover:underline">{t}</a>
              ))}
            </div>
          </div>

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
