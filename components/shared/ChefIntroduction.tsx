"use client";

import ChefCard from "./ChefCard";
import Carousel from "./Carousel";
import CarouselNavigationBtn from "./CarouselNavigationBtn";

const mockChefs = [
  {
    name: "علی رضایی",
    imagesrc: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "سرآشپز ارشد با 20 سال تجربه",
  },
  {
    name: "مرتضی محمدی",
    imagesrc: "https://randomuser.me/api/portraits/men/31.jpg",
    bio: "سرآشپز ارشد با 20 سال تجربه",
  },
  {
    name: "فاطمه حسنی",
    imagesrc: "https://randomuser.me/api/portraits/women/3.jpg",
    bio: "سرآشپز ارشد با 20 سال تجربه",
  },
  {
    name: "سارا کاظمی",
    imagesrc: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "سرآشپز ارشد با 20 سال تجربه",
  },
];

export default function ChefIntroduction() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl lg:text-5xl font-bold">
          جایی که طعم متولد می‌شود
        </h2>
        <CarouselNavigationBtn navigationId="chefs" />
      </div>

      <Carousel
        items={mockChefs}
        navigation={true}
        navigationId="chefs"
        renderItem={(chef) => <ChefCard chef={chef} />}
      />
    </section>
  );
}
