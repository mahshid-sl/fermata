import { Button } from "../ui/button";
import Image from "next/image";
import banner from "@/public/banner/banner.png";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 ">
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-black leading-normal text-clip  ">
            <span className="flex">جایــــــی</span>
            برای مکث در زمان <span> &#119056;</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-md text-center
            md:justify-start"
          >
            در فرماتـا، طعم‌های اصیل، موسیقی زنده و فضایی آرام کنار هم قرار
            می‌گیرند تا هر لحظه، تبدیل به تجربه‌ای ماندگار شود.
          </p>
          <div
            className="flex gap-4 flex-wrap justify-center
            md:justify-start "
          >
            <Button className="bg-primary-500 hover:bg-primary-500/90 transition-colors rounded-full px-8 py-6 text-lg cursor-pointer text0center flex items-center">
              سفارش آنلاین
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg "
            >
              جستجو در منو
              <Search className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative flex justify-between  bg-red-200 aspect-video  lg:aspect-square ">
          <div className="bg-blue-50 flex-3 justify-center relative items-center">
            <Image
              src={banner}
              alt="banner "
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="contain"
            />
          </div>
          <div className="bg-green-50 flex-1">side</div>
          {/* <div className="relative w-full aspect-square max-w-lg mx-auto bg-blue-200">
            <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent rounded-full bg-green-200" />
            <img
              src="/gourmet-salmon-dish-with-vegetables-on-white-plate.jpg"
              alt="Delicious food plate"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div> */}
          {/* <div className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-background p-4 rounded-3xl shadow-lg bg-violet-400 ">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-colors bg-accent-400">
              <img src="" alt="" />
              انواع غذا
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
