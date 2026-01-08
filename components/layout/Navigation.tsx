"use client";

import { CalendarCheck, House, Info, Phone, SquareMenu } from "lucide-react";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";

const links = [
  { href: "/", label: "صفحه اصلی", icon: <House size={18} /> },
  { href: "/menu", label: "منو", icon: <SquareMenu size={18} /> },
  {
    href: "/reservation",
    label: "رزرو میز",
    icon: <CalendarCheck size={18} />,
  },
  { href: "/about-us", label: "درباره ما", icon: <Info size={18} /> },
  { href: "/contact-us", label: "ارتباط با ما", icon: <Phone size={18} /> },
];

export default function Navigation({ isMobile = false }) {
  const pathname = usePathname();

  return (
    <nav
      className={
        isMobile ? "flex flex-col gap-6" : "hidden lg:flex items-center gap-8"
      }
    >
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2 text-sm font-medium transition
              ${
                isActive
                  ? "text-primary-900"
                  : "text-primary-700 hover:text-primary-900"
              }
            `}
          >
            <span
              className={`transition ${isActive ? "scale-110" : "opacity-80"}`}
            >
              {link.icon}
            </span>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
