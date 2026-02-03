"use client";

import { Timeline } from "@/components/ui/timeline";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function AboutPage() {
  const timelineData = [
    {
      title: "۱۴۰۰",
      content: (
        <div>
          <p className="text-primary-800 text-sm md:text-base font-normal mb-4 ">
            جرقه اولیه فرماتا؛ زمانی که تصمیم گرفتیم فضایی فراتر از یک رستوران،
            برای&quot;مکث&quot;و&quot;آرامش&quot; خلق کنیم
          </p>
        </div>
      ),
    },
    {
      title: "۱۴۰۱",
      content: (
        <div>
          <p className="text-primary-800 text-sm md:text-base font-normal mb-4 text-right">
            افتتاح اولین شعبه در مهرشهر کرج. جایی که فرماتا متولد شد و با
            استقبال گرم شما، به خانه‌ی دوم مشتریان وفادارمان تبدیل گشت
          </p>
        </div>
      ),
    },
    {
      title: "۱۴۰۳",
      content: (
        <div>
          <p className="text-primary-800 text-sm md:text-base font-normal mb-4 text-right">
            افتتاح دومین شعبه در عظیمیه کرج. جایی که فرماتا با فضایی بزرگ‌تر و
            منویی گسترده‌تر، میزبان لحظات خوش شما و خانواده‌تان شد
          </p>
        </div>
      ),
    },
    {
      title: "امروز",
      content: (
        <div>
          <p className="text-primary-800 text-sm md:text-base font-normal mb-4 text-right">
            حالا با دو شعبه فعال و تیمی متخصص، در تلاشیم تا استانداردهای میزبانی
            را در هر وعده ارتقا دهیم
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-bg py-10">
      <section className="">
        <div className="max-w-7xl mx-auto pt-10 px-4 md:px-8 lg:px-10">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-900 max-w-4xl">
            سفر ما در گذر زمان
          </h2>
          <p className="text-primary-600 text-sm md:text-base max-w-sm mt-2">
            فرمانا چگونه به آنچه امروز هست تبدیل شد؟
          </p>
        </div>
        <div className="" dir="ltr">
          <Timeline data={timelineData} />
        </div>
      </section>

      <section className="h-screen py-20 bg-primary-50/30">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary-900 italic">
            گالری فرماتا
          </h2>
          <p className="text-primary-600 mt-2">برشی از لحظات و فضای ما</p>
        </div>
        <div className="h-full w-full ">
          <LayoutGrid cards={cards} />
        </div>
      </section>
    </div>
  );
}

const SkeletonOne = () => (
  <div>
    <p className="font-bold text-4xl text-white">اتمسفر آرام</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200 ">
      طراحی مدرن با المان‌های طبیعی برای ایجاد حس آرامش در حین صرف غذا.
    </p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 ",
    thumbnail: "/gallary/mehrshahr.jpeg",
  },
  {
    id: 2,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "gallary/mehrshahr2.jpeg",
  },
  {
    id: 3,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/gallary/r3.webp",
  },
  {
    id: 4,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/gallary/r4.jpg",
  },
];
