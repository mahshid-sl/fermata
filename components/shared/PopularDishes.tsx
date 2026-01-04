"use client";

import { ChevronLeft, ChevronRight, Heart, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Carousel from "./Carousel";
import Image from "next/image";
import StarRating from "./StarRating";

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
        renderItem={(dish) => (
          <Card
            className="
 group
  h-full
  min-h-90
  rounded-3xl
  overflow-hidden
  border border-primary-200
  bg-primary-50
  transition
  hover:shadow-xl

"
          >
            <CardContent className="p-0 flex flex-col h-full">
              {/* Image */}
              <div className="relative  w-full aspect-4/3 overflow-hidden">
                <button
                  aria-label="افزودن به علاقه‌مندی‌ها"
                  className="
      absolute
      top-3
      left-3
      z-10
      flex
      items-center
      justify-center
      w-9
      h-9
      rounded-full
      bg-white/80
      backdrop-blur
      text-primary-600
      hover:bg-primary-500
      hover:text-white
      transition
      shadow-sm
    "
                >
                  <Heart className="w-5 h-5  " />
                </button>

                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="
          
          object-contain
          transition-transform
          duration-300
          group-hover:scale-105
        "
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 gap-5">
                <div className="text-center">
                  <h3 className="text-base font-bold text-primary-900 line-clamp-1 leading-10">
                    {dish.name}
                  </h3>
                  <StarRating />
                </div>

                <p className="text-sm text-primary-700 line-clamp-2 text-center">
                  {dish.description}
                </p>

                {/* Price + CTA */}
                <div className="mt-auto flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1 text-primary-900 font-bold">
                    {dish.price}
                    <Image
                      src="/toman.png"
                      alt="toman"
                      width={16}
                      height={16}
                    />
                  </span>

                  <Button
                    size="sm"
                    className="
            rounded-full
            px-4
            bg-primary-500
            hover:bg-primary-600
          "
                  >
                    <Plus className="w-4 h-4 ml-1" />
                    افزودن
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      />
    </section>
  );
}
