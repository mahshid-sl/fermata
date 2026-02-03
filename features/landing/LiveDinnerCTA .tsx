import ServiceSection from "./ServiceSection";

export default function LiveDinnerCTA() {
  return (
    <ServiceSection
      heading="امشب برای یک شام متفاوت آماده‌ای؟"
      paragraph="اگر برای امشب به‌دنبال یک برنامه‌ی متفاوت هستید، فرماتا آماده‌ی میزبانی از شماست. شامی خوش‌طعم، فضایی آرام و موسیقی زنده‌ای که حال‌وهوای شب را دل‌نشین‌تر می‌کند. کافی‌ست زمان حضور خود را انتخاب کنید؛ بقیه‌ی مسیر را ما برایتان هموار کرده‌ایم."
      buttonText="رزرو میز برای امشب"
      imageSrc="/dining.png"
      imagePosition="right"
      className="lg:py-10"
      href="/reservation"
    />
  );
}
