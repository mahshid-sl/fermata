"use client";

import { CalendarCheck, House, Info, Phone, SquareMenu } from "lucide-react";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";

const links = [
  {
    href: "/",
    label: "صفحه اصلی",
    icon: <House size={18} />,
  },
  {
    href: "/menu",
    label: "منو",
    icon: <SquareMenu size={18} />,
  },
  {
    href: "/reservation",
    label: "رزرو میز",
    icon: <CalendarCheck size={18} />,
  },
  {
    href: "/about-us",
    label: "درباره ما",
    icon: <Info size={18} />,
  },
  {
    href: "/contact-us",
    label: "ارتباط با ما",
    icon: <Phone size={18} />,
  },
];

export default function Navigation({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={`${
        isMobile
          ? "flex flex-col gap-8 mt-2 "
          : "hidden lg:flex items-center gap-6 lg:gap-8"
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm font-medium hover:text-primary-800
            transition-all
          md:text-base md:font-bold ${
            pathname === link.href ? "text-primary-500 " : "text-primary-700"
          }`}
        >
          <div className="flex items-center gap-2">
            {link.icon}
            {link.label}
          </div>
        </Link>
      ))}
    </nav>
  );
}
