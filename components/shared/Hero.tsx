import Image from "next/image";
import Link from "next/link";
import NoisyButton from "./NoisyButton";
import { TextGenerate } from "./TextGenerate";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[75vh] lg:min-h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.png"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-[center_top]
          xl:object-contain
          "
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* Text – Right */}
          <div className="order-1 md:order-1 space-y-6 text-right">
            <h1 className="max-w-xl text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-primary-900">
              <TextGenerate />
            </h1>

            <p className="max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-primary-800">
              در فرماتا، طعم‌های اصیل، موسیقی زنده و فضایی آرام کنار هم قرار
              می‌گیرند تا هر لحظه، تبدیل به تجربه‌ای ماندگار شود.
            </p>
            <div
              className="
    flex flex-col gap-4
    sm:flex-row sm:items-center
    sm:justify-center
    md:justify-start
  "
            >
              <Link href="/menu">
                <NoisyButton>سفارش آنلاین</NoisyButton>
              </Link>

              <SearchBar />
            </div>
          </div>

          {/* Visual – Left */}
          <div className="order-1 relative w-full max-w-2xl mx-auto ">
            <div className="relative aspect-square">
              <Image
                src="/hero-food.png"
                alt="Fermata food"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
