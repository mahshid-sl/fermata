import { Star } from "lucide-react";

export default function StarRating() {
  return (
    <div className="flex justify-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 md:h-4 md:w-4 fill-primary-300 text-primary-700"
        />
      ))}
    </div>
  );
}
