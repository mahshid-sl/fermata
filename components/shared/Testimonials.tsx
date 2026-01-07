"use client";

import TestomonialCard from "./TestomonialCard";
import Carousel from "./Carousel";
import CarouselNavigationBtn from "./CarouselNavigationBtn";

const mockTestimonials = [
  {
    name: "علی رضایی",
    testimonial:
      "این مکان عالی است! محیط آرام و خنده‌دار است اما کارکنان نیز بسیار دوست‌داشتنی هستند. آنها در مورد محصولات و خدمات خود آگاه هستند. غذاها نیز خوب هستند، به ویژه پیش‌آموزهای اصلی و پیتزاها را دوست داشتم.",
    imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "مرتضی محمدی",
    testimonial:
      "محیط بسیار شاداب و دوست‌داشتنی است. کارکنان بسیار حرفه‌ای هستند و در مورد محصولات خود تخصص دارند. غذاها نسبتاً خوب هستند.",
    imageSrc: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "فاطمه حسنی گرمابکی",
    testimonial:
      "بسیار رضایتمند از خدمات و محیط این مکان هستم. کارکنان بسیار سرشار از دانش هستند و بهترین خدمات را ارائه میدهند.",
    imageSrc: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "سارا کاظمی",
    testimonial:
      "این مکان یکی از بهترین مکان‌هایی است که من تا به حال رفته‌ام. محیط بسیار دوستانه و آرام است و کارکنان بسیار حرفه‌ای هستند.",
    imageSrc: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "محمد احمدی",
    testimonial:
      "من از این مکان بسیار راضی هستم. کارکنان بسیار دوستانه و حرفه‌ای هستند و غذاها نیز بسیار خوشمزه هستند.",
    imageSrc: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl lg:text-5xl font-bold">نظرات مشتریان ما</h2>
        <CarouselNavigationBtn navigationId="testimonials" />
      </div>

      <Carousel
        items={mockTestimonials}
        navigation={true}
        navigationId="testimonials"
        renderItem={(testimonial) => (
          <TestomonialCard
            testimonial={testimonial.testimonial}
            name={testimonial.name}
            imageSrc={testimonial.imageSrc}
          />
        )}
      />
    </section>
  );
}
