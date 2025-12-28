import Image from "next/image";
import { Button } from "../ui/button";
import Navigation from "./Navigation";
import Link from "next/link";
import logo from "../../public/fermata-logo.png";
import { LogIn, ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";

import SideNav from "./SideNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary-50  shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Fermata Cafe & Restaurant"
              width={110}
              height={100}
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
                className="rounded-full border-accent-400 hover:bg-primary-100 cursor-pointer "
                aria-label="سبد خرید"
              >
                <ShoppingCart className="text-primary-800" size={20} />
              </Button>

              <Badge className="absolute -top-1 -right-1 h-5 min-w-5 rounded-full px-1 text-xs bg-accent-400 text-white ">
                8
              </Badge>
            </div>

            {/* Auth */}
            <Button
              className="
            gap-2 bg-primary-400 hover:bg-primary-500/90  flex items-center rounded-full text-primary-800  px-4 py-2"
              aria-label="ورود یا ثبت‌نام"
            >
              <LogIn />

              <span className="hidden sm:inline my-auto ">ورود / ثبت‌نام</span>
            </Button>

            {/* side nav */}
            <SideNav />
          </div>
        </div>
      </div>
    </header>
  );
}
