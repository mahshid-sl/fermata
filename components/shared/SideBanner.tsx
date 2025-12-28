import Image from "next/image";
import mainDish from "@/public/banner/maindish.png";
import dessert from "@/public/banner/deser.png";
import drink from "@/public/banner/drink.png";
import salad from "@/public/banner/salad.png";
import snack from "@/public/banner/mianvade.png";

const side = [
  {
    img: mainDish,
    label: "انواع غذا",
  },

  {
    img: dessert,
    label: "انواع دسر",
  },
  {
    img: drink,
    label: " نوشیدنی",
  },
  {
    img: salad,
    label: "انواع سالاد",
  },
  {
    img: snack,
    label: " میان وعده",
  },
];

export default function SideBanner() {
  return (
    <div className="flex flex-col gap-3">
      {side.map((s) => (
        <div
          key={s.label}
          className="  flex items-center justify-between
  w-30 sm:w-32 lg:w-36
  bg-primary-100
  rounded-full 
  md:px-3  md:py-2
"
        >
          <span className="text-sm font-medium whitespace-nowrap text-primary-800">
            {s.label}
          </span>

          <Image
            src={s.img}
            alt={s.label}
            width={40}
            height={40}
            className="rounded-full shadow-md shrink-0"
          />
        </div>
      ))}
    </div>
  );
}
