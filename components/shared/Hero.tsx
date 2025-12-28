import { Button } from "../ui/button";
import Image from "next/image";
import banner from "@/public/banner/banner.png";
import { Search } from "lucide-react";
import SideBanner from "./SideBanner";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="grid  md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-black leading-tight whitespace-nowrap">
            <span className="block">جایـــی</span>
            برای مکث در زمان <span>&#119056;</span>
          </h1>

          <p
            className="
          text-sm md:text-lg
         leading-relaxed max-w-md text-primary-800 text-justify"
          >
            در فرماتا، طعم‌های اصیل، موسیقی زنده و فضایی آرام کنار هم قرار
            می‌گیرند تا هر لحظه، تبدیل به تجربه‌ای ماندگار شود.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {/* Order Button */}
            <Button
              asChild
              className="
      h-10 md:h-12 lg:h-14
      px-5 md:px-6 lg:px-8
      text-sm md:text-base lg:text-lg
      rounded-full
      bg-primary-500 hover:bg-primary-600
    "
            >
              <Link href="/menu">سفارش آنلاین</Link>
            </Button>

            {/* Search Input */}
            <div className="relative">
              <input
                type="search"
                placeholder="جستجو در منو"
                className="
        h-10 md:h-12 lg:h-14
        w-40 md:w-56 lg:w-72
        rounded-full
        bg-primary-100
        border border-primary-200
        pr-10 pl-4
        text-sm md:text-base lg:text-lg
        placeholder:text-primary-700
        focus:outline-none focus:ring-2 focus:ring-primary-400
        transition
      "
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-primary-700" />
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="grid grid-cols-[1fr_auto] gap-6 items-center   ">
          {/* Image */}
          <div className="flex justify-center w-full  ">
            {" "}
            <div className="relative aspect-square w-full max-w-md bg-primary-100 rounded-full   ">
              <Image
                src={banner}
                alt="Fermata banner"
                fill
                priority
                className="object-contain "
              />
            </div>
          </div>

          {/* Side Banner */}
          <div className="hidden sm:flex ">
            <SideBanner />
          </div>
        </div>
      </div>
    </section>
  );
}
