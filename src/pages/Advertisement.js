import React, { useState } from "react";
import { PhotoIcon, DocumentIcon } from "@heroicons/react/24/outline";

export default function Advertisement() {
  const [form, setForm] = useState({
    adType: "ad",
    title: "",
    city: "",
    category: "",
    section: "",
    serial: "",
    model: "",
    cabin: "",
    type: "",
    comment: "",
    price: "",
    condition: "new",
    length: "",
    width: "",
    height: "",
    engine: "",
    transmission: "",
    fuel: "",
    lights: "",
    color: "",
    image: null,
    pdf: null,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (files) setForm((prev) => ({ ...prev, [name]: files[0] }));
    else setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted", form);
    alert("تم إرسال الفورم إلى الـ console.");
  }

  return (
    <div
      dir="rtl"
      className="w-full max-w-4xl mx-auto bg-white p-4 md:p-8 shadow-xl rounded-2xl overflow-x-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button className="bg-[#f2b400] text-white rounded-full w-10 h-10 text-2xl flex items-center justify-center">
          +
        </button>
        <h2 className="text-xl font-semibold">قم بإنشاء إعلان خاص بك</h2>
      </div>

      {/* Ad type */}
      <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="adType"
            value="ad"
            checked={form.adType === "ad"}
            onChange={handleChange}
          />
          <span>إعلان</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="adType"
            value="auction"
            checked={form.adType === "auction"}
            onChange={handleChange}
          />
          <span>مزاد</span>
        </label>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Upload section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label
            htmlFor="image-upload"
            className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 block"
          >
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-400 mb-2" />
            <span className="block font-medium mb-2">رفع صورة</span>
            <input
              id="image-upload"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            <p className="text-xs text-gray-500 mt-2">
              {form.image ? form.image.name : "No file chosen"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              اسحب الصورة أو اضغط للتحميل
            </p>
          </label>
          <label
            htmlFor="pdf-upload"
            className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 block"
          >
            <DocumentIcon className="mx-auto h-12 w-12 text-gray-400 mb-2" />
            <span className="block font-medium mb-2">رفع الاستمارة (PDF)</span>
            <input
              id="pdf-upload"
              type="file"
              name="pdf"
              accept="application/pdf"
              onChange={handleChange}
              className="hidden"
            />
            <p className="text-xs text-gray-500 mt-2">
              {form.pdf ? form.pdf.name : "No file chosen"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              اسحب الملف أو اضغط للتحميل
            </p>
          </label>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium">عنوان الإعلان</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-lg"
            placeholder="أدخل عنوان الإعلان"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium">المدينة</label>
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-lg"
          >
            <option value="">اختر المدينة</option>
            <option>الرياض</option>
            <option>جدة</option>
            <option>الدمام</option>
          </select>
        </div>

        {/* Category / Section / Serial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">التصنيف</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            >
              <option value="">اختر التصنيف</option>
              <option>سيارات</option>
              <option>شاحنات</option>
              <option>معدات ثقيلة</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">القسم</label>
            <select
              name="section"
              value={form.section}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            >
              <option value="">اختر القسم</option>
              <option>بيع</option>
              <option>إيجار</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">رقم التسلسل</label>
            <select
              name="serial"
              value={form.serial}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            >
              <option value="">اختر الرقم</option>
              <option>123</option>
              <option>456</option>
              <option>789</option>
            </select>
          </div>
        </div>

        {/* Model / Cabin / Type */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">طراز المركبة</label>
            <select
              name="model"
              value={form.model}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            >
              <option value="">اختر الطراز</option>
              <option>تويوتا</option>
              <option>هيونداي</option>
              <option>فورد</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">نوع الكابينة</label>
            <select
              name="cabin"
              value={form.cabin}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            >
              <option value="">اختر النوع</option>
              <option>مفردة</option>
              <option>مزدوجة</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">نوع القيد</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            >
              <option value="">اختر النوع</option>
              <option>خصوصي</option>
              <option>نقل عام</option>
            </select>
          </div>
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-medium">أضف تعليق</label>
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full p-3 border rounded-lg"
            placeholder="أضف ملاحظات أو وصفًا إضافيًا"
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium">السعر</label>
          <div className="flex items-center gap-2 mt-1">
            <button
              type="button"
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  price: Math.max(0, parseInt(prev.price || 0) - 1).toString(),
                }))
              }
              className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300"
            >
              -
            </button>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              type="number"
              className="w-full max-w-32 p-3 border rounded-lg text-center"
              placeholder="أدخل السعر"
            />
            <button
              type="button"
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  price: (parseInt(prev.price || 0) + 1).toString(),
                }))
              }
              className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Vehicle details */}
        <h3 className="text-lg font-semibold mt-8 mb-4">تفاصيل المركبة</h3>

        {/* Condition */}
        <div>
          <span className="block text-sm font-medium mb-2">حالة السيارة</span>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="condition"
                value="new"
                checked={form.condition === "new"}
                onChange={handleChange}
              />
              <span>جديدة</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="condition"
                value="used"
                checked={form.condition === "used"}
                onChange={handleChange}
              />
              <span>مستعملة</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="condition"
                value="scrap"
                checked={form.condition === "scrap"}
                onChange={handleChange}
              />
              <span>خردة</span>
            </label>
          </div>
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">الطول (cm)</label>
            <input
              name="length"
              value={form.length}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">العرض (cm)</label>
            <input
              name="width"
              value={form.width}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">الارتفاع (cm)</label>
            <input
              name="height"
              value={form.height}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            />
          </div>
        </div>

        {/* Engine */}
        <div>
          <label className="block text-sm font-medium">سعة المحرك</label>
          <input
            name="engine"
            value={form.engine}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-lg"
          />
        </div>

        {/* Transmission */}
        <div>
          <label className="block text-sm font-medium mb-2">
            نوع علبة السرعات
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value="manual"
                checked={form.transmission === "manual"}
                onChange={handleChange}
              />
              <span>الناقل اليدوي</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value="dual"
                checked={form.transmission === "dual"}
                onChange={handleChange}
              />
              <span>مزدوج (المانيوال و الأوتوماتيك معًا)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value="semi"
                checked={form.transmission === "semi"}
                onChange={handleChange}
              />
              <span>نصف أوتوماتيك</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value="auto"
                checked={form.transmission === "auto"}
                onChange={handleChange}
              />
              <span>أوتوماتيك</span>
            </label>
          </div>
        </div>

        {/* Fuel */}
        <div>
          <label className="block text-sm font-medium mb-2">نوع الوقود</label>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="fuel"
                value="diesel"
                checked={form.fuel === "diesel"}
                onChange={handleChange}
              />
              <span>ديزل</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="fuel"
                value="gasoline"
                checked={form.fuel === "gasoline"}
                onChange={handleChange}
              />
              <span>بنزين</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="fuel"
                value="electric"
                checked={form.fuel === "electric"}
                onChange={handleChange}
              />
              <span>كهرباء</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="fuel"
                value="gas"
                checked={form.fuel === "gas"}
                onChange={handleChange}
              />
              <span>غاز</span>
            </label>
          </div>
        </div>

        {/* Lights & Color */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">نوع المصابيح</label>
            <input
              name="lights"
              value={form.lights}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">اللون</label>
            <input
              name="color"
              value={form.color}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-[#f2b400] text-white px-8 py-3 rounded-xl shadow-md"
          >
            {" "}
            اضافه{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
