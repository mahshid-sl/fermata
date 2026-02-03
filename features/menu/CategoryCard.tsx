import Image from "next/image";

type MenuCardProps = {
  Categoriy: string;
  subCategories: string[];
  img: string;
};

export default function CategoryCard({
  menuItem,
  onClick,
  isActive,
}: {
  menuItem: MenuCardProps;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center justify-center gap-3 w-full py-2 outline-none"
    >
      <div
        className={`
        relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center
        rounded-full border-2 transition-all duration-300
        group-hover:shadow-md group-hover:-translate-y-1
        ${
          isActive
            ? "border-primary-500 bg-primary-100 shadow-md"
            : "border-primary-200 bg-white group-hover:border-primary-300"
        }
      `}
      >
        <Image
          src={menuItem.img}
          alt={menuItem.Categoriy}
          width={40}
          height={40}
          className={`transition-transform duration-300 ${
            isActive ? "scale-110" : "group-hover:scale-105"
          }`}
        />
      </div>

      <h3
        className={`text-sm md:text-base font-medium transition-colors duration-300 ${
          isActive ? "text-primary-800 font-bold" : "text-primary-600"
        }`}
      >
        {menuItem.Categoriy}
      </h3>
    </button>
  );
}
