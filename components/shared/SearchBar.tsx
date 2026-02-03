"use client";

import { MapPin, Search } from "lucide-react";

type SearchBarProps = {
  variant?: "small" | "large";
  className?: string;
};

export default function SearchBar({
  variant = "small",
  className = "",
}: SearchBarProps) {
  const isLarge = variant === "large";

  return (
    <form
      className={`w-full ${isLarge ? "md:max-w-md" : "md:max-w-[320px] lg:max-w-95"} ${className}`}
    >
      <div
        className={`
          flex items-center transition shadow-sm
          ${
            isLarge
              ? "gap-2 md:gap-3 bg-primary-50 border border-primary-200 rounded-full px-3 md:px-4 py-2 md:py-2.5 focus-within:ring-primary-200 focus-within:ring-2 focus-within:border-primary-400"
              : "gap-2 bg-white border border-primary-200 rounded-full px-3 py-1.5 focus-within:ring-primary-100 focus-within:ring-2 focus-within:border-primary-400"
          }
        `}
      >
        {/* City/Branch Select */}
        <div className="flex items-center gap-1.5 text-primary-700 shrink-0">
          <MapPin size={isLarge ? 16 : 14} className="text-primary-500" />
          <select
            className={`
              bg-transparent font-medium outline-none cursor-pointer
              ${isLarge ? "text-xs md:text-sm" : "text-[11px] md:text-xs"}
            `}
            defaultValue=""
          >
            <option value="" disabled>
              انتخاب شعبه
            </option>
            <option value="mehrshahr">کرج (مهرشهر)</option>
            <option value="azimie">کرج (عظیمیه)</option>
          </select>
        </div>

        {/* Divider */}
        <span
          className={`${isLarge ? "hidden md:block h-6" : "h-4"} w-px bg-primary-200 mx-1`}
        />

        {/* Search Input */}
        <input
          type="text"
          placeholder="جستجوی غذا..."
          className={`
            flex-1 min-w-0 bg-transparent text-primary-800 placeholder-primary-400 outline-none
            ${isLarge ? "text-xs md:text-sm" : "text-xs"}
          `}
        />

        {/* Search Button */}
        <button
          type="submit"
          className={`
            flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary-600 text-primary-50 transition shrink-0
            ${isLarge ? "w-8 h-8 md:w-9 md:h-9" : "w-7 h-7 md:w-8 md:h-8"}
          `}
          aria-label="Search"
        >
          <Search size={isLarge ? 16 : 14} />
        </button>
      </div>
    </form>
  );
}
