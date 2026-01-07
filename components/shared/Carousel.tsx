"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type SwiperBreakpoint = {
  slidesPerView: number;
  spaceBetween: number;
};

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: Record<number, SwiperBreakpoint>;
  className?: string;
  navigation?: boolean;
  navigationId?: string;
};

export default function Carousel<T>({
  items,
  renderItem,
  slidesPerView = 1,
  spaceBetween = 18,
  breakpoints,
  className,
  navigation,
  navigationId,
}: CarouselProps<T>) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Swiper
        resizeObserver
        observer
        observeParents
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onInit={() => setLoaded(true)}
        breakpoints={
          breakpoints ?? {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }
        }
        navigation={
          navigation && navigationId
            ? {
                nextEl: `.${navigationId}-next`,
                prevEl: `.${navigationId}-prev`,
              }
            : false
        }
        modules={[Navigation]}
        className={`${className || ""} ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        {items.map((item, index) => (
          <SwiperSlide className="h-auto" key={index}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
