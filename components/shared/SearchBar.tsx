"use client";

import { MapPin, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="w-full md:max-w-md">
      <div
        className="
          flex items-center
          gap-2 md:gap-3
          bg-primary-50
          border border-primary-200
          rounded-full
          px-3 md:px-4
          py-2 md:py-2.5
          shadow-sm
          focus-within:border-primary-400
          focus-within:ring-2
          focus-within:ring-primary-200
          transition
        "
      >
        {/* City Select */}
        <div className="flex items-center gap-1.5 text-primary-700 shrink-0">
          <MapPin size={16} className="text-primary-500" />

          <select
            className="
              bg-transparent
              text-xs md:text-sm
              font-medium
              outline-none
              cursor-pointer
            "
            defaultValue=""
          >
            <option value="" disabled>
              انتخاب شعبه
            </option>
            <option value="tehran">تهران</option>
            <option value="karaj">کرج</option>
          </select>
        </div>

        {/* Divider */}
        <span className="hidden md:block h-6 w-px bg-primary-200" />

        {/* Search Input */}
        <input
          type="text"
          placeholder="جستجوی غذا..."
          className="
            flex-1 min-w-0
            bg-transparent
            text-xs md:text-sm
            text-primary-800
            placeholder-primary-400
            outline-none
          "
        />

        {/* Search Button */}
        <button
          type="submit"
          className="
            flex items-center justify-center
            rounded-full
            bg-primary-500
            hover:bg-primary-600
            text-primary-50
            w-8 h-8 md:w-9 md:h-9
            transition
          "
          aria-label="Search"
        >
          <Search size={16} />
        </button>
      </div>
    </form>
  );
}
