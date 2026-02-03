import ServiceSection from "./ServiceSection";

const service = [
  {
    label: "سفارش آنلاین",
    icon: "/svg/online-order-shopping-ecommerce-svgrepo-com.svg",
  },
  {
    label: "رزرو میز",
    icon: "/svg/seat-lunch-svgrepo-com.svg",
  },
  {
    label: "خدمات ۲۴ ساعته",
    icon: "/svg/customer-support-help-service-svgrepo-com.svg",
  },
  { label: "تحویل سریع", icon: "/svg/tray-meal-svgrepo-com.svg" },
  {
    label: "آشپزهای حرفه‌ای",
    icon: "/svg/chef-svgrepo-com.svg",
  },
  {
    label: "کیفیت ثابت در هر بازدید",
    icon: "/svg/quality-svgrepo-com.svg",
  },
];

export default function Service() {
  return (
    <ServiceSection
      heading="فرماتا؛ فراتر از یک کافه و رستوران"
      paragraph="در فرماتا، هر جزئیات با دقت طراحی شده است؛ از کیفیت مواد اولیه و فرآیند آماده‌سازی گرفته تا نحوه‌ی سرو و مدیریت فضا. هدف ما ارائه‌ی تجربه‌ای منظم، قابل اعتماد و با کیفیت ثابت در هر مراجعه است."
      buttonText="درباره ما"
      imageSrc="/chef.png"
      services={service}
      href="/about-us"
    />
  );
}
