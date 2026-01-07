import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Quote } from "lucide-react";

type TestimonialCardProps = {
  imageSrc?: string;
  name: string;
  testimonial: string;
};

export default function TestimonialCard({
  imageSrc,
  name,
  testimonial,
}: TestimonialCardProps) {
  return (
    <Card className="rounded-3xl shadow-lg hover:shadow-md transition-shadow h-full bg-primary-50 border-0">
      <CardContent className="p-8 flex flex-col h-full">
        {/* Testimonial text */}
        <div className="relative mb-6">
          <span className="absolute -top-6 -right-2 text-5xl text-primary/10">
            <Quote />
          </span>

          <p className="text-primary-800 leading-relaxed text-base line-clamp-4 min-h-26">
            {testimonial}
          </p>
        </div>

        <div className="grow" />

        {/* User */}
        <div className="flex items-center gap-4 pt-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={imageSrc} alt={name} />
            <AvatarFallback className="font-medium">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="leading-tight">
            <p className="font-semibold text-primary-900 ">{name}</p>
            <p className="text-sm text-primary-700">مهمان فرماتا</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
