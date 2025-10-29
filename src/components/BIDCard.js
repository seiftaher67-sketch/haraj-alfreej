import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ConfirmBID from "./ConfirmBID";

const BIDCard = ({ image, price = "6500", min = "500", onClose }) => {
  const [bidValue, setBidValue] = useState(Number(min));
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const increaseBid = () => setBidValue((v) => v + 100);
  const decreaseBid = () => setBidValue((v) => (v > 0 ? v - 100 : 0));

  return (
    <>
      {!showConfirm && (
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[90%] max-w-3xl grid md:grid-cols-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left side: details */}
          <div className="p-8 flex flex-col justify-center space-y-5">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">السعر الحالي</h2>
              <p className="text-2xl font-extrabold text-[#f2b400]">{price} ر.س</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">الحد الأدنى</h3>
              <p className="text-gray-700 text-lg">{min} ر.س</p>
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
              className="bg-[#f2b400] hover:bg-[#d4a200] text-black font-bold py-3 rounded-lg text-lg transition"
            >
              قم بوضع مزايدتك الآن
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:text-gray-700 mt-2 underline self-center"
            >
              إغلاق
            </button>
          </div>

          {/* Right side: image */}
          <img
            src={image || "/assets/images/trucks/Frame 113.png"}
            alt="Truck"
            className="rounded-xl object-cover w-full h-72 md:h-full"
          />
        </motion.div>
      )}

      {showConfirm && (
        <ConfirmBID
          bidAmount={bidValue}
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
