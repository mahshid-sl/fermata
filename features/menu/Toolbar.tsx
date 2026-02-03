"use client";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function Toolbar() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 border-b border-primary-100 mb-6">
      <div className="flex items-center gap-2 flex-wrap">
        <button className="flex items-center gap-1 bg-white border border-primary-200 text-primary-700 px-3 py-1.5 rounded-lg text-sm hover:border-primary-400 transition">
          قیمت
          <ChevronDown size={16} />
        </button>

        <button className="flex items-center gap-1 bg-white border border-primary-200 text-primary-700 px-3 py-1.5 rounded-lg text-sm hover:border-primary-400 transition">
          <SlidersHorizontal size={16} />
          مرتب‌سازی
        </button>

        <label className="flex items-center gap-2 cursor-pointer bg-primary-50 px-3 py-1.5 rounded-lg border border-transparent hover:border-primary-200 transition">
          <input type="checkbox" className="accent-primary-500 w-4 h-4" />
          <span className="text-sm text-primary-700">فقط موجود</span>
        </label>
      </div>
      <p className="text-primary-700 font-medium">
        نمایش <span className="font-bold text-primary-900">24</span> غذای خوشمزه
      </p>
    </div>
  );
}
