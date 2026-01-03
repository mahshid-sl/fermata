import Image from "next/image";
import Link from "next/link";
import NoisyButton from "./NoisyButton";
import { TextGenerate } from "./TextGenerate";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[85vh] flex items-center">
      {/* --- Background Image & Overlay --- */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/hero-bg.png"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-l from-primary-50/90 via-primary-50/60 to-transparent" />
      </div>

      {/* --- Main Content --- */}
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
          {/* 1. Text Section (Right Side) */}
          <div className="order-2 lg:order-1 flex flex-col items-start text-right space-y-6 lg:space-y-8">
            <h1 className="w-full text-4xl sm:text-5xl lg:text-6xl/tight font-black text-primary-900 drop-shadow-sm">
              <TextGenerate />
            </h1>

            <p className="max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-primary-800/90 font-medium">
              در فرماتا، طعم‌های اصیل، موسیقی زنده و فضایی آرام کنار هم قرار
              می‌گیرند تا هر لحظه، تبدیل به تجربه‌ای ماندگار شود.
            </p>

            {/* Actions */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link href="/menu" className="block">
                <NoisyButton>سفارش آنلاین</NoisyButton>
              </Link>

              <div className="w-full sm:max-w-xs">
                <SearchBar />
              </div>
            </div>
          </div>

          {/* 2. Visual Section (Left Side) */}
          <div className="order-1 lg:order-2 relative w-full flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-500/10 rounded-full blur-3xl -z-10" />

            <div className="relative w-70 sm:w-100 lg:w-125 aspect-square animate-float">
              <Image
                src="/hero-food.png"
                alt="غذای ویژه فرماتا"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
