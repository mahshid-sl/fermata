import ChefIntroduction from "@/components/shared/ChefIntroduction";
import Hero from "@/components/shared/Hero";
import LiveDinnerCTA from "@/components/shared/LiveDinnerCTA ";
import MenuPack from "@/components/shared/MenuPack";
import PopularDishes from "@/components/shared/PopularDishes";
import Service from "@/components/shared/Service";
import Testimonials from "@/components/shared/Testimonials";

export default function RestaurantLanding() {
  return (
    <div className=" ">
      {/* Hero Section */}
      <Hero />

      {/* Popular Dishes */}
      <PopularDishes />

      {/* Services Section */}
      <Service />

      {/* Regular Menu Pack */}
      <MenuPack />

      {/* Reservation Section */}
      <LiveDinnerCTA />

      {/* Testimonials */}
      <Testimonials />

      {/* Chefs Section */}
      <ChefIntroduction />
    </div>
  );
}
