import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, DollarSign } from "lucide-react";

const ConfirmBID = ({ bidAmount = "7000", price = "6500", onConfirm, onCancel }) => {
  const totalAmount = Number(price) + Number(bidAmount);
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-8 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
     
      {/* النص الجديد */}
      <p className="text-lg font-bold text-gray-800 mb-4">الان سوف نبدا بالمزايده</p>

      {/* التنبيه */}
      <div className="flex items-center justify-center space-x-2 mb-4">
        <AlertTriangle className="w-6 h-6 text-yellow-500" />
        <p className="text-gray-700 text-sm">يتم استرداد مبلغ المزايده فى حاله رفض العرض المقدم</p>
      </div>

      {/* المبلغ الإجمالي */}
      <div className="flex items-center justify-center space-x-2 mb-4">
        <DollarSign className="w-6 h-6 text-[#f2b400]" />
        <p className="text-gray-700 text-sm font-bold">سيتم عمليه المزايده بمبلغ {totalAmount} ر.س</p>
      </div>

     

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
