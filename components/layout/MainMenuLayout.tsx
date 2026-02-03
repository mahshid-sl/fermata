import FoodCard from "@/features/menu/FoodCard";

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
  {
    name: "پیتزا",
    price: "50000",
    image: "/image/food-1.png",
    description: "سالاد کلاسیک سزار با مرغ گریل و نان",
    ingredients: ["پاستا", "زیتون", "سس آلفردو"],
  },
  {
    name: "برگر",
    price: "30000",
    image: "/image/food-1.png",
    description: "سالاد کلاسیک سزار با مرغ گریل و نان",
    ingredients: ["پاستا", "زیتون", "سس آلفردو"],
  },
];

export default function MainMenuLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-18">
      {mockFood.map((dish) => (
        <FoodCard key={dish.name} dish={dish} />
      ))}
    </div>
  );
}
