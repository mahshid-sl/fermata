"use client";

import MainMenuLayout from "@/components/layout/MainMenuLayout";
import SearchBar from "@/components/shared/SearchBar";

import Categories from "./Categories";
import Toolbar from "./Toolbar";

export default function MainMenu() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-6 lg:py-10">
      {/* Header Area: Title & Branch Selector */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-primary-900">
            منوی کافه رستوران فرماتا
          </h1>
          <p className="text-primary-600 text-sm mt-1">
            لذت طعم‌های اصیل در فضایی آرام
          </p>
        </div>
        <div className="shrink-0">
          <SearchBar />
        </div>
      </div>

      {/* Categories & Subcategories Area */}
      <div className="mb-8">
        <Categories />
      </div>

      {/* Toolbar (Filters & Count) */}
      <Toolbar />

      {/* Food Grid Layout */}
      <MainMenuLayout />
    </section>
  );
}
