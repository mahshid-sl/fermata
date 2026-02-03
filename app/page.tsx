import LiveDinnerCTA from "@/features/landing/LiveDinnerCTA ";
import MenuPack from "@/features/menu/MenuPack";
import PopularDishes from "@/features/landing/PopularDishes";
import Service from "@/features/landing/Service";
import Testimonials from "@/features/reviews/Testimonials";
import Hero from "@/features/landing/Hero";
import ChefIntroduction from "@/features/staff/ChefIntroduction";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function RestaurantLanding() {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero />

      {/* Popular Dishes */}
      <AnimatedSection>
        <PopularDishes />
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection>
        <Service />
      </AnimatedSection>

      {/* Regular Menu Pack */}
      <AnimatedSection>
        <MenuPack />
      </AnimatedSection>

      {/* Reservation Section */}
      <AnimatedSection>
        <LiveDinnerCTA />
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      {/* Chefs Section */}
      <AnimatedSection>
        <ChefIntroduction />
      </AnimatedSection>
    </div>
  );
}
