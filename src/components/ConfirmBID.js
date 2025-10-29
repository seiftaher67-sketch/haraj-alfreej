import React from "react";
import { motion } from "framer-motion";

const ConfirmBID = ({ bidAmount = "7000", onConfirm, onCancel }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-8 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* العنوان */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">تأكيد المزايدة</h2>

      {/* المبلغ */}
      <p className="text-gray-700 text-lg mb-4">
        هل أنت متأكد من رغبتك في المزايدة بالمبلغ التالي؟
      </p>
      <p className="text-3xl font-extrabold text-[#f2b400] mb-8">
        {bidAmount} ر.س
      </p>

      {/* الأزرار */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onConfirm}
          className="bg-[#f2b400] hover:bg-[#d4a200] text-black font-bold py-3 px-6 rounded-lg w-full sm:w-auto transition"
        >
          تأكيد المزايدة
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg w-full sm:w-auto transition"
        >
          إلغاء
        </button>
      </div>
    </motion.div>
  );
};

export default ConfirmBID;
