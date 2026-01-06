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
      {/* <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold">Meet Our Chefs</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="rounded-full bg-primary"
            >
              <ChevronRight className="h-5 w-5 text-primary-foreground" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Savannah Nguyen",
            "Esther Howard",
            "Marvin McKinney",
            "Albert Flores",
          ].map((chef, idx) => (
            <Card
              key={idx}
              className="border-2 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[3/4]">
                  <img
                    src={`/professional-chef-.jpg?height=400&width=300&query=professional chef ${
                      idx + 1
                    }`}
                    alt={chef}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="font-bold text-lg">{chef}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Mobile App Section */}
      {/* <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="bg-accent/30 rounded-[4rem] p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Never Feel Hungry! Download Our Mobile App Enjoy Delicious Foods
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                It's all at your fingertips -- the restaurants you love. Find
                the right food to suit your mood, and make the first bite last.
                Go ahead, download us.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 bg-transparent"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Play Store
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-64 h-[500px] bg-foreground rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  <img
                    src="/food-app-mobile-interface.jpg"
                    alt="Mobile App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-foreground text-background py-12 mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-2xl">
                  🍽️
                </div>
                <span className="text-2xl font-bold">Bites</span>
              </div>
              <p className="text-background/70 mb-6 max-w-xs">
                Subscribe Our Newsletter To Get More Updates
              </p>
              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Service</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Home delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Menu
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Press &amp; Media
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Our Chefs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2025 Bites. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

/* visual od hero */

/*   <div className="relative flex items-center justify-center gap-6">
      
          <div className="relative aspect-square w-full max-w-sm bg-primary-100 rounded-full">
            <Image
              src={banner}
              alt="Fermata banner"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <SideBanner />
          </div>
        </div>
       */
