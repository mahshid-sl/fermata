import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/fermata-logo.png";

export default function Footer() {
  return (
    <footer className="py-16 mt-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4 ">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Fermata Cafe & Restaurant"
                width={140}
                height={96}
                className="object-contain"
              />
            </Link>

            <p className="text-sm max-w-sm leading-relaxed">
              فرماتا، جایی برای مکث در زمان؛ ترکیبی از طعم‌های اصیل، موسیقی زنده
              و فضایی آرام برای تجربه‌ای ماندگار.
            </p>

            <div className="flex gap-3 pt-2">
              <a className="hover:text-primary-700 transition-colors" href="#">
                <Instagram size={20} />
              </a>
              <a className="hover:text-primary-700 transition-colors" href="#">
                <Facebook size={20} />
              </a>
              <a className="hover:text-primary-700 transition-colors" href="#">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="دسترسی سریع">
            <FooterLink href="/menu">منو</FooterLink>
            <FooterLink href="/reservation">رزرو میز</FooterLink>
            <FooterLink href="/about-us">درباره ما </FooterLink>
            <FooterLink href="/contact-us">ارتباط با ما </FooterLink>
          </FooterColumn>

          {/* About */}
          <FooterColumn title="درباره فرماتا">
            <FooterLink href="#">داستان ما</FooterLink>
            <FooterLink href="#">مزایای فرماتا</FooterLink>
            <FooterLink href="#">همکاری با ما</FooterLink>
            <FooterLink href="#">سرآشپزهای ما</FooterLink>
          </FooterColumn>

          {/* Help */}
          <FooterColumn title="پشتیبانی">
            <FooterLink href="#">تماس با ما</FooterLink>
            <FooterLink href="#">پشتیبانی</FooterLink>
            <FooterLink href="#">سؤالات متداول</FooterLink>
          </FooterColumn>
        </div>

        <div className="border-t border-primary-600 pt-8 text-center text-sm ">
          © 2026 فرماتا — تمامی حقوق محفوظ است
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className=" hover:text-primary-700 transition-all">
        {children}
      </Link>
    </li>
  );
}
