import React, { useState } from "react";
import { motion } from "framer-motion";
import BuildingLocationPicker from "../components/BuildingLocationPicker";
import { X } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [cardData, setCardData] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });
  const [expiryDate, setExpiryDate] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const isFormComplete = selectedMethod !== null && locationData !== null && cardData.name.trim() && cardData.number.trim() && cardData.expiry.trim() && cardData.cvv.trim();

  const methods = [
    {
      id: 1,
      img: "/assets/images/icons/logos_visa.png",
   
    },
    {
      id: 2,
      img: "/assets/images/icons/Icons.png",
    },
    {
      id: 3,
      img: "/assets/images/icons/2560px-Mada_Logo.svg 1.png",
    },
  ];

  const handleLocationSelect = (data) => {
    setLocationData(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* خريطة والقسم الجانبي */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* خريطة */}
        <motion.div
          className="lg:col-span-2 rounded-2xl overflow-hidden shadow-md border border-gray-100 h-96"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BuildingLocationPicker onLocationSelect={handleLocationSelect} />
        </motion.div>

        {/* القسم الجانبي */}
        <motion.div
          className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col justify-between"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              تفاصيل المزايدة
            </h2>
            <div className="flex justify-between text-gray-700">
              <span>السعر الأساسي:</span>
              <span className="font-semibold">6,500 ر.س</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>قيمة المزايدة:</span>
              <span className="font-semibold">500 ر.س</span>
            </div>
            <hr className="border-gray-200 my-2" />
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>الإجمالي:</span>
              <span className="text-[#f2b400]">7,000 ر.س</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* طرق الدفع */}
      <section className="container mx-auto px-4 mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          اختر طريقة الدفع
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {methods.map((m) => (
            <motion.div
              key={m.id}
              className={`cursor-pointer border-2 rounded-2xl p-6 flex flex-col items-center justify-center transition shadow-sm hover:shadow-md ${
                selectedMethod === m.id
                  ? "border-[#f2b400] bg-yellow-50"
                  : "border-gray-200 bg-white"
              }`}
              onClick={() => setSelectedMethod(m.id)}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={m.img}
                alt={m.title}
                className="w-20 h-12 object-contain mb-4"
              />
              <h4 className="font-semibold text-gray-800 text-lg">
                {m.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* ===== بيانات الفيزا ===== */}
        {(selectedMethod === 1 || selectedMethod === 2 || selectedMethod === 3) && (
          <motion.section
            className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* صورة البطاقة */}
            <img
              src="/assets/images/images/creditcard svg 1.png"
              alt="Credit Card"
              className="w-full h-auto object-contain mx-auto"
            />

            {/* نموذج بيانات البطاقة */}
            <form className="space-y-5" onSubmit={(e) => {
              e.preventDefault();
              setIsSuccessModalOpen(true);
            }}>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">
                أدخل بيانات البطاقة
              </h4>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  اسم حامل البطاقة
                </label>
                <input
                  type="text"
                  placeholder="الاسم كما هو مكتوب على البطاقة"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                  value={cardData.name}
                  onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  رقم البطاقة
                </label>
                <input
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                  value={cardData.number}
                  onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    تاريخ الانتهاء
                  </label>
                  <DatePicker
                    selected={expiryDate}
                    onChange={(date) => {
                      setExpiryDate(date);
                      const month = (date.getMonth() + 1).toString().padStart(2, '0');
                      const year = date.getFullYear().toString().slice(-2);
                      setCardData({ ...cardData, expiry: `${month} / ${year}` });
                    }}
                    dateFormat="MM / yy"
                    showMonthYearPicker
                    showFullMonthYearPicker
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                    placeholderText="MM / YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    CVV
                  </label>
                  <input
                    type="password"
                    placeholder="•••"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                    value={cardData.cvv}
                    onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!isFormComplete}
                className={`w-full bg-[#f2b400] text-black font-bold py-3 rounded-lg transition ${
                  isFormComplete ? 'hover:bg-[#d4a200]' : 'opacity-50 cursor-not-allowed'
                }`}
              >
                ادفع الآن
              </button>
            </form>
          </motion.section>
        )}

      
      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            {/* Images */}
            <div className="flex justify-center space-x-4 mb-6">
              <img
                src="/assets/images/images/Group-1.png"
                alt="Group-1"
                className="w-20 h-20 object-contain"
              />
              <img
                src="/assets/images/images/Group-2.png"
                alt="Group-2"
                className="w-20 h-20 object-contain"
              />
              <img
                src="/assets/images/images/Group.png"
                alt="Group"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Message */}
            <p className="text-center text-xl font-bold text-gray-800">
              مبارك تم دخولك فى المزايده
            </p>
          </motion.div>
        </div>
      )}

      </section>
    </div>
  );
};

export default PaymentPage;
