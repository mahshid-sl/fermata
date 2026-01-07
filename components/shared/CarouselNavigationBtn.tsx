import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  navigationId: string;
};

export default function CarouselNavigationBtn({ navigationId }: Props) {
  return (
    <div className="flex gap-2">
      <button
        className={`${navigationId}-prev flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all`}
      >
        <ChevronRight size={24} />
      </button>

      <button
        className={`${navigationId}-next flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all`}
      >
        <ChevronLeft size={24} />
      </button>
    </div>
  );
}
