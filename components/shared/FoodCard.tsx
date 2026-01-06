import { Heart, Plus } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import StarRating from "./StarRating";

type Dish = {
  name: string;
  price: string;
  image: string;
  description: string;
  ingredients: string[];
};

export default function FoodCard({ dish }: { dish: Dish }) {
  return (
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
              <Image src="/toman.png" alt="toman" width={16} height={16} />
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
  );
}
