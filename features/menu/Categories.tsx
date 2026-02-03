"use client";
import { useState } from "react";
import Carousel from "@/components/shared/Carousel";
import CategoryCard from "./CategoryCard";
import SubCategoryPills from "./SubCategoryPills";

import CarouselNavigationBtn from "@/components/shared/CarouselNavigationBtn";

const menu = [
  {
    Categoriy: "فست‌فود",
    subCategories: ["پیتزا", "برگر", "سوخاری", "ساندویچ"],
    img: "/menuIcons/hambergur.png",
  },

  {
    Categoriy: "غذاهای ایرانی",
    subCategories: ["کباب", "خورشت", "پلو", "آش"],
    img: "/menuIcons/irani.png",
  },

  {
    Categoriy: "صبحانه",
    subCategories: ["کیک", "نان", "ماست", "شیر"],
    img: "/menuIcons/breakfast.png",
  },
  {
    Categoriy: "سالاد",
    subCategories: ["سالاد سبزیجات", "سالاد میوه‌ای", "سالاد گوشت"],
    img: "/menuIcons/salad.png",
  },
  {
    Categoriy: "غذاهای دریایی",
    subCategories: ["ماهی سرخ شده", "ماهی سوزنده", "مخلوط ماهی"],
    img: "/menuIcons/fish.png",
  },
  {
    Categoriy: "بین‌الملل",
    subCategories: ["پاستا", "پیتزا ایتالیایی", "سوپ فرانسوی"],
    img: "/menuIcons/international.png",
  },
  {
    Categoriy: "دسر",
    subCategories: ["کلوچه کاکائو", "شیرینی بادام زمینی", "آبنبات"],
    img: "/menuIcons/deser.png",
  },
  {
    Categoriy: "نوشیدنی",
    subCategories: ["آب", "نوشابه", "شربت", "چای"],
    img: "/menuIcons/drink.png",
  },
];

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const carouselId = "menu-category-carousel";

  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-lg font-bold text-primary-900">دسته‌بندی‌ها</h2>

        <CarouselNavigationBtn navigationId={carouselId} />
      </div>

      <div className="py-2">
        <Carousel
          items={menu}
          navigation
          navigationId={carouselId}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 15 },
            768: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 7, spaceBetween: 25 },
          }}
          renderItem={(item, index) => (
            <CategoryCard
              menuItem={item}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          )}
        />
      </div>

      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${activeIndex !== null ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        {activeIndex !== null && (
          <div className="bg-primary-50/50 rounded-2xl p-3 border border-primary-100/50 mx-2">
            <SubCategoryPills items={menu[activeIndex].subCategories} />
          </div>
        )}
      </div>
    </section>
  );
}
