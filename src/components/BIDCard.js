import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { DollarSign, ArrowDown, Gavel } from "lucide-react";
import ConfirmBID from "./ConfirmBID";

const BIDCard = ({ image, price = "6500", min = "500", onClose }) => {
  const [bidValue, setBidValue] = useState(Number(min));
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const increaseBid = () => setBidValue((v) => v + 100);
  const decreaseBid = () => setBidValue((v) => Math.max(v - 100, Number(min)));

  return (
    <>
      {!showConfirm && (
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[90%] max-w-3xl grid md:grid-cols-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left side: image */}
          <img
            src={image || "/assets/images/trucks/Frame 113.png"}
            alt="Truck"
            className="rounded-sm object-cover w-full h-62  m-5"
          />

          {/* Right side: details */}
          <div className="p-8 flex flex-col justify-center space-y-5">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-6 h-6 text-[#f2b400]" />
              <span className="text-lg font-bold text-gray-800">السعر:</span>
              <span className="text-2xl font-extrabold text-[#f2b400]">{price} ر.س</span>
            </div>

            <div className="flex items-center space-x-2">
              <ArrowDown className="w-6 h-6 text-gray-700" />
              <span className="text-lg font-bold text-gray-800">الحد الأدنى:</span>
              <span className="text-lg text-gray-700">{min} ر.س</span>
            </div>

            {/* Bid input */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={decreaseBid}
                className="bg-[#f2b400] hover:bg-[#d4a200] text-white text-xl w-12 h-12 flex items-center justify-center transition"
              >
                -
              </button>
              <input
                type="number"
                value={bidValue}
                readOnly
                placeholder="500"
                className="text-center w-full text-lg font-semibold text-gray-800 outline-none"
              />
              <button
                onClick={increaseBid}
                className="bg-[#f2b400] hover:bg-[#d4a200] text-white text-xl w-12 h-12 flex items-center justify-center transition"
              >
                +
              </button>
            </div>

            {/* Submit button */}
            <button
              onClick={() => setShowConfirm(true)}
              className="bg-[#f2b400] hover:bg-[#d4a200] text-black font-bold py-3 rounded-lg text-lg transition flex items-center justify-center space-x-2"
            >
              <Gavel className="w-5 h-5" />
              <span>قم بوضع مزايدتك الآن</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:text-gray-700 mt-2 underline self-center"
            >
              إغلاق
            </button>
          </div>
        </motion.div>
      )}

      {showConfirm && (
        <ConfirmBID
          bidAmount={bidValue}
          price={price}
          onConfirm={() => {
            console.log("تم التأكيد");
            setShowConfirm(false);
            navigate("/payment");
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};

export default BIDCard;
