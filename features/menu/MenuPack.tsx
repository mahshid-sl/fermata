import Link from "next/link";
import FoodCard from "./FoodCard";

const menuItems = [
  "فست‌فود",
  "غذاهای ایرانی",
  "کباب",
  "صبحانه",
  "سالاد",
  "غذاهای دریایی",
  "بین‌الملل",
  "دسر",
  "نوشیدنی",
];

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
  {
    name: "سالاد",
    price: "15000",
    image: "/image/food-1.png",
    description: "سالاد کلاسیک سزار با مرغ گریل و نان",
    ingredients: ["پاستا", "زیتون", "سس آلفردو"],
  },
  {
    name: "سوپ",
    price: "20000",
    image: "/image/food-1.png",
    description: "سالاد کلاسیک سزار با مرغ گریل و نان",
    ingredients: ["پاستا", "زیتون", "سس آلفردو"],
  },
];

const previewFood = mockFood.slice(0, 4);

export default function MenuPack() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8">
        دسته‌بندی‌های غذایی فرماتا
      </h2>
      <h3 className="text-xl text-primary-800 font-medium text-center mb-8">
        از فست‌فود تا غذاهای اصیل، برای هر زمان و سلیقه
      </h3>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {menuItems.map((category, idx) => (
          <Link
            key={idx}
            href="/menu"
            className={`rounded-full px-6 py-2 border-accent-400 cursor-pointer   hover:scale-[1.03] hover:bg-primary-100
active:scale-[0.97] transition-transform shadow-[0_3px_20px_rgba(204,135,51,0.35)]

${category === "فست‌فود" ? "bg-primary-300 hover:bg-primary-400 " : ""}`}
          >
            {category}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {previewFood.map((dish) => (
          <FoodCard dish={dish} key={dish.name} />
        ))}
      </div>
      <div className="flex w-36 justify-center items-center mx-auto ">
        <Link
          href="/menu"
          className="bg-primary-100  hover:bg-primary-200 rounded-full px-3 py-2 mt-4  border-2 border-primary-400  focus-within:border-primary-500
          focus-within:ring-2 cursor-pointer
          focus-within:ring-primary-500
            hover:scale-[1.03]
active:scale-[0.97] transition-transform shadow-[0_3px_20px_rgba(204,135,51,0.35)]"
        >
          مشاهده منو کامل
        </Link>
      </div>
    </section>
  );
}
