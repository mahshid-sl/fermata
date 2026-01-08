"use client";

import Carousel from "../../components/shared/Carousel";

import CarouselNavigationBtn from "../../components/shared/CarouselNavigationBtn";
import FoodCard from "../menu/FoodCard";

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
        <CarouselNavigationBtn navigationId="foodCard" />
      </div>

      <Carousel
        items={mockFood}
        navigation={true}
        navigationId="foodCard"
        renderItem={(dish) => <FoodCard dish={dish} />}
      />
    </section>
  );
}
