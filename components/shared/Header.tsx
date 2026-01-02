import Image from "next/image";
import { Button } from "../ui/button";
import Navigation from "./Navigation";
import Link from "next/link";
import logo from "../../public/fermata-logo.png";
import { LogIn, ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";

import SideNav from "./SideNav";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary-50/95 backdrop-blur shadow">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Fermata Cafe & Restaurant"
              width={104}
              height={96}
              priority
              className="object-contain"
            />
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <div className="relative">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary-300 hover:bg-primary-100"
                aria-label="سبد خرید"
              >
                <ShoppingCart size={20} />
              </Button>

              <Badge className="absolute -top-1 -right-1 h-5 min-w-5 rounded-full bg-accent-400 text-white text-xs">
                8
              </Badge>
            </div>

            {/* Auth (Desktop) */}
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="hidden md:flex items-center gap-2 px-4 py-2
                        bg-primary-100 text-primary-800 text-sm
                        hover:bg-primary-200 transition"
              aria-label="ورود یا ثبت‌نام"
            >
              <LogIn size={16} />
              <span>ورود / ثبت‌نام</span>
            </HoverBorderGradient>

            {/* Mobile Menu */}
            <SideNav />
          </div>
        </div>
      </div>
    </header>
  );
}
