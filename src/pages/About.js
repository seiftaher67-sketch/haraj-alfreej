// src/pages/About.js
import React from "react";
import { motion } from "framer-motion";
import { FaGear } from "react-icons/fa6";

const About = () => {
  return (
    <div
      className="bg-white text-gray-800 overflow-x-hidden max-w-full"
      dir="rtl"
    >
      {/* ===== Hero Section ===== */}
      <section className="relative bg-black text-white text-center py-12 md:py-24 overflow-hidden">
        <img
          src="/assets/images/images/Rectangle 22.png"
          alt="Hero Truck"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-20 container mx-auto px-4 max-w-full">
          <motion.img
            src="/assets/images/images/Alfouriaj-01 1.png"
            alt="Logo"
            className="mx-auto mb-6 w-24 md:w-32"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <h1 className="text-xl md:text-3xl font-bold">
            تأسس معرض الفريج سنة 1975
          </h1>
        </div>
      </section>

      {/* ===== Vision and Future Vision Section ===== */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Vision Card */}
            <motion.div
              className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <FaGear className="text-yellow-500 text-xl md:text-2xl" />
                <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                  رؤيتنا
                </h2>
              </div>
              <p className="leading-8 text-gray-700 text-base md:text-lg">
                أن تكون الوجهة الأولي فى الصناعات أو الشاحنات الصينية ونبحث
                دائمًا عن الجودة لكي تستمر ثقة العملاء في شركة علي عبد الله
                الفريج وأولاده.
              </p>
            </motion.div>

            {/* Future Vision Card */}
            <motion.div
              className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border-l-4 border-blue-500"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl md:text-3xl font-bold mb-6 text-gray-800">
                رؤيتنا المستقبلية 2030
              </h3>
              <p className="leading-8 text-gray-700 text-base md:text-lg">
                أطلق العنان لفرص جديدة، وقم ببناء علاقات أقوى، واحتضن الابتكار،
                وادفع نجاحك إلى الأمام باستراتيجيات جريئة وشغف لا يمكن إيقافه كل
                يوم.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Intro Section ===== */}
      <section className="container mx-auto px-4 py-16 max-w-full overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">المقدمة</h2>
            <p className="leading-8 text-gray-700 text-base md:text-lg">
              {" "}
              السلام عليكم ورحمة الله وبركاته، شركة علي عبد الله الفريج وأولاده
              هي :{" "}
            </p>
            <ul className="list-disc pr-6 text-gray-700 space-y-3 text-base md:text-lg leading-8">
              <li> شركة سعودية تملك جميع أسهمها 100%.</li>
              <li>
                تأسست عام 1975م وكانت من أوائل الشركات في بيع وشراء الشاحنات
                الأوروبية وتمتد هذه الشركة لمواكبة احتياجات السوق.
              </li>
              <li>
                تأسست على يد والدنا رحمه الله حتى وصلت إلى الأبناء والأحفاد وفي
                ازدهار إلى اليوم.
              </li>
            </ul>
          </div>
          <motion.img
            src="/assets/images/images/img69.jpg"
            alt="Company Intro"
            className="rounded-xl w-full max-w-full md:w-96 h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* ===== About Company Section ===== */}
      <section className="bg-gray-50 py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-full">
          <h2 className="text-xl md:text-2xl font-bold mb-8">
            نحن شركة علي عبدالله الفريج وأولاده
          </h2>
          <p className="leading-8 text-gray-700 max-w-5xl mx-auto text-justify text-base md:text-lg">
            شركة سعودية رائدة في عالم الشاحنات والمعدات، نحرص على توفير أفضل
            الخيارات من خلال شراكات موثوقة وجودة منتجات عالية، وخدمة ما بعد
            البيع ترتكز على الثقة والرضا. تتمركز في أفضل نقطة في سوق الشاحنات في
            المملكة العربية السعودية وجزء في الخليج والدول العربية. نمتلك أكبر
            حصة بيع شاحنات من الشركات والأفراد في السوق السعودي، لدينا عدد من
            الزوار المهتمين في بيع الشاحنات والشراء تفوق أعدادهم 50,000 شخص
            سنويًا، كما تبلغ عدد الصفقات تقريبًا 3,360 ونمتلك الرؤية الثاقبة في
            شراء وبيع الشاحنات حتى أصبحنا مصدر ثقة لكثير من العملاء كما نفتخر
            بامتلاك فريق تسويق محترف ومؤهل يعمل بفاعلية عالية لضمان وصول
            منتجاتنا إلى أكبر شريحة من العملاء بكل احترافية ودقة.
          </p>
        </div>
      </section>

      {/* ===== Auction Section ===== */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            تقديم خدمة "إقامة مزادات مخصصة"
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <p className="leading-8 text-gray-700 mb-4 text-base md:text-lg">
                  <strong>من يمكنهم المشاركة:</strong>
                  <br /> شركات – مؤسسات – أفراد
                </p>
                <h4 className="font-bold text-blue-600 mb-4 text-lg md:text-xl">
                  المزايدات تشمل:
                </h4>
                <ul className="list-disc pr-6 text-gray-700 space-y-3 text-base md:text-lg">
                  <li>بيع مجموعة شاحنات أو معدات فائضة عن الحاجة</li>
                  <li>تصفية موجودات</li>
                  <li>عرض معدات أمام آلاف المشترين</li>
                </ul>
              </div>
            </motion.div>
            <motion.img
              src="/assets/images/images/Frame 263.png"
              alt="Auction Image"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 w-full max-w-full h-64 md:h-80 object-cover"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </section>

      {/* ===== Goals Section ===== */}
      <section className="bg-gradient-to-r from-yellow-50 to-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            أهدافنا
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.img
              src="/assets/images/images/Frame 273.png"
              alt="Goals"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 w-full max-w-full h-64 md:h-80 object-cover"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border-l-4 border-yellow-500">
                <p className="leading-8 text-gray-700 mb-6 text-base md:text-lg">
                  تهدف شركة علي عبد الله الفريج وأولاده إلى المواكبة مع السوق
                  العالمي ورؤية المملكة 2030 للاستحواذ على الشاحنات الصينية بعد
                  ما أثبتت تفوقها عالميًا وجودتها التي واكبت الأجواء الخليجية
                  لكي تساهم في تطوير النقل اللوجيستي في المملكة والصناعات
                  والمعدات الثقيلة.
                </p>
                <h4 className="font-bold text-yellow-600 mb-4 text-lg md:text-xl">
                  مزايا الخدمة:
                </h4>
                <ol className="list-decimal pr-6 text-gray-700 space-y-3 text-base md:text-lg">
                  <li>تنظيم المزاد بالكامل</li>
                  <li>التسويق والإعلان للوصول لأكبر عدد من المهتمين</li>
                  <li>إدارة المزايدات بشكل آمن وشفاف</li>
                  <li>تسهيل إجراءات البيع والتحصيل والتسليم</li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Download App Section ===== */}
      <section className="relative bg-gradient-to-b from-white to-[#f2b400] h-auto md:h-[455px] overflow-hidden flex items-start">
        <div className="container mx-auto px-4 py-8 md:py-0 max-w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                تحميل تطبيق حراج الفريج
              </h2>
              <p className="leading-8 text-gray-700 text-base md:text-lg">
                احصل على أفضل العروض والمزادات مباشرة على هاتفك. قم بتنزيل
                التطبيق الآن واستمتع بتجربة تسوق فريدة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm md:text-base">
                  تحميل من App Store
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm md:text-base">
                  تحميل من Google Play
                </button>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center self-start h-full"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/images/images/Frame.png"
                alt="Mobile App"
                className="w-full max-w-full md:w-80 lg:w-[420px] h-auto md:h-[500px] object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
