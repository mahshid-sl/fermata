"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "./Carousel";
import FoodCard from "./FoodCard";

const mockFood = [
  {
    name: "پاستا",
    price: "25000",
    image: "/image/food-1.png",
    description: "سالاد کلاسیک سزار با مرغ گریل و نان",
    ingredients: ["پاستا", "زیتون", "سس آلفردو"],
  },

  {
    name: "سیب زمینی",
    price: "65000",
    image: "/banner/deser.png",
    description: "سالاد کلاسیک سزار با مرغ گریل و نان",
    ingredients: ["پاستا", "زیتون", "سس آلفردو"],
  },
  {
    name: "چیکن شاورما",
    price: "25000",
    image: "/image/food-1.png",
    description: "سالاد کلاسیک سزار با مرغ گریل و نان",
    ingredients: ["پاستا", "زیتون", "سس آلفردو"],
  },
  {
    name: "ماهی",
    price: "24000",
    image: "/image/food-1.png",
    description: "سالاد کلاسیک سزار با مرغ گریل و نان",
    ingredients: ["پاستا", "زیتون", "سس آلفردو"],
  },
];

export default function PopularDishes() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary-900">
          محبوب ترین ها
        </h2>
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button className="custom-prev flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight size={24} />
          </button>
          <button className="custom-next flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft size={24} />
          </button>
        </div>
      </div>

      <Carousel
        items={mockFood}
        navigation={true}
        renderItem={(dish) => <FoodCard dish={dish} />}
      />
    </section>
  );
}
